<template>
    <div>
        <button @click="AsyncAwaitByForEach()">ForEach 클릭</button>
        <button @click="AsyncAwaitByForOf()">ForOf 클릭</button>
        <button @click="AsyncAwaitByForOfParallel">ForOfParallel 클릭</button>
    </div>
</template>

<script>
    export default {
        name: "AsyncAwaitParallel",
        methods: {
            wait(index,ms) {
                return new Promise(resolve => {
                    setTimeout(resolve, ms)
                })
            },
            async delayedLog(item) {
                await this.wait(item,500);
                console.log(`delayedLog : ${item}`);
            },
            async AsyncAwaitByForEach(){
                console.time("calculatingTime");
                [1,2,3].forEach(async index => await this.delayedLog(index));
                console.log('end');
                console.timeEnd("calculatingTime");
            },
            async AsyncAwaitByForOf(){
                console.time("calculatingTime");

                const arrays = [1,2,3];

                for (const index of arrays) {
                    await this.delayedLog(index);
                }

                console.log('end');

                console.timeEnd("calculatingTime");

            },
            async AsyncAwaitByForOfParallel(){
                console.time("calculatingTime");

                const arrays = [1,2,3];

                const arrayPromises = arrays.map(this.delayedLog);

                await Promise.all(arrayPromises);

                console.log('end');

                console.timeEnd("calculatingTime");

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