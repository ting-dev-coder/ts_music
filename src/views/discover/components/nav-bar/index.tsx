import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { NavWrapper } from './style'
import { DiscoverMenu } from '@/assets/constants'

interface IProps {
  children?: ReactNode
}

const PREFIX_URL = '/discover'
const NavBar: FC<IProps> = () => {
  return (
    <NavWrapper>
      <div className="container nav">
        {DiscoverMenu.map((title, idx) => (
          <div className="item" key={`discover-${idx}`}>
            <NavLink to={title.link}>{title.label}</NavLink>
          </div>
        ))}
      </div>
    </NavWrapper>
  )
}

export default memo(NavBar)
