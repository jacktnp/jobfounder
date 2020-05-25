// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { VueEditor } from "vue2-editor"
import { firestorePlugin } from 'vuefire'
import Firebase from 'firebase'
import VueToast from 'vue-toast-notification';
import firebase from 'firebase/app'
// import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';

Vue.use(VueToast);
Vue.use(firestorePlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

const config = {
  apiKey: "AIzaSyBNZgEKkdGQN6FGRDAIkiTdTRg4HCK9t_M",
  authDomain: "jobfounder-itkmitl.firebaseapp.com",
  databaseURL: "https://jobfounder-itkmitl.firebaseio.com",
  projectId: "jobfounder-itkmitl",
  storageBucket: "jobfounder-itkmitl.appspot.com",
  messagingSenderId: "406458204536",
  appId: "1:406458204536:web:373f85a19d2a0ac9bcc88d",
  measurementId: "G-RRHFV0S89C"
};
// Firebase.initializeApp(config)

let app = Firebase.initializeApp(config)
let db = app.database()
let jobsRef = db.ref('jobs')
let skillRef = db.ref('skill')
let worktypeRef = db.ref('worktype')

export default{
  app,jobsRef,skillRef,worktypeRef
}

/* eslint-disable no-new */
// firebase.auth().onAuthStateChanged(() => {
//   if(!app){
//     app = new Vue({
//             el: '#app',
//             router,
//             components: { App },
//             template: '<App/>'
//           });
//   }
// });
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
