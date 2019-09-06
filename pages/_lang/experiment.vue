<template lang="html">
  <frame :word="word"/>
</template>

<script>
import frame from "@/components/exFrame.vue"

export default {
  components: {
    frame
  },
  computed: {
    word() {
      // console.log(this.$route.query.word);
      return this.$route.query.word
    }
  }
}
</script>

<style lang="css" scoped>

</style>
