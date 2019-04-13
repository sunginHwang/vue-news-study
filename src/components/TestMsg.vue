<template>
  <div class="test">
      <p>{{message}}</p>
  </div>
</template>

<script>
    export default {
        name: "TestMsg",
        props:{
            message: String,
        }
    }
</script>

<style scoped>

</style>