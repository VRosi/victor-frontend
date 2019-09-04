<template lang="html">
  <div>
    <input type="radio" :name="name" v-model="radioButtonValue">
    <label> {{label}}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    fromParent: {
      type: String,
    },
    value: {
      type: String,
    },
    name: {
      type: String,
    }
  },
  computed: {
        radioButtonValue: {
            get: function() {
                return this.value
            },
            set: function() {
                // Communicate the change to parent component so that selectedValue can be updated
                this.$emit("input", this.fromParent)
            }
        }
    }
}
</script>

<style lang="css" scoped>
</style>
