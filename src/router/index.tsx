import { Navigate, RouteObject } from 'react-router-dom'
import { lazy } from 'react'

const Download = lazy(() => import('@/views/download'))
const Discover = lazy(() => import('@/views/discover'))
const DiscoverArtist = lazy(() => import('@/views/discover-artist'))
const DiscoverBroadcast = lazy(() => import('@/views/discover-broadcast'))
const DiscoverRanking = lazy(() => import('@/views/discover-ranking'))
const DiscoverRecommend = lazy(() => import('@/views/discover-recommend'))
const DiscoverSongs = lazy(() => import('@/views/discover-songs'))

const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const NotFound = lazy(() => import('@/views/NotFound'))

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to="/home" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/artist" />
      },
      {
        path: '/discover/artist',
        element: <DiscoverArtist />
      },
      {
        path: '/discover/broadcast',
        element: <DiscoverBroadcast />
      },
      {
        path: '/discover/ranking',
        element: <DiscoverRanking />
      },
      {
        path: '/discover/recommend',
        element: <DiscoverRecommend />
      },
      {
        path: '/discover/songs',
        element: <DiscoverSongs />
      }
    ]
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/mine',
    element: <Mine />
  },
  {
    path: '/download',
    element: <Download />
  },
  {
    path: '/*',
    element: <NotFound />
  }
  // {
  //   path: '/*',
  //   element: <NotFound />
  // }
]

export default routes
