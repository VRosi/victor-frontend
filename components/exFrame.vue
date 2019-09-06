<template lang="html">
  <div>
    <h1>{{word}}</h1>
    <sound :word="word"/>

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
  },
  methods: {
    testaxios() {
      console.log('test');
      try {
        axios.post('http://localhost:8000/signup', {
          user: this.person.name,
          sound: this.person.password,
          word: this.word,
          rating: this.rating
        }, {
          headers: {
            'Content-Type':'application/json',
            Accept: 'application/json'
          }
        }).then((res) => {
          console.log('res',res);
          this.$store.commit('SET_USER', res.data.user_id)
        }).catch((err) => {
          console.log('err',err);
        });
      } catch (e) {
        console.log('err',e);
      }
    },
  }
}
</script>

<style lang="css" scoped>
  h1 {
    text-transform: uppercase;
  }
</style>
