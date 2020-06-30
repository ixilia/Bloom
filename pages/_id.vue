<template>
  <v-col>
    <ListCards :datau="datar"/>
    <div class="text-center">
      <v-col>
        <nuxt-link :prefetch="true"
                   :to=" query !== '' ? '/'+ (parseInt(page)- 1) + '?q='+ query : '/'+ (parseInt(page)+ 1) "
                   style="text-decoration: none">
          <v-btn>
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </nuxt-link>
        <v-dialog
          v-model="dialog"
          width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="red lighten-2"
              dark
              v-bind="attrs"
              v-on="on"
            >
              <h2>{{page}}</h2>
            </v-btn>
          </template>

          <v-card color="">
            <v-card-title
              class="headline grey lighten-2"
              primary-title
              style="color: black"
            >
              Select Page
            </v-card-title>

            <v-row style="width: 60%; padding-left: 40%">
              <v-text-field style="width: 50%" :rules="rules" v-model="text"></v-text-field>
            </v-row>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <nuxt-link :prefetch="true"
                         :to=" query !== '' ? '/'+ (parseInt(text)) + '?q='+ query : '/'+ (parseInt(text)) "
                         style="text-decoration: none">
                <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
                >
                  Let's go!
                </v-btn>
              </nuxt-link>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <nuxt-link :prefetch="true"
                   :to=" query !== '' ? '/'+ (parseInt(page)+ 1) + '?q='+ query : '/'+ (parseInt(page)+ 1)   "
                   style="text-decoration: none">
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
      text: '',
      rules: [
        value => !!value || 'Required.',
        value => {
          const pattern = /^[0-9]*$/
          return pattern.test(value) || 'Invalid page number.'
        }
      ]
    }),
    asyncData({ params, query }) {
      if (query.q === undefined) {
        return axios.get(`https://api.ixil.cc/hina?op=50&page=${params.id === undefined ? 1 : params.id}`)
          .then((res) => {
            return { datar: res.data, page: params.id, query: '' }
          })
      } else {
        return axios.get(`https://api.ixil.cc/hina/search?op=50&page=${params.id === undefined ? 1 : params.id}&query=${encodeURI(query.q)}`)
          .then((res) => {
            return { datar: res.data, page: params.id, query: encodeURI(query.q) }
          })
      }
    },
    mounted() {
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
