<template>
  <div class="signup">
    <h1>S'inscrire</h1>
      <p>Afin d'observer un lien entre vos réponses et votre profil,
        voici un rapide formulaire à remplir avec vos informations <br>(nothing personal)</p>
    <form>
      <div class="formy">
        <div class="name">
          <label for="name"> <b>Nickname* : </b> </label><br>
          <input type='text' id="Name" v-model="person.name">
        </div>
        <div class="line">
        </div>
        <div class="mail">
          <label for="mail"> <b>E-mail* : </b> </label><br>
          <input type='text' id="mail" v-model="person.email">
        </div>
        <div class="line">
        </div>
          <label> <b>Sexe* : </b></label>
          <div class="sex">
              <div>
                <input type="radio" id="male" name="gender" v-model="person.gender">
                <label for="male"> Homme</label>
              </div>
              <div>
                <input type="radio" id="female" name="gender" v-model="person.gender">
                <label for="female"> Femme</label>
              </div>
              <div>
                <input type="radio" id="other" name="gender" v-model="person.gender" checked>
                <label for="other" style="color:grey"> <em> (Autre)</em></label>
              </div>
          </div>
          <div class="line">
          </div>

            <label> <b>Profession* : </b></label>
          <div class="prof">
            <div>
              <input type="checkbox" id="inst_cla" name="prof" v-model="person.prof">
              <label> Instrumentiste (Classique)</label>
            </div>
            <div>
              <input type="checkbox" id="inst_ja" name="prof" v-model="person.prof">
              <label> Instrumentiste (Jazz)</label>
            </div>
            <div>
              <input type="checkbox" id="comp" name="prof" v-model="person.prof">
              <label> Compositeur</label>
            </div>
            <div>
              <input type="checkbox" id="soundi" name="prof" v-model="person.prof">
              <label> Ingénieur du son</label>
            </div>
            <div>
              <input type="checkbox" id="design" name="prof" v-model="person.prof">
              <label> Designer sonore</label>
            </div>
            <div>
              <input type="checkbox" id="conduc" name="prof" v-model="person.prof">
              <label> Chef(fe) d'orchestre</label>
            </div>
            <div>
              <input type="checkbox" id="music" name="prof" v-model="person.prof">
              <label> Musicologue</label>
            </div>
            <div>
              <input type="checkbox" id="acoustic" name="prof" v-model="person.prof">
              <label> Acousticien(ne)</label>
            </div>
            <div>
              <input type="checkbox" id="psych" name="prof" v-model="person.prof">
              <label> Psychoacousticien(ne)</label>
            </div>
            <div>
              <input type="checkbox" id="teachA" name="prof" v-model="person.prof">
              <label> Professeur orchestration/analyse/...</label>
            </div>
            <div>
              <input type="checkbox" id="teachB" name="prof" v-model="person.prof">
              <label> Professeur création sonore</label>
            </div>
            <div>
              <input type="checkbox" id="RIM" name="prof" v-model="person.prof">
              <label> RIM</label>
            </div>
            <div>
              <input type="checkbox" id="other" name="prof" v-model="person.prof">
              <label> Autre : </label>
              <input type="text" id="otherCont" name="prof" v-model="person.prof">
            </div>
          </div>
          <div class="line">
          </div>
          <label> <b>Principale discipline musicale : </b></label>
        <div class="disMus">
          <input type="text" id="otherCont" name="disMus" v-model="person.disMus">
        </div>
      </div>
    </form>

<ul>
  <li>{{}}</li>
</ul>
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
  border-radius: 4px;
  border: 1px solid #efefef;
  padding: 5px;
  font-size: 1em;

}

.signup{
  background: linear-gradient(#7CCAB2, #094683);
  padding: 30px;
}

.formy {
  text-align: left;
  padding: 20px;
  margin: 80px auto;
  line-height: 2;
  width: 80%;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 2px 8px #094683;
}

.prof{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.line {
  border-bottom-color: #efefef;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  margin: 0 150px 10px;
  padding: 0 0 10px;
}

</style>


<script>
export default {
  data() {
    return {
        person: {
        name: "",
        email: "",
        gender: "",
        prof: [],
        disMus: "",
      }
    }
  },
}
</script>
