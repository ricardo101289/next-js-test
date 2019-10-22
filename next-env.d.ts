/// <reference types="next" />
/// <reference types="next/types/global" />
declare namespace JSX {
  interface AmpServiceWorker {
    src?: string,
    layout?: string
  }
  
  interface AmpImg {
    alt?: string;
    src?: string;
    width?: string;
    height?: string;
    layout?: string;
  }
  
  interface AmpScript {
    children?: React.ReactNode
    width?: string;
    height?: string;
    layout?: string;
    script?: string;
    src?: string;
  }
  
  interface IntrinsicElements {
    'amp-img': AmpImg;
    'amp-install-serviceworker': AmpServiceWorker;
    'amp-script': AmpScript;
  }
}