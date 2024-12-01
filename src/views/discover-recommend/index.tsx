import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const DiscoverRecommend: FC<IProps> = () => {
  return <div>DiscoverRecommend</div>
}

export default memo(DiscoverRecommend)
