<template>
  <div class="hello">
    <h1>{{$t('index.title')}}</h1>
    <p>{{$t('index.introduction1')}}</p>
    <span>***</span>
    <p>{{$t('index.introduction2')}}</p>
    <span >***</span>
    <p>{{$t('index.introduction3')}}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
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
