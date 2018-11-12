 import Mention from './components/Mention.vue'
 import Wellcome from './components/Wellcome.vue'
 import SingleMenu from './components/SingleMenu.vue'
 import UserGui from './components/MenuAdd.vue'
 import Admin from './components/AdminGui.vue'

 export default[
     {path:'/',component:Wellcome},
     {path:'/mention',component:Mention},
     {path:'/menu/:id',component: SingleMenu},
     {path:'/user',component: UserGui},
     {path:'/admin',component: Admin}
 ]