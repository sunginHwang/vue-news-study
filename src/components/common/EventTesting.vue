<template>
    <div class="event-area">
        <div class="event-test-area">
            <h2>v-if key render test</h2>
            <button @click="toggleIfKeyType">toggleIfKey</button>
            <br/>
            <template v-if="ifKeyType">
                <label>TrueType</label>
                <input placeholder="True placeHolder" key="true-type" >
            </template>
            <template v-else>
                <label>FalseType</label>
                <input placeholder="False placeHolder" key="false-type">
            </template>
        </div>
        <div class="event-test-area">
            <h2>custom key setting test</h2>
            <input type="text" @keyup.slash="pushBackSpaceKey"/>
        </div>
        <div class="event-test-area">
            <h2>combination key testing</h2>
            <button type="text" @click.shift="pushCombinationKey">pushCombinationKey</button>
        </div>
        <div class="event-test-area">
            <h2>event detect test</h2>
            <div class="detect-parent-area" @click="detectParent">
                <h3>parent detect</h3>
                <div class="detect-child-area">
                    <h3>child detect</h3>
                    <div>
                        <button @click.stop="detectChild">stopEvent</button>
                        <button @click="detectChild">nonStopEvent</button>
                        <br/>
                        <a href="https://www.naver.com" @click.stop="detectChild">use preventDefault</a>
                        <br/>
                        <a href="https://www.naver.com" @click.prevent="detectChild">not use preventDefault</a>
                        <br/>
                        <a href="https://www.naver.com" @click.prevent.stop="detectChild">not use preventDefault and stop Prod</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "EventTesting",
        data() {
            return {
                ifKeyType: true
            }
        },
        methods: {
            toggleIfKeyType() {
                this.ifKeyType = !this.ifKeyType;
            },
            pushBackSpaceKey(e) {
                console.log(e.keyCode);
                console.log('pushBackSpaceKey');
            },
            pushCombinationKey() {
                console.log('pushCombinationKey');
            },
            detectParent(){
                console.log('detectParent');
            },
            detectChild(){
                console.log('detectChild');
            },
        },
    }
</script>

<style scoped>
    .event-area{
        margin-top: 3rem;
    }
    .event-test-area{
        margin: 10%;
        background-color: #e8e8e8;
        border-radius: 3px;
    }
    .detect-parent-area{
        margin: 1rem;
        background-color: #42b883;
        height: 300px;
    }
    .detect-child-area{
        background-color: #e8e8e8;
        margin: 10%;
        height: 100px;
    }
</style>
