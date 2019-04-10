<template>
    <div>
        <h2>slot</h2>
        <ul>
            <Item>
                <h1>아이템 1</h1>
            </Item>
            <Item>
                <h2>아이템 2</h2>
            </Item>
            <Item>
                <h3 style="color: red; font-size:1rem;">아이템 3</h3>
            </Item>
            <Item>
                <small>아이템 4</small>
            </Item>
            <Item>
                <p>아이템 5</p>
            </Item>
        </ul>
    </div>
</template>

<script>
import Item from '../../components/slots/Item.vue';


export default {
    components:{
        Item,
    }
}
</script>

<style>

</style>
