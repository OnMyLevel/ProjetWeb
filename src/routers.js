 import Mention from './components/Mention.vue'
 import Wellcome from './components/Wellcome.vue'
 import SingleMenu from './components/SingleMenu.vue'
 import AddMennu from './components/AddMenu.vue'
 import Admin from './components/AdminGui.vue'

 export default[
     {path:'/',component:Wellcome},
     {path:'/mention',component:Mention},
     {path:'/menu/:id',component: SingleMenu},
     {path:'/add',component: AddMennu},
     {path:'/admin',component: Admin}
 ]