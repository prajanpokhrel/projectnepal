import Vue  from 'vue'
import Router from 'vue-router'

import Index from '../components/Index.vue'
import Bylocation from '../components/Bylocation.vue'
import Canberrapost from '../components/Canberrapost.vue'
import Homepage from '../components/Homepage.vue'
import Homepages from '../components/Homepages.vue'
import Message from '../components/Message.vue'
import Mypost from '../components/Mypost.vue'
import Postlist from '../components/Postlist.vue'
import  Newpost from  '../components/Newpost.vue'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path:'/',
            component:Index,
            name:'index'
        },
        {
            path:'/bylocation',
            component:Bylocation,
            name:'bylocation'
        },
        {
            path:'/canberrapost',
            component:Canberrapost,
            name:'canberrapost'
        },
        {
            path:'/homepage',
            component:Homepage,
            name:'homepage'
        },
        {
            path:'/homepages',
            component:Homepages,
            name:'homepages'
        },
        {
            path:'/message',
            component:Message,
            name:'message'
        },
        {
            path:'/mypost',
            component:Mypost,
            name:'mypost'
        },
        {
            path:'/postlist',
            component:Postlist,
            name:'postlist'
        },
        {
            path:'/newpost',
            component:Newpost,
            name:'newpost'
        },

    ]

})
export default router