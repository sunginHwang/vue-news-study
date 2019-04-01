<template>
    <UserProfile/>
</template>

<script>

import { mapGetters } from 'vuex';
import UserProfile from '../components/UserProfile';
export default {
    components:{
        UserProfile,
    },
    computed:{
    ...mapGetters(['fetchedUser'])
    },
    created(){
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER',userName);
    }
}
</script>

<style>

</style>
