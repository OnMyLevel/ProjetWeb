 import Wellcome from './components/Wellcome.vue'
 import AddMennu from './components/AddMenu.vue'
 import Admin from './components/AdminGui.vue'

 export default[
     {path:'/',component:Wellcome},
     {path:'/add',component: AddMennu},
     {path:'/admin',component: Admin}
 ]