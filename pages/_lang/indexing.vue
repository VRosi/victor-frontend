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
    if (!store.state.authUser) {
      return redirect('/')
    }
  }
}
</script>
