import {createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
    Home: {
        screen: Home,
        navigationOptions:{
            title: 'Top 30 Cybersecurity Experts You Should Follow In 2022',
          //  headerStyle:{ backgroundColor: '#aabbee'}            
        }
    },
    ReviewDetails: {
        screen: ReviewDetails,
        navigationOptions:{
            //create header n some css styles
            title: 'Review Details - Top 30 Cybersecurity Experts',
            headerStyle: {backgroundColor:'#dfae33'}
        },
    }
}
const HomeStack = createStackNavigator(screens, {
    //create one css for both screens, 
    //one can specify a different properties for a screen not here
    //on individual screen like for reviews details- its backgrundcolor 
    defaultNavigationOptions: {
        headerTintColor: '#666',
        headerStyle: {backgroundColor: '#aabbee', height: 60}
    }
});

//export default createAppContainer(HomeStack);

export default HomeStack;