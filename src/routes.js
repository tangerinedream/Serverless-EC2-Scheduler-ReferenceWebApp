import Workload from './components/Workload.vue';
import WorkloadActions from './components/WorkloadActions.vue';
import WorkloadTierDetails from './components/WorkloadTierDetails.vue';
import SchedulerHome from './components/SchedulerHome.vue';


export default [
  { path: '/workload', component: Workload },
  { path: '/workload/tiers', component: WorkloadTierDetails },
  { path: '/workload/actions', component: WorkloadActions },
  { path: '*', component: SchedulerHome }
]
