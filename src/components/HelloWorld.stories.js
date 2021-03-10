import HelloWorld from './HelloWorld.vue';

const Template = (args) => ({
  components: { HelloWorld },
  setup() { return { args }; },
  template: '<hello-world v-bind="args" />',
});

export const Primary = Template.bind({});
Primary.args = { };
