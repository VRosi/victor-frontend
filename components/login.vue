<template lang="html">
  <div class="login">
    <form>
      <div class="idPs">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        <input type="text" placeholder="Username" v-model="person.name"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = 'Username'">

        </input>
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
        <input type="password" placeholder="Mot de passe" v-model="person.password"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Mot de passe'">

      </input>
      </div><br>
      <div class="buttons">
        <Button @click="goSignIn()" name="login">{{$t('Nav.login')}}</Button>
        <Button :disabled="dis" @click="goLogOut()" name="logout">{{$t('Nav.logout')}}</Button> <!-- :disabled="dis" -->
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import Cookie from 'js-cookie'



export default {
  components: {

  },
  data() {
    return {
      dis: false,
      error:"",
      person: {
        name: "",
        password: ""
      }
    }
  },
  created: function() {
      if (!this.$store.state.authUser) {
        this.dis = true;
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
                  this.$store.commit('SET_USER', res.data.user_id);
                  this.dis = false;
                  console.log(this.$store.state.locale)
                  this.$router.push('/' + this.$store.state.locale + '/indexing');
                  this.$Notice.success({
                      title: 'Congratulations you are logged in',
                      duration: 2,
                      desc: 'The desc will hide when you set render.',
                      render: h => {
                          return h('span', ["You are ready for the experiment"])
                          }
                  });
                })
                .catch((err) => {
                  console.log('err',err);
                  this.$Message.error({
                    content: "Identifiant et/ou mot de passe incorrect(s).",
                    duration: 2,
                    closable: true})
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
              }
              else {
                this.$Message.error({
                  content: "you need to fill these fields: " + this.error,
                  duration: 2,
                  closable: true})
                this.error = ""
              }
          },
          goLogOut (){
            this.$store.commit('SET_USER', null);
            this.$router.push('/');
            Cookie.remove('auth');
            this.dis = true;
            // this.$router.go({path:'/', force: true})
            this.$Notice.info({
                title: 'You are logged out',
                duration: 2,
                desc: 'The desc will hide when you set render.',
                render: h => {
                    return h('span', ["Thank you for your help"])
                    }
            });
          },
          goSignUp (){
            this.$router.push('/' + $i18n.local + '/signup')
          },
  }
}
</script>

<style lang="css" scoped>
  .login{
    text-align: left;
    font-size: 0.8rem;
    margin-left: auto;
    display:flex;
    align-items: center;
    justify-content: space-evenly;
  }

  input {
    outline: 0;
    border-radius: 4px;
    size: 10;
    background-color: transparent;
    border: 1px black solid;
    padding: 5px;
    font-size: 1em;
    width: 100px;

  }
  Button {
    border-radius: 4px;
    width: 100px;
    color: black;
    border: 1px black solid;
    /* height: 40px; */
    background-color: transparent;
  }

  Button:hover {

    border: 1px black solid;
    /* height: 40px; */
    color: #F5F0EB;
    background-color: black;
  }

.buttons{
  display: flex;
  margin-left: 15px;
  justify-content: space-between;
}
</style>
