import { createStackNavigator, createAppContainer } from 'react-navigation'
import LoggedOut from '../screens/LoggedOut';
import LogIn from '../screens/LogIn';
import ForgotPassword from '../screens/ForgotPassword';

const Navigator = createStackNavigator({
    LoggedOut: { screen: LoggedOut },
    LogIn: { screen: LogIn },
    ForgotPassword: { screen: ForgotPassword }
},
    { initialRouteName: 'LoggedOut' });

const AppContainer = createAppContainer(Navigator);

export default AppContainer