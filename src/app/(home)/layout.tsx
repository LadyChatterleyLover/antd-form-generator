'use client'

import { ReactNode, CSSProperties } from 'react'
import { Layout } from 'antd'
const { Header: AntdHeader, Sider: AntdSider, Content } = Layout
import Header from '../components/header/Header'
import LeftSider from '../components/leftSider/LeftSider'
import RightSider from '../components/rightSider/RightSider'

const headerStyle: CSSProperties = {
  height: 50,
  padding: 0,
  backgroundColor: '#fff',
  borderBottom: '1px solid #ddd',
}

const leftSiderStyle: CSSProperties = {
  height: '100%',
  backgroundColor: '#fff',
  borderRight: '1px solid #ddd',
}

const rightSiderStyle: CSSProperties = {
  height: '100%',
  backgroundColor: '#fff',
  borderLeft: '1px solid #ddd',
}

const contentStyle: CSSProperties = {
  height: '100%',
  backgroundColor: '#fff',
  padding: 20,
}

const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Layout style={{ height: '100%' }}>
      <Layout>
        <AntdHeader style={headerStyle}>
          <Header></Header>
        </AntdHeader>
        <Layout hasSider>
          <AntdSider style={leftSiderStyle} width={260}>
            <LeftSider></LeftSider>
          </AntdSider>
          <Content style={contentStyle}>{children}</Content>
        </Layout>
      </Layout>
      <AntdSider style={rightSiderStyle} width={300}>
        <RightSider></RightSider>
      </AntdSider>
    </Layout>
  )
}

export default PageLayout
