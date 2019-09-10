<template lang="html">
  <div id="nav">


    <div class="links">
      <nuxt-link class="langItem" v-if="$i18n.locale === 'en'" to="/fr">Fr</nuxt-link>
      <nuxt-link class="langItem" v-if="$i18n.locale === 'fr'" to="/en">En</nuxt-link> |
      <nuxt-link :to="'/' + $i18n.locale + '/'">{{$t('links.home')}}</nuxt-link> |
      <nuxt-link id="signup" :to="'/' + $i18n.locale + '/signup'">{{$t('links.signup')}}</nuxt-link> |
      <nuxt-link :to="'/' + $i18n.locale + '/indexing'">{{$t('links.indexing')}}</nuxt-link>
      <!-- <nuxt-link to='/_lang/success'>test</nuxt-link> -->
    </div>

    <div><logIn @input="inputRight" /></div> <!--logIn / logOut / signUp -->

  </div>
</template>

<script>
import axios from 'axios'
import Cookie from 'js-cookie'
import logIn from '@/components/login.vue'


export default {
  components: {
    logIn
  },
  data() {
    return {
      dis: true,
      error:"",
      person: {
        name: "",
        password: ""
      }
    }
  },
  methods: {
    inputRight(val) {
    }
  },

}

</script>

<style lang="css" scoped>



</style>
