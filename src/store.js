import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiKey: '&key=' + 'AIzaSyCzWCtUuCjed9oji8LjZYIeB5AONGbaCws',
    queryVideoResult: [],
    relatedVideos: [],
    postId: null,
    clips: [],
    clipTimestamp: {
      timestamp: ''
    },
    clipDimensions: {
      clipId: '',
      clipOwner: '',
      clipCreated: '',
      clipViews: '',
      clipShareCount: '',
      clipShareUrl: '',
      clipTitle: '',
      clipDescription: '',
      clipComments: [{
        userId: 'that makes since now.'
      }],
      stvId: '',
      clippedStartTime: '',
      clippedStopTime: '',
      clipCalcStartTime: ''
    },
    loadedPosts: [],
    loadedPost: [],
    user: null,
    loading: false,
    error: null,
    videoLoaded: false
  },
  mutations: {
    setQueryVideo (state, payload) {
      state.queryVideoResult = payload
      // state.queryVideoResult.push(payload)
      // console.log('injecting: ' + payload)
    },
    storeRelatedVideos (state, payload) {
      state.relatedVideos = payload
      state.videoLoaded = true
    },
    setPostId (state, payload) {
      state.postId = payload
    },
    loadPost (state, payload) {
      state.loadedPost = []
      state.loadedPost.push(payload)
    },
    toggleVideoLoaded (state) {
      state.videoLoaded = !state.videoLoaded
    },
    videoLoaded (state, payload) {
      state.videoLoaded = payload
    },
    setLoadedMeetups (state, payload) {
      state.loadedPosts = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    storeClipTimestamp (state, payload) {
      state.clipTimestamp = payload
    },
    storeVideoClip (state, payload) {
      state.clipDimensions = payload
      state.clips.push(payload)
    },
    storeVideoClipStop (state, payload) {
      state.clipDimensions = payload
    },
    setLoading (state, payload) {
      state.loading = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clearError (state) {
      state.error = null
    },
    createVideoPost (state, payload) {
      state.loadedPosts.push(payload)
    }
  },
  actions: {
    // then insertNewVideoClip for clipper for postType: 'YouTubeVideoClip'
    newPlayer ({
      commit,
      getters,
      state,
      dispatch
    }) {
      dispatch('setPostId', state.loadedPost.key)
    },
    insertNewVideoPost ({
      commit,
      getters,
      state,
      dispatch
    }, query, action) {
      const apiBase =
        'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cstatus%2CtopicDetails&id=' +
        query
      const apiUrl = apiBase + state.apiKey
      console.log('requested video details of ' + query)
      axios.get(apiUrl)
        .then(data => {
          const payload = []
          const obj = data.data.items
          for (let key in obj) {
            // console.log('query fetch started')
            payload.push({
              postType: 'YouTubeVideo',
              playerUrl: 'https://www.youtube.com/embed/' +
                obj[key].id +
                '?iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1',
              ytVideoDetails: {
                embeddable: obj[key].status.embeddable,
                videoId: obj[key].id,
                coverImgUrl: obj[key].snippet.thumbnails.high.url,
                title: obj[key].snippet.localized.title,
                description: obj[key].snippet.localized.description,
                duration: obj[key].contentDetails.duration,
                publishDate: obj[key].snippet.publishedAt,
                channelTitle: obj[key].snippet.channelTitle,
                channelId: obj[key].snippet.channelId,
                viewCount: obj[key].statistics.viewCount,
                likeCount: obj[key].statistics.likeCount,
                dislikeCount: obj[key].statistics.dislikeCount,
                favoriteCount: obj[key].statistics.favoriteCount,
                commentCount: obj[key].statistics.commentCount
              },
              ytVideoAnalytics: {
                // topicIds: obj[key].topicDetails.topicIds,
                // relevantTopicIds: obj[key].topicDetails.relevantTopicIds,
                topicCategories: obj[key].topicDetails.topicCategories,
                ...(obj[key].snippet.tags === undefined ? {
                  tags: [obj[key].snippet.channelTitle]
                } : {
                  tags: obj[key].snippet.tags
                })

              },
              stvData: {
                author: obj[key].snippet.channelTitle,
                title: obj[key].snippet.localized.title,
                description: obj[key].snippet.localized.description,
                impressions: 0,
                plays: 0,
                shares: 0
              },
              time: {
                start: 0,
                end: 0,
                duration: 0
              },
              resources: [{
                type: 'default'
              }],
              userDetails: getters.user
            })
            dispatch('createVideoPost', payload[0])
            // commit('createVideoPost', payload)
          }
        })
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    fetchQueryVideo ({
      commit,
      getters,
      state
    }, query) {
      const apiBase =
        'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cstatus%2CtopicDetails&id=' +
        query
      const apiUrl = apiBase + state.apiKey

      axios.get(apiUrl)
        .then(data => {
          const payload = []
          const obj = data.data.items
          for (let key in obj) {
            console.log('query fetch started')
            payload.push({
              postType: 'YouTubeVideo',
              playerUrl: 'https://www.youtube.com/embed/' +
                obj[key].id +
                '?iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1',
              ytVideoDetails: {
                embeddable: obj[key].status.embeddable,
                videoId: obj[key].id,
                coverImgUrl: obj[key].snippet.thumbnails.high.url,
                title: obj[key].snippet.localized.title,
                description: obj[key].snippet.localized.description,
                duration: obj[key].contentDetails.duration,
                publishDate: obj[key].snippet.publishedAt,
                channelTitle: obj[key].snippet.channelTitle,
                channelId: obj[key].snippet.channelId,
                viewCount: obj[key].statistics.viewCount,
                likeCount: obj[key].statistics.likeCount,
                dislikeCount: obj[key].statistics.dislikeCount,
                favoriteCount: obj[key].statistics.favoriteCount,
                commentCount: obj[key].statistics.commentCount
              },
              ytVideoAnalytics: {
                // topicIds: obj[key].topicDetails.topicIds,
                // relevantTopicIds: obj[key].topicDetails.relevantTopicIds,
                topicCategories: obj[key].topicDetails.topicCategories,
                tags: obj[key].snippet.tags
              },
              userDetails: getters.user
            })
            commit('setQueryVideo', payload)
          }
        })
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    fetchRelatedVideos ({
      commit,
      getters,
      state
    }, query) {
      const apiBase =
        'https://www.googleapis.com/youtube/v3/search?part=snippet&order=date&relatedToVideoId=' +
        query +
        '&type=video&videoCaption=closedCaption&videoDefinition=high&videoEmbeddable=true'
      const apiKey = '&key=' +
        'AIzaSyCzWCtUuCjed9oji8LjZYIeB5AONGbaCws'
      const apiUrl = apiBase + apiKey
      axios.get(apiUrl)
        .then(data => {
          const post = []
          const obj = data.data.items
          for (let key in obj) {
            console.log('pulling')
            post.push({
              id: obj[key].id.videoId,
              title: obj[key].snippet.title,
              coverImgUrl: obj[key].snippet.thumbnails.high.url
            })
            commit('storeRelatedVideos', post)
            // firebase.database().ref('posts').push(post)
            //   .then((data) => {
            //     const key = data.key
            //     commit('createVideoPost', {
            //       ...post,
            //       id: key
            //     })
            //     commit('setLoading', false)
            //     this.$router.push('/about')
            //   })
            //   .catch((error) => {
            //     commit('setLoading', false)
            //     console.log(error)
            //   })
            console.log('')
          }
        })
        .catch(
          error => {
            console.log(error)
          }
        )
    },
    fetchVideo ({
      commit,
      getters,
      state
    }, query) {
      commit('setLoading', true)
    },
    setPost ({
      commit,
      getters,
      state
    }) {
      commit('loadPost', getters.loadedPost(state.postId))
      commit('videoLoaded', true)
    },
    setPostId ({
      commit
    }, payload) {
      commit('setPostId', payload)
    },
    loadVideoPosts ({
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
    // loadMeetups ({
    //   commit,
    //   state,
    //   getters
    // }) {
    //   commit('setLoading', true)
    //   firebase.database().ref('posts').once('value')
    //     .then((data) => {
    //       const posts = []
    //       const obj = data.val()
    //       for (let key in obj) {
    //         posts.push({
    //           id: key,
    //           stvId: obj[key].stvId,
    //           ytTitle: obj[key].ytTitle,
    //           stvTitle: obj[key].stvTitle,
    //           ytDescription: obj[key].ytDescription,
    //           stvDescription: obj[key].stvDescription,
    //           ytThumbnailHigh: obj[key].ytThumbnailHigh,
    //           ytChannelId: obj[key].ytChannelId,
    //           ytChannelTitle: obj[key].ytChannelTitle,
    //           ytVideoId: obj[key].ytVideoId,
    //           ytPublishedAt: obj[key].ytPublishedAt,
    //           stvPublishedAt: obj[key].stvPublishedAt,
    //           stvPlayCount: obj[key].stvPlayCount,
    //           uploadUser: obj[key].uploadUser,
    //           startTime: obj[key].startTime,
    //           endTime: obj[key].endTime,
    //           duration: obj[key].duration,
    //           isClip: obj[key].isClip
    //         })
    //       }
    //       commit('setLoadedMeetups', posts)
    //       if (state.postId != null) {
    //         // console.log('attempting loadPost: ' + state.postId)
    //         commit('loadPost', getters.loadedPost(state.postId))
    //         commit('videoLoaded', true)
    //       }
    //       commit('setLoading', false)
    //     })
    //     .catch(
    //       (error) => {
    //         console.log(error)
    //         commit('setLoading', false)
    //       }
    //     )
    // },
    createVideoPost ({
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
    // createVideoClip ({
    //   commit,
    //   getters
    // }, payload) {
    //   commit('setLoading', true)
    //   console.log('building object for injection ' + payload.ytVideoDetails
    //     .publishDate)
    //   const inject = payload
    //   const post = {
    //     postType: inject.postType,
    //     ytVideoDetails: {
    //       embeddable: inject.ytVideoDetails.embeddable,
    //       videoId: inject.ytVideoDetails.videoId,
    //       coverImgUrl: inject.ytVideoDetails.coverImgUrl,
    //       title: inject.ytVideoDetails.title,
    //       description: inject.ytVideoDetails.description,
    //       duration: inject.ytVideoDetails.duration,
    //       publishDate: inject.ytVideoDetails.publishDate,
    //       channelTitle: inject.ytVideoDetails.channelTitle,
    //       channelId: inject.ytVideoDetails.channelId,
    //       viewCount: inject.ytVideoDetails.viewCount,
    //       likeCount: inject.ytVideoDetails.likeCount,
    //       dislikeCount: inject.ytVideoDetails.dislikeCount,
    //       favoriteCount: inject.ytVideoDetails.favoriteCount,
    //       commentCount: inject.ytVideoDetails.commentCount
    //     },
    //     ytVideoAnalytics: {
    //       // topicIds: inject.ytVideoAnalytics.topicIds,
    //       // relevantTopicIds: inject.ytVideoAnalytics.relevantTopicIds,
    //       topicCategories: inject.ytVideoAnalytics.topicCategories,
    //       tags: inject.ytVideoAnalytics.tags
    //     },
    //     userDetails: inject.userDetails,
    //     stvData: {
    //       author: inject.stvData.author,
    //       title: inject.stvData.title,
    //       description: inject.stvData.description,
    //       impressions: inject.stvData.impressions,
    //       plays: inject.stvData.plays,
    //       shares: inject.stvData.shares
    //     },
    //     time: {
    //       start: inject.time.start,
    //       end: inject.time.end,
    //       duration: inject.time.duration
    //     },
    //     resources: inject.resources
    //   }
    //   // firebase.database().ref('videos').push(inject)
    //   console.log('object -> ' + post)
    //   firebase.database().ref('videos').push(post)
    //     .then((data) => {
    //       const key = data.key
    //       commit('createVideoPost', {
    //         ...post,
    //         key: key
    //       })
    //       commit('setLoading', false)
    //       commit('videoLoaded', true)
    //       // this.$router.push('/about')
    //     })
    //     .catch((error) => {
    //       commit('setLoading', false)
    //       console.log(error)
    //     })
    // },
    // importYouTubeVideo ({
    //   commit,
    //   ytId
    // }) {
    //   commit('setLoading', true)
    //   const apiBase =
    //     'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='
    //   const apiKey = 'AIzaSyCzWCtUuCjed9oji8LjZYIeB5AONGbaCws'
    //   const apiUrl = apiBase + ytId + '&key=' + apiKey
    //   axios.get(apiUrl)
    //     .then(response => {
    //       // console.log(response)
    //       const payload = {
    //         stvId: response.data.items[0].id,
    //         ytTitle: response.data.items[0].snippet.title,
    //         stvTitle: response.data.items[0].snippet.title,
    //         ytDescription: response.data.items[0].snippet.description,
    //         stvDescription: response.data.items[0].snippet.description,
    //         // you need to fix  the thumbnail resolution not found issue
    //         ytThumbnailStandard: response.data.items[0].snippet.thumbnails
    //           .standard.url,
    //         ytThumbnailMedium: response.data.items[0].snippet.thumbnails
    //           .medium.url,
    //         ytThumbnailHigh: response.data.items[0].snippet.thumbnails
    //           .high
    //           .url,
    //         // ytThumbnailMaxRes: response.data.items[0].snippet.thumbnails.maxres.url,
    //         ytChannelId: response.data.items[0].snippet.channelId,
    //         ytChannelTitle: response.data.items[0].snippet.channelTitle,
    //         ytVideoId: response.data.items[0].id,
    //         ytPublishedAt: response.data.items[0].snippet.publishedAt,
    //         stvPublishedAt: response.data.items[0].snippet.publishedAt,
    //         stvPlayCount: response.data.items[0].statistics.viewCount
    //       }
    //       commit('setLoading', false)
    //       commit('videoLoaded', true)
    //       commit('createVideoPost', payload)
    //       // this.videoLoaded = true
    //       // console.log(payload)
    //       // _.assign(this.importData, payload)
    //       commit('createVideoPost', payload)
    //       // do we need to redirect now?
    //     })
    //     .catch(
    //       error => {
    //         console.log(error)
    //       }
    //     )
    // },
    setLoading ({
      commit
    }, payload) {
      commit('setLoading', payload)
    },
    setVideoLoaded ({
      commit
    }, payload) {
      commit('videoLoaded', payload)
    },
    clearError ({
      commit
    }) {
      commit('clearError')
    },
    videoTimestamp ({
      commit
    }, payload) {
      const stamp = {
        timestamp: payload.timestamp
      }
      commit('storeClipTimestamp', stamp)
    },
    stopClipVideo ({
      commit
    }, payload) {
      const clip = {
        // clipTitle: payload.clipTitle,
        clippedStopTime: payload.clippedStopTime
      }
      console.log(clip)
      commit('storeVideoClipStop', clip)
    },
    clipVideo ({
      commit
    }, payload) {
      const clip = {
        stvId: payload.stvId,
        clipTitle: payload.clipTitle,
        clippedStartTime: payload.clippedStartTime,
        clippedStopTime: payload.clippedStopTime,
        clipCalcStartTime: payload.clipCalcStartTime
      }
      // console.log(clip)
      commit('storeVideoClip', clip)
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
    queryVideoResult (state) {
      return state.queryVideoResult
    },
    relatedVideos (state) {
      return state.relatedVideos
    },
    post (state) {
      return state.loadedPost[0]
    },
    videoLoaded (state) {
      return state.videoLoaded
    },
    user (state) {
      return state.user
    },
    clipDuration (state) {
      return state.clipTimestamp
    },
    loadClipDimensions (state) {
      return state.clipDimensions
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
