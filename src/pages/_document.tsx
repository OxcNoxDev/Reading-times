import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="header" style={{background : 'red',height:'80px',display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <div className="time" style={{color:'white',margin:'0px 20px 0px 20px',fontSize:'30px'}}>Time</div>
          <div className="disboard" style={{color:'white',margin:'0px 20px 0px 20px',fontSize:'30px'}}>Disboard</div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
