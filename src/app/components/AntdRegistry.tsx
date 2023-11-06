'use client'

import React from 'react'
import { App, ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import type Entity from '@ant-design/cssinjs/es/Cache'
import { useServerInsertedHTML } from 'next/navigation'

const StyledComponentsRegistry = ({ children }: React.PropsWithChildren) => {
  const cache = React.useMemo<Entity>(() => createCache(), [])
  useServerInsertedHTML(() => <style id='antd' dangerouslySetInnerHTML={{ __html: extractStyle(cache, true) }} />)
  return (
    <StyleProvider cache={cache}>
      <ConfigProvider locale={zhCN}>
        <App>{children}</App>
      </ConfigProvider>
    </StyleProvider>
  )
}

export default StyledComponentsRegistry
