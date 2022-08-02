import { MainContainer } from "../components/MainContainer";
import "../styles/global.css"

function MyApp({ Component, pageProps }) {
  return (
    <MainContainer>
      <Component {...pageProps} />
    </MainContainer>
  ); 
}

export default MyApp;
