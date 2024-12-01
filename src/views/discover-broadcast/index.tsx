import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const DiscoverBroadcast: FC<IProps> = () => {
  return <div>DiscoverBroadcast</div>
}

export default memo(DiscoverBroadcast)
