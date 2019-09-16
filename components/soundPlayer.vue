<template lang="html">
  <div class="note">
    <div class="soundPlayer" v-if="!this.disabling">
      <figure>
          <audio id='audioSample' :src="url" controls type="audio/wav"></audio>
      </figure>
    </div>
    <div v-if="!this.disabling">
      {{$t('words.not')}} {{word}}
      <input :disabled="this.disabling" class="slider"
             type="range"
             min="0"
             max="100"
             v-model="value"
             @input="change"
             > {{word}}
      <!-- <p>{{value}}</p> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    word: {
      type: String,
      default: ''
    },
    sound: {
      type: Object
    },
    disabling: {
      type: Boolean
    }
  },
  data() {
    return {
      value: '50',
    }
  },
  computed: {
    url() {
      console.log('url', this.sound, this.sound.url);
      return this.sound.url
    }
  },
  methods: {
    change(newValue) {
      //console.log(newValue.target.value)
      this.$emit("input", newValue.target.value)
    }
  }
}
</script>

<style lang="css" scoped>
.note{
  padding: 10px;
  border-radius: 4px;
  background-color: #FFFFFF ;
  box-shadow: 0px 0px 8px lightgrey;
  margin-right: 20px;
  margin-bottom: 20px;
  float: left;
}

.soundPlayer {
  float: left
}

.slider {
    -webkit-appearance: none;  /* Override default CSS styles */
    appearance: none;
    height: 15px; /* Specified height */
    width: 200px;
    background: #F5F0EB; /* Grey background */
    outline: none; /* Remove outline */
    opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
    -webkit-transition: .2s; /* 0.2 seconds transition on hover */
    transition: opacity .2s;
}

/* Mouse-over effects */
.slider:hover {
    opacity: 1; /* Fully shown on mouse-over */
}

.slider:disabled {
    background-color: #efefef; /* Fully shown on mouse-over */
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 15px; /* Set a specific slider handle width */
    height: 15px; /* Slider handle height */
    background: blue; /* Green background */
    cursor: pointer; /* Cursor on hover */
}

.slider::-moz-range-thumb {
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: #4CAF50; /* Green background */
    cursor: pointer; /* Cursor on hover */
}

</style>
