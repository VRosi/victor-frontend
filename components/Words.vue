<template>
  <div >
    <h1 class="words">{{ randomTitle(words)}}</h1>
<p>
  Ces 4 termes utilisés pour décrire le timbre sont tirés d'une liste de termes les plus utlisés pour décrire le timbre, extraite d'un lexique actuellement en developpement à l'IRCAM.
  Ce lexique est <a :href="urlMax" target="_blank">
  le fruit du travail de Maxime Carron</a> dont l'objectif était de répertorier et étudier l'utilisation d'un vocabulaire du son au sein d'une communauté de professionnels du son.
  La raison du choix de ces quatres terme se doit pour l'instant de rester tacite afin de ne pas biaiser vos résultats.
  Mais sachez juste qu'ils n'ont pas voations à représenter l'ensemble des dimensions du timbre.
  Ils n'est pas non plus nécessaire d'essayer de les mettre en correspondance si cela n'est pas votre sensation (e.g. : brillant/rugueux ou rond/chaud)

</p>
<!-- <nuxt-link to="/displaySound">Brillant</nuxt-link><br> -->
<button @click="buttonWords()" type="button" name="Brillant">Brillant</button><br>
<button type="button" name="Chaud">Chaud</button><br>
<button type="button" name="Rond">Rond</button><br>
<button type="button" name="Rugueux">Rugueux</button><br>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    msg: String,
  },
  data() {
    return {
      words: ['Chaud', 'Rond', 'Brillant', 'Rugueux'],
      urlMax: "https://www.researchgate.net/publication/320018306_Speaking_about_sounds_A_tool_for_communication_on_sound_features",

    }
  },
  methods: {
    // buttonWords() {
    //   window.open("About.vue", "_blank");
    //   title=
    // },
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
  margin: 25px;
  padding: 5px;
  width: 120px;
  border-radius: 4px;
  text-align: center;
  font-size: 25px;
  border-width: medium;
  color: #E34A60;
  border-color: #E34A60;
  background-color: transparent;
  filter: drop-shadow(darkgrey 3px 3px 2px);
  /* text-shadow: darkgrey 3px 3px 3px;
  box-shadow: darkgrey 3px 3px 3px; */
  transition: 0.3s;
}

button:focus {outline: 0;}
button:hover {
  background-color: #E34A60;
  text-align: center;
  color: white;
  text-shadow: #E34A60 0px 0px ;
  border-color: #E34A60;
  border-radius: 6px;
  filter: drop-shadow(white 3px 3px 2px);

}
button:active {
  background-color: #E34A60;
  text-align:center;
  color: white;
  border: 0;
  text-shadow: #E34A60 0px 0px ;
  box-shadow: inset black 0px 0px 5px;
  border-color: white;
  border-radius: 6px;
  outline: 0;

}

a {
  text-decoration: underline dashed;
  text-underline-position: under;
  color: inherit;
}

</style>
