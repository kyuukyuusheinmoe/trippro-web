import NavBar from '@/containers/NavBar';
import HomeContent from '@/components/HomeContent';
import AboutContent from '@/components/AboutContent';


export default function Home() {
  return (
    <div className='w-full flex flex-col gap-4 '>
      {/** Nav Bar */}
      <NavBar/>
      <HomeContent/>
      <AboutContent/>
    </div>
  );
};
