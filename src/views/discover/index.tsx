import { Link, Outlet } from 'react-router-dom'
import { memo, Suspense, useState, useEffect } from 'react'
import httpRequest from '@/service'
import type { FC, ReactNode } from 'react'
import NavBar from './components/nav-bar'
import { Button } from 'antd'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <NavBar />

      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
