<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      temporary
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title"/>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
      <v-btn
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"/>
      <v-spacer/>

      <!--  User Account menu   -->
      <v-menu
        :close-on-content-click="true"
        :nudge-width="200"
        offset-y
        :close-on-click="true"
      >
        <template v-slot:activator="{ on }">
          <v-avatar
            dark
            v-on="on"
            size="35px"
          >
            <img v-if="$auth.loggedIn"
              :src="$auth.user.picture"
              alt="Kyro"
            >
            <v-icon v-if="!$auth.loggedIn">mdi-account-circle</v-icon>
          </v-avatar>
        </template>

        <v-card style="background: linear-gradient(180deg, rgba(8,6,6,0.66) 0%, rgba(0,0,0,0.5995448521205357) 100%);">
          <v-list style="background: linear-gradient(180deg, rgba(8,6,6,1) 0%, rgba(0,0,0,0.7130602582830007) 100%);">
            <v-list-item>
              <v-list-item-avatar>
                <img v-if="$auth.loggedIn"
                     :src="$auth.user.picture"
                     alt="Kyro"
                >
                <v-icon v-if="!$auth.loggedIn">mdi-account-circle</v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>{{ $auth.loggedIn ? $auth.user.name : 'Anon' }}</v-list-item-title>
                <v-list-item-subtitle v-if="$auth.loggedIn && !$auth.user.email_verified">Unverified ✗</v-list-item-subtitle>
                <v-list-item-subtitle v-if="$auth.loggedIn && $auth.user.email_verified">Verified ✓</v-list-item-subtitle>
              </v-list-item-content>

              <v-list-item-action>
                <v-btn
                  icon
                  @click.stop="rightDrawer = !rightDrawer"
                >
                  <v-icon>mdi-history</v-icon>
                </v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>

          <v-divider/>

          <v-list
            style="background: linear-gradient(180deg, rgba(8,6,6,0.81) 0%, rgba(0,0,0,0.6946008745294993) 100%);">
            <v-list-item>
              <v-btn  text style="width: 115%; right: 7%">
                PROFILE
              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn text  style="width: 115%; right: 7%">
                FAVOURITES
              </v-btn>
            </v-list-item>
          </v-list>

          <v-card-actions>
            <v-spacer/>

            <v-btn text  ripple @click="$auth.login(/* .... */).then(() => this.$toast.success('Logged In!'))">
              Login
            </v-btn>
            <v-btn v-if="$auth.loggedIn" text  ripple @click="$auth.logout()">
              Logout
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
      <!--  END User Menu  -->


    </v-app-bar>
    <v-main>
      <nuxt/>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
      :width="ESize()"
      style="z-index: 12;"
    >
      <div
        class="pl-4 pt-2 pb-3 transition-swing text-lg-h1-100rem font-weight-black  text-sm-h4 text-md-h3"
        v-text="'Recently Viewed'"
        style="overflow-y: hidden; overflow-x: hidden;"
      >
      </div>
      <v-col
        v-for="(item, i) in this.RecentViews"
        :key="i"
        cols="12"
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        <div
          class="pl-3"
          style="height: 10rem; background-size: 50% 100%; border-radius: 5px;"
          :style="`background: linear-gradient(286deg, ${hexToRgb(item.color[1], 0.4553571770505077)} 3%, ${hexToRgb(item.color[1], 0.010343171448266806)} 19%, ${hexToRgb(item.color[0], 0.819502835313813)} 52%, ${hexToRgb(item.color[0], 1)} 64%,  ${hexToRgb(item.color[0], 0.9699230033810399)} 80%, ${hexToRgb(item.color[0], 1)} 99%), url(${item.thumb}) right no-repeat`">

          <v-col no-gutters>
            <div
              class="flex-nowrap"
              style="text-shadow: 2px 2px 8px #4b4a4b;  font-size: large; height: 28px;  width: 325px; overflow: hidden;  position: relative;  display: inline-block; text-overflow: ellipsis; white-space: nowrap;"
              v-text="item.name"
              align="start"
            ></div>

            <p style="padding-top: 0.5rem; font-weight: lighter;" v-text="item.idol"></p>
            <p align="start" style="padding-top: 1.4rem; font-weight: lighter;"
               v-text="item.source.replace('www.','')"></p>
          </v-col>

        </div>
      </v-col>
      <v-col
        v-for="(item, i) in this.RecentViews"
        :key="i"
        cols="12"
        v-if="$vuetify.breakpoint.smAndDown"
      >
        <v-card
          :color="item.color[2]"
          dark
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="item.thumb"
          >
          </v-img>
          <v-card-subtitle class="pb-0">{{item.idol}}</v-card-subtitle>

          <v-card-text class="text--primary">
            {{item.name}}
          </v-card-text>
        </v-card>
      </v-col>
    </v-navigation-drawer>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span><a href="https://github.com/ixilia">ixilia</a> | Bloom &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>

  import { mapGetters, mapState } from 'vuex'

  export default {
    data() {
      return {
        clipped: false,
        drawer: false,
        fixed: false,
        fixers: [],
        userImage: 'https://i.imgur.com/43Etwuz.jpg',
        rules: {
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
        },
        items: [
          {
            icon: 'mdi-apps',
            title: 'Bloom',
            to: '/'
          },
          {
            icon: 'mdi-spa',
            title: 'HINA',
            to: '/hina'
          }
          ,
          {
            icon: 'mdi-leaf',
            title: 'MISHA',
            to: '/misha'
          }
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Bloom -  B.A-0.3'
      }
    },

    computed: {
      ...mapGetters({
        RecentViews: 'history/GET_HISTORY_DATA',
      }),


      progress() {
        return Math.min(100, this.pwvalue1.length * 10)
      },
      color() {
        return ['error', 'warning', 'success'][Math.floor(this.progress / 40)]
      },
    },

    created() {

    },

    beforeMount() {
      this.$store.dispatch("history/LOAD_HISTORY")
    },

    watch: {},

    mounted() {
    },

    beforeDestroy() {
    },

    methods: {
      hexToRgb(hex, opacity) {
        return 'rgba(' + (hex = hex.replace('#', '')).match(new RegExp('(.{' + hex.length / 3 + '})', 'g')).map(function(l) {
          return parseInt(hex.length % 2 ? l + l : l, 16)
        }).concat(opacity || 1).join(',') + ')';
      },

      /**
       * @return {string}
       */
      ESize() {
        if (this.$vuetify.breakpoint.smAndDown) return '20rem';
        else return '48rem';
      },

      RegDialog() {
        this.dialog = !this.dialog
        this.dialog2 = !this.dialog2
      },

    }
  }
</script>
