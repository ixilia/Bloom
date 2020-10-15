import JSZip from 'jszip'
import { saveAs } from 'file-saver';

const axios = require('axios')


export const state = () => ({
  TaskState: false,
  total: 0,
  progressd: 0,
})

export const mutations = {
  SET_DOWNLOAD_PROGRESS(state, data) {
    state.progressd = data
  },
  SET_DOWNLOAD_TOTAL(state, data) {
    state.total = data
  },
  SET_DOWNLOAD_STATE(state, data) {
    state.TaskState = data
  },
}

export const actions = {

  async DOWNLOAD(vuexContext, data) {
    if (data.en.gliphs.length > 0) {
      let errors = []
      vuexContext.commit('SET_DOWNLOAD_STATE', true)
      vuexContext.commit('SET_DOWNLOAD_TOTAL', data.indexes.length)
      let zip = new JSZip()
      zip.file("bloom.petal", JSON.stringify({data: data, errors: errors }));
      let img = zip.folder('images')
      //img.file("smile.gif", imgData, {ArrayBuffer: true});
      console.log(data.indexes)
      let i = 0
      for (i; i < data.indexes.length; i++) {
        let downloadurl = data.en.gliphs[data.indexes[i]-1]
        if(downloadurl === undefined) console.log({I: i,Index: data.indexes[i], Indexes: data.indexes.length, Images: data.en.gliphs.length, current: data.en.gliphs[data.indexes[i]-1]})
        let ext = data.en.gliphs[data.indexes[i]-1].match(/^.*?\/\/.*?\/(.*?)(\..*?)$/)[2]  // get file extension
        if (downloadurl.includes('https://')) downloadurl = downloadurl.replace('https://', '')
        else if (downloadurl.includes('http://')) downloadurl = downloadurl.replace('http://', '')

        await axios
          .get('https://bloom-proxy.herokuapp.com/' + downloadurl, {  // uses proxy
            responseType: 'arraybuffer'
          })
          .then(response => {
            img.file(`petal-${i}${ext}`, response.data, { arraybuffer: true })
          }).catch(function (error) {
            errors.push(error)
            zip.file("bloom.petal", JSON.stringify({data: data, errors: errors }));
          }).finally(() => {
            vuexContext.commit('SET_DOWNLOAD_PROGRESS', i)
          })
      }

      while (i < data.indexes.length) {
        await sleep(100);
      }
      zip.generateAsync({type:"blob"})
        .then(function(content) {
          saveAs(content, `petals-${data.en.id}.zip`);
        }).finally(function() {
        vuexContext.commit('SET_DOWNLOAD_STATE', false)
      });
    }
  },
}

export const getters = {
  GET_DOWNLOAD_STATE(state) {
    return state.TaskState
  },
  GET_DOWNLOAD_TOTAL(state) {
    return state.total
  },
  GET_DOWNLOAD_PROGRESS(state) {
    return state.progressd
  }
}
