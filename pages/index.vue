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
    <ListCards :datau="this.datar"/>
    <div class="text-center">
      <v-col>
        <nuxt-link :to=" '/?page='+ prev" style="text-decoration: none">
          <v-btn>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </nuxt-link>
        <v-btn>
          <h2>{{this.$route.q === undefined ? 1 : this.$route.q.page}}</h2>
        </v-btn>
        <nuxt-link :to=" '/?page='+ next" style="text-decoration: none">
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

  let datar;
  var query;
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
      busy: false,
      next: 0,
      prev: 0,
      datar,
      query
    }),
    mounted() {

      this.page = this.$route.params.page === undefined ? 0 : this.$route.params.page
      this.next = this.page+1
      this.prev = this.page === 0 ? 0 : this.page-1

      if (this.$route.query.q === undefined) {
        return axios.get(`https://api.ixil.cc/hina?op=50&page=${this.$route.query.page === undefined ? 0 : this.$route.query.page}`)
          .then((res) => {
            this.datar = res.data
            this.page = this.$route.query.page
          })
      } else {
        return axios.get(`https://api.ixil.cc/hina/search?op=50&page=${this.$route.query.page === undefined ? 0 : this.$route.query.page}&query=${encodeURI(this.$route.query.q)}`)
          .then((res) => {
            this.datar = res.data
            this.page =  this.$route.query.page
            this.query = encodeURI(this.$route.query.q)
          })
      }
    },
    watch: { '$route'() { this.getNext(); }, },
    methods: {
      GetSr() {
        this.$router.push({ path: '1', query: { q: this.sdata } })
      },
      getNext() {
        if(!this.busy) {
          this.busy = true;
          this.$router.go()
        }
      },
      GoAt(paged)
      {
        this.$router.push({query: {page: paged}});
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
