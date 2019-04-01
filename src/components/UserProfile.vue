<template>
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
</template>

<script>
export default {

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
