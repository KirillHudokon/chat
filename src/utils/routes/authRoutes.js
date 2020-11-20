import SignIn from "../../components/Auth/SignIn"
import SignUp from "../../components/Auth/SignUp"
import Reset from "../../components/Auth/Reset"
export const authRoutes = [
    {
        name:'signin',
        path:'/signin',
        component: SignIn,
        exact: true
    },
    {
        name:'signup',
        path:'/signup',
        component: SignUp,
        exact: true
    },
    {
        name:'reset',
        path:'/reset',
        component: Reset,
        exact: true
    },
]