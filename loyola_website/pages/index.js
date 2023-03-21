import Announcements from '../components/announcementsMarquee/Announcements';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import Courses from '../components/courses/Courses';
import WelcomeImage from '../components/welcomeImage/WelcomeImage';
import WelcomeText from '../components/welcomeText/WelcomeText';
import SupportAssistance from '../components/supportAssistance/SupportAssistance';
import { Inter } from 'next/font/google'

import FeaturedRecentEvents from '../components/featuredRecentEvents/FeaturedRecentEvents';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Navbar/>
     <WelcomeImage/>
     <Announcements/>
     <WelcomeText/>
     <FeaturedRecentEvents/>
     <Courses/>
     <SupportAssistance/>
     <Footer/>
     
    </>
  )
}