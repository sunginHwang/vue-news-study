<template>
    <div class="scope-content-item">
        <p>itemContent2</p>
        <div class="test">자식 테스트</div>
    </div>

</template>

<script>
    export default {
        name: "ScopeCssContentItem2"
    }
</script>

<style scoped>
    .scope-content-item{
        font-weight: 400;
        font-size: 2rem;
        color: #41b883;
    }
    .test{
        background-color: #eeeeee;
    }

</style>
