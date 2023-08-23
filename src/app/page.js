"use client"
import { useEffect } from 'react';
import { Footer, NavBar } from '@/containers';
import HomeContent from '@/views/HomeContent';
import AboutContent from '@/views/AboutContent';
import ChallengeContent from '@/views/ChallengeContent';
import DesktopMobileView from '@/views/DesktopMobileView';

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 1,
}
export default function Home({posts}) {
  useEffect(() => {
    const animatedSections = document.querySelectorAll('.animated-section');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
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


