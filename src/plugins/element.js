import Vue from 'vue';

import {
  MessageBox,
  Message,
  Input,
  Form,
  FormItem,
  Menu,
  Submenu,
  MenuItem
} from 'element-ui';

Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);

Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;