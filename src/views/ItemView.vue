<template>
    <div>
        <section>
            <div class="user-contaienr">
                <UserProfile>
                    <router-link slot="userName" :to="`/user/${fetchedItem.user}`">
                        {{fetchedItem.user}}
                    </router-link>
                    <template slot="time">{{ 'posted ' + fetchedItem.time_ago}}</template>
                </UserProfile>
            </div>
        </section>
        <section>
             <h2>{{fetchedItem.title}}</h2>
        </section>
        <section>
             <p v-html='fetchedItem.content'/>
        </section>
       
    </div>
</template>

<script>
import UserProfile from '../components/UserProfile';
import { mapGetters } from 'vuex';

export default {
    components:{
        UserProfile
    },
    computed:{
        ...mapGetters('item',{
            fetchedItem: 'fetchedItem'
        })
    },
    created(){
        const itemId = this.$route.params.id;
        this.$store.dispatch('item/FETCH_ITEM',itemId);
    }
}
</script>

<style scoped>
.user-contaienr{
    display:flex;
    align-items:center;
    padding:0.5rem
}
.fa-user{
    font-size: 2.5rem;
}
.user-description{
    padding-left:8px;

}
.time{
    font-size: 0.7rem;
}

</style>
