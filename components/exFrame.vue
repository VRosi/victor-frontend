<template lang="html">
  <div>
    <h1>{{word}}</h1>
    <!-- <ul>
    <li v-for="(sound, index) in soundList" :key="index">
      <sound :word="word" :sound="sound" :indexRef="index" :indexSound ="indexSound" key=sound.id @input="updateIndex" />,
    </li>
    </ul> -->
    <sound v-for="(sound, index) in soundList" :key="index" :word="word" :sound="sound" :indexRef="index" :indexSound ="indexSound" key=sound.id @input="updateIndex" />
  </div>

</template>

<script>
import sound from '@/components/soundIndexing.vue'

export default {
  components: {
    sound
  },
  props: {
    word: {
      type: String,
      default: ''
    },
    soundList: {
      type: Array
    }
  },
  data() {
    return {
      indexSound: 0,

    }
  },
  methods: {
    test(index) {
      return index
    },
    updateIndex(val) {
      this.indexSound += val;
      // console.log(this.indexSound)
    }
  }
}
</script>

<style lang="css" scoped>
  h1 {
    text-transform: uppercase;
  }
</style>
