<template>
  <v-responsive>
    <div v-if="!Check43Ratio()" class="bottom disable-scrollbars"
         style=" background-image: url(https://cdn.discordapp.com/attachments/488810702190936075/761516337431707658/080116m7hp4sml9vebhhp4.jpg);  background-size: cover;">

      <!-- Medium Meta -->
      <v-row v-if="$vuetify.breakpoint.mdAndUp" style="margin-top: 6rem; margin-left: 8rem; position: fixed; z-index: -1; width: 100vw">
        <v-img width="264px"
               height="318px"
               max-height="318px"
               max-width="264px"
               style="border-radius: 5px; box-shadow:  0 0.9px 2.2px rgba(0, 0, 0, 0.051),  0 2.1px 5.3px rgba(0, 0, 0, 0.073),  0 3.9px 10px rgba(0, 0, 0, 0.09),  0 6.9px 17.9px rgba(0, 0, 0, 0.107),  0 13px 33.4px rgba(0, 0, 0, 0.129),  0 31px 80px rgba(0, 0, 0, 0.18);"
               src="https://cdn.discordapp.com/attachments/511430724553801729/758607252885864458/08010043hl8999o91u3099.png"/>
        <v-col  style="margin-left: 4rem;">
          <h1 v-if="$vuetify.breakpoint.mdAndUp"
              style="width: 40rem;  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Some bitch</h1>
          <h2 v-if="$vuetify.breakpoint.smAndDown"
              style="width: 20rem;  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Some bitch</h2>
          <v-row justify="start" class="pl-3">
            <v-icon>mdi-account-circle</v-icon>
            <h4 style="padding-left: 0.5rem; width: 10rem;  overflow: hidden; text-overflow: ellipsis;">Ching Chong</h4>
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
          <div style="align-self: center; padding-bottom: 2rem; padding-top: 1rem;">
            <v-btn dark depressed color="rgba(255, 242, 0, 0.79)">
              DOWNLOAD
            </v-btn>
          </div>
        </v-col>
      </v-row>


      <!-- Mobile Meta -->
      <v-col v-if="$vuetify.breakpoint.smAndDown" style="margin-top: 6rem; margin-left: 2rem; position: fixed; z-index: -1; ">
        <v-img width="164px"
               height="218px"
               max-height="218px"
               max-width="194px"
               style="border-radius: 5px; box-shadow:  0 0.9px 2.2px rgba(0, 0, 0, 0.051),  0 2.1px 5.3px rgba(0, 0, 0, 0.073),  0 3.9px 10px rgba(0, 0, 0, 0.09),  0 6.9px 17.9px rgba(0, 0, 0, 0.107),  0 13px 33.4px rgba(0, 0, 0, 0.129),  0 31px 80px rgba(0, 0, 0, 0.18);"
               src="https://cdn.discordapp.com/attachments/511430724553801729/758607252885864458/08010043hl8999o91u3099.png"/>
        <div style="padding-top: 1rem;">
          <h2 style="width: 18rem;  overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Some bitch</h2>
          <v-row justify="start" class="pl-3">
            <v-icon>mdi-account-circle</v-icon>
            <h4 style="padding-left: 0.5rem; width: 16rem;  overflow: hidden; text-overflow: ellipsis;">Ching Chong</h4>
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
        <div style="align-self: center; padding-bottom: 2rem; padding-top: 1rem;">
          <v-btn dark depressed color="rgba(255, 242, 0, 0.79)">
            DOWNLOAD
          </v-btn>
        </div>
      </v-col>


      <!-- Body -->
      <div class="overlay fade">
        <div class="" style="margin-top: 20rem;">
          <v-row justify="space-around">
            <div>
              <masonry
                :cols="{default: 4, 1000: 3, 700: 2, 400: 1}"
                :gutter="{default: '30px', 700: '15px'}"
              >
                <div v-for="(item, index) in items" :key="index">
                  <v-img v-if="$vuetify.breakpoint.mdAndUp" width="17rem" max-height="20rem;" style="border-radius: 5px; margin-left: 1rem; margin-right: 1rem; margin-bottom: 2rem;" :src="item.data"/>
                  <v-img v-if="$vuetify.breakpoint.smAndDown" width="10rem" max-height="20rem;" style="border-radius: 5px; margin-left: 1rem; margin-right: 1rem; margin-bottom: 2rem;" :src="item.data"/>
                </div>
              </masonry>
            </div>
          </v-row>
        </div>
      </div>
    </div>


    <!-- 4:3 Page -->
    <div v-if="Check43Ratio()" class="bottom disable-scrollbars"
         style=" background-image: url(https://cdn.discordapp.com/attachments/488810702190936075/761516337431707658/080116m7hp4sml9vebhhp4.jpg);  background-size: cover; background-position: right center">

      <v-row align-content="start" class="bottom"
             style=" padding-left: 6rem; padding-top: 20rem; z-index: -1; width: 100vw;">
        <v-col>
          <v-img width="264px"
                 height="318px"
                 max-height="318px"
                 max-width="264px"
                 style="border-radius: 5px; box-shadow:  0 0.9px 2.2px rgba(0, 0, 0, 0.051),  0 2.1px 5.3px rgba(0, 0, 0, 0.073),  0 3.9px 10px rgba(0, 0, 0, 0.09),  0 6.9px 17.9px rgba(0, 0, 0, 0.107),  0 13px 33.4px rgba(0, 0, 0, 0.129),  0 31px 80px rgba(0, 0, 0, 0.18);"
                 src="https://cdn.discordapp.com/attachments/511430724553801729/758607252885864458/08010043hl8999o91u3099.png"/>
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
            class="pt-5"
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
        </v-col>
      </v-row>


      <!-- 4:3 Body -->
      <div class="overlay-daig fade-diag" style="">
        <div style="padding-left: 18rem; padding-top: 10rem;">
          <v-col>
            <div style="padding-bottom: 1rem;">
              <v-btn color="blue">Download All</v-btn>
            </div>

            <RecycleScroller
              class="scroller"
              :items="items"
              :item-size="30"
              :prerender="5"
              v-slot="{ item }"
            >
              <v-img width="40rem" style="border-radius: 5px" :src="item.data"/>
            </RecycleScroller>
          </v-col>
        </div>
      </div>
    </div>
  </v-responsive>
</template>

<script>
//import WaterfallSlot from 'vue-waterfall/lib/waterfall-slot'


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
  components: {},
  data() {
    return {
      items: Array.from({ length: 100 }, (_, index) => ({
        data: 'https://cdn.discordapp.com/attachments/511430724553801729/758607252885864458/08010043hl8999o91u3099.png',
        id: index
      }))
    }
  },

  watch: {},

  mounted() {
    console.log('BREAK: ' + this.$vuetify.breakpoint.width)

    for (let i = 0; i < STANDARD_ASPECT_RATIOS.length; i++) {
      LOOKUP[STANDARD_ASPECT_RATIOS[i][0]] = STANDARD_ASPECT_RATIOS[i][1]
    }

    for (let i = 0; i < 20; i++) {
    }
    console.log(this.estimateAspectRatio(this.$vuetify.breakpoint.width, this.$vuetify.breakpoint.height))
  },

  methods: {
    logdsc() {
      console.log(this.estimateAspectRatio(this.$vuetify.breakpoint.width, this.$vuetify.breakpoint.height))
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
.fade {
  background: -webkit-linear-gradient(0deg, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 1) 80%, rgba(18, 18, 18, 1) 90%, rgba(18, 18, 18, 0.9) 94%, rgba(18, 18, 18, 0.8038445720084909) 95%, rgba(18, 18, 18, 0.0449930313922444) 98%, rgba(18, 18, 18, 0.001) 100%);
  background-image: -o-linear-gradient(0deg, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 1) 80%, rgba(18, 18, 18, 1) 90%, rgba(18, 18, 18, 0.9) 94%, rgba(18, 18, 18, 0.8038445720084909) 95%, rgba(18, 18, 18, 0.0449930313922444) 98%, rgba(18, 18, 18, 0.001) 100%);
  background-image: linear-gradient(0deg, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 1) 80%, rgba(18, 18, 18, 1) 90%, rgba(18, 18, 18, 0.9) 94%, rgba(18, 18, 18, 0.8038445720084909) 95%, rgba(18, 18, 18, 0.0449930313922444) 98%, rgba(18, 18, 18, 0.001) 100%);
  background-image: -moz-linear-gradient(0deg, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 1) 80%, rgba(18, 18, 18, 1) 90%, rgba(18, 18, 18, 0.9) 94%, rgba(18, 18, 18, 0.8038445720084909) 95%, rgba(18, 18, 18, 0.0449930313922444) 98%, rgba(18, 18, 18, 0.001) 100%);
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
  margin-top: 72vh;
  margin-bottom: 0;
  width: 100vw;
  padding: 30px;
  min-height: 80vh;
}

.overlay-daig {
  margin-left: 76vw;
  margin-bottom: 0;
  width: 94%;
  min-height: 100vh;
}


</style>
