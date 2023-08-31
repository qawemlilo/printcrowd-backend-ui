import { createApp } from 'vue'
import axios from 'axios';
import Toast from 'vue-toastification';
import store from './store';
import router from './routes';
import App from './App.vue';
import { handleError } from './Utils';


import './style.css';
import 'vue-toastification/dist/index.css';


const mainApp = createApp(App);

const token = store.state.auth.token;
if (token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

const ToastOptions = {
  transition: "Vue-Toastification__fade",
  maxToasts: 20,
  newestOnTop: true,
  position: "top-right",
  timeout: 5000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: true,
  closeButton: "button",
  icon: true,
  rtl: false
};

mainApp.use(Toast, ToastOptions);
mainApp.use(store);
mainApp.use(router);


//mainApp.config.errorHandler = handleError;


mainApp.mount('#app');
