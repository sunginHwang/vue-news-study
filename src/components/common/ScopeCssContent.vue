<template>
    <div class="content">
        <scope-css-content-item></scope-css-content-item>
        <scope-css-content-item2></scope-css-content-item2>
    </div>
</template>

<script>
import ScopeCssContentItem from '@/components/common/ScopeCssContentItem';
import ScopeCssContentItem2 from '@/components/common/ScopeCssContentItem2';
    export default {
        components:{
            ScopeCssContentItem,
            ScopeCssContentItem2
        },
        name: "ScopeCssContent"
    }
</script>

<style scoped>
    .content{
        display: flex;
        flex-direction: column;
        margin: 2rem;
        background-color: #828282;
        border-radius: 8px;
    }

</style>
