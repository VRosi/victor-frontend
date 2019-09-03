<template>
  <div class="signin">
    <h1> Connection</h1>
      <p> </p>
    <form>
    <div class="signform">
        <div class="mail">
          <label for="mail"> <b>Email* : </b> </label><br>
          <input type='text' id="Name" name="mail" value=" ">
        </div>
        <div class="mail">
          <label for="mail"> <b>Password* : </b> </label><br>
          <input type='text' id="mail" value=" ">
        </div>
    </div>
    <button type="submit" name="button" prevent.default>Se connecter</button>
    </form>

    <div class="line">
    </div>

  </div>
</template>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

input {

  background: transparent;
  border: 0px solid #efefef;
  border-bottom: 2px solid #094683;
  padding: 5px;
  font-size: 1em;
  outline: 0;

}

.signin{
  background: linear-gradient(transparent, #7CCAB2 30%, #7CCAB2);
  padding: 30px;
}


.prof{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.signin div {
  padding: 10px;
  line-height: 2;
}

.line {
  border-bottom-length: 50px;
  border-bottom-color: #094683;
  border-bottom-width: 0.1px;
  border-bottom-style: solid;
  margin: 10px 200px 10px;
  padding: 0 0 10px;
}

</style>
