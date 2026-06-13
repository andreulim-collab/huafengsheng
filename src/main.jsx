import { StrictMode, Component, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

const LegalPage = lazy(() => import('./pages/LegalPage.jsx'))
const TosPage = lazy(() => import('./pages/TosPage.jsx'))

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }
  static getDerivedStateFromError(error) {
    return { error }
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ padding: '2rem', fontFamily: 'monospace', background: '#fff', color: '#c00' }}>
          <h2>React Error — share this with Claude:</h2>
          <pre style={{ whiteSpace: 'pre-wrap', fontSize: '13px' }}>
            {this.state.error.message}{'\n\n'}{this.state.error.stack}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/privacy" element={<Suspense fallback={null}><LegalPage /></Suspense>} />
          <Route path="/terms" element={<Suspense fallback={null}><TosPage /></Suspense>} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  </StrictMode>
)
