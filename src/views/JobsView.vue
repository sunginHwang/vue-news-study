<template>
   <div>
      <div v-for="job in fetchedJobs">
        {{job.title}}
      </div>
   </div>
</template>

<script>


import { mapGetters } from 'vuex';

export default {
    computed:{
        ...mapGetters(['fetchedJobs'])
    },
        created(){
        this.$store.dispatch('FETCH_JOBS');
    }
}
</script>

<style>

</style>
