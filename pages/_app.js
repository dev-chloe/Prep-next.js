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

      :global(form) {
        display:flex;
        width: 100%;
        flex-direction: column;
        text-align: center;
      }

      :global(input) {
        margin-bottom: 10px;
        padding: 10px;
        width: 100%;
        box-sizing:border-box;
      }

      :global(button) {
        padding: 10px;
        background-color: #000;
        cursor:pointer;
        border: none;
        color: #fff;
      }

      :global(.error) {
        padding-bottom: 10px;
        color: red;
      }

      :global(.link) {
        padding-top: 10px;
        color: #000;
      }
    `} 

    </style>
    </>
  )
}

export default MyApp
