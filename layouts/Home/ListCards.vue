<template>
  <v-responsive style="background-color: black">
    <div style="width: 100vw;">
      <v-row justify="space-around">
        <div style="width: 30rem">
          <v-text-field
            prepend-icon="mdi-magnify"
            single-line
            dense
            clearable

            v-model="sdata"
            :loading="busy"
            v-on:keyup.enter="GetSr()"
            @click:clear="GetScrol()"
          ></v-text-field>
        </div>
      </v-row>
      <v-lazy>
        <v-container fluid>
          <v-row>
            <div id="Duv" v-for="(da, n) in datas" :key="n" class="ma-6"
                 v-ripple>
              <cards :image="da.thumb" :url="da.iid"/>
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
      onScroll({ target: { scrollTop, clientHeight, scrollHeight } }) {
        if (scrollTop + clientHeight >= scrollHeight) {
          console.log('ERRRRRR')
          this.GetScrol()
        }
      },
      GetTox() {
        this.scrold = 1
        this.GetScrol()
      },
      GetScrol() {
        this.busy = true
        if (this.sdata !== '') {
          axios.get('https://api.ixil.cc/hina/search?query=' + encodeURI(this.sdata) + '&op=50&page=' + this.scrold).then(response => (this.datae = response.data)).catch(error => console.log(error))
        } else {
          axios.get('https://api.ixil.cc/hina?op=50&page=' + this.scrold).then(response => (this.datae = response.data)).catch(error => console.log(error))
        }
        //this.datas = this.datas.concat(this.datae)
        Array.prototype.push.apply(this.datas, this.datae)
        this.busy = false
        this.scrold++
      },
      GetSr() {
        this.scrold = 1
        this.busy = true
        axios.get('https://api.ixil.cc/hina/search?op=50&query=' + encodeURI(this.sdata)).then(response => (this.datas = response.data)).catch(error => console.log(error))
        //this.datas = this.datas.concat(this.datae)
        //this.datas.length = 0;
        //Array.prototype.push.apply(this.datas, this.datae)
        this.datas = this.datae
        //console.log(this.datae.length +'  GOT')
        //console.log(this.datas.length + '  Merged')
        this.busy = false
      }
    }
  }
</script>

<style scoped>

</style>
