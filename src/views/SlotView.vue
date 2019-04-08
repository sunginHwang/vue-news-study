<template>
    <div>
        <h2>slot</h2>
        <ul>
            <Item>아이템 1</Item>
            <Item>아이템 2</Item>
            <Item>아이템 3</Item>
            <Item>아이템 4</Item>
            <Item>아이템 5</Item>
        </ul>
    </div>
</template>

<script>
import Item from '../components/slots/Item.vue';


export default {
    components:{
        Item,
    }
}
</script>

<style>

</style>
