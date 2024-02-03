import { Layout } from 'antd';
import AppHeader from './AppHeader';
import AppContent from './AppContent';
import AppSider from './AppSider';
import React from 'react'

export default function AppLayout() {
  return (
    <Layout>
      <AppHeader/>
      <Layout>
        <AppSider/>
        <AppContent/>
      </Layout>
    </Layout>
  )
}
