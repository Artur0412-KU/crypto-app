import React from 'react'
import { Flex, Tag, Typography, Divider } from 'antd';
import CoinInfo from './Layout/CoinInfo';

export default function CoinInfoModal({coin}) {
  return (
    <>
    <CoinInfo coin={coin} withSymbol/>
    <Divider/>
    <Typography.Paragraph style={{display: 'flex',  gap: 20}}>
        <Typography.Text strong>1 hour:</Typography.Text>
        <Tag color={coin.priceChange1h > 0 ? 'green' : 'red'}>{coin.priceChange1h}%</Tag>
    </Typography.Paragraph>

    <Typography.Paragraph style={{display: 'flex',  gap: 20}}>
        <Typography.Text strong>1 day:</Typography.Text>
        <Tag color={coin.priceChange1d > 0 ? 'green' : 'red'}>{coin.priceChange1d}%</Tag>   
    </Typography.Paragraph>

    <Typography.Paragraph style={{display: 'flex',  gap: 20}}>
        <Typography.Text strong>1 week:</Typography.Text>
        <Tag color={coin.priceChange1w > 0 ? 'green' : 'red'}>{coin.priceChange1w}%</Tag> 
    </Typography.Paragraph>
   
    <Typography.Paragraph>
       <Typography.Text strong>Price: </Typography.Text>
       {coin.price.toFixed(2)}$
    </Typography.Paragraph>

    <Typography.Paragraph>
       <Typography.Text strong>Price BTC: </Typography.Text>
       {coin.priceBtc.toFixed(2)}
    </Typography.Paragraph>

    <Typography.Paragraph>
       <Typography.Text strong>Market Capitalization: </Typography.Text>
       {coin.marketCap.toFixed(0)}$
    </Typography.Paragraph>
    
    {coin.contractAddress && <Typography.Paragraph>
       <Typography.Text strong>Contract Adress: </Typography.Text>
       {coin.contractAddress}
    </Typography.Paragraph>}
    </>
    
  )
}
