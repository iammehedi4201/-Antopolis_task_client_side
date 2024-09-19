import Footer from "@/components/Shared/Footer";
import Navbar from "@/components/Shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen p-4"> {children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
