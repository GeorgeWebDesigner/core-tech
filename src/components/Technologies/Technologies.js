import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaApple, 
  FaAndroid, 
  FaAngular, 
  FaVuejs, 
  FaJs, 
  FaJava, 
  FaPhp, 
  FaGoogle, 
  FaMicrosoft, 
  FaWordpress, 
  FaShopify
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiMysql, 
  SiPostgresql, 
  SiRedis, 
  SiFirebase, 
  SiNextdotjs, 
  SiFlutter, 
  SiDigitalocean, 
  SiHeroku 
} from 'react-icons/si';

const Technologies = () => {
  const [activeTab, setActiveTab] = useState('popular');
  
  const technologies = {
    popular: [
      { icon: <FaReact />, name: 'React.js', color: '#61DAFB' },
      { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
      { icon: <FaPython />, name: 'Python', color: '#3776AB' },
      { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' }
    ],
    mobile: [
      { icon: <FaApple />, name: 'iOS', color: '#000000' },
      { icon: <FaAndroid />, name: 'Android', color: '#3DDC84' },
      { icon: <FaReact />, name: 'React Native', color: '#61DAFB' },
      { icon: <SiFlutter />, name: 'Flutter', color: '#02569B' }
    ],
    frontend: [
      { icon: <FaReact />, name: 'React.js', color: '#61DAFB' },
      { icon: <FaAngular />, name: 'Angular', color: '#DD0031' },
      { icon: <FaVuejs />, name: 'Vue.js', color: '#4FC08D' },
      { icon: <SiNextdotjs />, name: 'Next.js', color: '#000000' },
      { icon: <FaJs />, name: 'JavaScript', color: '#F7DF1E' }
    ],
    backend: [
      { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
      { icon: <FaPython />, name: 'Python', color: '#3776AB' },
      { icon: <FaJava />, name: 'Java', color: '#007396' },
      { icon: <FaPhp />, name: 'PHP', color: '#777BB4' }
    ],
    database: [
      { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
      { icon: <SiMysql />, name: 'MySQL', color: '#4479A1' },
      { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
      { icon: <SiFirebase />, name: 'Firebase', color: '#FFCA28' },
      { icon: <SiRedis />, name: 'Redis', color: '#DC382D' }
    ],
    cloud: [
      { icon: <FaGoogle />, name: 'Google Cloud', color: '#4285F4' },
      { icon: <FaMicrosoft />, name: 'Azure', color: '#0078D4' },
      { icon: <SiDigitalocean />, name: 'Digital Ocean', color: '#0080FF' },
      { icon: <SiHeroku />, name: 'Heroku', color: '#430098' }
    ],
    cms: [
      { icon: <FaWordpress />, name: 'WordPress', color: '#21759B' },
      { icon: <FaShopify />, name: 'Shopify', color: '#7AB55C' }
    ]
  };

  const tabs = [
    { id: 'popular', label: 'Popular' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'frontend', label: 'Front-end' },
    { id: 'backend', label: 'Back-end' },
    { id: 'database', label: 'Database' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'cms', label: 'CMS' }
  ];

  return (
    <div className="technologies-section">
      <h2>Technologies for Web Development</h2>
      <p>Here is what we can apply to realize your plans for Custom Web Development.</p>

      <div className="tech-tabs">
        {tabs.map(tab => (
          <div 
            key={tab.id}
            className={`tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>

      <div className="tech-content">
        <div className="tech-group active">
          <div className="tech-slider">
            <button className="slider-arrow prev-arrow">
              <ChevronLeft />
            </button>
            <div className="tech-cards">
              {technologies[activeTab]?.map((tech, index) => (
                <div key={index} className="tech-card">
                  <div className="tech-icon" style={{ color: tech.color }}>
                    {tech.icon}
                  </div>
                  <h4>{tech.name}</h4>
                </div>
              ))}
            </div>
            <button className="slider-arrow next-arrow">
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;