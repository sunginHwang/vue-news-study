import { shallowMount } from '@vue/test-utils';
import TestMsg from '@/components/TestMsg.vue';

describe('TestMsg.vue', () => {
  it('renders props.msg when passed', () => {
    const testMessage = '테스트 메세지 입니다.';
    const wrapper = shallowMount(TestMsg, {
      propsData: { message: testMessage },
    });
    expect(wrapper.text()).toMatch(testMessage);


  });
});
