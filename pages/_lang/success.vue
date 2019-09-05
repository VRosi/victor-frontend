<template lang="html">
  <div class="">
    <h1>CONGRATS</h1>
    <router-link to="/">Back to the home page</router-link>
  </div>
</template>
<script>
// @ is an alias to /src


export default {
  fetch ({ store, redirect }) {
    if (!store.state.authUser) {
      return redirect('/')
    }
  }
}
</script>
