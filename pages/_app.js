import Header from '../componants/Header'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Header />
    <Component {...pageProps} />
    <style jsx>{`
      @font-face {
        font-family: 'Kufam';
        src: url('/font/Kufam/static/Kufam-Regular.ttf') format('truetype');
      }

      :global(html) {
        font-family: 'Kufam';
      }
    `} 

    </style>
    </>
  )
}

export default MyApp
