import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Hero from '../../components/SocialWorkerPageComponents/Hero';
import Vision from '../../components/SocialWorkerPageComponents/vision';
import SocialWork from '../../components/SocialWorkerPageComponents/socialwork';

function Page() {
  return (
    <div>
      <Navbar />
      {/*Hero Section */}
      <Hero />
      {/* Vision  Section */}
      <Vision />
      {/* Social Work Section */}
     <SocialWork />

      <Footer />
    </div>
  );
}

export default Page;
