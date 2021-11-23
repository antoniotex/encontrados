import { Provider } from 'react-redux'
import Layout from './layout';
import store from './store'

const App = () => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

export default App
