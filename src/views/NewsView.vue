<template>
   <div>
      <div v-for="news in newsList">
        {{news.title}}
      </div>
   </div>
</template>

<script>
import { fetchNewsList }from '../api';
export default {
    data(){
        return{
            newsList:[]
        }
    },
    created(){

        fetchNewsList()
             .then(res => this.newsList = res.data)
             .catch(e => console.log(e));
    }
}
</script>

<style>

</style>
