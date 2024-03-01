import Vue from 'vue';

import {
  MessageBox,
  Message,
  Input,
  Form,
  FormItem,
  Menu,
  Submenu,
  MenuItem,
  Table,
  TableColumn,
} from 'element-ui';

Vue.use(Input);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(Table);
Vue.use(TableColumn);

Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$message = Message;