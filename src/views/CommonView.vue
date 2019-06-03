<template>
    <div>
        <h1>inheritAttrsTest</h1>
        <base-input :label="`fefefe`"
                    placeHolder="`placeHolderSample`"
                    @click="test"
                    v-model="value"/>
        <h1>chart.js</h1>
        <app-header :title="appTitle"></app-header>
        <app-content :items="items" @renew="renewItems"></app-content>
        <h1>scoped css</h1>
        <scope-css-content></scope-css-content>
        <h1>Promise alert 테스트</h1>
        <div>
            <button @click="onAlertClick">Alert 버튼</button>
            <button @click="onConfirmClick">Confirm 버튼</button>
        </div>
        <h1>event testing</h1>
        <event-testing></event-testing>

    </div>
</template>

<script>
    import AppHeader from '@/components/common/AppHeader';
    import AppContent from '@/components/common/AppContent';
    import ScopeCssContent from '@/components/common/ScopeCssContent';
    import BaseInput from '@/components/common/BaseInput';
    import EventTesting from '@/components/common/EventTesting';
    import {alert, confirm} from '@/utils/dialog';

    export default {
        components: {
            AppHeader,
            AppContent,
            ScopeCssContent,
            EventTesting,
            BaseInput
        },
        data() {
            return {
                appTitle: 'common App Title',
                items: [10, 20, 30],
                value: ""
            }
        },
        methods: {
            test(){
              console.log('root');
            },
            renewItems() {
                this.items = [40, 50, 60]
            },
            onAlertClick() {
                alert('확인을 눌러주세요').then((e) => console.log(e));
            },
            onConfirmClick() {
                confirm('확인을 눌러주세요').then((isConfirm) => {
                    isConfirm ? console.log('확인')
                        : console.log('취소');
                });
            }
        },
    }
</script>

<style>

</style>
