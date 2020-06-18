<template>
  <div class="Container">
    <carousel/>
    <ListCards :datas="datar"/>
  </div>
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
    asyncData({ params }) {
      return axios.get('https://api.ixil.cc/hina?op=50')
        .then((res) => {
          return { datar: res.data }
        })
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
