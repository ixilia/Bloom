<template>
  <client-only placeholder="...">
    <div id="SRotate">
      <div
        id="sbody"
        :style="{ backgroundImage: `url(${bgImage})` }"
      />
      <div
        id="containerd"
        style="background: rgb(8,6,6); background: linear-gradient(180deg, rgba(8,6,6,0.8970938717283788) 0%, rgba(8,6,6,0.5525560566023284) 31%, rgba(8,6,6,0.4433123591233369) 100%);"
      >
        <img class="imaged-active" :src="bgImage" width="74%" height="80%" alt=""/>
      </div>
    </div>
  </client-only>
</template>

<script>
  import Cardlto from './Cardlto'
  import axios from 'axios'
  import { Flipper, Flipped } from 'vue-flip-toolkit'

  let info = []
  let sizew = 600
  let sizeh = 600
  let spacing = 2000
  let width = 1920
  export default {
    components: {
      Cardlto,
      Flipped,
      Flipper
    },
    props: {},
    data: () => ({
      slides: [],
      sizew,
      info,
      sizeh,
      spacing,
      width,
      bgImage: 'https://c.xme.net/0c442221.jpg'
    }),
    beforeCreate() {
      axios.get('https://carus.serveo.net/hina/carousel').then(response => (this.info = response.data)).catch(error => console.log(error))
    },
    beforeMount() {

    },
    mounted() {
      window.addEventListener('resize', this.onResize)
      this.width = innerWidth
      this.spacing = innerWidth - 530
      this.sizew = (35.0 / 100) * window.innerWidth
      this.sizeh = (70.0 / 100) * window.innerHeight
      this.$nextTick(function() {
        window.setInterval(() => {
          this.Eron()
        }, 8000)
      })
    },
    computed: {},
    beforeDestroy() {
      window.removeEventListener('resize', this.onResize)
    },
    methods: {
      Eron() { // After changing the main carousel
        let g = Math.floor(Math.random() * 19)
        this.bgImage = this.info[g].burt
      },
      onResize(event) {
        this.width = event.target.innerWidth
        this.spacing = event.target.innerWidth - 530
        this.sizew = (35.0 / 100) * window.innerWidth
        this.sizeh = (70.0 / 100) * window.innerHeight
      }
    }
  }
</script>

<style scoped>

  .imaged-active {
    margin-top: 3rem;
    box-shadow: 0 9px 12px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08) !important;
    border: black 34px;
    margin-left: 5rem;
    position: absolute;
    animation-name: slide-in;
    animation-duration: 2s;
  }

  #SRotate {
    z-index: 0;
    width: 42.8vw;
    transition: all ease 3s;
  }

  #containerd {
    position: relative;
    display: block;
    height: 42.8vw;
    top: -2%;
    left: 0;
    right: 0;
    z-index: 9999;
  }

  #sbody {
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1;
    display: block;
    height: 40vw;
    background-size: cover;
    transition: background 550ms linear 500ms, filter 1s linear 600ms, width 500ms linear 0s, height 500ms linear 0s,
    top 500ms linear 0s, background-position 500ms linear 0s !important;
  }

  @keyframes slide-in {
    0% {
      transform: TranslateX(-40rem);
    }
    20% {
      transform: TranslateX(-10rem);
    }
    100% {
      transform: TranslateX(0);
    }
  }
</style>
