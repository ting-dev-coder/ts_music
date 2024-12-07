import { BASE_URL, TIME_OUT } from './config'
import BaseRequest from './request'

const httpRequest = new BaseRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: {
    Authorization:
      'Bearer BQAGDYneMSIQsq-YylDWAGbLhf9D3GIyDH8AbiU3SJjF6RFpmpCyFb5PA-QWA3lDJsF2aDtLjbrC6Q7yzu7v3-QPJI8v5770__dRt2J2Xbm8D2J2YENcPVASH0kmBOtmhORcEFYq5kTZnFyST_NCfShjYmPUP_3p74uS8SMEoLVCGIDvYYOQUv_38OtM2pGLG4exwSuZGcHU_odUA2eTcvobVZHm0Nq5emVoxmEVk1qD8I7HIO8gNAKiBAlGhMC61Sr5HZukyyu4mzJhLlFYvaYlsTwRf7V0yOZOxHWSvJWnt3AkoviBciLmJePEtD6ouejcvpNmvLH0P9QXIp85ujEx14abYZU'
  },
  interceptors: {
    requestSuccessFn(config) {
      return config
    }
  }
})

export default httpRequest
