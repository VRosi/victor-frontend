<template>
  <div class="signup">
    <h1>S'inscrire</h1>
      <p>Afin d'observer un lien entre vos réponses et votre profil,
        voici un rapide formulaire à remplir avec vos informations <br>(nothing personal)</p>
    <form>

      <div>
            <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
      </div>

      <div class="formy">
        <div class="name">
          <label for="name"> <b>Nickname* : </b> </label><br>
          <input type='text' id="Name" v-model="person.name">
        </div>
        <div class="mail">
          <label for="mail"> <b>E-mail* : </b> </label><br>
          <input type='text' id="mail" v-model="person.email">
        </div>

        <div class="line">
        </div>

        <label> <b>Sexe* : </b></label>
        <div class="sex">
            <RoundInput model="person.gender" label="Homme" gender="male"/>
            <RoundInput model="person.gender" label="Femme" gender="female"/>
            <RoundInput model="person.gender" label="Autre" gender="other"/>
        </div>

          <div class="line">
          </div>

            <label> <b>Profession* : </b></label>
            <div>
              <checklist :list_arr="prof" model="person.prof"/>
              <label> Autre : </label>
              <input type="text" id="otherCont" name="prof" v-model="person.prof">
            </div>


          <div class="line">
          </div>

          <label> <b>Principale discipline musicale : </b></label>
        <div class="musDis">
          <input type="text" id="musEdin" v-model="person.musEd">
        </div>
        <div class="musEd">
            <label> <b>Formation musicale : </b></label><br>
            <input type="checkbox" id="None" v-model="person.musEd">
            <label> Aucune formation</label><br>
            <input type="checkbox" id="amat" v-model="person.musEd">
            <label> Cours amateurs</label><br>
            <input type="checkbox" id="amat" v-model="person.musEd">
            <label> Cours amateurs</label><br>


        </div>
        <div class="musAc">

        </div>

      </div>
    </form>

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
import RoundInput from '../components/RoundInput.vue';
import checklist from '../components/checklist.vue';
import DatePicker from 'iview/src/components/date-picker';

export default {
  components: {
    RoundInput, checklist
  },
  data() {
    return {
      prof: [
        {id:"inst_cla" ,label:"Instrumentiste Classique" },
        {id:"inst_jazz" ,label: "Instrumentiste Jazz"},
        {id:"composer" ,label: "Compositeur"},
        {id:"sengineer" ,label: "Ingénieur du son"},
        {id:"sdesigner" ,label: "Designer sonore"},
        {id:"conductor" ,label: "Chef(fe) d'orchestre"},
        {id:"musico" ,label: "Musicologue"},
        {id:"acoustician" ,label: "Acousticien(ne)"},
        {id:"teachA" ,label: "Professeur Orchestration/Analyse..."},
        {id:"teachB" ,label: "Professeur création sonore"},
        {id:"RIM" ,label: "RIM"},
      ],

      musicEd: [
        {id:"None" ,label:"Aucune Pratique" },
        {id:"inst_jazz" ,label: "Instrumentiste Jazz"},
        {id:"composer" ,label: "Compositeur"},
        {id:"sengineer" ,label: "Ingénieur du son"},
        {id:"sdesigner" ,label: "Designer sonore"},
        {id:"conductor" ,label: "Chef(fe) d'orchestre"},
        {id:"musico" ,label: "Musicologue"},
        {id:"acoustician" ,label: "Acousticien(ne)"},
        {id:"teachA" ,label: "Professeur Orchestration/Analyse..."},
        {id:"teachB" ,label: "Professeur création sonore"},
        {id:"RIM" ,label: "RIM"},
      ],
        person: {
          name: "",
          email: "",
          gender: "",
          prof: [],
          musDis: "",
          musEd: "",
          musAc: "",
                }
          }
        }
}
</script>
