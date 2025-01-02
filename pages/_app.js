import '../styles/globals.css'
import Loyout from "../components/layout/Layout"
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
