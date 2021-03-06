const CustomeError = ( { statusCode }) => {
  if (statusCode === 404) {
    return <h1>The resource was not found</h1>
  }

  return <h2>Wrong!</h2>
}

CustomeError.getInitialProps = ( { err, res }) => {
  return { statusCode: res ? res.statusCode : err ? err.statusCode : 404 }
}

export default CustomeError;