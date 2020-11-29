import SignIn from "../../containers/Auth/SignIn"
import SignUp from "../../containers/Auth/SignUp"
import Reset from "../../containers/Auth/Reset"
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