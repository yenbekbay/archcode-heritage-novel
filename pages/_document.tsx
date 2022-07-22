import {Html, Head, Main, NextScript} from 'next/document'

export default function MyDocument() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <GoatCounter />
      </body>
    </Html>
  )
}

function GoatCounter() {
  return (
    <script
      data-goatcounter="https://archcode-heritage-novel.goatcounter.com/count"
      async
      src="//gc.zgo.at/count.js"
    />
  )
}
