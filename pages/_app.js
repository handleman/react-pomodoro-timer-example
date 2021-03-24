import '../styles/globals.css'
import { Provider } from 'react-redux';
import store from '../store'
import { Layout } from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (

    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp
