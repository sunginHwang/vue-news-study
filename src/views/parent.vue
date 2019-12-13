<template>
    <div>
        <button @click="increase">숫자 증가</button>
        <children :parent-data="data"/>
    </div>
</template>

<script>
    import Children from './children';

    export default {
        name: 'parent',
        components: {Children},
        methods: {
            increase() {
                this.data.count = this.data.count + 1;
            },
        },
        data() {
            return {
                data: {
                    count: 0,
                },
            };
        },
    };
</script>

<style scoped>

</style>
