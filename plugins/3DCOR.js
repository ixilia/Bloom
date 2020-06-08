import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'
import VuePreview from 'vue-preview'
import VueGallery from 'vue-gallery'

Vue.component('VGallery', VueGallery)

// defalut install
Vue.use(VuePreview, {
  mainClass: 'pswp--minimal--dark',
  barsSize: { top: 0, bottom: 0 },
  captionEl: false,
  fullscreenEl: true,
  shareEl: true,
  bgOpacity: 0.85,
  tapToClose: true,
  tapToToggleControls: false
})

Vue.use(VueLazyLoad)
