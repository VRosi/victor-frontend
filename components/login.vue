<template lang="html">
  <div class="login">
    <form>
      <div class="idPs">
        <Icon type="ios-person-outline" slot="prepend"></Icon>
        <input type="text" :placeholder="$t('Nav.username')" v-model="person.name"
                onfocus="this.placeholder = ''"
                onblur="this.placeholder = '$t('Nav.username')'">

        </input>
        <Icon type="ios-lock-outline" slot="prepend"></Icon>
        <input type="password" :placeholder="$t('Nav.password')" v-model="person.password"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = '$t('Nav.password')'">

      </input>
      </div><br>
      <div class="buttons">
        <Button @click="goSignIn()" name="login">{{$t('Nav.login')}}</Button>
        <Button :disabled="disabled" @click="goLogOut()" name="logout">{{$t('Nav.logout')}}</Button> <!-- :disabled="dis" -->
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
  computed: {
    disabled() {
      return !this.$store.state.authUser
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
                      title: this.$t('Nav.success'),
                      duration: 2,
                      desc: 'The desc will hide when you set render.',
                      render: h => {
                          return h('span', [this.$t('Nav.success2')])
                          }
                  });
                })
                .catch((err) => {
                  console.log('err',err);
                  this.$Message.error({
                    content: this.$t('Nav.error'),
                    duration: 2,
                    closable: true})
                });
              } catch (e) {
                console.log('err',e);
              }
          },
          goSignIn (){
            if (this.person.name.length == 0) {
                this.error += " - " + this.$t('Nav.username')}
            if (this.person.password.length == 0) {
                this.error += " - " + this.$t('Nav.password')}
            if (this.error == 0) {
                this.testaxios();
              }
              else {
                this.$Message.error({
                  content: this.$t('Nav.missing') + this.error,
                  duration: 2,
                  closable: true})
                this.error = ""
              }
          },
          goLogOut (){
            this.$store.commit('SET_USER', null);
            this.$router.push('/' + this.$i18n.local + '/');
            Cookie.remove('auth');
            this.dis = true;
            // this.$router.go({path:'/', force: true})
            this.$Notice.info({
                title: this.$t('Nav.logoutsuccess'),
                duration: 2,
                desc: 'The desc will hide when you set render.',
                render: h => {
                    return h('span', [this.$t('Nav.logoutsuccess2')])
                    }
            });
          },
          goSignUp (){
            this.$router.push('/' + this.$i18n.local + '/signup')
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
