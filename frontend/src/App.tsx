import { Provider } from 'react-redux'
import Routes from './pages/routes'
import store from './store'

const App = () => {
  return (
    <div>

    <Provider store={store}>
      <Routes />
    </Provider>
    </div>
  )
}

export default App
