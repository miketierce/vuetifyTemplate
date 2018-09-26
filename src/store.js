import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clips: [],
    clipTimestamp: {
      timestamp: ''
    },
    clipDimensions: {
      videoId: '',
      clipTitle: '',
      clippedStartTime: '',
      clippedStopTime: '',
      clipCalcStartTime: ''
    },
    loadedPosts: [{
      'kind': 'youtube#playlistItem',
      'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/9HMdZkkdHtZumZsfvLpnSx1TBBI"',
      'id': '1',
      'snippet': {
        'publishedAt': '2013-10-18T14:55:24.000Z',
        'channelId': 'UCvceBgMIpKb4zK1ss-Sh90w',
        'title': 'Andrew Willis, Skatepark Engineer',
        'description': 'Andrew Willis built a skatepark in East London using reclaimed materials left over from the Olympic Games, creating a lasting legacy for the local community of Hackney Wick.',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/GvgqDSnpRQM/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/GvgqDSnpRQM/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/GvgqDSnpRQM/hqdefault.jpg',
            'width': 480,
            'height': 360
          },
          'standard': {
            'url': 'https://i.ytimg.com/vi/GvgqDSnpRQM/sddefault.jpg',
            'width': 640,
            'height': 480
          }
        },
        'channelTitle': 'Google Search Stories',
        'playlistId': 'PLBCF2DAC6FFB574DE',
        'position': 0,
        'resourceId': {
          'kind': 'youtube#video',
          'videoId': 'GvgqDSnpRQM'
        }
      },
      'contentDetails': {
        'videoId': 'GvgqDSnpRQM',
        'videoPublishedAt': '2013-10-18T07:03:29.000Z'
      }
    },
    {
      'kind': 'youtube#playlistItem',
      'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/u3Vr26TTSoSJJjEZTTWL81J2QLo"',
      'id': '3',
      'snippet': {
        'publishedAt': '2011-11-22T15:29:40.000Z',
        'channelId': 'UCvceBgMIpKb4zK1ss-Sh90w',
        'title': 'Mark Lesek: A New/Old Prosthetic',
        'description': 'Follow Mark on Google+: https://plus.google.com/u/0/114778778979884307299/about\r\n\r\nMark lost his arm several years ago. Now his search for a better prosthetic could improve the lives of amputees everywhere.',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/V4DDt30Aat4/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/V4DDt30Aat4/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/V4DDt30Aat4/hqdefault.jpg',
            'width': 480,
            'height': 360
          },
          'standard': {
            'url': 'https://i.ytimg.com/vi/V4DDt30Aat4/sddefault.jpg',
            'width': 640,
            'height': 480
          }
        },
        'channelTitle': 'Google Search Stories',
        'playlistId': 'PLBCF2DAC6FFB574DE',
        'position': 2,
        'resourceId': {
          'kind': 'youtube#video',
          'videoId': 'V4DDt30Aat4'
        }
      },
      'contentDetails': {
        'videoId': 'V4DDt30Aat4',
        'videoPublishedAt': '2011-11-21T19:11:41.000Z'
      }
    },
    {
      'kind': 'youtube#playlistItem',
      'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/FOtajYrAwQLEJiBfkH1FpBw-LMU"',
      'id': '5',
      'snippet': {
        'publishedAt': '2011-11-22T15:29:40.000Z',
        'channelId': 'UCvceBgMIpKb4zK1ss-Sh90w',
        'title': 'Mark Kempton: Neighbors In Need',
        'description': "Follow Mark on Google+: https://profiles.google.com/u/0/105705606437451864842\r\n\r\nWhen floodwaters hit northeast Australia, Mark's innovative search became the difference between life and death for many of his neighbors.",
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/XDgC4FMftpg/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/XDgC4FMftpg/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/XDgC4FMftpg/hqdefault.jpg',
            'width': 480,
            'height': 360
          },
          'standard': {
            'url': 'https://i.ytimg.com/vi/XDgC4FMftpg/sddefault.jpg',
            'width': 640,
            'height': 480
          }
        },
        'channelTitle': 'Google Search Stories',
        'playlistId': 'PLBCF2DAC6FFB574DE',
        'position': 4,
        'resourceId': {
          'kind': 'youtube#video',
          'videoId': 'XDgC4FMftpg'
        }
      },
      'contentDetails': {
        'videoId': 'XDgC4FMftpg',
        'videoPublishedAt': '2011-11-21T20:36:57.000Z'
      }
    },
    {
      'kind': 'youtube#playlistItem',
      'etag': '"XI7nbFXulYBIpL0ayR_gDh3eu1k/TIH5ezna6MPHapXglEmDD2Whknc"',
      'id': '6',
      'snippet': {
        'publishedAt': '2011-09-23T04:52:44.000Z',
        'channelId': 'UCvceBgMIpKb4zK1ss-Sh90w',
        'title': 'Zack Matere: Growing Knowledge',
        'description': 'Add Zack on Google+ https://plus.google.com/108801896271358175231/about\n\nWatch all the Google Search Stories and submit your own at http://www.youtube.com/searchstories\n\n\nZack Matere, a farmer in Soy, Kenya, searched for a way to save his dying crops. What he discovered was a desire to help local farmers and businesses access information.',
        'thumbnails': {
          'default': {
            'url': 'https://i.ytimg.com/vi/OE63BYWdqC4/default.jpg',
            'width': 120,
            'height': 90
          },
          'medium': {
            'url': 'https://i.ytimg.com/vi/OE63BYWdqC4/mqdefault.jpg',
            'width': 320,
            'height': 180
          },
          'high': {
            'url': 'https://i.ytimg.com/vi/OE63BYWdqC4/hqdefault.jpg',
            'width': 480,
            'height': 360
          }
        },
        'channelTitle': 'Google Search Stories',
        'playlistId': 'PLBCF2DAC6FFB574DE',
        'position': 5,
        'resourceId': {
          'kind': 'youtube#video',
          'videoId': 'OE63BYWdqC4'
        }
      },
      'contentDetails': {
        'videoId': 'OE63BYWdqC4',
        'videoPublishedAt': '2011-09-19T21:03:44.000Z'
      }
    }
    ],
    user: {
      id: 'lucas',
      registeredPosts: ['23']
    }
  },
  mutations: {
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
    }
  },
  actions: {
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
        videoId: payload.videoId,
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
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload
        .password)
        .then(
          response => {
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
            console.log(error)
          }
        )
    }
  },
  getters: {
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
    }
  }
})
