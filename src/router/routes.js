import Home from '@/views/Home'
import Product from '@/views/Product'
import Solution from '@/views/Solution'
import About from '@/views/About'
import Contact from '@/views/Contact'

let routes = [
    {
        path: '/',
        component: Home,
        name: '首页',
    },
    {
        path: '/product',
        component: Product,
        name: '产品中心',
    },
    {
        path: '/solution',
        component: Solution,
        name: '解决方案',
    },
    {
        path: '/about',
        component: About,
        name: '关于我们',
    },
    {
        path: '/contact',
        component: Contact,
        name: '联系我们',
    },
];

export default routes;
