import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Login';
import Home from './Home';
import Register from './Register';

const screenNavigator = createStackNavigator({
    Register: {screen: Register},
    Home: {screen: Home},
    Login: {screen: Login},
}, {headerMode: 'none'});

const container = createAppContainer(screenNavigator);

export default container;