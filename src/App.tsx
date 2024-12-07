import { Suspense } from 'react'
import routes from './router'
import { Link, useRoutes } from 'react-router-dom'
import AppHeader from './components/app-header'
import AppFooter from './components/app-footer'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Suspense fallback="loading...">
        <main>{useRoutes(routes)}</main>
      </Suspense>
      <AppFooter />
    </div>
  )
}

export default App
