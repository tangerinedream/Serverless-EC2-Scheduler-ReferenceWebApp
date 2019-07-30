import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './views/Home.vue';
// import Workload from './components/Workload.vue;'
// import WorkloadActions from './components/WorkloadActions.vue;'
// import WorkloadTierDetails from './components/WorkloadTierDetails.vue;'

Vue.use(VueRouter);


const router = new VueRouter(
  {
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
      {
        path: '/Home',
        name: 'home',
        component: Home
      },
      {
        path: '/workloadInfo',
        name: 'workload info',
        component: () => import('./views/WorkloadInfo.vue'),
      }
    ]
  }
)

export default router;


/*
 export default [
   {
//  mode: 'history',
//  base: process.env.BASE_URL,
    //mode: 'history',
    //base: process.env.BASE_URL, 
    routes: [{
      path: '/',
      name: 'home',
      component: Home
      },
      {
      path: '/workloadInfo',
      name: 'workload info',
      component: () => import('./views/WorkloadInfo.vue'),
      }
    ]
  }
];
*/


// export default [
  // {
    // path: '/workload',
    // component: Workload
  // },
  // {
    // path: '/workload/actions',
    // component: WorkloadActions
  // },
  // {
    // path: '/workload/tiers',
    // component: WorkloadTierDetails
  // },
// ]
