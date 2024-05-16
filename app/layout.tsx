import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "MKS Sistema",
  description: "Created by Felipe Lima",
};

const font = Montserrat({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
