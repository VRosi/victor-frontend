<template>
  <div >
    <h1 class="words">{{ randomTitle(words)}}</h1>
<p>
  Ces 4 termes utilisés pour décrire le timbre sont tirés d'une liste de termes les plus utilisés pour décrire le timbre, extraite d'un lexique actuellement en developpement à l'IRCAM.
  Ce lexique est <a :href="urlMax" target="_blank">
  le fruit du travail de Maxime Carron</a> dont l'objectif était de répertorier et étudier l'utilisation d'un vocabulaire du son au sein d'une communauté de professionnels du son.
  La raison du choix de ces quatres terme se doit pour l'instant de rester tacite afin de ne pas biaiser vos résultats.
  Mais sachez juste qu'ils n'ont pas voations à représenter l'ensemble des dimensions du timbre.
  Ils n'est pas non plus nécessaire d'essayer de les mettre en correspondance si cela n'est pas votre sensation (e.g. : brillant/rugueux ou rond/chaud)

</p>
<div class="posButton">
  <button @click="buttonWords(word_list[0])" type="button" >Brillant</button><br>
  <button @click="buttonWords(word_list[1])" type="button" name="Chaud">Chaud</button><br>
  <button @click="buttonWords(word_list[2])" type="button" name="Rond">Rond</button><br>
  <button @click="buttonWords(word_list[3])" type="button" name="Rugueux">Rugueux</button><br>
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
      word_list:["bright", "warm", "round", "rough"],
      words: ['Chaud', 'Rond', 'Brillant', 'Rugueux'],
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

p {
  margin: 10px 200px;
  padding: 40px;
}

.words{
  margin-top: 25px;
      animation: fadein 2s;
      -moz-animation: fadein 2s; /* Firefox */
      -webkit-animation: fadein 2s; /* Safari and Chrome */
      -o-animation: fadein 2s; /* Opera */
  }
  @keyframes fadein {
      from {
          opacity:0;
      }
      to {
          opacity:1;
      }
  }
  @-moz-keyframes fadein { /* Firefox */
      from {
          opacity:0;
      }
      to {
          opacity:1;
      }
  }
  @-webkit-keyframes fadein { /* Safari and Chrome */
      from {
          opacity:0;
      }
      to {
          opacity:1;
      }
  }
  @-o-keyframes fadein { /* Opera */
      from {
          opacity:0;
      }
      to {
          opacity: 1;
      }
}


button {
  padding: 10px 20px;
  width: 150px;
  margin: 20px;
  font-size: 1.5rem;
}



.posButton {
  margin: 20px 150px;
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
