<template>
  <label>
    {{label}}
    <input
      v-bind="$attrs"
      @input="$emit('update', 3)"
      v-on="$listeners"
    />
  </label>
</template>

<script>
  export default {
    name: 'BaseInput',
    inheritAttrs: true,
    props: {
      label: {
        type: String,
        default: '',
      },
      model: {
        event: 'update',
      },
    },
  };
</script>

<style scoped>

</style>
