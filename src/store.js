import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
    loadedPost (state, payload) {
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
    setPost ({
      commit,
      getters
    }, payload) {
      commit('setLoading', true)
      const post = {
        postType: payload.postType,
        stvId: payload.stvId,
        ytTitle: payload.ytTitle,
        stvTitle: payload.stvTitle,
        stvAuthor: payload.stvAuthor,
        ytDescription: payload.ytDescription,
        stvDescription: payload.stvDescription,
        ytThumbnailHigh: payload.ytThumbnailHigh,
        ytChannelId: payload.ytChannelId,
        ytChannelTitle: payload.ytChannelTitle,
        ytVideoId: payload.ytVideoId,
        ytPublishedAt: payload.ytPublishedAt,
        stvPublishedAt: payload.stvPublishedAt,
        stvPlayCount: payload.stvPlayCount,
        uploadUser: getters.user.id,
        startTime: payload.startTime,
        endTime: payload.endTime,
        duration: payload.duration,
        isClip: payload.isClip,
        products: payload.products
      }
      console.log('post obj: ' + post)
      commit('loadedPost', post)
      commit('setLoading', false)
    },
    loadMeetups ({
      commit
    }) {
      commit('setLoading', true)
      firebase.database().ref('posts').once('value')
        .then((data) => {
          const meetups = []
          const obj = data.val()
          for (let key in obj) {
            meetups.push({
              id: key,
              stvId: obj[key].stvId,
              ytTitle: obj[key].ytTitle,
              stvTitle: obj[key].stvTitle,
              ytDescription: obj[key].ytDescription,
              stvDescription: obj[key].stvDescription,
              ytThumbnailHigh: obj[key].ytThumbnailHigh,
              ytChannelId: obj[key].ytChannelId,
              ytChannelTitle: obj[key].ytChannelTitle,
              ytVideoId: obj[key].ytVideoId,
              ytPublishedAt: obj[key].ytPublishedAt,
              stvPublishedAt: obj[key].stvPublishedAt,
              stvPlayCount: obj[key].stvPlayCount,
              uploadUser: obj[key].uploadUser,
              startTime: obj[key].startTime,
              endTime: obj[key].endTime,
              duration: obj[key].duration,
              isClip: obj[key].isClip
            })
          }
          commit('setLoadedMeetups', meetups)
          commit('setLoading', false)
        })
        .catch(
          (error) => {
            console.log(error)
            commit('setLoading', false)
          }
        )
    },
    createVideoPost ({
      commit,
      getters
    }, payload) {
      commit('setLoading', true)
      const post = {
        postType: 'video',
        stvId: payload.stvId,
        ytTitle: payload.ytTitle,
        stvTitle: payload.stvTitle,
        stvAuthor: payload.stvAuthor,
        ytDescription: payload.ytDescription,
        stvDescription: payload.stvDescription,
        ytThumbnailHigh: payload.ytThumbnailHigh,
        ytChannelId: payload.ytChannelId,
        ytChannelTitle: payload.ytChannelTitle,
        ytVideoId: payload.ytVideoId,
        ytPublishedAt: payload.ytPublishedAt,
        stvPublishedAt: payload.stvPublishedAt,
        stvPlayCount: payload.stvPlayCount,
        uploadUser: getters.user.id,
        startTime: payload.startTime,
        endTime: payload.endTime,
        duration: payload.duration,
        isClip: payload.isClip
      }
      firebase.database().ref('posts').push(post)
        .then((data) => {
          const key = data.key
          commit('createVideoPost', {
            ...post,
            id: key
          })
          commit('setLoading', false)
          this.$router.push('/about')
        })
        .catch((error) => {
          commit('setLoading', false)
          console.log(error)
        })
    },
    importYouTubeVideo ({
      commit,
      ytId
    }) {
      commit('setLoading', true)
      const apiBase =
        'https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id='
      const apiKey = 'AIzaSyCzWCtUuCjed9oji8LjZYIeB5AONGbaCws'
      const apiUrl = apiBase + ytId + '&key=' + apiKey
      axios.get(apiUrl)
        .then(response => {
          // console.log(response)
          const payload = {
            stvId: response.data.items[0].id,
            ytTitle: response.data.items[0].snippet.title,
            stvTitle: response.data.items[0].snippet.title,
            ytDescription: response.data.items[0].snippet.description,
            stvDescription: response.data.items[0].snippet.description,
            // you need to fix  the thumbnail resolution not found issue
            ytThumbnailStandard: response.data.items[0].snippet.thumbnails
              .standard.url,
            ytThumbnailMedium: response.data.items[0].snippet.thumbnails
              .medium.url,
            ytThumbnailHigh: response.data.items[0].snippet.thumbnails.high
              .url,
            // ytThumbnailMaxRes: response.data.items[0].snippet.thumbnails.maxres.url,
            ytChannelId: response.data.items[0].snippet.channelId,
            ytChannelTitle: response.data.items[0].snippet.channelTitle,
            ytVideoId: response.data.items[0].id,
            ytPublishedAt: response.data.items[0].snippet.publishedAt,
            stvPublishedAt: response.data.items[0].snippet.publishedAt,
            stvPlayCount: response.data.items[0].statistics.viewCount
          }
          commit('setLoading', false)
          commit('videoLoaded', true)
          commit('createVideoPost', payload)
          // this.videoLoaded = true
          // console.log(payload)
          // _.assign(this.importData, payload)
          commit('createVideoPost', payload)
          // do we need to redirect now?
        })
        .catch(
          error => {
            console.log(error)
          }
        )
    },
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
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload
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
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
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
    post (state) {
      return state.loadedPost
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
          return post.id == postId
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
