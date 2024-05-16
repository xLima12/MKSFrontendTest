import GlobalStyle from "./GlobalStyle";
import StyledComponentsRegistry from "./lib/registry";
import HomePage from "./src/pages";

export default function Home() {
    return(
        <>
        <GlobalStyle />
          <StyledComponentsRegistry>
            <HomePage />
          </StyledComponentsRegistry>
        </>
    )
}