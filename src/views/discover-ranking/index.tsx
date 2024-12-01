import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const DiscoverRanking: FC<IProps> = () => {
  return <div>DiscoverRanking</div>
}

export default memo(DiscoverRanking)
