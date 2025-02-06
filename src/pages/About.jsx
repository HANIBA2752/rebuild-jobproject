import React from 'react';
import '../components/About/About.css';
import "animate.css";
import logo from '../assets/Logo.png';
import TeamCard from '../components/About/TeamCard'; // import คอมโพเนนต์ TeamCard

function About() {
  return (
    <div>
      <div className="w-full h-50 overflow-hidden">
        <img
          src="https://images.pexels.com/photos/6804068/pexels-photo-6804068.jpeg"
          className="about-img dark:bg-neutral-600"
          alt="About Background"
        />
      </div>
      <div className="about-container">
        <h1 className="abt-title animate__animated animate__slideInUp">ABOUT US</h1>
        <div className="abt-logo">
          <img src={logo} alt="Logo" className='animate__animated animate__slideInUp' />
          <div>
            <h1 className='animate__animated animate__slideInUp dark:text-neutral-600'>Overview of JOB Explore Website</h1>
            <h2 className='animate__animated animate__slideInUp job-des dark:text-neutral-600'>
              JOB Explore is a website created for recent graduates and anyone interested in the career
              paths of computer engineers. It provides insights into the available job roles, their
              responsibilities, and the required skills to pursue these careers. Additionally, it summarizes
              which professions are currently in high demand.
            </h2>
          </div>
        </div>

        <div>
          <h1 className="creator-title animate__animated animate__fadeInUpBig">Meet Our Team</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* การ์ด 1 */}
            <TeamCard
              image="https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-1/365203602_6117542865039292_8290961317508704418_n.jpg?stp=c707.78.937.938a_dst-jpg_s200x200_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeEQ_zHy2aTeG7c1Kpcoh14qvExDsIJxt7e8TEOwgnG3tw9Hi6i4D_iMumox28d05iq6WLwTpaVi_kG0PXuJX4aa&_nc_ohc=8aOtAn9IKPQQ7kNvgFiZ72k&_nc_zt=24&_nc_ht=scontent.fbkk14-1.fna&_nc_gid=AqfO1BqkccEwyK_SeIxVwRa&oh=00_AYAZ7xFZr9l2lv6qlu0Px1w1mIgWHIgGjEuAR8xcigL-CA&oe=67A96CBB"
              name="Kritsadagorn Punnapanich "
              description=" "
              facebook="https://www.facebook.com/kritsadagorn"
              instagram="https://www.instagram.com/k.kritx_/"
              github="https://github.com/kritsadagorn"
              email="catsamotyba@gmail.com"
              phone="093-3781551"
            />
            {/* การ์ด 2 */}
            <TeamCard
              image="https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-6/453739155_122116306940377256_5009704031974300276_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHV5wpfjaAuFw5PfEUZIyw0E1tuvOcC_xsTW2685wL_G1tNSIeG9u5__EpC2fnoZVURSzIggP4_Drv6wGutTh6V&_nc_ohc=IC4zUKI9uLEQ7kNvgEF7wY-&_nc_zt=23&_nc_ht=scontent.fbkk14-1.fna&_nc_gid=AhV5uMSViBHJyQmXccDCUUD&oh=00_AYBuMnbm0d3P_zkoD_wGg2sV5hjCZD_ljRZ5-Qyx9JguBg&oe=67A966C6"
              name="Theeraphat Gunthong"
              description=" "
              facebook="https://www.facebook.com/theeraphat.gunthong"
              instagram="https://www.instagram.com/perish_sunflower/"
              github="https://github.com/TheerapatGunthog"
              email="Bellbelieve.work@gmail.com"
              phone="083-2152319"
            />
            {/* การ์ด 3 */}
            <TeamCard
              image="https://scontent.fbkk14-1.fna.fbcdn.net/v/t39.30808-1/369941466_6610273249055642_3834850599472434404_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=104&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeGNmftxiCpcLPzjPe5hDe-vXWFf4bo1SexdYV_hujVJ7FKumTz-rBmziAvh0dYs1EYlP3hVQaXkIHugZDs5Ag62&_nc_ohc=fPt3VKor4T8Q7kNvgGaQYdx&_nc_zt=24&_nc_ht=scontent.fbkk14-1.fna&_nc_gid=ABz71L6w66aBTEu27YRoa1S&oh=00_AYDV9O07g0mNeLkX8hezXIlZ2pdQFC6tvT4U5mumPCR9wg&oe=67A9510E"
              name="Wuttipat Srikham"
              description=" "
              facebook="https://www.facebook.com/profile.php?id=100002190974853"
              instagram="https://instagram.com/michaellee"
              github="https://github.com/michaellee"
              email="wuttipat2004@gmail.com"
              phone="095-134-1949"
            />
          </div>
        </div>
        <h1 className='w-full text-4xl mt-40 my-10 text-neutral-700 flex justify-center items-center font-semibold'>Thank You!! For Visit Our Site</h1>
      </div>
    </div>
  );
}

export default About;
