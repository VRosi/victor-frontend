<template lang="html">
  <div id="nav">

    <div>
    </div>

    <div class="links">
      <nuxt-link to='/'>{{$t('links.home')}}</nuxt-link> |
      <nuxt-link to='/_lang/indexing'>{{$t('links.indexing')}}</nuxt-link>
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

#nav {
  display: flex;
  /* flex-direction: row; */
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 3px grey
  }

  .links{
    text-align: center;
    margin: auto;

  }

</style>
