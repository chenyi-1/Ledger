import Bill from '../page/Bill'
import Forms from '../component/Forms'
const routes = [
    {
        path: '/bill',
        component: Bill,
        element: <Bill/>,
        title: ""
    },
    {
        path:'/forms',
        component: Forms,
        element: <Forms />,
        title:"添加"
    }
]

export default routes