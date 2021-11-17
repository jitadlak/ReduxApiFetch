import React from 'react'

import User from './src/Screens/User'
import {Provider} from 'react-redux'
import { Store } from './src/redux/store'
const App = () => {
  return (
    <Provider store={Store}>
      <User/>
    </Provider>
      
    
  )
}

export default App
