<template lang="html">
  <div>
    <div v-for="item in list_arr" :key="item.id">
        <input type="checkbox" :id="item.id" name="item.id" :v-model="model">
        <label> {{ item.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list_arr: {
      type: Array,
      default: ['']
    },
    model: {
      type: String,
    },
  },
}

</script>

<style lang="css" scoped>
</style>
