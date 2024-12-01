import { Link, Outlet } from 'react-router-dom'
import { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const PREFIX_URL = '/discover'
const Discover: FC<IProps> = () => {
  return (
    <div>
      <div>
        <Link to={`${PREFIX_URL}/recommend`}>推薦</Link>
        <Link to={`${PREFIX_URL}/ranking`}>排行榜</Link>
        <Link to={`${PREFIX_URL}/songs`}>歌單</Link>
        <Link to={`${PREFIX_URL}/broadcast`}>主播電台</Link>
        <Link to={`${PREFIX_URL}/artist`}>歌手</Link>
      </div>
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  )
}

export default memo(Discover)
