import { StackNavigator } from 'react-navigation';
import StartPage from '../pages/Start'
import DrawerMenu from './Drawer/Drawer'
const RootStack = StackNavigator({
    start: {
      screen: StartPage,
    },
    drawer: {
        screen: DrawerMenu,
    }
  
  },
    {
      initialRouteName: 'start',
      headerMode:'none'
    }
  )
  export default RootStack;