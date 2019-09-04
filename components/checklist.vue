<template lang="html">
  <div>
    <div v-for="item in list_arr" :key="item.id">
        <input type="checkbox" name="item.id" value="item.id" @input="change(item.id)">
        <label> {{ item.label }}</label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list_arr: {
      type: Array,
    }
  },
    methods: {
      change(item) {
        this.$emit("input", item)
      }
    }
}

</script>

<style lang="css" scoped>
</style>
