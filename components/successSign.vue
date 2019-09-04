<template>
  <div class="signup">
    <h1>{{ msg }}</h1>
    <button type="button" name="button"></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "MERCI =]!",
      type: String
    }
  },
}
</script>

<style lang="css" scoped>
  .signup{
    background: linear-gradient(#7CCAB2, #094683);
    padding: 30px;
  }
</style>
