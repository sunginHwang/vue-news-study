<template>
    <div>
        <fetch-data url = "https://jsonplaceholder.typicode.com/users/1">
         <div slot-scope="{loading, response}">
            <div v-if="loading">
               is loading....
            </div>
            <div v-if="!loading">
            <p>{{response.name}}</p>
            </div>
         </div>
        </fetch-data>
    </div>
</template>

<script>
import FetchData from '@/components/renderless/FetchData';
export default {
    components:{
        FetchData,
    },
}
</script>

<style>

</style>
