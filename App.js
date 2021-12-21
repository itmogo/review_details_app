 
import React, { useState} from 'react';
import * as Font from 'expo-font';
import Home from './screens/home';
import AppLoading from 'expo-app-loading';
import ReviewDetails from './screens/reviewDetails';
import About from './screens/about';
import Navigator from './routes/drawer';

const getFonts =() => Font.loadAsync({
    'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return ( 
      //this is the home page link in navigator     
      <Navigator />            
    );
  } else {
    return(
      //custom styles sheets
      <AppLoading
          startAsync={getFonts}
          onFinish={()=> setFontsLoaded(true)}
          onError={console.warm}    
       />
      )
    }  
}



