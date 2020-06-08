<template>
  <v-card class="mx-auto cardn">
    <v-img class="white--text align-end" :width="width+'px'" :height="height+'px'" :src="cardImage"/>
  </v-card>
</template>

<script>
  export default {
    name: 'CardIto',
    props: {
      cardImage: {
        type: String,
        default: 'http://mikudb.moe/wp-content/uploads/2020/03/infinity.jpg'
      },
      width: {
        type: Number,
        default: 500
      },
      height: {
        type: Number,
        default: 500
      }
    },
    data: () => ({})
  }

</script>

<style>
  .cardn {
    align-content: center;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08) !important;
  }
</style>
