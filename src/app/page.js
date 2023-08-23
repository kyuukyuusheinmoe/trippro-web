"use client"
import { useEffect } from 'react';
import NavBar from '@/containers/NavBar';
import HomeContent from '@/components/HomeContent';
import AboutContent from '@/components/AboutContent';
import ChallengeContent from '@/components/ChallengeContent';
import DesktopMobileView from '@/components/DesktopMobileView';
import Footer from '@/components/Footer';

const options = {
  root: null,
  rootMargin: "300px",
  threshold: 1,
}
export default function Home({posts}) {
  useEffect(() => {
    const animatedSections = document.querySelectorAll('.animated-section');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, options);

    animatedSections.forEach(section => {
      observer.observe(section);
    });
  }, []);
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


