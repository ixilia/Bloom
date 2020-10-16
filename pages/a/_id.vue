<template>
  <v-responsive>
    <div v-if="!Check43Ratio()" class="bottom disable-scrollbars"
         style="   background-size: cover;"
         :style="`background-image: url(${info.gliphs[1]});`">


      <!-- Medium Meta -->
      <v-col style="margin-top: 6rem; margin-left: 8rem; position: fixed; z-index: -1; width: 100vw">
        <v-row v-if="$vuetify.breakpoint.mdAndUp">
          <v-img width="264px"
                 height="318px"
                 max-height="318px"
                 max-width="264px"
                 style="border-radius: 5px; box-shadow:  0 0.9px 2.2px rgba(0, 0, 0, 0.051),  0 2.1px 5.3px rgba(0, 0, 0, 0.073),  0 3.9px 10px rgba(0, 0, 0, 0.09),  0 6.9px 17.9px rgba(0, 0, 0, 0.107),  0 13px 33.4px rgba(0, 0, 0, 0.129),  0 31px 80px rgba(0, 0, 0, 0.18);"
                 :src="info.thumb"/>
          <v-col style="margin-left: 4rem;">
            <h1 v-if="$vuetify.breakpoint.mdAndUp"
                style="width: 40rem;  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
              {{ info.name }}</h1>
            <h2 v-if="$vuetify.breakpoint.smAndDown"
                style="width: 20rem;  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
              {{ info.name }}</h2>
            <v-row justify="start" class="pl-3">
              <v-icon>mdi-account-circle</v-icon>
              <h4 style="padding-left: 0.5rem; width: 10rem;  overflow: hidden; text-overflow: ellipsis;">
                {{ info.idol }}</h4>
            </v-row>
            <div>
              <v-badge
                color="green"
                content="168+"
                icon="mdi-thumb-up"
                overlap
                offset-y="29px"
                offset-x="23px"
              >
                <v-col>
                  <v-avatar class="paper"
                            :size=" $vuetify.breakpoint.smAndDown? `2.0rem`: `2.7rem`"
                            v-for="(item, i) in 5"
                            :key="i"
                            :style=" i > 0  ? 'margin-left: -9px; transform: rotateY(11deg)' : 'margin-left: 0;' "
                            style="box-shadow: -2px 1px 4px -3px #000000, -5px 2px 6px -2px rgba(0,0,0,0.74);">
                    <v-img size="2.2rem"
                           src="https://cdn.discordapp.com/attachments/488810702190936075/761234831304556554/unknown.png"/>
                  </v-avatar>
                </v-col>
              </v-badge>

              <v-rating
                empty-icon="mdi-star-outline"
                full-icon="mdi-star"
                half-icon="mdi-star-half-full"
                hover
                :length="5"
                size="24"
                :value="3"
              />
            </div>


            <!-- Download Dialog  -->
            <div style="align-self: center; padding-bottom: 2rem; padding-top: 1rem;">
              <v-dialog
                v-model="DownloadDialog"
                persistent
                width="500"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    dark
                    depressed
                    color="rgba(255, 242, 0, 0.79)"
                    v-bind="attrs"
                    v-on="on"
                  >
                    DOWNLOAD
                  </v-btn>
                </template>

                <v-card>
                  <v-card-title class="headline blue lighten-2">
                    <v-row justify="space-between">
                      <h3>
                        Download
                      </h3>
                      <v-btn flat depressed color="rgba(0,0,0,0)" @click="DownloadDialog = !DownloadDialog">
                        <v-icon size="1.5rem">mdi-close-circle</v-icon>
                      </v-btn>
                    </v-row>
                  </v-card-title>

                  <v-container fluid>
                    <v-row style="width: 100%" justify-content="end" align-content="end">
                      <v-col>
                        <v-switch
                          v-if="!DownloadState"
                          style="align-self: end; justify-self: end;"
                          v-model="DownloadAll"
                          label="Download All"
                          :disabled="DownloadState"
                          @change="DownloadChange"
                        ></v-switch>
                        <h2 v-if="DownloadState" style="font-family: 'Michroma', sans-serif;">{{Math.round((DownloadProgress / DownloadTotal) * 100)}} <a style="font-family: 'Aldrich', sans-serif;">%</a></h2>
                      </v-col>
                      <v-tooltip top>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                            dark
                            size="3rem"
                            v-bind="attrs"
                            v-on="on"
                          >
                            mdi-vpn
                          </v-icon>
                        </template>
                        <span>Bloom Secure Proxy</span>
                      </v-tooltip>
                    </v-row>
                    <v-select
                      v-if="!DownloadState"
                      v-model="selvalues"
                      :items="elvalues"
                      label="Select Images"
                      multiple
                    >
                      <template v-slot:selection="{ item, index }">
                        <v-chip v-if="index === 0">
                          <span>{{ item }}</span>
                        </v-chip>
                        <span
                          v-if="index === 1"
                          class="grey--text caption"
                        >
          (+{{ items.length - 1 }} other pictures.)
        </span>
                      </template>
                    </v-select>

                    <v-progress-linear
                      v-if="DownloadState"
                      :buffer-value="DownloadProgress+1"
                      color="success"
                      stream
                      :value="(DownloadProgress / DownloadTotal) * 100"
                    />
                  </v-container>

                  <v-divider></v-divider>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      :disabled="DownloadState"
                      :loading="DownloadState"
                      color="primary"
                      text
                      @click="$store.dispatch('download/DOWNLOAD',{en: info, indexes: selvalues})"
                    >
                      Download
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </div>
          </v-col>
        </v-row>
        <div v-if="$vuetify.breakpoint.mdAndUp" style="padding-left: 43%; padding-top: 5rem; width: fit-content; height: fit-content">
          <div style=" width: 2rem; margin-top: 4rem; height: 0.1em;" class="mouse_wave" @mouseenter="ScrollToImages()">
            <span class="scroll_arrows one"></span>
            <span class="scroll_arrows two"></span>
            <span class="scroll_arrows three"></span>
          </div>
        </div>
      </v-col>


      <!-- Mobile Meta -->
      <v-col v-if="$vuetify.breakpoint.smAndDown"
             style="margin-top: 4.4rem; margin-left: 1rem; position: fixed; z-index: -1; ">
        <v-img width="164px"
               height="218px"
               max-height="218px"
               max-width="194px"
               style="border-radius: 5px; box-shadow:  0 0.9px 2.2px rgba(0, 0, 0, 0.051),  0 2.1px 5.3px rgba(0, 0, 0, 0.073),  0 3.9px 10px rgba(0, 0, 0, 0.09),  0 6.9px 17.9px rgba(0, 0, 0, 0.107),  0 13px 33.4px rgba(0, 0, 0, 0.129),  0 31px 80px rgba(0, 0, 0, 0.18);"
               :src="info.thumb"/>
        <div style="padding-top: 1rem;">
          <h2 style="width: 18rem;  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
            {{ info.name }}</h2>
          <v-row justify="start" class="pl-3">
            <v-icon>mdi-account-circle</v-icon>
            <h4 style="padding-left: 0.5rem; width: 16rem;  overflow: hidden; text-overflow: ellipsis;">
              {{ info.idol }}</h4>
          </v-row>
        </div>

        <div>
          <v-badge
            color="green"
            content="168+"
            icon="mdi-thumb-up"
            overlap
            offset-y="29px"
            offset-x="23px"
          >
            <v-col>
              <v-avatar class="paper"
                        :size=" $vuetify.breakpoint.smAndDown? `2.0rem`: `2.7rem`"
                        v-for="(item, i) in 5"
                        :key="i"
                        :style=" i > 0  ? 'margin-left: -9px; transform: rotateY(11deg)' : 'margin-left: 0;' "
                        style="box-shadow: -2px 1px 4px -3px #000000, -5px 2px 6px -2px rgba(0,0,0,0.74);">
                <v-img size="2.2rem"
                       src="https://cdn.discordapp.com/attachments/488810702190936075/761234831304556554/unknown.png"/>
              </v-avatar>
            </v-col>
          </v-badge>

          <v-rating
            empty-icon="mdi-star-outline"
            full-icon="mdi-star"
            half-icon="mdi-star-half-full"
            hover
            :length="5"
            size="24"
            :value="3"
          />
        </div>

        <!-- Download Dialog  -->
        <div style="align-self: center; padding-bottom: 2rem; padding-top: 1rem;">
          <v-dialog
            v-model="DownloadDialog"
            persistent
            width="500"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                depressed
                color="rgba(255, 242, 0, 0.79)"
                v-bind="attrs"
                v-on="on"
              >
                DOWNLOAD
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline blue lighten-2">
                <v-row justify="space-between">
                  <h3>
                    Download
                  </h3>
                  <v-btn flat depressed color="rgba(0,0,0,0)" @click="DownloadDialog = !DownloadDialog">
                    <v-icon size="1.5rem">mdi-close-circle</v-icon>
                  </v-btn>
                </v-row>
              </v-card-title>

              <v-container fluid>
                <v-row style="width: 100%" justify-content="end" align-content="end">
                  <v-col>
                    <v-switch
                      v-if="!DownloadState"
                      style="align-self: end; justify-self: end;"
                      v-model="DownloadAll"
                      label="Download All"
                      :disabled="DownloadState"
                      @change="DownloadChange"
                    ></v-switch>
                    <h2 v-if="DownloadState" style="font-family: 'Michroma', sans-serif;">{{Math.round((DownloadProgress / DownloadTotal) * 100)}} <a style="font-family: 'Aldrich', sans-serif;">%</a></h2>
                  </v-col>
                  <v-tooltip top>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        dark
                        size="3rem"
                        v-bind="attrs"
                        v-on="on"
                      >
                        mdi-vpn
                      </v-icon>
                    </template>
                    <span>Bloom Secure Proxy</span>
                  </v-tooltip>
                </v-row>
                <v-select
                  v-if="!DownloadState"
                  v-model="selvalues"
                  :items="elvalues"
                  label="Select Images"
                  multiple
                >
                  <template v-slot:selection="{ item, index }">
                    <v-chip v-if="index === 0">
                      <span>{{ item }}</span>
                    </v-chip>
                    <span
                      v-if="index === 1"
                      class="grey--text caption"
                    >
          (+{{ items.length - 1 }} other pictures.)
        </span>
                  </template>
                </v-select>

                <v-progress-linear
                  v-if="DownloadState"
                  :buffer-value="DownloadProgress+1"
                  color="success"
                  stream
                  :value="(DownloadProgress / DownloadTotal) * 100"
                />
              </v-container>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  :disabled="DownloadState"
                  :loading="DownloadState"
                  color="primary"
                  text
                  @click="$store.dispatch('download/DOWNLOAD',{en: info, indexes: selvalues})"
                >
                  Download
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <div style="transform: translateY(-4.5rem); padding-left: 43%; width: fit-content; height: fit-content">
          <div style=" width: 2rem; margin-top: 4rem; height: 0.1em;" class="mouse_wave">
            <span class="scroll_arrows one"></span>
            <span class="scroll_arrows two"></span>
            <span class="scroll_arrows three"></span>
          </div>
        </div>
      </v-col>


      <!-- Body -->
      <div id="overlay" ref="overlay" class="overlay fade">
        <div class="scrollbox-fm"/>
        <div class="disable-scrollbars scrollbox"
             style="margin-top: 7rem; padding-top: 1rem; overflow: scroll; height: inherit;">
          <v-row justify="space-around" style="">
            <div>
              <masonry
                :cols="{default: 4, 1000: 3, 700: 2, 400: 1}"
                :gutter="{default: '30px', 700: '15px'}"
              >
                <v-img v-if="$vuetify.breakpoint.mdAndUp" v-for="(item, index) in items" :key="index"
                       @click="show(index)" width="17rem" max-height="20rem;"
                       style="border-radius: 5px; margin-left: 1rem; margin-right: 1rem; margin-bottom: 2rem;"
                       :src="item.data"/>
                <v-img v-if="$vuetify.breakpoint.smAndDown" v-for="(item, index) in items" :key="index"
                       @click="show(index)" width="10rem" max-height="20rem;"
                       style="border-radius: 5px; margin-left: 1rem; margin-right: 1rem; margin-bottom: 2rem;"
                       :src="item.data"/>
              </masonry>
            </div>
          </v-row>
        </div>
      </div>
    </div>


    <!-- 4:3 Page -->
    <div v-if="Check43Ratio()" class="bottom disable-scrollbars"
         style="background-size: cover; background-position: right center"
         :style="`background-image: url(${info.gliphs[1]});`">

      <v-row class="bottom" justify="space-around"
             style=" padding-left: 6rem; padding-top: 20rem; z-index: -1; width: 100vw;">
        <v-col style="padding-right: 0; margin-right: 0;">
          <v-row justify="space-between" style="width: 40rem;" no-gutters>
            <v-img width="264px"
                   height="318px"
                   max-height="318px"
                   max-width="264px"
                   style="border-radius: 5px; box-shadow:  0 0.9px 2.2px rgba(0, 0, 0, 0.051),  0 2.1px 5.3px rgba(0, 0, 0, 0.073),  0 3.9px 10px rgba(0, 0, 0, 0.09),  0 6.9px 17.9px rgba(0, 0, 0, 0.107),  0 13px 33.4px rgba(0, 0, 0, 0.129),  0 31px 80px rgba(0, 0, 0, 0.18);"
                   :src="info.thumb"/>
            <div>
              <v-col>
                <h2 style="width: 18rem;  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                  {{ info.name }}</h2>
                <v-row justify="start" class="pl-3">
                  <v-icon>mdi-account-circle</v-icon>
                  <h4 style="padding-left: 0.5rem; width: 16rem;  overflow: hidden; text-overflow: ellipsis;">
                    {{ info.idol }}</h4>
                </v-row>
              </v-col>
            </div>
          </v-row>
          <v-rating
            class="pt-6"
            empty-icon="mdi-star-outline"
            full-icon="mdi-star"
            half-icon="mdi-star-half-full"
            hover
            :length="5"
            size="24"
            :value="3"
          />
          <v-badge
            class="pt-5 pb-5"
            color="green"
            content="168+"
            icon="mdi-thumb-up"
            overlap
            offset-y="47px"
            offset-x="29px"
          >
            <v-col>
              <v-avatar class="paper"
                        :size=" $vuetify.breakpoint.smAndDown? `2.0rem`: `2.7rem`"
                        v-for="(item, i) in 5"
                        :key="i"
                        :style=" i > 0  ? 'margin-left: -9px; transform: rotateY(11deg)' : 'margin-left: 0;' "
                        style="box-shadow: -2px 1px 4px -3px #000000, -5px 2px 6px -2px rgba(0,0,0,0.74);">
                <v-img size="2.2rem"
                       src="https://cdn.discordapp.com/attachments/488810702190936075/761234831304556554/unknown.png"/>
              </v-avatar>
            </v-col>
          </v-badge>

          <div style="align-self: center; padding-bottom: 2rem; padding-top: 1rem;">
            <v-btn dark color="rgba(255, 242, 0, 0.84)">
              DOWNLOAD
            </v-btn>
          </div>
        </v-col>
      </v-row>


      <!-- 4:3 Body -->
      <div class="overlay-daig fade-diag" style="">
        <div style="padding-left: 10rem; padding-top: 5rem; height: fit-content;">
          <v-col style="height: fit-content;">
            <masonry
              :cols="{default: 3, 1000: 3, 700: 2, 400: 1}"
              :gutter="{default: '30px', 700: '15px'}"
            >
              <v-img v-if="$vuetify.breakpoint.mdAndUp" v-for="(item, index) in items" :key="index" @click="show(index)"
                     width="30rem" max-height="18rem;"
                     style="border-radius: 5px; margin-left: 1rem; margin-right: 1rem; margin-bottom: 2rem;"
                     :src="item.data"/>
              <v-img v-if="$vuetify.breakpoint.smAndDown" v-for="(item, index) in items" :key="index"
                     @click="show(index)" width="10rem" max-height="16rem;"
                     style="border-radius: 5px; margin-left: 1rem; margin-right: 1rem; margin-bottom: 2rem;"
                     :src="item.data"/>
            </masonry>
          </v-col>
        </div>
      </div>
    </div>
    <img-viewer ref="viewer"/>
  </v-responsive>
</template>

<script>
//import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'
import axios from 'axios'
import ImgViewer from '../../components/images/ImgViewer'
import { mapGetters, mapState } from 'vuex'

let ERROR_ALLOWED = 0.05
let STANDARD_ASPECT_RATIOS = [
  [1, '1:1'],
  [4 / 3, '4:3'],
  [5 / 4, '5:4'],
  [3 / 2, '3:2'],
  [16 / 10, '16:10'],
  [16 / 9, '16:9'],
  [21 / 9, '21:9'],
  [32 / 9, '32:9']
]
let RATIOS = STANDARD_ASPECT_RATIOS.map(function(tpl) {
  return tpl[0]
}).sort()
let LOOKUP = Object()


export default {
  name: 'album',
  components: { ImgViewer },
  data() {
    return {
      items: [],
      DownloadAll: true,
      DownloadDialog: false,
      elvalues: [],
      selvalues: [],
      el: null
    }
  },

  asyncData({ params }) {
    return axios.get(`https://api.ixil.cc/bloom/hina/payload?id=${params.id}`)
      .then((res) => {
        return { info: res.data }
      })
  },

  computed: {
    ...mapGetters({
      DownloadState: 'download/GET_DOWNLOAD_STATE',
      DownloadProgress: 'download/GET_DOWNLOAD_PROGRESS',
      DownloadTotal: 'download/GET_DOWNLOAD_TOTAL'
    }),
  },

  watch: {},

  mounted() {
    this.items = Array.from({ length: this.info.gliphs.length }, (_, index) => ({
      data: this.info.gliphs[index],
      id: index,
    }))
    this.elvalues = Array.from({ length: this.info.gliphs.length }, (_, index) => (index+1))
    this.selvalues = this.elvalues


    for (let i = 0; i < STANDARD_ASPECT_RATIOS.length; i++) {
      LOOKUP[STANDARD_ASPECT_RATIOS[i][0]] = STANDARD_ASPECT_RATIOS[i][1]
    }

    this.el = this.$el.getElementsByClassName('overlay')[0]
  },

  methods: {
    logdsc() {
      console.log(this.estimateAspectRatio(this.$vuetify.breakpoint.width, this.$vuetify.breakpoint.height))
    },

    DownloadChange()
    {
      if(this.DownloadAll) this.selvalues = this.elvalues
      else this.selvalues = []
    },

    ScrollToImages() {
      if (this.el) {
        this.el.scrollIntoView({
          behavior: 'smooth'
        })
      }
    },

    show(index) {
      this.$refs.viewer.show(
        this.items,
        index
      )
    },

    cellSizeAndPositionGetter(item, index) {
      // compute size and position
      return {
        width: 250,
        height: 150,
        x: (index % 2) * 350,
        y: parseInt(index / 2) * 190
      }
    },

    Check43Ratio() {
      let ratio = this.estimateAspectRatio(this.$vuetify.breakpoint.width, this.$vuetify.breakpoint.height)
      return ratio === '4:3' || ratio === '4:3:1'
    },

    /*
       Find the closest value in a sorted array
    */
    findClosest(arrSorted, value) {
      let closest = arrSorted[0]
      let closestDiff = Math.abs(arrSorted[0] - value)
      for (let i = 1; i < arrSorted.length; i++) {
        let diff = Math.abs(arrSorted[i] - value)
        if (diff < closestDiff) {
          closestDiff = diff
          closest = arrSorted[i]
        } else {
          return closest
        }
      }
      return arrSorted[arrSorted.length - 1]
    },

    /*
    Estimate the aspect ratio based on width x height (order doesn't matter)
    */
    estimateAspectRatio(dim1, dim2) {
      let ratio = Math.max(dim1, dim2) / Math.min(dim1, dim2)
      if (ratio in LOOKUP) {
        return LOOKUP[ratio]
      }

      // Look by approximation
      let closest = this.findClosest(RATIOS, ratio)
      if (Math.abs(closest - ratio) <= ERROR_ALLOWED) {
        return LOOKUP[closest]
      }

      return Math.round(ratio * 100) / 100 + ':1'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@600&family=Aldrich&family=Michroma&display=swap');

.fade {
  background: -webkit-linear-gradient(0deg, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 1) 80%, rgba(18, 18, 18, 1) 90%, rgba(18, 18, 18, 0.9) 94%, rgba(18, 18, 18, 0.8) 95%, rgba(18, 18, 18, 0.0449930313922444) 98%, rgba(18, 18, 18, 0.001) 100%);
  background-image: -o-linear-gradient(0deg, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 1) 80%, rgba(18, 18, 18, 1) 90%, rgba(18, 18, 18, 0.9) 94%, rgba(18, 18, 18, 0.8) 95%, rgba(18, 18, 18, 0.0449930313922444) 98%, rgba(18, 18, 18, 0.001) 100%);
  background-image: linear-gradient(0deg, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 1) 80%, rgba(18, 18, 18, 1) 90%, rgba(18, 18, 18, 0.9) 94%, rgba(18, 18, 18, 0.8) 95%, rgba(18, 18, 18, 0.0449930313922444) 98%, rgba(18, 18, 18, 0.001) 100%);
  background-image: -moz-linear-gradient(0deg, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 1) 80%, rgba(18, 18, 18, 1) 90%, rgba(18, 18, 18, 0.9) 94%, rgba(18, 18, 18, 0.8) 95%, rgba(18, 18, 18, 0.0449930313922444) 98%, rgba(18, 18, 18, 0.001) 100%);
}

.fade-diag {
  background: -webkit-linear-gradient(270deg, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 1) 80%, rgba(18, 18, 18, 0.9475140397956058) 90%, rgba(18, 18, 18, 0.8858893899356618) 94%, rgba(18, 18, 18, 0.8038445720084909) 95%, rgba(18, 18, 18, 0.0449930313922444) 98%, rgba(18, 18, 18, 0.001) 100%);
  background-image: -o-linear-gradient(270deg, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 1) 80%, rgba(18, 18, 18, 0.9475140397956058) 90%, rgba(18, 18, 18, 0.8858893899356618) 94%, rgba(18, 18, 18, 0.8038445720084909) 95%, rgba(18, 18, 18, 0.0449930313922444) 98%, rgba(18, 18, 18, 0.001) 100%);
  background-image: linear-gradient(270deg, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 1) 80%, rgba(18, 18, 18, 0.9475140397956058) 90%, rgba(18, 18, 18, 0.8858893899356618) 94%, rgba(18, 18, 18, 0.8038445720084909) 95%, rgba(18, 18, 18, 0.0449930313922444) 98%, rgba(18, 18, 18, 0.001) 100%);
  background-image: -moz-linear-gradient(270deg, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 1) 80%, rgba(18, 18, 18, 0.9475140397956058) 90%, rgba(18, 18, 18, 0.8858893899356618) 94%, rgba(18, 18, 18, 0.8038445720084909) 95%, rgba(18, 18, 18, 0.0449930313922444) 98%, rgba(18, 18, 18, 0.001) 100%);
}

.disable-scrollbars::-webkit-scrollbar {
  width: 0;
  background: transparent; /* Chrome/Safari/Webkit */
}

.disable-scrollbars {
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.bottom {
  position: fixed;
  overflow: scroll;
  overscroll-behavior: auto;
  overflow-scrolling: touch;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}

.overlay {
  margin-top: 85vh;
  margin-bottom: 0;
  width: 100vw;
  padding: 30px;
  height: 80rem;
  overflow: hidden;
//min-height: 80vh;
}

.overlay-daig {
  margin-left: 84vw;
  margin-bottom: 0;
  width: 99%;
  height: fit-content;
  min-height: 100vh;
}


.mouse_wave {
  display: block;
  margin: 0 auto;
  width: 24px;
  height: 100px;
//background: blue; margin-top: 125px;
}

.scroll_arrows {
  display: block;
  width: 5px;
  height: 5px;
  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
  transform: rotate(45deg);

  border-right: 2px solid white;
  border-bottom: 2px solid white;
  margin: 0 0 3px 4px;

  width: 16px;
  height: 16px;
}

.one {
  margin-top: 1px;
}

.one, .two, .three {
  -webkit-animation: mouse-wave 1s infinite;
  -moz-animation: mouse-wave 1s infinite;
}

.one {
  -webkit-animation-delay: .1s;
  -moz-animation-delay: .1s;
  -webkit-animation-direction: alternate;
}

.two {
  -webkit-animation-delay: .2s;
  -moz-animation-delay: .2s;
  -webkit-animation-direction: alternate;
  margin-top: -6px;
}

.three {
  -webkit-animation-delay: .3s;
  -moz-animation-delay: .3s;
  -webkit-animation-direction: alternate;
  margin-top: -6px;
}


@-webkit-keyframes mouse-wave {

  0% {
    opacity: 0;
  }
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
}

@-moz-keyframes mouse-wave {

  0% {
    opacity: 0;
  }
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
}

@-o-keyframes mouse-wave {

  0% {
    opacity: 0;
  }
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
}

@keyframes mouse-wave {

  0% {
    opacity: 0;
  }
  50% {
    opacity: .5;
  }
  100% {
    opacity: 1;
  }
}

.scrollbox-fm {
  position: relative;
  z-index: 999;
  width: 100vw;
  transform: translateX(-1rem);
  height: 2rem;
  top: 9rem;
  filter: opacity(1) blur(0.4%);
  background: linear-gradient(180deg, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 1) 45%, rgba(18, 18, 18, 0.9475140397956058) 71%, rgba(18, 18, 18, 0.8858893899356618) 86%, rgba(18, 18, 18, 0.7738445720084909) 93%, rgba(18, 18, 18, 0.6449930313922444) 98%, rgba(18, 18, 18, 0.1065743172) 100%);
}
</style>
