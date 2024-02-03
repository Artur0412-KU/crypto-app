import React, { useEffect, useState } from 'react'
import { Layout, Select, Space, Button, Modal, Drawer  } from 'antd';
import { useCrypto } from '../../context/CryptoContext';
import CoinInfoModal from '../AssetInfoModal';
import AddAssetForm from '../AddAssetForm';

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const headerStyle = {
  width: '100%',
  textAlign: 'center',
  height: 60,
  padding: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '50px'
};

export default function AppHeader() {
  const [select, setSelect] = useState(false)
  const [modal, setModal] = useState(false)
  const {crypto} =  useCrypto();
  const [coin, setCoin] = useState(null);
  const [drawer, setDrawer] = useState(false)

  useEffect(() =>{
    const keypress = e => {
      if(e.key === 'Enter') {
        setSelect(prev => !prev)
      }
    }
    document.addEventListener('keypress', keypress)
    return () => document.removeEventListener('keypress', keypress)
  }, [])


  const handleSelect = (value) => {
    setCoin(crypto.find(c => c.id === value))
    setModal(true);
  }
  return (
    <Layout.Header style={headerStyle}>
    <Select
    style={{
      width: '250%',
    }}
    open = {select}
    onSelect = {handleSelect}
    onClick={() => setSelect(prev => !prev)}
    value='press / to open'
    onChange={handleChange}
    options={crypto.map((coin) => ({
      label: coin.name,
      value: coin.id,
      icon: coin.icon
    }))}
    optionRender={(option) => (
      <Space>
        <img style={{width: '20px'}} src={option.data.icon} alt={option.data.label}/>
        {option.data.label}
      </Space>
    )}
    />
    <Button type="primary" onClick={() => setDrawer(true)}>Add Asset</Button>
    <Modal
         open={modal} 
         onOk={() => setModal(false)} 
         onCancel={() => setModal(false)}
         footer = {null}>
        <CoinInfoModal coin = {coin}/>
    </Modal>
      <Drawer width={600} title="Add Asset" onClose={() => setDrawer(false)} open={drawer} destroyOnClose>
        <AddAssetForm onClose={() => setDrawer(false)}/>
      </Drawer>
    </Layout.Header>
  )
}
