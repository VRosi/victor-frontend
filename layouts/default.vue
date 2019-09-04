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
      }
    }
</script>

<style media="screen">
#app {
font-family: 'EB Garamond', serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
}

#app h1, h2, #foot, #nav, label, button{
font-family: 'Asap Condensed', sans-serif;
}

#nav {
padding: 40px;
font-size: 1.3rem;
text-transform: uppercase;
background: url(../assets/logo-ircam.png) no-repeat;
background-size: contain;
margin-bottom: 80px;

}

#nav a {
text-decoration: none;
font-weight: bold;
color: #2c3e50;
}

#nav a.router-link-exact-active {
color: #7CCAB2;
}

/* FOOTER */
#foot {
padding: 30px;
background-color: #094683;

}
#foot a {
text-decoration: none;
}

a:hover {
transition: 200ms;
text-decoration: none;
background-color: #A2E754;
border-radius: 4px;
}

a:visited {
color: #7CCAB2;
}

p {
font-size: 1.2rem;
}

</style>
