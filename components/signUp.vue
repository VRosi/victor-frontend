<template>
  <div class="signup">
    <h1>S'inscrire</h1>
      <p>Afin d'observer un lien entre vos réponses et votre profil,
        voici un rapide formulaire à remplir avec vos informations <br>(nothing personal)</p>
    <div class="formy">
      <form id="form1">
        <div class="yesno">
          <label for="name"> <b>Nickname* : </b> </label><br>
          <input type='text' id="Name" v-model="person.name">
        </div>
        <div>
          <label for="name"> <b>Password* : </b> </label><br>
          <input type="password" v-model="person.password">
          <!-- <button>show / hide</button> -->
        </div>
        <div class="gender">
            <label> <b>Sexe* : </b></label>
            <RoundInput :value="person.gender" @input="inputGender" name ="gender" label="Homme" fromParent="male"/>
            <RoundInput :value="person.gender" @input="inputGender" name ="gender" label="Femme" fromParent="female"/>
            <RoundInput :value="person.gender" @input="inputGender" name ="gender" label="Autre" fromParent="other"/>
        </div>

        <div class="line">
        </div>

      <div class="container">
        <div>
          <label> <b>Profession* : </b></label>
            <checklist :list_arr="prof" :value="person.prof" @input="inputProfessions"/>
            <label> Autre : </label>
            <input type="text" id="otherCont" name="prof" v-model="otherProf">
        </div>

        <div>
          <div>
            <label class=""> <b>Avez-vous une activité musicale ? </b></label><br>
            <RoundInput class="yesno" :value="person.music" @input="inputMusic" name ="yn" label="Oui" fromParent="Yes"/>
            <RoundInput :value="person.music" @input="inputMusic" name ="yn" label="Non" fromParent="No" />
          </div>

          <div id="musical">
            <label>Principale discipline musicale : </label>
            <div class="musDis">
              <input type="text" id="musEdin" v-model="person.musDis">
            </div>
              <label> Formation musicale* : </label>
            <div>
              <RoundInput :value="person.musEd" @input="inputMusEd" name ="educ" :label="musicEd[0].label" :fromParent="musicEd[0].id" />
              <RoundInput :value="person.musEd" @input="inputMusEd" name ="educ" :label="musicEd[1].label" :fromParent="musicEd[1].id" />
              <RoundInput :value="person.musEd" @input="inputMusEd" name ="educ" :label="musicEd[2].label" :fromParent="musicEd[2].id" />
              <RoundInput :value="person.musEd" @input="inputMusEd" name ="educ" :label="musicEd[3].label" :fromParent="musicEd[3].id" />
            </div>
            <label> Activité musicale* : </label>
            <div>
              <RoundInput :value="person.musAc" @input="inputMusAc" name ="acti" :label="musicAc[0].label" :fromParent="musicAc[0].id" />
              <RoundInput :value="person.musAc" @input="inputMusAc" name ="acti" :label="musicAc[1].label" :fromParent="musicAc[1].id" />
              <RoundInput :value="person.musAc" @input="inputMusAc" name ="acti" :label="musicAc[2].label" :fromParent="musicAc[2].id" />
              <RoundInput :value="person.musAc" @input="inputMusAc" name ="acti" :label="musicAc[3].label" :fromParent="musicAc[3].id" />
              <RoundInput :value="person.musAc" @input="inputMusAc" name ="acti" :label="musicAc[4].label" :fromParent="musicAc[4].id" />
            </div>
          </div>
        </div>
      </div>
  </form>

      <button type="button" name="button" @click="submitForms()">SUBMIT</button>


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
  border-radius: 4px;
  border: 1px solid #efefef;
  padding: 5px;
  font-size: 1em;

}


.signup{
  background: linear-gradient(#7CCAB2, #094683);
  padding: 30px;
}

.yesno {
  float: left;
  margin-right: 2rem;
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

.container{
  display: flex;
  flex-shrink: 4;
  justify-content: space-evenly;
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


export default {
  components: {
    RoundInput, checklist
  },
  data() {
    return {
      otherProf:"",
      disable:"true",
      prof: [
        {id:"instCla" ,label:"Instrumentiste Classique"},
        {id:"instJazz" ,label: "Instrumentiste Jazz"},
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
        {id:"None" ,label:"Aucune formation"},
        {id:"amator" ,label: "Formation amateur"},
        {id:"semiPro" ,label: "Formation semi-pro"},
        {id:"pro" ,label: "Formation professionnelle (CNSM/Pole)"},
      ],
      musicAc: [
        {id:"None" ,label:"Aucune activité"},
        {id:"amatorOc" ,label: "Amateur occasionnelle"},
        {id:"amatorFre" ,label: "Amateur fréquente"},
        {id:"semiPro" ,label: "Semi-professionnelle"},
        {id:"pro" ,label: "Professionnelle"},
      ],
        person: {
          name: "",
          password: "",
          gender: "",
          prof: [],
          music: "",
          musDis: "",
          musEd: "",
          musAc: "",
                }
          }
        },
watch: {
        Disabling: function(val) {
            console.log("coucou")
            if (this.person.music==="yes") {
              console.log("yes");
              this.musical.disable=true;
              this.musical.color="black";}
            else {this.musical.disable=false}

            }
  },
  methods: {
          inputGender(val) {
            this.person.gender = val;
          },
          inputMusic(val) {
            this.person.music = val;
          },
          inputMusEd(val) {
            this.person.musEd = val;
          },
          inputMusAc(val) {
            this.person.musAc = val;
          },
          inputProfessions(val) {
            var index = this.person.prof.indexOf(val)
            if (index > -1) {
              this.person.prof.splice(index,1);
            } else {
              this.person.prof.push(val);
            }
          },
          submitForms: function(){
              if (this.otherProf.length !== 0){
                this.person.prof.push(this.otherProf);
              }
              console.log("both forms are submitted", this.person)
              // document.getElementById("form1").submit();
          },
          disableTest: function(disable){
              if (this.disable===true){
                  div.disabled = true;
                }
              else {
                  div.disabled = false;
                }
        }
      },
}



</script>
