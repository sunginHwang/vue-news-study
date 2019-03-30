<template>
    <div>
        <section>
            <div class="user-contaienr">
                <div>
                    <i class="fas fa-user"></i>
                </div>
                <div class="user-description">
                    <router-link :to="`/user/${fetchedItem.user}`">
                        {{fetchedItem.user}}
                    </router-link>
                    <div class="time">
                      {{fetchedItem.time_ago}}
                    </div>
                </div>
            </div>
              <h2>{{fetchedItem.title}}</h2>
        </section>
        <section>
         <p v-html='fetchedItem.content'/>
        </section>
       
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    computed:{
        ...mapGetters([ 'fetchedItem' ])
    },
    created(){
        const itemId = this.$route.params.id;
        this.$store.dispatch('FETCH_ITEM',itemId);
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
