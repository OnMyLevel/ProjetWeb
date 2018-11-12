 import Mention from './components/Mention.vue'
 import Wellcome from './components/Wellcome.vue'
 import SingleMenu from './components/SingleMenu.vue'
 import SignIn from './components/ModalSignIn.vue'
 import SignUp from './components/ModalSignUp.vue'
 
 export default[
     {path:'/',component:Wellcome},
     {path:'/mention',component:Mention},
     {path:'/menu/:id',component: SingleMenu},
     {path:'/signIn',component: SignIn},
     {path:'/signUp',component: SignUp},
     {path:'/signUp',component: SignUp},

 ]