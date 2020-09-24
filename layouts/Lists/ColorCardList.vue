<template>
  <v-row>

    <!-- Default header  -->
    <v-row v-if="$vuetify.breakpoint.mdAndUp" justify="space-between" class="pl-1 pr-6 ml-1 mr-6">
      <h1 style="align-self: center" v-text="GetNS(name)"></h1>
      <div class="" style="align-self: center">
        <v-btn color="rgba(0,0,0,0)" depressed>
          <v-row>
            <h1 v-if="$vuetify.breakpoint.mdAndUp" style="align-self: center; text-transform: none !important;">Show
              more</h1>
            <h3 v-if="$vuetify.breakpoint.smAndDown" style="align-self: center">Show more</h3>
            <v-icon v-if="$vuetify.breakpoint.mdAndUp" class="pl-1" style="align-self: center">mdi-arrow-right-circle
            </v-icon>
            <v-icon v-if="$vuetify.breakpoint.smAndDown" class="pl-1" style="align-self: center">
              mdi-arrow-right-circle
            </v-icon>
          </v-row>
        </v-btn>
      </div>
    </v-row>

    <!-- Mobile only header  -->
    <v-btn color="rgba(0,0,0,0)" depressed v-if="$vuetify.breakpoint.smAndDown" width="100%" height="3rem"
           style="border-radius: 0;">
      <v-row justify="space-between" class="pl-0 pr-6 ml-0 mr-6">
        <h2 style="align-self: center" v-text="GetNS(name)"></h2>
        <div style="align-self: center">
          <v-row>
            <h3 style="align-self: center">Show more</h3>
            <v-icon class="pl-1" style="align-self: center">
              mdi-arrow-right-circle
            </v-icon>
          </v-row>
        </div>
      </v-row>
    </v-btn>

    <!-- List content  -->
    <vue-horizontal-list style=" width: 99%" :items="data" :options="options">
      <template v-slot:default="{item}">
        <color-card class="pb-5" :shadow="parax" :album="item" style="display: inline-block"/>
      </template>
    </vue-horizontal-list>
  </v-row>
</template>

<script>
  import ColorCard from '../Cards/ColorCard'
  import VueHorizontalList from 'vue-horizontal-list';

  export default {
    name: "ColorCardList",
    components: { ColorCard, VueHorizontalList },

    props: {
      name: {
        type: String,
        default: 'www.jkforum.net'
      },
      data: {
        type: Array,
        default: null
      },
      parax: {
        type: Boolean,
        default: false
      }

    },

    data() {
      return {
        options: {
          responsive: [
            { end: 546, size: 2 },
            { start: 530, end: 673, size: 2 },
            { start: 673, end: 817, size: 2 },
            { start: 817, end: 823, size: 2 },
            { start: 823, end: 1452, size: 2 },
            { start: 1452, size: 3 }
          ],
          list: {
            // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
            windowed: 1200,

            // Because: #app {padding: 80px 24px;}
            padding: 0.1
          },
          item: {
            // css class to inject into each individual item
            class: 'ccardl',
            // padding between each item
            padding: 23
          },
          navigation: {
            // when to show navigation
            start: 768,
            color: '#000'
          }
        },




      }
    },

    methods: {
      /**
       * @return {string}
       */
      GetNS(str) {
        if(str.includes('.'))
        {
          let st = str.replace(/.[a-zA-Z]*$/, '')
          if (st.includes('.')) return st.replace(/^[0-9a-zA-Z]*./, '').toUpperCase()
          else return st.toUpperCase()
        }
        else return str
      }
    }
  }
</script>

<style scoped>
  .cc-list {
    overflow-x: scroll;
    white-space: nowrap;
  }
</style>
