import { DrawerNavigator, HeaderBackButton, BackHandler } from 'react-navigation'
import HomePage from '../../pages/Home'
import OtherPage from '../../pages/Other'
import DrawerContent from './DrawerContentComponent'

const DrawerMenu = DrawerNavigator({
        home: {
            screen: HomePage,
        },
        other:{
            screen: OtherPage,
            transitionProps: {
                name:'Xcho'
            }
        }
},
{
    initialRouteName: 'home',
    contentComponent: DrawerContent,
    contentOptions:{
        activeTintColor: '#9C27B0',
        inactiveTintColor: '#4DD0E1'
    }
}
)
export default DrawerMenu;