import { AppProps } from "next/app";

import '../styles/index.scss'

function MyApp({ Component }: AppProps) {
  return <Component />;
}

export default MyApp;
