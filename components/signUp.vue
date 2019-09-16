<template>
<div class="signup">
  <div class="intro">
    <h1>{{$t('signup.title')}}</h1>
  </div><br>
      <p>{{$t('signup.presentation')}}</p>
    <div class="formy">

      <form id="form"  @submit.prevent="submitForms" method="post" novalidate="true">


        <div class='container'>
          <div class>
            <label class="persontitle" for="name"> <b>{{$t('signup.username')}}* : </b> </label><br>
            <input type='text' id="name" name="name" v-model="person.name"><br><br>
            <label class="persontitle" for="password"> <b>{{$t('signup.password')}}* : </b> </label><br>
            <input type="password" id="password" v-model="person.password"><br>
            <!-- <button>show / hide</button> -->
          </div>
          <div>
            <label class="persontitle" ><b>{{$t('signup.birthyear')}}* : </b></label><br>
            <DatePicker type="year" format="yyyy" placeholder="ex : 1992" style="width: 150px" v-model="person.birthyear"></DatePicker><br><br>
            <label class="persontitle" > <b>{{$t('signup.gender')}}* : </b></label>
            <RoundInput :value="person.gender" @input="inputGender" name ="gender" :label="$t('signup.male')" fromParent="male"/>
            <RoundInput :value="person.gender" @input="inputGender" name ="gender" :label="$t('signup.female')" fromParent="female"/>
            <RoundInput :value="person.gender" @input="inputGender" name ="gender" :label="$t('signup.other')" fromParent="other"/><br>
            <label class="persontitle" for="country"> <b>{{$t('signup.country')}}* : </b> </label><br>
            <input type='text' placeholder="Pays" id="country" v-model="person.country"><br>
          </div>

        </div>

        <div class="line"></div>

      <div class="container">
        <div>
          <label class="persontitle"> <b>{{$t('signup.profession')}}* : </b></label>
            <checklist :list_arr="professionalActivity" :value="person.professionalActivity" @input="inputProfessions"/>
            <label> {{$t('signup.other')}} : </label>
            <input type="text" id="otherCont" name="professionalActivity" v-model="otherProf">
        </div>

        <div>
          <div>
            <label class="persontitle"> <b>{{$t('signup.music') }}</b></label><br>
            <RoundInput class="yesno" :value="person.isMusic" @input="inputMusic" name ="yn" :label="$t('signup.yes')" fromParent=true />
            <RoundInput :value="person.isMusic" @input="inputMusic" name ="yn" :label="$t('signup.no')" fromParent=false /><br>
          </div>

          <div v-if="display" id="musical">
            <label class="persontitle">{{$t('signup.musicDis')}} : </label>
            <div  class="musDis">
              <input type="text" id="musEdin" v-model="person.musicDiscipline">
            </div><br>
              <label class="persontitle">{{$t('signup.musicEd')}}* : </label>
            <div >
              <RoundInput :value="person.musicEducation" @input="inputMusEd" name ="educ" :label="musicEducation[0].label" :fromParent="musicEducation[0].id" />
              <RoundInput :value="person.musicEducation" @input="inputMusEd" name ="educ" :label="musicEducation[1].label" :fromParent="musicEducation[1].id" />
              <RoundInput :value="person.musicEducation" @input="inputMusEd" name ="educ" :label="musicEducation[2].label" :fromParent="musicEducation[2].id" />
              <RoundInput :value="person.musicEducation" @input="inputMusEd" name ="educ" :label="musicEducation[3].label" :fromParent="musicEducation[3].id" />
            </div><br>
            <label class="persontitle">{{$t('signup.musicAc')}}* : </label>
            <div>
              <RoundInput :value="person.musicActivity" @input="inputMusAc" name ="acti" :label="musicActivity[0].label" :fromParent="musicActivity[0].id" />
              <RoundInput :value="person.musicActivity" @input="inputMusAc" name ="acti" :label="musicActivity[1].label" :fromParent="musicActivity[1].id" />
              <RoundInput :value="person.musicActivity" @input="inputMusAc" name ="acti" :label="musicActivity[2].label" :fromParent="musicActivity[2].id" />
              <RoundInput :value="person.musicActivity" @input="inputMusAc" name ="acti" :label="musicActivity[3].label" :fromParent="musicActivity[3].id" />
              <RoundInput :value="person.musicActivity" @input="inputMusAc" name ="acti" :label="musicActivity[4].label" :fromParent="musicActivity[4].id" />
            </div><br>
          </div>
        </div>
      </div>

      <div class="submitdiv">
          <input class="submitbutton" type="submit" :value="$t('signup.submit')" >
      </div>



    </form>

  </div>

</div>

</template>
---------------------------------------------------------------------------------------------------------------------

<script>
import RoundInput from '../components/RoundInput.vue';
import checklist from '../components/checklist.vue';
import axios from 'axios'


export default {
  components: {
    RoundInput, checklist
  },
  data() {
    return {
      display: true,
      error:"",
      otherProf:"",
      professionalActivity: [
        {id:"classicMusic" ,label:this.$t('signup.classicMusic')},
        {id:"jazzMusic" ,label: this.$t('signup.jazzMusic')},
        {id:"composer" ,label: this.$t('signup.composer')},
        {id:"soundEngineer" ,label: this.$t('signup.soundEngineer')},
        {id:"soundDesigner" ,label: this.$t('signup.soundDesigner')},
        {id:"conductor" ,label: this.$t('signup.conductor')},
        {id:"musicologist" ,label: this.$t('signup.musicologist')},
        {id:"acoustician" ,label: this.$t('signup.acoustician')},
        {id:"psychoacoustician" ,label: this.$t('signup.psycho')},
        {id:"teacherA" ,label: this.$t('signup.teacherA')},
        {id:"teacherB" ,label: this.$t('signup.teacherB')},
        {id:"RIM" ,label: this.$t('signup.RIM')},
      ],

      musicEducation: [
        {id:"None" ,label:"Aucune formation"},
        {id:"amator" ,label: "Formation amateur"},
        {id:"semiPro" ,label: "Formation semi-pro"},
        {id:"pro" ,label: "Formation professionnelle (CNSM/Pole)"},
      ],
      musicActivity: [
        {id:"None" ,label:"Aucune activité"},
        {id:"amatorOc" ,label: "Amateur occasionnelle"},
        {id:"amatorFre" ,label: "Amateur fréquente"},
        {id:"semiPro" ,label: "Semi-professionnelle"},
        {id:"pro" ,label: "Professionnelle"},
      ],
        person: {
          name: "",
          password: "",
          birthyear: "",
          country:"",
          gender: "",
          professionalActivity: [],
          isMusic: "",
          musicDiscipline: "",
          musicEducation: "",
          musicActivity: "",
                }
          }
        },
watch: {
        Disabling: function(val) {
            console.log("coucou")
            if (this.person.isMusic) {
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
            this.person.isMusic = val;
            if (this.person.isMusic === "false"){this.display= false}
            else {this.display= true}
            console.log(this.display)
          },
          inputMusEd(val) {
            this.person.musicEducation = val;
          },
          inputMusAc(val) {
            this.person.musicActivity = val;
          },
          inputProfessions(val) {
            var index = this.person.professionalActivity.indexOf(val)
            if (index > -1) {
              this.person.professionalActivity.splice(index,1);
            } else {
              this.person.professionalActivity.push(val);
            }
          },

          testaxios() {
            console.log('test');
            try {
              axios.post('http://localhost:8000/signup', {
                name: this.person.name,
                password: this.person.password,
                birthyear: new Date(this.person.birthyear).getFullYear(),
                country: this.person.country,
                gender: this.person.gender,
                professionalActivity: this.person.professionalActivity,
                isMusic: this.person.isMusic,
                musicDiscipline: this.person.musicDiscipline,
                musicEducation: this.person.musicEducation,
                musicActivity: this.person.musicActivity,
              }, {
                headers: {
                  'Content-Type':'application/json',
                  Accept: 'application/json'
                }
              }).then((res) => {
                console.log('res',res);
                this.$store.commit('SET_USER', res.data.user_id)
                this.$root.$emit('logged', this.person.name);
                this.$router.push('/_lang/indexing');
                this.$Notice.success({
                    title: 'Congratulations you signed up',
                    desc: 'The desc will hide when you set render.',
                    render: h => {
                        return h('span', ["You are ready for the experiment"])
                        }
                      });
              }).catch((err) => {
                console.log('err',err);
                this.$Message.error({
                  content: this.$t('signup.exist'),
                  duration: 2,
                  closable: true})
              });
            } catch (e) {
              console.log('err',e);
            }
          },

          submitForms() {
              if (this.otherProf.length !== 0){
                this.person.professionalActivity.push(this.otherProf);
              }
              if (this.person.name.length == 0) {
                  this.error += "Name "}
              if (this.person.password.length == 0) {
                  this.error += "- Password "}
              if (this.person.birthyear.length == 0) {
                  this.error += "- Year of birth "}
              if (this.person.country.length == 0) {
                  this.error += "- Country "}
              if (this.person.gender.length == 0) {
                  this.error += "- Gender "}
              if (this.person.professionalActivity.length == 0) {
                  this.error += "- Profession(s) "}
              if (this.person.isMusic.length == 0) {
                  this.error += "- Musical activity "}

              if (this.error == 0) {
                this.testaxios();
              }
              else {
                this.$Message.error({
                  content: "you need to fill these fields: " + this.error,
                  duration: 10,
                  closable: true})
                this.error = ""
              }

              // console.log("both forms are submitted",this.error, this.person)
              // this.$router.push('/_lang/success');
              // document.getElementById("form1").submit();

          },
          disableTest (disable) {
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

---------------------------------------------------------------------------------------------------------------------

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
  width: 200px;

}


.intro {
  text-align: left;
  margin: 0px 100px auto;
}

.yesno {
  float: left;
  margin-right: 2rem;
}

.formy {
  text-align: left;
  box-sizing: content-box;
  margin: 100px auto;
  line-height: 2;
  width: 80%;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 2px 4px black;
}

.persontitle {

  font-size: 1.1rem
}

.container{
  padding: 20px;
  display: flex;
  flex-shrink: 4;
  justify-content: space-evenly;
  /* align-items: center; */
}
.submitdiv{
  text-align: center;
}
.submitbutton {
  border-radius: 0px;
  width: 500px;
  text-align: center;
  border-color: black 1px solid;
}
.submitbutton:hover, .submitbutton:active{
  background-color: #efefef;
}

.line {
  border-bottom-color: #efefef;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  margin: 0 150px 10px;
  padding: 0 0 10px;
}

</style>
