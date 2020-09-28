<template>
  <div style="overflow: hidden;">
    <section>
      <v-col justify="space-between">
        <h1 v-if="$vuetify.breakpoint.smAndUp" class="pb-3" style="font-size: 4rem; text-align: center;  background: linear-gradient(#eee, #333);  -webkit-background-clip: text;  -webkit-text-fill-color: transparent;">From Sources</h1>
        <h1 v-if="$vuetify.breakpoint.xsOnly" class="pb-3" style="font-size: 2.5rem; text-align: center;  background: linear-gradient(#eee, #333);  -webkit-background-clip: text;  -webkit-text-fill-color: transparent;">From Sources</h1>
        <!-- Small Screen and Above -->
        <v-row v-if="$vuetify.breakpoint.smAndUp" style="height: 37rem; overflow: hidden;" justify="space-between">
          <div v-for="(item, i) in items"
               :key="i">
            <home-promote style="padding-bottom: 5rem" :data="item"/>
          </div>
        </v-row>
        <!-- END Small Screen and Above -->


        <!-- extra Small Screen -->
        <v-row v-if="$vuetify.breakpoint.xsOnly" style="height: 28rem; overflow: hidden;" justify="space-between">
          <div v-for="(item, i) in items"
               :key="i">
            <home-promote style="padding-bottom: 3rem" :data="item"/>
          </div>
        </v-row>
        <!-- END  extra Small Screen -->

      </v-col>
    </section>
  </div>
</template>

<script>
  import HomePromote from '../Carousel/HomePromote'
  import VueHorizontalList from 'vue-horizontal-list';

  export default {
    name: "HomePromotionList",
    components: { HomePromote },
    data() {
      return {
        options: {
          responsive: [
            { end: 546, size: 2 },
            { start: 530, end: 673, size: 2 },
            { start: 673, end: 817, size: 2 },
            { start: 817, end: 823, size: 2 },
            { start: 823, end: 1452, size: 2 },
            { start: 1452, end: 2352, size: 3 },
            { start: 1452, end: 2452, size: 4 },
            { start: 2452, size: 5 }
          ],
          list: {
            // 1200 because @media (min-width: 1200px) and therefore I want to switch to windowed mode
            windowed: 1200,

            // Because: #app {padding: 80px 24px;}
            padding: 0
          },
          item: {
            // css class to inject into each individual item
            class: 'ccardl',
            // padding between each item
            padding: 23
          },
          navigation: {
            // when to show navigation
            start: 1025,
            color: '#000'
          }
        },

        items: [{
          "name": "曉美媽",
          "idol": "Unknown",
          "thumb": "https://www.mymypic.net/data/attachment/forum/threadcover/9f/8c/ae7cc7a2.jpg",
          "source": "www.jkforum.net",
          "images": ["https://i.imgur.com/43Etwuz.jpg", "https://i.imgur.com/BztWida.jpeg", "https://www.mymypic.net/data/attachment/forum/threadcover/9f/8c/ae7cc7a2.jpg"]
        },
          {
            "id": "vMwxOLp7",
            "name": "惡墮★",
            "idol": "Unknown",
            "thumb": "https://www.mymypic.net/data/attachment/forum/202006/25/080104ssjjyjzjyswkwxej.jpg",
            "source": "www.jkforum.net",
            "images": ["https://i.imgur.com/43Etwuz.jpg", "https://i.imgur.com/BztWida.jpeg", "https://www.mymypic.net/data/attachment/forum/threadcover/9f/8c/ae7cc7a2.jpg"]
          },
          {
            "id": "vMwxOLp7",
            "name": "快感之牢",
            "idol": "Unknown",
            "thumb": "https://i.imgur.com/BztWida.jpeg",
            "source": "www.jkforum.net",
            "images": ["https://i.imgur.com/43Etwuz.jpg", "https://i.imgur.com/BztWida.jpeg", "https://www.mymypic.net/data/attachment/forum/threadcover/9f/8c/ae7cc7a2.jpg"]
          },
          {
            "id": "vMwxOLp7",
            "name": "曉美媽",
            "idol": "Unknown",
            "thumb": "https://i.imgur.com/43Etwuz.jpg",
            "source": "www.jkforum.net",
            "images": ["https://i.imgur.com/43Etwuz.jpg", "https://i.imgur.com/BztWida.jpeg", "https://www.mymypic.net/data/attachment/forum/threadcover/9f/8c/ae7cc7a2.jpg"]
          },
          {
            "id": "vMwxOLp7",
            "name": "惡墮",
            "idol": "Unknown",
            "thumb": "https://i.imgur.com/BztWida.jpeg",
            "source": "www.jkforum.net",
            "images": ["https://i.imgur.com/43Etwuz.jpg", "https://i.imgur.com/BztWida.jpeg", "https://www.mymypic.net/data/attachment/forum/threadcover/9f/8c/ae7cc7a2.jpg"]
          },
          {
            "id": "vMwxOLp7",
            "name": "惡墮",
            "idol": "Unknown",
            "thumb": "https://i.imgur.com/BztWida.jpeg",
            "source": "www.jkforum.net",
            "images": ["https://i.imgur.com/43Etwuz.jpg", "https://i.imgur.com/BztWida.jpeg", "https://www.mymypic.net/data/attachment/forum/threadcover/9f/8c/ae7cc7a2.jpg"]
          }],
      }
    }
  }
</script>

<style scoped>

</style>
