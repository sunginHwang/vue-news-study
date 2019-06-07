<template>
    <div>
        <button @click="processArray([1,2,3,4])">AsyncAwaitParallel 클릭</button>
    </div>
</template>

<script>
    export default {
        name: "AsyncAwaitParallel",
        methods: {
            delay() {
                return new Promise(resolve => setTimeout(resolve, 1000))
            },
            async delayedLog(item) {
                await this.delay();
                console.log(`delayedLog : ${item}`);
            },
            async processArray(array) {
              //  array.forEach(async (item) => await this.delayedLog(item));

                // map array to promises
                const promises = array.map(this.delayedLog);
                // wait until all promises are resolved
                await Promise.all(promises);

                console.log('Done!');
            }
        },
    }
</script>

<style scoped>

</style>