<template>
  <div id="app">
    <Nav />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
    import Nav from '../components/Nav.vue';
    import Footer from '../components/Footer.vue';

    export default {
      components: {
        Nav,
        Footer
      },
    }
</script>

<style media="screen">
#app {
background: url(../assets/logo-ircam.png) no-repeat;
background-attachment:fixed;
background-size: 100px;
background-color: #F5F0EB;
font-family: 'Lato', sans-serif;
font-weight: 100;
font-size: 1rem;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #111110;
/* #2c3e50; */
}

#app h2, #foot, #nav, label, button, input{
font-family: 'Lato', sans-serif;
font-weight: 100;
}

h3 {
  margin: 100px;
}

h1 {
  font-size: 3rem;
  font-family: 'Cormorant Garamond', serif;
  font-weight: 100;
}

#nav {
font-weight: bold;
padding: 20px;
font-size: 1.5rem;
text-transform: uppercase;
line-height: 0.8;
margin-left: 20px;
margin-bottom: 50px;
display: flex;
/* flex-direction: row; */
justify-content: space-between;
align-items: center;
}

#nav a {
text-decoration: none;
color: #111110;
}

#nav a.router-link-exact-active {
color: #7CCAB2;
text-decoration:overline;
}


/* FOOTER */
#foot {
padding: 30px;
background-color: #043368 ;

}
#foot a {
text-decoration: none;
}

a:hover {
transition: 200ms;
text-decoration: none;
background-color: #F2C707 ;
border-radius: 4px;
}

a:visited {
color: #7CCAB2;
}

p {
font-size: 1.2rem;
}

button {
  outline: 0;
  border-radius: 4px;
  border: 1px black solid;
  /* height: 40px; */
  background-color: transparent;
  color: black;
  transition: 0.3s;
}

button:hover {
  border: 1px black solid;
  color: #F5F0EB;
  background-color: black;
}

.langItem:hover {
  background-color: #3D26FA;
}

.links{
    padding-top: 80px;
    padding-left: 20px;
}

.login {
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px;
  /* filter: drop-shadow(0px 5px 5px)  */
}

.words{
  margin-top: 25px;
      animation: fadein 2s;
      -moz-animation: fadein 2s; /* Firefox */
      -webkit-animation: fadein 2s; /* Safari and Chrome */
      -o-animation: fadein 2s; /* Opera */
  }
  @keyframes fadein {
      from {
          opacity:0;
      }
      to {
          opacity:1;
      }
  }
  @-moz-keyframes fadein { /* Firefox */
      from {
          opacity:0;
      }
      to {
          opacity:1;
      }
  }
  @-webkit-keyframes fadein { /* Safari and Chrome */
      from {
          opacity:0;
      }
      to {
          opacity:1;
      }
  }
  @-o-keyframes fadein { /* Opera */
      from {
          opacity:0;
      }
      to {
          opacity: 1;
      }
}

</style>
