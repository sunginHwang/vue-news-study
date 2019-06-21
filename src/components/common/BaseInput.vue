<template>
    <label>
        {{label}}
        <input v-bind="$attrs"
               v-on="listeners"/>
    </label>
</template>

<script>
    export default {
        name: 'BaseInput',
        inheritAttrs: false,
        props: {
            label: {
                type: String,
                default: '',
            },
        },
        computed: {
            listeners() {
                return {
                    ...this.$listeners,
                    input: e => this.$emit('input', e.target.value)
                }
            }
        }
    };
</script>

<style scoped>

</style>

