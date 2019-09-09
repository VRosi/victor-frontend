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
  fetch ({ store, redirect }) {
    // console.log(this.$store.state.locale)
    if (!store.state.authUser) {
      // this.$Message.error('Identifiant ou mot de passe incorrect')
      // return redirect('/' + this.$store.state.locale)
    }
  }
}
</script>
