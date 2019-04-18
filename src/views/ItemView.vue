<template>
    <div class="item-container">
        <section>
            <div class="user-container">
                <UserProfile>
                    <router-link slot="userName" :to="`/user/${fetchedItem.user}`">
                        {{fetchedItem.user}}
                    </router-link>
                    <template slot="time">{{ 'posted ' + fetchedItem.time_ago}}</template>
                </UserProfile>
                <div class="item-button-area">
                    <button class="item-button" @click="getItems(19669517)">이전</button>
                    <button class="item-button" @click="getItems(19687980)">이후</button>
                </div>
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
import UserProfile from '@/components/UserProfile';
import { mapGetters } from 'vuex';

export default {
    components:{
        UserProfile
    },
    data() {
        return {
            itemIdData: 0
        }
    },
    computed:{
        ...mapGetters('item',{
            fetchedItem: 'fetchedItem'
        })
    },
    methods: {
        getItems(itemId) {
            console.log(`getItems : ${itemId}`);
            this.itemIdData = itemId;
            this.$store.dispatch('item/FETCH_ITEM',itemId);
        }
    },
    beforeUpdate(){
        console.log(`beforeUpdate : ${this.itemIdData}`);
    },
    updated(){
        console.log(`updated : ${this.itemIdData}`);

    },
    mounted(){
        console.log(`mounted : ${this.itemIdData}`);
    },
    created(){
        const itemId = this.$route.params.id;
        console.log(`created : ${itemId}`);
        this.getItems(itemId);
    }
}
</script>

<style scoped>
.item-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.item-button-area{
    margin: 0.5rem;
    display: flex;
    justify-content: space-between;
}
.item-button{
    padding: 0.5rem;
    width: 2.5rem;
    border-radius: 3px;
    border: 1px solid #41b883;

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
