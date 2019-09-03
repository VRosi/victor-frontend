<template>
  <div class="home">
  <!-- <img alt="Vue logo" src="../assets/logo-ircam.png" /> -->
  <Presentation msg="CARACTERISATION SEMANTIQUE DU TIMBRE SONORE" />
</div>
</template>

<script>
// @ is an alias to /src
import Presentation from '@/components/Presentation.vue'

export default {
  name: 'home',
  components: {
    Presentation
  }
}

</script>
