<template>
  <div>
    <header class="album-header">
      <div class="album-header-background-slope"/>
      <img
        class="album-header-cover"
        :class="{ coverShow: coverShow }"
        :src="image2"
      >
      <div class="album-header-overlay" :class="{ coverShow: coverShow }"></div>

      <div class="album-header-meta">
        <div class="album-header-image box-reveal-model">
          <span class="box" :class="{ slideLeft: boxReveals }"></span>
          <img class="elevation-5" :class="{ show: boxReveals }" :src="image">
        </div>

        <div class="album-header-info">
          <h1>
            <div class="box-reveal-model">
              <span class="box" :class="{ slideRight: boxReveals}"></span>
              <span
                class="box-reveal-model-content"
                :class="{ show: boxReveals }"
              >{{info.name}}</span>
            </div>
          </h1>
          <h2>
            <div class="box-reveal-model">
              <span class="box" :class="{ slideRight: boxReveals}"></span>
              <span
                class="box-reveal-model-content"
                :class="{ show: boxReveals }"
              >{{info.source}}</span>
            </div>
          </h2>
        </div>
      </div>
    </header>

    <v-responsive>
      <v-container>
        <v-row>
          <div id="Duv" v-for="(da, n) in info.gliphs" :key="n" class="ma-6"
               v-ripple>
            <v-img :src="da" width="20rem" height="25rem" v-on:click="Overy(n)"/>
          </div>
        </v-row>
      </v-container>
    </v-responsive>

    <VGallery :images="info.gliphs" :index="idex"></VGallery>
  </div>
</template>

<script>
  import axios from 'axios'

  let image = ''
  let info = []
  export default {
    name: 'album',
    props: {
      info: {
        type: Array,
        default: []
      }
    },
    data: () => ({
      coverShow: false,
      boxReveals: false,
      //info: [],
      name: 'Dillion Harper',
      image,
      image2: 'https://c.xme.net/8c324155.jpg',
      overlay: false,
      idex: 1
    }),
    mounted() {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
      this.coverShow = true
      this.boxReveals = true
      axios.get('https://handled-guestbook-gdp-none.trycloudflare.com/hina/payload?name=' + encodeURI($nuxt.$route.query['name'])).then(response => (this.info = response.data)).catch(error => console.log(error))
      console.log(encodeURI($nuxt.$route.query['name']))
      setInterval(() => {
        this.change(true)
      }, 8000)

      // Force Load Data
      var refreshId = setInterval(() => {
        this.change(true)
        clearInterval(refreshId)
      }, 5)
    },
    methods: {
      Overy(e) {
        this.overlay = !this.overlay
        this.idex = e
      },
      change(er) {
        let g = Math.floor(Math.random() * this.info.gliphs.length)
        this.image2 = this.info.gliphs[g]
        if (er) this.image = this.info.thumb
      }
    }
  }
</script>

<style scoped lang="scss">
  $link-color: #4FC3F7;
  $primary-color: #2196F3;

  .album-header {
    background: rgb(150, 150, 150);
    height: 95vh;
    width: 100vw;
    overflow: hidden;
    position: relative;
    top: -4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .album-header-cover {
      height: 100%;
      width: 100%;
      object-fit: cover;
      z-index: 1;
      opacity: 1;

      transform: scale(1.4, 1.4);
      transition: transform 3s ease-in-out, image 3s ease-in-out;

      &.coverShow {
        transform: scale(1, 1);
      }
    }

    .album-header-overlay {
      position: absolute;
      height: 100%;
      width: 100%;
      background: rgb(0, 0, 0);
      opacity: 1;
      z-index: 2;
      transition: opacity 1s ease;

      &.coverShow {
        opacity: .7;
      }
    }

    .album-header-background-slope {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 100px;
      z-index: 3;
      background: rgb(0, 0, 0);
      background: linear-gradient(0deg, rgba(0, 0, 0, 1) 0%, rgba(5, 5, 10, 0.16039919385723034) 51%, rgba(0, 212, 255, 0) 100%);
    }

    .album-header-meta {
      height: 450px;
      width: 70vw;
      position: absolute;
      bottom: 0;

      z-index: 4;

      display: grid;
      grid-template-columns: 30% 70%;

      .album-header-image {
        height: 400px;
        width: 300px;
        width: 100%;

        display: flex;

        img {
          height: inherit;
          width: inherit;
          border-radius: 5px;
          opacity: 0;
          transition: opacity 0s ease 0.5s;

          &.show {
            opacity: 1;
          }
        }
      }

      .album-header-info {
        padding-left: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h1 {
          font-size: 4rem;
          line-height: 1;
          color: rgb(255, 255, 255);
        }

        h2 {
          font-size: 2rem;
          color: rgb(230, 230, 230);
        }

        h3 {
          font-size: 1.5rem;
          margin-top: 1em;
          font-weight: normal;
        }
      }
    }
  }


  $primary-color: #2196F3;


  .box-reveal-model {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;

    .box {
      position: absolute;
      height: 100%;
      width: 100%;
      background: $primary-color;
      z-index: 100;
      transform: translateX(105%);

      &.slideLeft {
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-name: boxReveal-slideLeft;
        animation-timing-function: ease;
      }

      &.slideRight {
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-name: boxReveal-slideRight;
        animation-timing-function: ease;
      }
    }

    .box-reveal-model-content {
      opacity: 0;
      transition: opacity 0s ease 0.5s;

      &.show {
        opacity: 1;
      }
    }
  }

  @keyframes boxReveal-slideLeft {
    0% {
      transform: translateX(105%);
    }
    40% {
      transform: translateX(0%);
    }
    60% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-105%);
    }
  }

  @keyframes boxReveal-slideRight {
    0% {
      transform: translateX(-105%);
    }
    40% {
      transform: translateX(0%);
    }
    60% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(105%);
    }
  }


</style>
