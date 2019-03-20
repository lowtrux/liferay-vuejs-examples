import { shallowMount } from '@vue/test-utils';
import App from '../../src/main/resources/META-INF/resources/lib/App';

// see https://vue-test-utils.vuejs.org/guides/using-with-vue-router.html#testing-components-that-use-router-link-or-router-view
describe('App component should', () => {
  it('render without crashing', () => {
    const wrapper = shallowMount(App, {
      stubs: ['router-link', 'router-view']
    });
    const contentH1 = wrapper.find('h1');
    expect(contentH1.text()).toEqual('My Todo App!');
  });
});
