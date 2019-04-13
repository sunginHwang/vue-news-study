import TestMsg from '../TestMsg';
import { shallowMount } from '@vue/test-utils';

test('jest test start2', () => {
    expect(true).toBe(true);
});

describe('TestMsg.vue', () =>{
    test('TestingComponent',()=>{
        const testMessage = '테스트 메세지 입니다.';
        const wrapper = shallowMount(TestMsg,{
            propsData:{
                message: testMessage
            }
        });
        console.log(wrapper);
        expect(wrapper.vm.$el.querySelector('p').text()).toBe(testMessage)
    })
});