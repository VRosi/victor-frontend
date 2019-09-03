<template lang="html">
  <div>
    <input type="radio" name="gender" :id="gender" :v-model="model">
    <label :for="gender"> {{label}}</label>
  </div>
</template>

<script>
export default {
  props: {
    model: {
      type: String,
    },
    label: {
      type: String,
    },
    gender: {
      type: String,
      default: ''
    },
  },
}
</script>

<style lang="css" scoped>
</style>
