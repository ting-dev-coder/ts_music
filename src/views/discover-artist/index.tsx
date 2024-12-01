import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const DiscoverArtist: FC<IProps> = () => {
  return <div>DiscoverArtist</div>
}

export default memo(DiscoverArtist)
