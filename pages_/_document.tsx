import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { Helmet, HelmetData } from 'react-helmet';
import MetaTags from '../components/meta-tags';

class MyDocument extends Document<{ helmet: HelmetData }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, helmet: Helmet.renderStatic() }
  }

  // Helmet example: https://github.com/vercel/next.js/pull/1264/files
  // should render on <html>
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  // should render on <head>
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter(el => el !== 'htmlAttributes') // remove htmlAttributes which is not for <head> but for <html>
      .map(el => this.props.helmet[el].toComponent())
  }

  get helmetJsx() {
    return (<Helmet
      htmlAttributes={{ lang: 'en' }}
      defaultTitle="nguyenquannnn.xyz"
      title='Hello next.js!',
      meta={[
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]}>

      <link rel="shortcut icon" href="/logo/favicon.ico" />
      {...MetaTags() }
    </Helmet>)
  }

  render() {
    return (
      <Html {...this.helmetHtmlAttrComponents}>
        <Head>
          {this.helmetJsx}
          {this.helmetHeadComponents}
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