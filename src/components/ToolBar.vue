<template>
    <div class="header">
        <router-link to='/news'>News</router-link> |
        <router-link to='/ask'>Ask</router-link> |
        <router-link to='/jobs'>Jobs</router-link> |
        <router-link to='/common'>common</router-link> |
        <router-link to='/slot'>slots</router-link> |
        <router-link to='/controlled'>controlled</router-link> |
        <router-link to='/renderless'>renderless</router-link> |
        <router-link to='/chart'>chart</router-link> 
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.header{
    color:white;
    background-color: #42b883;
    display: flex;
    padding: 8px;
}

.header .router-link-exact-active{
     color: #344952;
}

.header a{
    color: white;
}
</style>
