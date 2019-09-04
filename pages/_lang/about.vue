<template>
  <div class="home">
    <signInForm />

    <signUpForm />
  </div>
</template>

<script>
// @ is an alias to /src
import signInForm from '@/components/signIn.vue'
import signUpForm from '@/components/signUp.vue'

export default {
  name: 'home',
  components: {
    signUpForm,
    signInForm,
  }
}
</script>
