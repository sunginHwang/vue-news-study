<template>
   <div>
      <div v-for="newsItem in fetchedNews">
        {{newsItem.title}}
      </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed:{
        ...mapGetters({
            fetchedNews : 'fetchedNews' 
        })
    },
    created(){
        this.$store.dispatch('FETCH_NEWS');
    }
}
</script>

<style>

</style>
