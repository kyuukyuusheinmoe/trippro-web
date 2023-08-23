import NavBar from '@/containers/NavBar';
import HomeContent from '@/components/HomeContent';
import AboutContent from '@/components/AboutContent';
import ChallengeContent from '@/components/ChallengeContent';
import DesktopMobileView from '@/components/DesktopMobileView';
import Footer from '@/components/Footer';


export default function Home({posts}) {
  return (
    <div className='w-full flex flex-col gap-4 '>
      <NavBar/>
      <HomeContent/>
      <AboutContent/>
      <ChallengeContent/>
      <DesktopMobileView/>
      <Footer/>
    </div>
  );
};


