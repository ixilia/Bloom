<template>
  <v-col justify="space-between">
    <color-card-list :data="items" name="New Albums" class=""/>
    <color-card-list :data="items" name="www.jkforum.net" class=""/>

    <v-parallax class="pa-0 mr-0"
                src="https://cdn.discordapp.com/attachments/511430724553801729/758422767183462401/unknown.png"
                style="width: 100%">
      <color-card-list :data="itemsd" :parax="true" name="www.jkforum.net" class=""/>
    </v-parallax>
    <color-card-list :data="items" name="www.jkforum.net" class=""/>
  </v-col>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import VuetifyLogo from '~/components/VuetifyLogo.vue'
  import axios from '../.nuxt/axios'
  import ColorCard from '../layouts/Cards/ColorCard'
  import ColorCardList from '../layouts/Lists/ColorCardList'

  export default {
    components: {
      ColorCardList,
      ColorCard,
      Logo,
      VuetifyLogo
    },
    data() {
      return {
        items: [{
          "id": "vMwxOLp7",
          "name": "曉美媽 – 惡墮★快感之牢 [33P]",
          "idol": "Unknown",
          "thumb": "https://www.mymypic.net/data/attachment/forum/threadcover/9f/8c/ae7cc7a2.jpg",
          "source": "www.jkforum.net",
          "color": ["#fc1c64", "#f87a75", "#760624", "#974c4c", "#bc796e", "#5c3c34"]
        },
          {
            "id": "vMwxOLp7",
            "name": "曉美媽 – 惡墮★快感之牢 [33P]",
            "idol": "Unknown",
            "thumb": "https://i.imgur.com/43Etwuz.jpg",
            "source": "www.jkforum.net",
            "color": ["#b3c425", "#efb598", "#426608", "#ac835b", "#d0aa9c", "#6d5e56"]
          },
          {
            "id": "vMwxOLp7",
            "name": "曉美媽 – 惡墮★快感之牢 [33P]",
            "idol": "Unknown",
            "thumb": "https://i.imgur.com/BztWida.jpeg",
            "source": "www.jkforum.net",
            "color": ["#33a0be", "#dcab92", "#3f8c9a", "#a17b69", "#d8bea9", "#343332"]
          },
          {
            "id": "vMwxOLp7",
            "name": "曉美媽 – 惡墮★快感之牢 [33P]",
            "idol": "Unknown",
            "thumb": "https://www.mymypic.net/data/attachment/forum/threadcover/9f/8c/ae7cc7a2.jpg",
            "source": "www.jkforum.net",
            "color": ["#fc1c64", "#f87a75", "#760624", "#974c4c", "#bc796e", "#5c3c34"]
          }],

        itemsd: [
          {
            "id": "vMwxOLp7",
            "name": "曉美媽 – 惡墮★快感之牢 [33P]",
            "idol": "Unknown",
            "thumb": "https://www.mymypic.net/data/attachment/forum/202006/25/0800557uazw6vwx6w4t7ug.jpg",
            "source": "www.jkforum.net",
            "color": ["#fc1c64", "#f87a75", "#760624", "#974c4c", "#bc796e", "#5c3c34"]
          },
          {
            "id": "vMwxOLp7",
            "name": "曉美媽 – 惡墮★快感之牢 [33P]",
            "idol": "Unknown",
            "thumb": "https://www.mymypic.net/data/attachment/forum/202006/25/080108aqjqc44t58u11zck.jpg",
            "source": "www.jkforum.net",
            "color": ["#fc1c64", "#f87a75", "#760624", "#974c4c", "#bc796e", "#5c3c34"]
          },
          {
            "id": "vMwxOLp7",
            "name": "曉美媽 – 惡墮★快感之牢 [33P]",
            "idol": "Unknown",
            "thumb": "https://www.mymypic.net/data/attachment/forum/202006/25/080104ssjjyjzjyswkwxej.jpg",
            "source": "www.jkforum.net",
            "color": ["#fc1c64", "#f87a75", "#760624", "#974c4c", "#bc796e", "#5c3c34"]
          },
          {
            "id": "vMwxOLp7",
            "name": "曉美媽 – 惡墮★快感之牢 [33P]",
            "idol": "Unknown",
            "thumb": "https://www.mymypic.net/data/attachment/forum/threadcover/9f/8c/ae7cc7a2.jpg",
            "source": "www.jkforum.net",
            "color": ["#fc1c64", "#f87a75", "#760624", "#974c4c", "#bc796e", "#5c3c34"]
          },
          {
            "id": "vMwxOLp7",
            "name": "曉美媽 – 惡墮★快感之牢 [33P]",
            "idol": "Unknown",
            "thumb": "https://www.mymypic.net/data/attachment/forum/threadcover/9f/8c/ae7cc7a2.jpg",
            "source": "www.jkforum.net",
            "color": ["#fc1c64", "#f87a75", "#760624", "#974c4c", "#bc796e", "#5c3c34"]
          },
          {
            "id": "vMwxOLp7",
            "name": "曉美媽 – 惡墮★快感之牢 [33P]",
            "idol": "Unknown",
            "thumb": "https://www.mymypic.net/data/attachment/forum/threadcover/9f/8c/ae7cc7a2.jpg",
            "source": "www.jkforum.net",
            "color": ["#fc1c64", "#f87a75", "#760624", "#974c4c", "#bc796e", "#5c3c34"]
          },
          {
            "id": "vMwxOLp7",
            "name": "曉美媽 – 惡墮★快感之牢 [33P]",
            "idol": "Unknown",
            "thumb": "https://www.mymypic.net/data/attachment/forum/threadcover/9f/8c/ae7cc7a2.jpg",
            "source": "www.jkforum.net",
            "color": ["#fc1c64", "#f87a75", "#760624", "#974c4c", "#bc796e", "#5c3c34"]
          },
          {
            "id": "vMwxOLp7",
            "name": "曉美媽 – 惡墮★快感之牢 [33P]",
            "idol": "Unknown",
            "thumb": "https://www.mymypic.net/data/attachment/forum/threadcover/9f/8c/ae7cc7a2.jpg",
            "source": "www.jkforum.net",
            "color": ["#fc1c64", "#f87a75", "#760624", "#974c4c", "#bc796e", "#5c3c34"]
          },
          {
            "id": "vMwxOLp7",
            "name": "曉美媽 – 惡墮★快感之牢 [33P]",
            "idol": "Unknown",
            "thumb": "https://www.mymypic.net/data/attachment/forum/threadcover/9f/8c/ae7cc7a2.jpg",
            "source": "www.jkforum.net",
            "color": ["#fc1c64", "#f87a75", "#760624", "#974c4c", "#bc796e", "#5c3c34"]
          }
        ]
      }
    },
    mounted() {
      //this.GetAndSA()
    },
    methods: {
      GetAndSA() {
        this.$axios.get('https://api.ixil.cc/bloom/hina?op=50&page=1&source=www.jkforum.net').then(function(response) {
          // handle success
          const parsed = JSON.stringify(response.data.data);
          localStorage.setItem('recent', parsed);
          response.data.data.forEach(function(currentValue, index, arr) {
            console.log(currentValue)

          })
        })
      }
    }
  }
</script>
