 
import React, { useState} from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import AppLoading from 'expo-app-loading';
import ReviewDetails from './screens/reviewDetails';
import About from './screens/about';

const getFonts =() => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return ( 
      <view>
      <Home />       
      </view>         
           
    );
  } else {
    return(
      <AppLoading
          startAsync={getFonts}
          onFinish={()=> setFontsLoaded(true)}
          onError={console.warm}    
       />
      )
    }  
}



