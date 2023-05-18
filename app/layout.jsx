import "@styles/globals.css";
import Nav from "@components/Nav";
import Footer from "@components/Footer";
export const metadata = {
  title: "AIO - All In One Management System",
  description: "Multiple Management System",
};
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
            <Nav/>
            {children}
            <Footer/>
            </main>
      </body>
    </html>
  );
};

export default RootLayout;
