<template>
    <div>
        <CheckBox v-model="checked"></CheckBox>
          <CheckBox v-model="checked2"></CheckBox>
    </div>
</template>

<script>
import CheckBox from '../components/controlled/CheckBox';
export default {
    components:{
        CheckBox,
    },
    data(){
        return{
            checked: false,
            checked2: false
        }
    }
}
</script>

<style>

</style>
