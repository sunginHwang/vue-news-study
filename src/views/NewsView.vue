<template>
   <div>
    <p  v-for="newsItem in fetchedNews">
        <a :href="newsItem.url">{{newsItem.title}}</a>
        <small>
            {{newsItem.time_ago}} by 
            <router-link :to="`/user/${newsItem.user}`">{{newsItem.user}}</router-link>
        </small>
    </p>
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
