<template lang="html">
  <div>
    <h1>{{word}}</h1>
    <!-- <ul>
    <li v-for="(sound, index) in soundList" :key="index">
      <sound :word="word" :sound="sound" :indexRef="index" :indexSound ="indexSound" key=sound.id @input="updateIndex" />,
    </li>
    </ul> -->
    <sound v-for="(sound, index) in usedBatch" :key="index" :word="word" :sound="sound" :indexRef="index" :indexSound ="indexSound" key=sound.id @input="updateIndex" />
  </div>

</template>

<script>
import sound from '@/components/soundIndexing.vue'
import axios from 'axios'

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
      batches: [],
      usedBatch: [],

    }
  },
  created(){
    this.fetchData()
  },
  methods: {
    test(index) {
      return index
    },
    updateIndex(val) {
      this.indexSound += val;
      // console.log(this.indexSound)
    },
    fetchData () {
      axios.get('/sound_batches.json')
      .then(response => {
        this.batches = response.data
        console.log("list_01",this.batches)
        for (var i = 0; i < this.soundList.length; i++) {
          if (this.batches.list_01.indexOf(this.soundList[i].name) > -1){
            this.usedBatch.push(this.soundList[i])
          }
        }
        console.log("usedBatch",this.usedBatch)
      })
      .catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style lang="css" scoped>
  h1 {
    text-transform: uppercase;
  }
</style>
