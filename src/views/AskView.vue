<template>
   <div>
      <p  v-for="ask in askList">
       <router-link :to="`/item/${ask.id}`" >{{ask.title}}</router-link>
       <small>{{ask.time_ago}} by {{ask.user}}</small>
    </p>
   </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed:{
        ...mapGetters({
            askList : 'fetchedAsk' 
        })
    },
    created(){

         this.$store.dispatch('FETCH_ASK');
    }
}
</script>

<style>

</style>
