<template>
   <div>
      <div v-for="item in askList">
        {{item.title}}
      </div>
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
