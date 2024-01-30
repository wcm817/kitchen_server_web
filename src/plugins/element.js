import Vue from 'vue';

import {
  MessageBox,
  Message,
  Input,
  Form,
  FormItem,
} from 'element-ui';

Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);

Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;