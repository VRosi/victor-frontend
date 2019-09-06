<template lang="html">

  <div class="formy">
    <div class="soundPlayerApp">
        <div v-if="display">
          <soundPlayer :word="word" @input="inputRating"/>
        </div>
        <div>
          <button :disabled="isDisabled" type="submit" @click="Validate()" name="submit">{{validate}}</button>
        </div>

    </div>
  </div>

</template>

<script>
import axios from 'axios'
import soundPlayer from '@/components/soundPlayer.vue'

export default {
  components: {
    soundPlayer
  },
  props: {
    word: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      rating: "",
      validate: "VALIDATE",
      display: true,
      isDisabled: false
    }
  },
  methods: {
    testaxios() {
      console.log('test');
      try {
        axios.post('http://localhost:8000/results', {
          user: this.$store.state.authUser._id,
          sound: "5d6fc592ddbdbbae04c2ccaa",
          word: this.word,
          rating: this.rating,
        }, {
          headers: {
            'Content-Type':'application/json',
            Accept: 'application/json'
          }
        }).then((res) => {
          console.log('res',res);
        }).catch((err) => {
          console.log('err',err);
        });
      } catch (e) {
        console.log('err',e);
      }
    },
    inputRating(val){
      this.rating=val
    },

    Validate() {
      if (this.rating === "") {this.rating = "50"}
      this.validate = "VALIDATED"
      this.display = false;
      this.isDisabled = true;
      this.testaxios();
      console.log(this.$store.state.authUser._id, "5d6fc592ddbdbbae04c2ccaa", this.word, this.rating )
    }

  },
}
</script>

----------------------------------------------------------------------------------------------------------------------------------
<style lang="css" scoped>

.formy{
  box-sizing: content-box;
  padding: 30px auto;
  margin: 100px 400px;
}

.soundPlayerApp {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}


button {
  background-color: darkgreen;
  border-radius: 10px;
  color: white;
  padding: 10px;
  outline: 0;
}

button:hover {
  transition: 400ms;
  background-color: lightgreen;
  border-radius: 4px;
  border-radius: 80px;
  color: darkgreen;
  padding: 10px
}

button:disabled {
  transition: 400ms;
  background-color: lightgrey;
  border-radius: 4px;
  border-radius: 80px;
  color: white;
  padding: 10px
}



</style>
