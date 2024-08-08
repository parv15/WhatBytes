
import "./globals.css";



export const metadata = {
  title: "DashBoard",
  description: "DashBoard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
