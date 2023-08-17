//Layout
import {HeaderOnly} from '~/components/Layout'


// Pages
import Home from '~/Pages/Home/Index';
import Following from '~/Pages/Following/Index';
import Profile from '~/Pages/Profile/Index';
import Upload from '~/Pages/Upload/Index';
import Search from '~/Pages/Search';

// Public Routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly},
    { path: '/search', component: Search, layout: null},
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes }