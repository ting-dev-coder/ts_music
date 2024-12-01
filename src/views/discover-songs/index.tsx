import { memo } from 'react'
import type { FC, ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const DiscoverSongs: FC<IProps> = () => {
  return <div>DiscoverSongs</div>
}

export default memo(DiscoverSongs)
