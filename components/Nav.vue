<template lang="html">
  <div id="nav">
    <div class="">

    </div>
    <div class="links">
      <nuxt-link to='/'>Accueil</nuxt-link> |
      <nuxt-link to='/_lang/indexing'>Indexation</nuxt-link> |
      <nuxt-link to='/_lang/success'>test</nuxt-link> |
    </div>

    <div class="login">
      <form>
        <div class="idPs">
          <Input type="text" placeholder="Username" v-model="person.name">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
          <Input type="password" placeholder="Mot de passe" v-model="person.password">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </div><br>
        <div class="buttons">
          <Button @click="goSignIn()" name="login">Log in</Button>
          <Button @click="goLogOut()" name="logout">Log out</Button>
          <Button id="signup" @click="goSignUp()" name="signup">Sign up</Button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Cookie from 'js-cookie'


export default {
data() {
  return {
    error:"",
    person: {
      name: "",
      password: ""
    }
  }
},
methods: {

          testaxios() {
            console.log('test');
            try {
              axios.post('http://localhost:8000/signin', {
                name: this.person.name,
                password: this.person.password,
              }, {
                headers: {
                  'Content-Type':'application/json',
                  Accept: 'application/json'
                }
              })
              .then((res) => {
                console.log('res',res);
                this.$store.commit('SET_USER', res.data.user_id)
              })
              .catch((err) => {
                console.log('err',err);
              });
            } catch (e) {
              console.log('err',e);
            }
        },
        goSignIn (){
          if (this.person.name.length == 0) {
              this.error += "Username "}
          if (this.person.password.length == 0) {
              this.error += "- Password "}
          if (this.error == 0) {
              this.testaxios();
              // this.$Notice.success({
              //     title: 'Congratulations you signed in',
              //     desc: 'The desc will hide when you set render.',
              //     render: h => {
              //         return h('span', ["You are ready for the experiment"])
              //         }
              // });
            }
            else {
              this.$Message.error({
                content: "you need to fill these fields: " + this.error,
                duration: 5,
                closable: true})
              this.error = ""
            }
            this.name=""
        },
        goLogOut (){
          this.$store.commit('SET_USER', null),
          Cookie.remove('auth');
          this.$router.go({path:'/', force: true})
        },
        goSignUp (){
          this.$router.push('/_lang/about')
        },
}
}
</script>

<style lang="css" scoped>
#nav  .login{
    text-align: left;
    font-size: 0.8rem;
    margin-left: auto;
    display:flex;
    align-items: center;
    justify-content: space-evenly;

  }

  .links{
    text-align: center;
    margin-left: 550px;

  }

  .buttons{
    text-align: center;
  }

  input {
    border-radius: 4px;
    border: 1px solid #efefef;
    padding: 5px;
    font-size: 1em;
    width: 100px;

  }
  Button {
    border-radius: 4px;
    /* height: 40px; */
  }

#nav {
  display: flex;
  flex-direction: row;
  align-items: center;
  }

#signup {
  background-color: lightblue;

}

/* #submitbutton {
  border-radius: 0px;
  text-align: center;
  border-color: black 1px solid;
} */
</style>
