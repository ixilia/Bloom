<template>
  <nuxt-link prefetch :to="'/'+url">
    <v-img id="Cardlso-Image" :src="image" height="20rem" width="16rem"/>
  </nuxt-link>
</template>

<script>
  let data = []
  export default {
    name: 'cards',
    props: {
      image: {
        type: String,
        default: '1'
      },
      url: {
        type: String,
        default: '1'
      }
    },
    data: () => ({}),
    beforeMount() {


    },
    mounted() {
    },
    methods: {}
  }
</script>

<style scoped lang="less">
  #Cardlso-Image {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }
</style>
