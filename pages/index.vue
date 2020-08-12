<template>
  <v-col>
    <v-row justify="center" align-content="center">
      <div style="width: 30rem">
        <v-text-field
          prepend-icon="mdi-magnify"
          single-line
          dense
          clearable

          v-model="sdata"
          :loading="busy"
          v-on:keyup.enter="GetSr()"
        ></v-text-field>
      </div>
    </v-row>
    <ListCards :datau="datar"/>
    <div class="text-center">
      <v-col>
        <nuxt-link :to=" '/'+ 1" style="text-decoration: none">
          <v-btn>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </nuxt-link>
        <v-btn>
          <h2>{{this.$route.q === undefined ? 1 : this.$route.q.page}}</h2>
        </v-btn>
        <nuxt-link :to=" '/'+ 2" style="text-decoration: none">
          <v-btn>
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </nuxt-link>
      </v-col>
    </div>
  </v-col>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import VuetifyLogo from '~/components/VuetifyLogo.vue'
  import Head from '~/layouts/Global/Head'
  import Carousel from '~/layouts/Home/carousel'
  import ListCards from '~/layouts/Home/ListCards'
  import axios from 'axios'

  export default {
    components: {
      ListCards,
      Carousel,
      Head,
      Logo,
      VuetifyLogo
    },
    data: () => ({
      page: 0,
      sdata: '',
      busy: false
    }),
    asyncData({}) {
      return axios.get(`https://api.ixil.cc/bloom/hina?op=50&page=1`)
        .then((res) => {
          return { datar: res.data }
        })
    },
    mounted() {
    },
    methods: {
      GetSr() {
        this.$router.push({ path: '1', query: { q: this.sdata } })
      }
    }
  }
</script>

<style>

  .Container {
    width: 100vw;
    height: 2000px;
    background-color: #000000;
    transform: translateY(-3%);
  }
</style>
