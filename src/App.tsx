import { Suspense } from 'react'
import routes from './router'
import { Link, useRoutes } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">發現音樂</Link>
        <Link to="/mine">我的音樂</Link>
        <Link to="/focus">關注</Link>
        <Link to="/download">下載客戶端</Link>
      </div>
      <Suspense fallback="loading...">
        <main>{useRoutes(routes)}</main>
      </Suspense>
    </div>
  )
}

export default App
