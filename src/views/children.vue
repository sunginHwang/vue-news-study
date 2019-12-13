<template>
    <div>
        <div>
            <span>카운트 {{parentData.count}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'children',
        watch: {
            parentData: {
                deep: true,
                handler(newData) {
                    console.log(`data change ${newData.count}`)
                },
            },
        },
        props: {
            parentData: {
                type: Object,
                default() {
                    return {};
                },
            },
        },
    };
</script>

<style scoped>

</style>
