<template>
  <div class="test">
      <p>{{message}}</p>
  </div>
</template>

<script>
    export default {
        name: "TestMsg",
        props: {
            message: {
                type: String,
                default: ''
            },
        },
    }
</script>

<style scoped>

</style>
