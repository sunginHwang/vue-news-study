<template>
    <label>
        {{label}}
        <input
                v-bind="$attrs"
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
            model: {
                event: 'update',
            },
        },
        computed: {
            listeners() {
                return {
                    ...this.$listeners,
                    input: event => this.$emit('input', event.target.value)
                }
            }
        }
    };
</script>

<style scoped>

</style>
