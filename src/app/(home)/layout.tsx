'use client'

import { ReactNode, CSSProperties } from 'react'
import { Layout } from 'antd'
const { Header: AntdHeader, Sider: AntdSider, Content } = Layout
import Header from '../components/common/Header'

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
            left
          </AntdSider>
          <Content style={contentStyle}>{children}</Content>
        </Layout>
      </Layout>
      <AntdSider style={rightSiderStyle} width={300}>
        right
      </AntdSider>
    </Layout>
  )
}

export default PageLayout
