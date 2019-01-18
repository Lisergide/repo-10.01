import HomeContainer from 'containers/HomeContainer';
import SubscribeContainer from 'containers/SubscribeContainer';
import StoreContainer from 'containers/StoreContainer';
import ControlVMContainer from 'containers/ControlVMContainer';
import CalculatorContainer from 'containers/CalculatorContainer';
import FAQContainer from 'containers/FAQContainer';


export default [
    {
        path: '/home',
        exact: true,
        component: HomeContainer,
    }, 
    {
        path: '/subscribe',
        exact: true,
        component: SubscribeContainer,
    },
    {
        path: '/control',
        exact: true,
        component: ControlVMContainer,
    },
    {
        path: '/calculator',
        exact: true,
        component: CalculatorContainer,
    },
    {
        path: '/faq',
        exact: true,
        component: FAQContainer,
    },
    {
        path: '/store',
        exact: true,
        component: StoreContainer,
    }, 
    
]