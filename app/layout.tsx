import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import GlobalStyle from "./GlobalStyle";
import Home from "./src/pages/index";

export const metadata: Metadata = {
  title: "MKS Sistema",
  description: "Created by Felipe Lima",
};

const font = Montserrat({ subsets: ["latin"] });

export default function RootLayout({}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
          <GlobalStyle />
          <StyledComponentsRegistry>
            <Home />
          </StyledComponentsRegistry>
      </body>
    </html>
  );
}
