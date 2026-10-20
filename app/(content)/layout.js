import MainHeaderpage from "@/components/header/main-header";
import "../globals.css";

// export const metadata = {
//   title: "Meals - Create Next App",
//   description: "Delicious meals, shared by a food-loving community",
// };
export const metadata = {
  title: "Next.js Page Routing & Rendering",
  description: "Learn how to route to different pages.",
  generator: "Next.js",
  applicationName: "Meals",
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

export default function ContentLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="page">
          <MainHeaderpage />
          {children}
        </div>
      </body>
    </html>
  );
}
