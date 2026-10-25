import "../globals.css";
import MainHeader from "@/components/header/main-header";

export const metadata = {
  title: "Pressly - News",
  description: "Create Next App by Tessa Mountain",
  generator: "Next.js",
  applicationName: "News",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "TESSA" }, { name: "TESSA", url: "Tessa24.com" }],
  creator: "Ramin Maghsoudi",
  publisher: "DSC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeader />
          {children}
        </div>
      </body>
    </html>
  );
}
