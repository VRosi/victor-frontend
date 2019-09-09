<template lang="html">
  <frame :word="word" :soundList="soundList"/>
</template>

<script>
import axios from 'axios'
import frame from "@/components/exFrame.vue"

export default {
  async asyncData () {
      const result = await axios.get('http://localhost:8000/sounds', {
        headers: {
          'Content-Type':'application/json',
          Accept: 'application/json'
        }
      });
      var soundList = result.data
      console.log('soundList',soundList);
      return {
        soundList
      }
  },
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
