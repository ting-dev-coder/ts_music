import httpRequest from '@/service'
import { useAppDispatch, useAppSelector } from '@/store'
import { Button } from 'antd'
import { memo, useEffect, useState } from 'react'
import type { FC, ReactNode } from 'react'
import { getPlaylistAction } from './store'
import { RecommendWrapper } from './style'

interface IProps {
  children?: ReactNode
}

const DiscoverRecommend: FC<IProps> = () => {
  const dispatch = useAppDispatch()
  const {
    'k-pop': kPop,
    popular,
    'hip-hop': hipHop,
    hitMandarin
  } = useAppSelector((state) => state.recommend)

  useEffect(() => {
    dispatch(getPlaylistAction('k-pop'))
    dispatch(getPlaylistAction('hip-hop'))
  }, [])

  return (
    <div className="container">
      <RecommendWrapper>
        <div>
          <h4>Hip hop</h4>

          {hipHop.map((song, idx) => (
            <div key={`hipHop-${idx}`}>{song.name}</div>
          ))}
        </div>
      </RecommendWrapper>
    </div>
  )
}

export default memo(DiscoverRecommend)
