import * as React from "react";
import Head from "next/head";

type Props = {
  title?: string
}
const icon = "/images/logos/logo1.png";

const Layout: React.FunctionComponent<Props> = ({children, title = 'Latamautos'}) => (
  <div>
    <Head>
      <title>{title}</title>
      <link rel="icon" href={icon}/>
      <link rel="manifest" href="/manifest.json"/>
      <meta name="apple-mobile-web-app-capable" content="yes"/>
      <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
      <meta name="apple-mobile-web-app-title" content="PWA APP"/>
      <link rel="apple-touch-icon" href="/images/icon/icon-128x128.png"/>
      <meta name="description" content="Mi primera applicación PWA"/>
      <meta name="theme-color" content="#e0252d"/>
      <script async custom-element="amp-install-serviceworker"
              src="https://cdn.ampproject.org/v0/amp-install-serviceworker-0.1.js"/>
      <script src="/install-pwa.js"/>
    </Head>
    <amp-install-serviceworker src="/service-worker.js" layout="nodisplay"/>
    <button id="butInstallPWA" aria-label="Install" hidden></button>
    {children}
    
    
  </div>
);

export default Layout;