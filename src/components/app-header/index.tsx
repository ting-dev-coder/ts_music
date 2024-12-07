import { Link, NavLink } from 'react-router-dom'
import { memo } from 'react'
import type { FC, ReactNode } from 'react'
import { HeaderLeft, HeaderRight, HeaderWrapper } from './style'
import { ReactComponent as Logo } from '@/assets/img/logo.svg'
import { Header } from '@/assets/constants'
import { SearchOutlined } from '@ant-design/icons'
import { Input } from 'antd'

interface IProps {
  children?: ReactNode
}

const AppFooter: FC<IProps> = () => {
  function showLabel(title: any) {
    if (title.type === 'path') {
      return <NavLink to={title.link}>{title.label}</NavLink>
    } else {
      return (
        <a href={title.link} target="_blank">
          {title.label}
        </a>
      )
    }
    return
  }
  return (
    <HeaderWrapper>
      <div className="content container">
        <HeaderLeft>
          {/* <img className="logo" src="assets/img/logo.svg" /> */}
          <Logo />
          <ul>
            {Header.map((title, idx) => (
              <li key={`link-${idx}`}>{showLabel(title)}</li>
            ))}
          </ul>
        </HeaderLeft>
        <HeaderRight>
          <Input
            className="search"
            placeholder="Play something?"
            prefix={<SearchOutlined />}
          />
          <span>Login</span>
        </HeaderRight>
      </div>
      <div className="divider" />
    </HeaderWrapper>
  )
}

export default memo(AppFooter)
