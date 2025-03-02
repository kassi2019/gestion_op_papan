import axios from 'axios';

export default axios.create({

   // baseURL: process.env.VUE_APP_GESTION_OP_URL
     baseURL: 'http://127.0.0.1:8000/api',
    // baseURL: 'http://DESKTOP-7H09IIP:51/SID-CF/back-end'
})
