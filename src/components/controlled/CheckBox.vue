<template>
    <input type="checkbox" :value="value" @click="toggleCheck">
</template>

<script>
export default {
    props:{
        value:{
            type: Boolean,
            required: true
        }
    },
    methods: {
        toggleCheck() {
            this.$emit('input',!this.value);
        },
    }
}
</script>

<style>

</style>
