import Header from '../componants/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
