import Head from "next/head";
import "bootstrap/dist/css/bootstrap.min.css";
import { SSRProvider } from "@restart/ui/ssr";
import Layout from "../layouts/Layout";
import { AuthUserProvider } from "../contexts/AuthenticationContext";
import { CicloProvider } from "../contexts/CicloContext";
//import initAuth from "../Firebase/initAuth";

//initAuth();

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Head>
        <title>Ranqueamento Estâncias SP</title>
        <meta
          name="description"
          content="Aplicativo para cadastro de informações para cadastro de estâncias turísticas"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicons.png" />
      </Head>
      <CicloProvider>
        <AuthUserProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthUserProvider>
      </CicloProvider>
    </SSRProvider>
  );
}

export default MyApp;
