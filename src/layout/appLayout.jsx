import NavBar from "./navbar";
import Footer from "./footer";
function AppLayout({ children }) {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}

export default AppLayout;
