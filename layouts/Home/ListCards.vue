<template>
  <v-responsive>
    <div style="width: 100vw;">
      <v-lazy>
        <v-container fluid>
          <v-row>
            <div id="Duv" v-for="(da, n) in datas" :key="n" class="ma-6"
                 v-ripple>
              <nuxt-link :to="'/a/'+da.iid">
                <v-img class="ctorlmps" :src="da.thumb" :url="da.iid"/>
              </nuxt-link>
            </div>
          </v-row>
        </v-container>
      </v-lazy>
    </div>
  </v-responsive>
</template>

<script>
  import Cards from '~/layouts/Home/cards'
  import axios from 'axios'

  let datas = []
  let datae = []
  export default {
    name: 'ListCards',
    components: { Cards },
    props: {
      page: {
        type: String,
        default: ''
      },
      datau: {
        type: Array,
        default: []
      }
    },
    data: () => ({
      image: 'https://cdn.discordapp.com/attachments/488810702190936075/698503798905110579/45.png',
      scrold: 1,
      busy: false,
      datas,
      sdata: ''
    }),

    mounted() {
      this.datas = this.datau
    },
    methods: {
    }
  }
</script>

<style scoped>
  .ctorlmps {
    box-shadow: -1px 3px 12px 2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -1px 3px 12px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 3px 12px 2px rgba(0, 0, 0, 0.75);
    transition: all 200ms ease 200ms;
    -webkit-transition: all 200ms ease 200ms;
  }

  .ctorlmps:hover {
    box-shadow: -1px 8px 19px 2px rgba(0, 0, 0, 0.87);
    -webkit-box-shadow: -1px 8px 19px 2px rgba(0, 0, 0, 0.87);
    -moz-box-shadow: -1px 8px 19px 2px rgba(0, 0, 0, 0.87);
    transform: translateY(-0.5px);
  }
</style>
