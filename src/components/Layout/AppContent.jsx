import React from 'react'
import { Layout, Typography } from 'antd';
import { useCrypto } from '../../context/CryptoContext';
import PortfolioChart from './PortfolioChart';
import AssetsTable from './AssetsTable';

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#001529',
};

export default function AppContent() {
  const {assets, crypto} = useCrypto()
  const cryptoPriceMap = crypto.reduce((acc, coin) => {
    acc[coin.id] = coin.price;
    return acc;
  }, {})

  return (
    <Layout.Content style={contentStyle} >
      <Typography.Title level={3} style={{lextAlign: 'left', color: '#fff'}}>
        Portfolio: {' '}
        {assets.map((asset )=> asset.amount * cryptoPriceMap[asset.id])
        .reduce((acc, value) => (acc+=value), 0)
        .toFixed(2)}$
      </Typography.Title>
      <PortfolioChart/>
      <AssetsTable/>
    </Layout.Content>
  )
}
