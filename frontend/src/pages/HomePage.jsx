// @ts-nocheck

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import SocialIcons from '../components/media components/SocialIcons';
import Navbar from '../components/ui/Navbar';
import HeroBanner from '../components/HeroBanner';
import NewsAndNotification from '../components/NewsAndNotification ';
import VisionAndMandate from '../components/VisionAndMandate';
import DirectorSection from '../components/DirectorSection';
import FacilitiesCarousel from '../components/FacilitiesCarousel';
import LatestUpdates from '../components/LatestUpdates';
import ImportantLinks from '../components/ImportantLinks';
import MediaSection from '../components/MediaSection';
import NavigationLinks from '../components/NavigationLinks';
import ReachUs from '../components/ReachUs';
import Footer from '../components/ui/Footer';
import Topbar from '../components/ui/Topbar';

function HomePage({ uploads, banner, visionMandate, facility, recentDevelopments, foundationDay, printMedia, updates, director, notifications, news, isAdmin }) {

  const navigate = useNavigate()

  useEffect(() => {
    if (isAdmin) {
      navigate('/admin');
    }
  }, [isAdmin, navigate]);

  return (

    <div className='className="min-h-screen w-full overflow-x-hidden flex flex-col items-center'>
      <Topbar />

      {/* Accessibility Widget */}
      {/* <button
        tabIndex={1}
        aria-label="Accessibility Options"
        data-uw-trigger="true"
        aria-haspopup="dialog"
        aria-controls="uw-main"
        aria-expanded="false"
        id="uw-widget-custom-trigger"
        className="uw-widget-custom-trigger flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 py-2 px-3 w-16"
      >
        <img
          alt="icon"
          loading="lazy"
          src="data:image/svg+xml,%0A%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1_1506)'%3E%3Cpath d='M16 7C15.3078 7 14.6311 6.79473 14.0555 6.41015C13.4799 6.02556 13.0313 5.47894 12.7664 4.83939C12.5015 4.19985 12.4322 3.49612 12.5673 2.81719C12.7023 2.13825 13.0356 1.51461 13.5251 1.02513C14.0146 0.535644 14.6383 0.202301 15.3172 0.0672531C15.9961 -0.0677952 16.6999 0.00151652 17.3394 0.266423C17.9789 0.53133 18.5256 0.979934 18.9101 1.55551C19.2947 2.13108 19.5 2.80777 19.5 3.5C19.499 4.42796 19.1299 5.31762 18.4738 5.97378C17.8176 6.62994 16.928 6.99901 16 7Z' fill='white'/%3E%3Cpath d='M27 7.05L26.9719 7.0575L26.9456 7.06563C26.8831 7.08313 26.8206 7.10188 26.7581 7.12125C25.595 7.4625 19.95 9.05375 15.9731 9.05375C12.2775 9.05375 7.14313 7.67875 5.50063 7.21188C5.33716 7.14867 5.17022 7.09483 5.00063 7.05063C3.81313 6.73813 3.00063 7.94438 3.00063 9.04688C3.00063 10.1388 3.98188 10.6588 4.9725 11.0319V11.0494L10.9238 12.9081C11.5319 13.1413 11.6944 13.3794 11.7738 13.5856C12.0319 14.2475 11.8256 15.5581 11.7525 16.0156L11.39 18.8281L9.37813 29.84C9.37188 29.87 9.36625 29.9006 9.36125 29.9319L9.34688 30.0112C9.20188 31.0206 9.94313 32 11.3469 32C12.5719 32 13.1125 31.1544 13.3469 30.0037C13.5813 28.8531 15.0969 20.1556 15.9719 20.1556C16.8469 20.1556 18.6494 30.0037 18.6494 30.0037C18.8838 31.1544 19.4244 32 20.6494 32C22.0569 32 22.7981 31.0162 22.6494 30.0037C22.6363 29.9175 22.6206 29.8325 22.6019 29.75L20.5625 18.8294L20.2006 16.0169C19.9387 14.3788 20.1494 13.8375 20.2206 13.7106C20.2225 13.7076 20.2242 13.7045 20.2256 13.7013C20.2931 13.5763 20.6006 13.2963 21.3181 13.0269L26.8981 11.0763C26.9324 11.0671 26.9662 11.0563 26.9994 11.0438C27.9994 10.6688 28.9994 10.15 28.9994 9.04813C28.9994 7.94625 28.1875 6.73813 27 7.05Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_1506'%3E%3Crect width='32' height='32' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A"
          className="w-7 h-7"
        />
        <span className="text-white font-medium">Accessibility Options</span>
      </button> */}

      <div className="flex flex-col items-center w-[100vw] min-h-screen ">
        <Navbar isAdmin={isAdmin} />
        {/* This is where dropdown will appear */}
        <div id="google_translate_element" ></div>

        <div className='grid grid-cols-2 h-[54vh] justify-evenly max-[600px]:flex-col max-[700px]:w-[100vw] max-[600px]:h-auto max-[700px]:grid-cols-1 pl-5'>
          <HeroBanner banners={banner} isAdmin={isAdmin} />
          <NewsAndNotification news={news} notifications={notifications} isAdmin={isAdmin} />
        </div>

        <div className='h-[5px] w-[97vw] bg-gray-300 rounded-md my-4'></div>

        <div className='w-full h-[80vh] flex items-center gap-3 justify-between max-[600px]:flex-col max-[600px]:h-auto  md:px-[6px] mt-2.5'>
          <VisionAndMandate visionMandate={visionMandate} isAdmin={isAdmin} />
          <DirectorSection director={director} isAdmin={isAdmin} />
        </div>

        <div className='h-[5px] w-[97vw] bg-gray-300 rounded-md my-4'></div>

        <div className='w-[100vw] h-[50vh]  max-[600px]:flex-col max-[600px]:h-auto max-[600px]:pb-2 mb-0 '>
          <LatestUpdates recentDevelopments={recentDevelopments} foundationDay={foundationDay} isAdmin={isAdmin} />
        </div>

        <div className='h-[5px] w-[97vw] bg-gray-300 rounded-md my-6 '></div>

        <div className='w-full h-[60vh] flex max-[600px]:flex-col max-[600px]:h-auto max-[600px]:pb-2 '>
          <FacilitiesCarousel facilities={facility} isAdmin={isAdmin} />
          <MediaSection printMedia={printMedia} updates={updates} isAdmin={isAdmin} />
        </div>

        <div className='h-[5px] w-[97vw] bg-gray-300 rounded-md my-4'></div>

        <div className='w-full h-[50vh] flex max-[600px]:h-[auto] max-[600px]:flex-col '>
          <ImportantLinks isAdmin={isAdmin} />
          <NavigationLinks isAdmin={isAdmin} />
        </div>

        <div className='w-full h-[35vh] flex items-center'>
          <ReachUs isAdmin={isAdmin} />
        </div>

        <Footer isAdmin={isAdmin} />
      </div>
    </div>
  );
}

export default HomePage;
