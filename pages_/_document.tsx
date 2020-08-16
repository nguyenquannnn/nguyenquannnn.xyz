import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { Helmet, HelmetData } from "react-helmet";

class MyDocument extends Document<{ helmet: HelmetData }> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps, helmet: Helmet.renderStatic() };
  }
  
  // Helmet example: https://github.com/vercel/next.js/blob/canary/examples/with-react-helmet/pages/_document.js
  // should render on <html>
  get helmetHtmlAttrComponents() {
    return this.props.helmet.htmlAttributes.toComponent()
  }

  // should render on <body>
  get helmetBodyAttrComponents() {
    return this.props.helmet.bodyAttributes.toComponent()
  }

  // should render on <head>
  get helmetHeadComponents() {
    return Object.keys(this.props.helmet)
      .filter((el) => el !== 'htmlAttributes' && el !== 'bodyAttributes')
      .map((el) => this.props.helmet[el].toComponent())
  }

  render() {
    return (
      <Html {...this.helmetHtmlAttrComponents}>
      <Head>{this.helmetHeadComponents}</Head>
        <body  {...this.helmetBodyAttrComponents} className="bg-white text-black border-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
