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
          <v-img class="elevation-5" :class="{ show: boxReveals }" :src="info.thumb"
                 lazy-src="https://cdn.discordapp.com/attachments/511430724553801729/717380658942705724/FB_IMG_15910454082683811.jpg"/>
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
              >{{info.idol}}</span>
            </div>
          </h2>
        </div>
      </div>
    </header>

    <div id="body">
      <v-responsive>
        <v-container>
          <v-row>
            <div id="Duv" v-for="(da, n) in info.gliphs" :key="n" class="ma-6"
                 v-ripple>
              <v-img class="ctorlmp" :lazy-src="enload" :src="da" width="20rem" height="25rem" v-on:click="Overy(n)"/>
            </div>
          </v-row>
        </v-container>
      </v-responsive>
    </div>

    <VGallery :images="info.gliphs" :index="idex"></VGallery>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'album',
    props: {},

    data: () => ({
      coverShow: false,
      boxReveals: false,
      //info: [],
      name: 'Dillion Harper',
      image2: 'https://c.xme.net/8c324155.jpg',
      enload: 'https://cdn.discordapp.com/attachments/488810702190936075/720249804281610260/len.jpg',
      overlay: false,
      idex: 1
    }),
    asyncData({ params }) {
      return axios.get(`https://api.ixil.cc/bloom/hina/payload?id=${params.id}`)
        .then((res) => {
          return { info: res.data }
        })
    },
    head() {
      return {
        title: this.info.name,

        meta: [
          { property: 'title', content: this.info.name },
          { name: 'description', content: this.info.edata },

          // facebook
          { property: 'og:title', content: this.info.name },
          {
            property: 'og:image',
            content: this.info.thumb
          },
          // google
          { itemprop: 'image', content: this.info.thumb },
          { itemprop: 'name', content: this.info.name },
          // twitter
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:title', content: this.info.name },
          { name: 'twitter:image', content: this.info.thumb }

        ]
      }
    },
    mounted() {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'
      this.coverShow = true
      this.boxReveals = true
      setInterval(() => {
        this.change(true)
      }, 8000)
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

  #body {
    margin-top: 40rem;
    padding-top: 0;
    position: center;
  }

  .ctorlmp {
    box-shadow: -1px 3px 12px 2px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: -1px 3px 12px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 3px 12px 2px rgba(0, 0, 0, 0.75);
    transition: all 200ms ease 200ms;
    -webkit-transition: all 200ms ease 200ms;
  }

  .ctorlmp:hover {
    box-shadow: -1px 8px 19px 2px rgba(0, 0, 0, 0.87);
    -webkit-box-shadow: -1px 8px 19px 2px rgba(0, 0, 0, 0.87);
    -moz-box-shadow: -1px 8px 19px 2px rgba(0, 0, 0, 0.87);
    transform: translateY(-0.5px);
  }

  .album-header {
    background: rgb(150, 150, 150);
    height: 95vh;
    width: 100vw;
    overflow: hidden;
    position: absolute;
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
      background: linear-gradient(0deg, rgba(18, 18, 18, 1) 0%, rgba(18, 18, 18, 0.16039919385723034) 51%, rgba(18, 18, 18, 0) 100%);
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
