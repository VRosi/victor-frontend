<template>
  <div class="home">

    <IndexingMenu/>

  </div>
</template>

<script>
// @ is an alias to /src
import IndexingMenu from '@/components/Words.vue'

export default {
  name: 'home',
  components: {
    IndexingMenu,
  },
  created: function() {
        // console.log(this.$store.state.authUser.name)
  },
  // fetch ({ store, redirect }) {
  //   // console.log(this.$store.state.locale)
  //   if (!store.state.authUser) {
  //     this.$Message.error({content:'Identifiant ou mot de passe incorrect'})
  //     return redirect('/' + this.$store.state.locale + '/')
  //   }
  // }
}
</script>
