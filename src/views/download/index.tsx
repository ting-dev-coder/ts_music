import { memo } from 'react'
import type { FC, ReactNode } from 'react'

interface IProps {
  children?: ReactNode
}

const Download: FC<IProps> = () => {
  return <div>Template</div>
}

export default memo(Download)
