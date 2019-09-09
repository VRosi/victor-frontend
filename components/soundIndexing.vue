<template lang="html">

  <div class="formy">
    <div class="soundPlayerApp">
        <div v-if="display">
          <soundPlayer :word="word" @input="inputRating" :sound="sound" :disabling="this.isDisabled"/>
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
    sound: {
      type: Object
    },
    indexSound: {
      type: Number
    },
    indexRef: {
      type: Number
    },

  },
  data() {
    return {
      rating: "",
      validate: "VALIDATE",
      display: true,
      isDisabled: false,
      idSound: this.indexSound,
    }
  },
  created: function () {  // Onload check the index
    if (this.indexSound === this.indexRef) {
      this.isDisabled = false;}
    else {
      this.isDisabled = true;
    }
  },
  watch: {
    indexSound: function() { // watch the index at all times
        // console.log(this.indexRef)
        // console.log(this.indexRef)
        if (this.indexSound === this.indexRef) {
          this.isDisabled = false;}
        else {
          this.isDisabled = true;
        }
      }
  },
  methods: {
    testaxios() {
      // console.log('test');
      try {
        axios.post('http://localhost:8000/results', {
          user: this.$store.state.authUser._id,
          sound: this.sound._id,
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
      //console.log(this.$store.state.authUser._id, "5d6fc592ddbdbbae04c2ccaa", this.word, this.rating )
      this.idSound += 1;
      // console.log(this.indexRef)
      // console.log(this.indexSound);
      this.$emit("input", this.idSound)
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
  background-color: transparent;
  border-radius: 10px;
  border-color: darkgreen;
  color: darkgreen;
  padding: 10px;
  outline: 0;
  transition: 0.3ms;
}

button:hover {
  transition: 400ms;
  background-color: darkgreen;
  border-radius: 4px;
  border-radius: 80px;
  color: #F5F0EB;
  padding: 10px
}

button:disabled {
  font-style: italic;
  color: darkgreen;
  background-color: transparent;
  border-color: transparent;
  transition: 0.3ms;
}



</style>
