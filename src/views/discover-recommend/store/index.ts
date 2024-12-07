import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCategoryPlaylist } from '../service'

// 我使用redux toolkit, 調用多個api的話使用useSelector該怎麼用？
interface RecommendState {
  'k-pop': any[]
  'hip-hop': any[]
  popular: any[]
  hitMandarin: any[]
}

interface PayloadState {
  type: keyof RecommendState
  playlist: any[]
}

const initialState: RecommendState = {
  'k-pop': [],
  'hip-hop': [],
  popular: [],
  hitMandarin: []
}

const playlistSlice = createSlice({
  name: 'discover-recommend',
  initialState,
  reducers: {
    changeCategoryAction(state, action: { payload: PayloadState }) {
      const { type, playlist } = action.payload
      console.log(action)
      state[type] = playlist
    }
  }
})

export const getPlaylistAction = createAsyncThunk(
  'playlist/getPlaylist', // action type
  async (genre: keyof RecommendState, { dispatch }) => {
    const res = await getCategoryPlaylist(genre)
    console.log(res.tracks)
    dispatch(
      changeCategoryAction({
        type: genre,
        playlist: res.tracks?.items || []
      })
    )
    return res.track?.items || []
  }
)

export const { changeCategoryAction } = playlistSlice.actions
export default playlistSlice.reducer
