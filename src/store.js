import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    youTubeApiKey: '&key=' + 'AIzaSyCzWCtUuCjed9oji8LjZYIeB5AONGbaCws',
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    }

  },
  actions: {
    // then insertNewVideoClip for clipper for postType: 'YouTubeVideoClip'
    loadFireBaseData ({
      commit,
      state,
      getters
    }) {
      commit('setLoading', true)
      firebase.database().ref('videos').once('value')
        .then((data) => {
          const posts = []
          const inject = data.val()
          for (let key in inject) {
            posts.push({
              postType: inject[key].postType,
              key: key,
              playerUrl: 'https://www.youtube.com/embed/' +
                inject[key].ytVideoDetails.videoId +
                '?iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1',
              ytVideoDetails: {
                embeddable: inject[key].ytVideoDetails.embeddable,
                videoId: inject[key].ytVideoDetails.videoId,
                coverImgUrl: inject[key].ytVideoDetails.coverImgUrl,
                title: inject[key].ytVideoDetails.title,
                description: inject[key].ytVideoDetails.description,
                duration: inject[key].ytVideoDetails.duration,
                publishDate: inject[key].ytVideoDetails.publishDate,
                channelTitle: inject[key].ytVideoDetails.channelTitle,
                channelId: inject[key].ytVideoDetails.channelId,
                viewCount: inject[key].ytVideoDetails.viewCount,
                likeCount: inject[key].ytVideoDetails.likeCount,
                dislikeCount: inject[key].ytVideoDetails.dislikeCount,
                favoriteCount: inject[key].ytVideoDetails.favoriteCount,
                commentCount: inject[key].ytVideoDetails.commentCount
              },
              ytVideoAnalytics: {
                // topicIds: inject.ytVideoAnalytics.topicIds,
                // relevantTopicIds: inject.ytVideoAnalytics.relevantTopicIds,
                topicCategories: inject[key].ytVideoAnalytics.topicCategories,
                tags: inject[key].ytVideoAnalytics.tags
              },
              userDetails: inject[key].userDetails,
              stvData: {
                author: inject[key].stvData.author,
                title: inject[key].stvData.title,
                description: inject[key].stvData.description,
                impressions: inject[key].stvData.impressions,
                plays: inject[key].stvData.plays,
                shares: inject[key].stvData.shares
              },
              time: {
                start: inject[key].time.start,
                end: inject[key].time.end,
                duration: inject[key].time.duration
              },
              resources: inject[key].resources
            })
          }
          commit('setLoadedMeetups', posts)
          if (state.postId != null) {
            // console.log('attempting loadPost: ' + state.postId)
            commit('loadPost', getters.loadedPost(state.postId))
            commit('videoLoaded', true)
          }
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
    pushFireBaseRecord ({
      commit,
      getters,
      dispatch
    }, payload, action) {
      commit('setLoading', true)
      console.log('building object for injection ' + payload.ytVideoDetails
        .publishDate)
      const inject = payload
      const post = {
        postType: inject.postType,
        ytVideoDetails: {
          embeddable: inject.ytVideoDetails.embeddable,
          videoId: inject.ytVideoDetails.videoId,
          coverImgUrl: inject.ytVideoDetails.coverImgUrl,
          title: inject.ytVideoDetails.title,
          description: inject.ytVideoDetails.description,
          duration: inject.ytVideoDetails.duration,
          publishDate: inject.ytVideoDetails.publishDate,
          channelTitle: inject.ytVideoDetails.channelTitle,
          channelId: inject.ytVideoDetails.channelId,
          viewCount: inject.ytVideoDetails.viewCount,
          likeCount: inject.ytVideoDetails.likeCount,
          dislikeCount: inject.ytVideoDetails.dislikeCount,
          favoriteCount: inject.ytVideoDetails.favoriteCount,
          commentCount: inject.ytVideoDetails.commentCount
        },
        ytVideoAnalytics: {
          // topicIds: inject.ytVideoAnalytics.topicIds,
          // relevantTopicIds: inject.ytVideoAnalytics.relevantTopicIds,
          topicCategories: inject.ytVideoAnalytics.topicCategories,
          tags: inject.ytVideoAnalytics.tags
        },
        userDetails: inject.userDetails,
        stvData: {
          author: inject.stvData.author,
          title: inject.stvData.title,
          description: inject.stvData.description,
          impressions: inject.stvData.impressions,
          plays: inject.stvData.plays,
          shares: inject.stvData.shares
        },
        time: {
          start: inject.time.start,
          end: inject.time.end,
          duration: inject.time.duration
        },
        resources: inject.resources
      }
      // firebase.database().ref('videos').push(inject)
      console.log('object -> ' + post)
      firebase.database().ref('videos').push(post)
        .then((data) => {
          const key = data.key
          commit('createVideoPost', {
            ...post,
            key: key
          })
          commit('setLoading', false)
          commit('videoLoaded', true)
          if (action === 'routed') {
            console.log('route request to studio view')
          }
          // this.$router.push('/about')
        })
        .catch((error) => {
          commit('setLoading', false)
          console.log(error)
        })
      dispatch('loadVideoPosts')
    },

    setLoading ({
      commit
    }, payload) {
      commit('setLoading', payload)
    },
    clearError ({
      commit
    }) {
      commit('clearError')
    },
    signUserUp ({
      commit
    }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().createUserWithEmailAndPassword(payload.email,
        payload
          .password)
        .then(
          response => {
            commit('setLoading', false)
            const newUser = {
              id: response.user.uid,
              registeredPosts: []
            }
            // console.log(newUser)
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            // console.log(error)
          }
        )
    },
    signUserIn ({
      commit
    }, payload) {
      commit('setLoading', true)
      commit('clearError')
      firebase.auth().signInWithEmailAndPassword(payload.email, payload
        .password)
        .then(
          user => {
            commit('setLoading', false)
            const newUser = {
              id: user.uid,
              registeredPosts: []
            }
            // console.log(newUser)
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            commit('setLoading', false)
            commit('setError', error)
            // console.log(error)
          }
        )
    },
    autoSignIn ({
      commit
    }, payload) {
      console.log('user: ' + payload.email)
      commit('setUser', {
        id: payload.uid,
        registeredPosts: []
      })
    },
    logout ({
      commit
    }) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    },
    loadedPosts (state) {
      return state.loadedPosts.sort((postA, postB) => {
        return postA.date > postB.date
      })
    },
    featuredPosts (state, getters) {
      return getters.loadedPosts.slice(0, 10)
    },
    loadedPost (state) {
      return (postId) => {
        // console.log(postId)
        return state.loadedPosts.find((post) => {
          return post.key === postId
        })
      }
    },
    loading (state) {
      return state.loading
    },
    error (state) {
      return state.error
    }
  }
})
