<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>Le timbre est la caractéristique sonore qui permet de différencier deux sons de <em>même intensité</em> et de <em>même hauteur</em>. C'est une grandeur de dimension complexe beaucoup utilisée pour décrire les sons.
    </p>
    <span>***</span>
    <p>
      Parler du timbre est une activité à laquelle se livre de nombreux professionnels du son allant du chef(fe) d'orchestre au designer sonore.
      En fonction de leur interlocuteur et de leur <em>background</em>, ils se doivent d'adapter leur vocabulaire afin de pouvoir communiquer efficacement autour du son lors d'un processus de création sonore (e.g. répétion d'ensemble, séance de mixage, cours d'orchestration...).
    </p>
    <span >***</span>
    <p>
      Malheureusemnt certains termes de ce vocabulaire ne sont pas tous explicites, malgré une utilisation courante.
      Cette étude a pour objectif d'étudier le sens de certains termes et de décrypter les caractéristiques acoustiques associées.
    </p>

    <h3></h3>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data() {
    return {
      words: ['Chaud', 'Rond', 'Brillant', 'Rugueux'],
    }
  },
  methods: {
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

span {
  font-size: 30px
}


</style>
