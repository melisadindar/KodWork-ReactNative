import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';

import Wrapper from './src/Wrapper';
import store from './src/store'; // store'un gerçek pathi

function App(){
  console.log('App rendered');

  return(
    <Provider store={store}>
      <SafeAreaProvider>
        <Wrapper />
      </SafeAreaProvider>
    </Provider>
  )
}

export default App;