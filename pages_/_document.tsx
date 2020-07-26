import Document, { Html, Head, Main, NextScript } from 'next/document'
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/logo/favicon.ico"/>
        </Head>
        <body className="bg-white text-black border-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument