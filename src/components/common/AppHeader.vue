<template>
    <header>
        <h1>{{title}}</h1>
    </header>
</template>

<script>
export default {
    props:{
        title: {
            type: String,
            required: true,
        }
    }
}
</script>

<style>

</style>
