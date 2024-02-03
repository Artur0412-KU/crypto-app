import { useContext, useState } from 'react'
import CryptoContext, { CryptoContextProvider } from './context/CryptoContext';
import AppLayout from './components/Layout/AppLayout';
import {Spin } from 'antd';


function App() {
  const {loading} = useContext(CryptoContext);

  if(loading) {
    return <Spin fullscreen/>
}
  return (
    <CryptoContextProvider>
        <AppLayout/>
    </CryptoContextProvider>
  )
}

export default App
