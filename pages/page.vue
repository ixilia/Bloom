<template>
  <v-col>
    <ListCards :datau="datar"/>
    <div class="text-center">
      <v-col>
        <nuxt-link prefetch
                   :to=" '/?page='+ (this.$route.query.page === undefined ? 1 : parseInt(this.$route.query.page)-1)">
          <v-btn>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </nuxt-link>
        <v-btn>
          <h2>{{this.$route.query.page === undefined ? 1 : this.$route.query.page}}</h2>
        </v-btn>
        <nuxt-link prefetch
                   :to=" '/?page='+ (this.$route.query.page === undefined ? 1 + 1 : parseInt(this.$route.query.page)+ 1)">
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
      page: 0
    }),
    asyncData({ params }) {
      return axios.get(`https://api.ixil.cc/hina?op=30&page=${params.page === undefined ? 1 : params.page}`)
        .then((res) => {
          return { datar: res.data }
        })
    },
    mounted() {
      console.log(this.$route.query.page)
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
