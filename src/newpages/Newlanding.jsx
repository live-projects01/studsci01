import React, { useState } from 'react';
import Banner from '../newcomponents/Banner';
import Navbar1 from '../newcomponents/Navbar1';
import AutoCarousel from '../newcomponents/AutoCarousel';
import EventSlider from './EventSlider';
import Maintext from '../newcomponents/Maintext';
import Footer1 from '../newcomponents/Footer1';
import UpcomingSlider from './UpcomingSlider';

const Newlanding = () => {
  // State to track the selected language
  const [language, setLanguage] = useState('english');

  // Language content for different components
  const content = {
    english: {
      maintext: {
        mission: "To build a network of students from selected schools and colleges in coastal Karnataka and Kerala who are trained and equipped to monitor document, and research environmental and societal changes caused by climate change. By fostering collaboration between students, teachers, researchers, NGOs, and the public, the ‘Student-Scientist’ project aims to generate grassroots-level data, communicate scientific information, and make coastal communities resilient and empowered to make evidence-based decisions to adapt to the challenges posed by climate change and natural disasters."
      },
      banner: {
        top: "National Institute of Advanced Studies (NIAS) Indian Institute of Science Campus, Bangalore",
        heading: "Student Scientist",
        description: "Welcome to student scientist"
      },
      navbar: {
        home: "Home",
        about: "About",
        contact: "Contact",
        gallery: "Gallery",
        team: "Our Team",
        login: "Login"
      },
      eventslider: {
        language: "English",
        heading: "Latest Events"
      },
      upcoming: {
        language: "English",
        heading: "Upcoming Events"
      },
      footer:{
        heading: "Student-Scientist is financially supported by Department of Science & technology, Government of India CO/B/FP/G139/2021 (G) (NCSTC)",
        facebook: "Facebook",
        niaswebsite: "NIAS Website",
        contact: "Contact",
        copyright: "©2025 student-scientistTM.All rights Reserved",
        about: "About"

      }
    },
    kannada: {
      maintext: {
        mission: "ಹವಾಮಾನ ಬದಲಾವಣೆಯಿಂದ ಉಂಟಾಗುವ ಪರಿಸರ ಮತ್ತು ಸಾಮಾಜಿಕ ಬದಲಾವಣೆಗಳನ್ನು ಪರಿಶೀಲನೆ, ದಾಖಲಾತಿ ಮತ್ತು ಸಂಶೋಧನೆ ಮಾಡುವಂತೆ ತರಬೇತಿ ಪಡೆದ ಹಾಗು ಸಿದ್ಧತೆಗೊಂಡ ಕರಾವಳಿ ಕರ್ನಾಟಕ ಮತ್ತು ಕೇರಳದ ಆಯ್ದ ಶಾಲೆಗಳ ಮತ್ತು ಕಾಲೇಜುಗಳ ವಿದ್ಯಾರ್ಥಿಗಳ ಜಾಲವನ್ನು ರಚಿಸುವುದು. ವಿದ್ಯಾರ್ಥಿಗಳು, ಶಿಕ್ಷಕರು, ಸಂಶೋಧಕರು, ಏನ್ ಜಿ ಓ ಗಳು (NGO) ಮತ್ತು ಸಾರ್ವಜನಿಕರ ನಡುವಿನ ಸಹಯೋಗವನ್ನು ಬೆಳೆಸುವ ಮೂಲಕ, 'ವಿದ್ಯಾರ್ಥಿ-ವಿಜ್ಞಾನಿ' ಯೋಜನೆಯು ತಳಮಟ್ಟದ ದತ್ತಾಂಶವನ್ನು ಸಂಗ್ರಹಿಸುವ, ವೈಜ್ಞಾನಿಕ ಮಾಹಿತಿಯನ್ನು ಸಂವಹನ ಮಾಡುವ, ಹವಾಮಾನ ಬದಲಾವಣೆ ಮತ್ತು ನೈಸರ್ಗಿಕ ವಿಪತ್ತುಗಳಿಂದ ಉಂಟಾಗುವ ಸವಾಲುಗಳಿಗೆ ಹೊಂದಿಕೊಳ್ಳಲು ಪುರಾವೆ ಆಧಾರಿತ ನಿರ್ಧಾರಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ಕರಾವಳಿ ಸಮುದಾಯಗಳನ್ನು ಸ್ಥಿತಿಸ್ಥಾಪಕ ಮತ್ತು ಸಶಕ್ತರನ್ನಾಗಿ ಮಾಡುವ ಗುರಿಯನ್ನು ಹೊಂದಿದೆ."
      },
      banner: {
        top: "ನ್ಯಾಷನಲ್ ಇನ್ಸ್ಟಿಟ್ಯೂಟ್ ಆಫ್ ಅಡ್ವಾನ್ಸ್ಡ್ ಸ್ಟಡೀಸ್ (ಎನ್ಐಎಎಸ್) (NIAS) ಇಂಡಿಯನ್ ಇನ್ಸ್ಟಿಟ್ಯೂಟ್ ಆಫ್ ಸೈನ್ಸ್ (IISc) ಕ್ಯಾಂಪಸ್, ಬೆಂಗಳೂರು",
        heading: "ವಿದ್ಯಾರ್ಥಿ-ವಿಜ್ಞಾನಿ",
        description: "ವಿದ್ಯಾರ್ಥಿ ವಿಜ್ಞಾನಿ ನಿಮಗೆ ಸ್ವಾಗತ"
      },
      navbar: {
        home: "ಮುಖಪುಟ",
        about: "ನಮ್ಮ ಬಗ್ಗೆ",
        gallery: "ಗ್ಯಾಲರಿ",
        team: 'ನಮ್ಮ ತಂಡ',
        contact: "ಸಂಪರ್ಕಿಸಿ",
        login: "ಲಾಗಿನ್"
      },
      eventslider: {
        language: "Kannada",
        heading: "ಇತೀಚಿನ ಕಾರ್ಯಕ್ರಮಗಳು"
      },
      upcoming: {
        language: "Kannada",
        heading: "ಮುಂಬರುವ ಈವೆಂಟ್ಸ್"
      },
      footer:{
        heading: "ವಿದ್ಯಾರ್ಥಿ-ವಿಜ್ಞಾನಿ ಯೋಜನೆಗೆ ಭಾರತೀಯ ಸರ್ಕಾರದ ವೈಜ್ಞಾನಿಕ ಮತ್ತು ತಂತ್ರಜ್ಞಾನ ಇಲಾಖೆ (DST) ಆರ್ಥಿಕ ನೆರವು ಒದಗಿಸಿದೆ ಸಿಓ/ ಬಿ/ ಎಫ್ ಪಿ/ ಜಿ ೧೩೯/ ೨೦೨೧ (ಜಿ) ಏನ್ ಸಿ ಎಸ್ ಟಿ ಸಿ",
        facebook: "ಫೇಸ್ ಬುಕ್",
        niaswebsite: "ಎನ್ಐಎಎಸ್ (NIAS) ವೆಬ್ ಸೈಟ್",
        contact: " ಸಂಪರ್ಕಿಸಿ",
        copyright: "© ೨೦೨೪ ವಿದ್ಯಾರ್ಥಿ-ವಿಜ್ಞಾನಿTM. ಎಲ್ಲಾ ಹಕ್ಕುಗಳೂ ಕಾಯ್ದಿರಿಸಿವೆ",
        about: "ನಮ್ಮ ಬಗ್ಗೆ"

      }
    },
    malayalam: {
      maintext: {
        mission: "കര്‍ണാടകയും കേരളവും ഉള്‍പ്പെടുന്ന തീരദേശ മേഖലകളിലെ തിരഞ്ഞെടുത്ത സ്‌കൂളുകളുടെയും കോളേജുകളുടെയും വിദ്യാര്‍ത്ഥികളെ ഉള്‍പ്പെടുത്തിക്കൊണ്ട് ഒരു സജീവ നെറ്റ്വര്‍ക്ക് രൂപീകരിച്ച്, കാലാവസ്ഥാ മാറ്റം മൂലം ഉണ്ടാകുന്ന പരിസ്ഥിതി, സാമൂഹിക മാറ്റങ്ങളെ നിരീക്ഷിക്കുന്നതിലും രേഖപ്പെടുത്തുന്നതിലും ഗവേഷണം നടത്തുന്നതിലും പരിശീലനം നല്‍കുന്നതാണ് ലക്ഷ്യം. വിദ്യാര്‍ത്ഥികള്‍, അധ്യാപകര്‍, ഗവേഷകര്‍, എന്‍ജിഒകള്‍, പൊതുജനങ്ങള്‍ എന്നിവരുമായി സഹകരണം കൂട്ടിപ്പിടിച്ച്, ‘സ്റ്റുഡന്റ്-സയന്റിസ്റ്റ്’ പ്രോജക്ട് തരംതാഴ്ന്ന തലത്തിലുള്ള ഡാറ്റകള്‍ ശേഖരിച്ച്, ശാസ്ത്രീയ വിവരങ്ങള്‍ പ്രചരിപ്പിക്കുകയും തീരദേശ സമൂഹങ്ങളെ കാലാവസ്ഥാ മാറ്റം, പ്രകൃതിദുരന്തങ്ങള്‍ എന്നിവയ്‌ക്ക് എതിരെ ശാസ്ത്രീയ അടിസ്ഥാനത്തില്‍ തീരുമാനങ്ങള്‍ എടുക്കാന്‍ പ്രാപ്തമാക്കുകയും ചെയ്യുകയാണ്‌ ഈ പദ്ധതിയുടെ പ്രധാന ഉദ്ദേശ്യം."
      },
      banner: {
        top: "National Institute of Advanced Studies (NIAS)Indian Institute of Science Campus, Bangalore ",
        heading: "വിദ്യാർത്ഥി ശാസ്ത്രജ്ഞൻ",
        description: "വിദ്യാർത്ഥി ശാസ്ത്രജ്ഞൻ പ്രവേശിപ്പിക്കുന്നു"
      },
      navbar: {
        home: "ಮುಖಪುಟ",
        about: "ನಮ್ಮ ಬಗ್ಗೆ",
        gallery: "ಗ್ಯಾಲರಿ",
        team: 'ನಮ್ಮ ತಂಡ',
        contact: "ಸಂಪರ್ಕಿಸಿ",
        login: "ಲಾಗಿನ್"
      },
      eventslider: {
        language: "Malayalam",
        heading: "സമീപകാല പരിപാടികൾ"
      },
      upcoming: {
        language: "Malayalam",
        heading: "വരാനിരിക്കുന്ന പരിപാടികൾ"
      },
      footer:{
        heading: "Student-Scientist is financially supported by Department of Science & technology, Government of India CO/B/FP/G139/2021 (G) (NCSTC)",
        facebook: "Facebook",
        niaswebsite: "NIAS Website",
        contact: "Contact",
        copyright: "©2025 student-scientistTM.All rights Reserved"

      }
    }
  };

  // Function to handle language change
  const handleLanguageChange = (lang) => {
    setLanguage(lang);
  };

  return (
    <div className="min-h-screen">
      {/* Language Selector */}
      <div className="flex justify-end p-4 bg-gray-100">
        <button className="px-4 py-2 mx-2" onClick={() => handleLanguageChange('english')}>English</button>
        <button className="px-4 py-2 mx-2" onClick={() => handleLanguageChange('kannada')}>ಕನ್ನಡ</button>
        <button className="px-4 py-2 mx-2" onClick={() => handleLanguageChange('malayalam')}>മലയാളം</button>
      </div>

      {/* Components with Dynamic Content */}
      <Banner content={content[language].banner} />
      <Navbar1 content={content[language].navbar} />
      <AutoCarousel />
      <div className="h-20"></div>
      <Maintext content={content[language].maintext} />
      <div className="h-20"></div>
      <EventSlider content={content[language].eventslider} />
      

      <UpcomingSlider  content={content[language].upcoming} />
      <Footer1 content={content[language].footer}/>
    </div>
  );
};

export default Newlanding;
