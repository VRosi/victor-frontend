<template>
  <div >
    <h1 class="words">{{ randomTitle(word_list)}}</h1>
<p>{{$t('words.presentation1')}}
  <a :href="urlMax" target="_blank">
  {{$t('words.presentationLink')}}</a>
</p>

<h3>Avant de commencer, veuillez vous assurer que vous êtes dans un lieu calme avec un bon système son
   (de préférence un casque audio).  Profitez de l'extrait de son ci-dessous pour régler le volume.
</h3>
<div class="note">
      <audio :src="url" controls type="audio/wav"></audio>
</div>

<h3>Cliquez sur le terme à étudier : </h3>
<div class="posButton">
  <button @click="buttonWords(word_list[0])" type="button" >{{word_list[0]}}</button><br>
  <button @click="buttonWords(word_list[1])" type="button" name="Chaud">{{word_list[1]}}</button><br>
  <button @click="buttonWords(word_list[2])" type="button" name="Rond">{{word_list[2]}}</button><br>
  <button @click="buttonWords(word_list[3])" type="button" name="Rugueux">{{word_list[3]}}</button><br>
</div>
  </div>
</template>

<script>
export default {
  name: '',
  word: "",
  props: {
    msg: String,
  },
  data() {
    return {
      url: "/sound_test/Violin.wav",
      word_list:[this.$t('words.bright'), this.$t('words.warm'), this.$t('words.round'), this.$t('words.rough')],
      urlMax: "https://www.researchgate.net/publication/320018306_Speaking_about_sounds_A_tool_for_communication_on_sound_features",

    }
  },
  methods: {
    // buttonWords() {
    //   window.open("About.vue", "_blank");
    //   title=
    // },
    buttonWords(word) {
      this.word= word;
      this.$router.push(`/_lang/experiment?word=${this.word}`);
    },

    randomTitle(a) {
      var j, x, i, words = '';
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    for (i = 0; i < a.length; i++) {
      if (i < a.length-1) {words += a[i] + ' - '}else{words += a[i]}

    }
    return words;
  }
},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

p, h3 {
  margin: 10px 200px;
  padding: 40px;
}

button {
  padding: 10px 20px;
  width: 150px;
  margin: 20px;
  font-size: 1.5rem;
}





.posButton {
  margin: 20px 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

a {
  text-decoration: underline dashed;
  text-underline-position: under;
  color: inherit;
}

</style>
