import MasterPage from './layout/MasterPage/MasterPage'
import Routes from './Routes'
import { ThemeProvider } from './providers/ThemeProvider'

const App = () => {
  return (
    <ThemeProvider>
      <MasterPage>
        <Routes />
      </MasterPage>
    </ThemeProvider>
  )
}

export default App
