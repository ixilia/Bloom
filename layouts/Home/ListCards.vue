<template>
  <v-responsive style="background-color: black">
    <v-lazy>
      <v-container fluid>
        <v-row>
          <div id="Duv" v-for="(da, n) in datas" :key="n" class="ma-6"
               v-ripple>
            <cards :image="da.thumb" :url="da.name"/>
          </div>
        </v-row>
        <v-row align-content="center" style="width: 100vw; padding-bottom: 10rem;">
          <v-btn
            class="center"
            align-self="center"
            :loading="busy"
            :disabled="busy"
            color="secondary"
            @click="GetScrol()"
            style="margin-left: 43vw;"
          >
            Show me More!
          </v-btn>
        </v-row>
      </v-container>
    </v-lazy>
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
      }
    },
    data: () => ({
      image: 'https://cdn.discordapp.com/attachments/488810702190936075/698503798905110579/45.png',
      datas,
      scrold: 1,
      busy: false
    }),
    mounted() {
      axios.get('http://localhost:8080/hina?op=50').then(response => (this.datas = response.data)).catch(error => console.log(error))
      this.GetScrol()
    },
    methods: {
      onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
        if (scrollTop + clientHeight >= scrollHeight) {
          console.log('ERRRRRR')
          this.GetScrol()
        }
      },
      GetScrol() {
        this.scrold++
        this.busy = true
        axios.get('http://localhost:8080/hina?op=50&page=' + this.scrold).then(response => (this.datae = response.data)).catch(error => console.log(error))
        //this.datas = this.datas.concat(this.datae)
        Array.prototype.push.apply(this.datas, this.datae)
        this.busy = false

        console.log(this.datas.length)
      }
    }
  }
</script>

<style scoped>

</style>
