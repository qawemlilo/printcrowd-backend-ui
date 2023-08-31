import axios from 'axios';
import { AUTH_TOKEN_KEY, USER_KEY } from './static';
import { auth as endpoints } from './endpoints';


axios.defaults.withCredentials = true;
axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;

export default {

  async login (credentials) {

    const { data } = await axios.post(endpoints.login, credentials);

    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

    return data;
  },


  async register (formdata) {
    const { data }  = await axios.post(endpoints.register, formdata);

    return data;
  },


  async resetPassword (formdata) {
    const { data }  = await axios.post(endpoints.reset, formdata);

    return data;
  },


  async logout () {
    await axios.post(endpoints.logout);
    delete axios.defaults.headers.common['Authorization'];
  },


  async getUser () {
    try {
      const { data }  = await axios.get(endpoints.user);

      return data.user;  
    } 
    catch (error) {
      console.error(error); 
    }
  }
}
  