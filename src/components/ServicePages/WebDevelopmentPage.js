import React from 'react';
import ServicePageLayout from './ServicePageLayout';
import { 
  FaLaptopCode, 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaWordpress,
  FaSearchengin,
  FaMobile,
  FaTachometerAlt,
  FaShieldAlt,
  FaUsers,
  FaChartLine
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiNextdotjs 
} from 'react-icons/si';

const WebDevelopmentPage = () => {
  const serviceData = {
    title: "Web Development",
    subtitle: "Professional websites that drive results",
    description: "We create stunning, responsive websites that not only look great but also perform exceptionally. From simple landing pages to complex web applications, we build digital experiences that convert visitors into customers.",
    heroImage: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    icon: <FaLaptopCode />,

    whyNeeded: [
      {
        icon: <FaUsers />,
        title: "Professional Online Presence",
        description: "Establish credibility and trust with a professional website that represents your brand perfectly."
      },
      {
        icon: <FaChartLine />,
        title: "Increase Sales & Leads",
        description: "Convert more visitors into customers with optimized design and strategic call-to-actions."
      },
      {
        icon: <FaSearchengin />,
        title: "Better Search Rankings",
        description: "Improve your Google rankings with SEO-optimized, fast-loading websites that search engines love."
      },
      {
        icon: <FaMobile />,
        title: "Mobile-First Experience",
        description: "Reach customers on all devices with responsive design that works perfectly on mobile, tablet, and desktop."
      },
      {
        icon: <FaTachometerAlt />,
        title: "Lightning-Fast Performance",
        description: "Keep visitors engaged with optimized websites that load in under 3 seconds."
      },
      {
        icon: <FaShieldAlt />,
        title: "Secure & Reliable",
        description: "Protect your business and customers with enterprise-level security and reliable hosting."
      }
    ],

    stages: [
      {
        title: "Discovery & Planning",
        description: "We analyze your business goals, target audience, and competition to create a comprehensive project roadmap.",
        duration: "3-5 days"
      },
      {
        title: "Design & Prototyping",
        description: "Our designers create wireframes and mockups that align with your brand and user experience goals.",
        duration: "1-2 weeks"
      },
      {
        title: "Development & Coding",
        description: "Our developers bring the design to life using modern technologies and best practices.",
        duration: "2-4 weeks"
      },
      {
        title: "Content Integration",
        description: "We integrate your content, images, and copy to create compelling pages that drive conversions.",
        duration: "3-5 days"
      },
      {
        title: "Testing & Optimization",
        description: "Comprehensive testing across all devices and browsers to ensure perfect functionality.",
        duration: "1 week"
      },
      {
        title: "Launch & Training",
        description: "We launch your website and provide training so you can easily manage your content.",
        duration: "2-3 days"
      }
    ],

    technologies: [
      {
        icon: <FaReact />,
        name: "React.js",
        color: "#61DAFB",
        description: "Modern, fast, and scalable user interfaces"
      },
      {
        icon: <SiNextdotjs />,
        name: "Next.js",
        color: "#000000",
        description: "Server-side rendering for better SEO"
      },
      {
        icon: <FaNodeJs />,
        name: "Node.js",
        color: "#339933",
        description: "High-performance backend development"
      },
      {
        icon: <SiMongodb />,
        name: "MongoDB",
        color: "#47A248",
        description: "Flexible and scalable database solutions"
      },
      {
        icon: <FaWordpress />,
        name: "WordPress",
        color: "#21759B",
        description: "Easy-to-manage content management"
      },
      {
        icon: <FaPython />,
        name: "Python",
        color: "#3776AB",
        description: "Powerful backend and automation"
      }
    ],

    examples: [
      {
        title: "E-commerce Platform",
        description: "Complete online store with payment integration, inventory management, and customer analytics.",
        image: "/example-ecommerce.jpg",
        features: ["Payment Gateway", "Inventory System", "Analytics Dashboard", "Mobile App"]
      },
      {
        title: "Corporate Website",
        description: "Professional business website with CMS, contact forms, and lead generation tools.",
        image: "/example-corporate.jpg",
        features: ["Content Management", "Lead Forms", "SEO Optimized", "Multi-language"]
      },
      {
        title: "Portfolio Website",
        description: "Creative portfolio showcasing work with interactive galleries and contact integration.",
        image: "/example-portfolio.jpg",
        features: ["Image Galleries", "Contact Forms", "Blog Integration", "Social Media"]
      }
    ],

    pricing: [
      {
        name: "Starter",
        price: "1,500",
        period: "project",
        description: "Perfect for small businesses and startups",
        features: [
          "5-7 page website",
          "Responsive design",
          "Contact forms",
          "Basic SEO setup",
          "3 months support",
          "Google Analytics integration"
        ]
      },
      {
        name: "Professional",
        price: "3,500",
        period: "project",
        description: "Ideal for growing businesses",
        popular: true,
        features: [
          "10-15 page website",
          "Custom design",
          "Content management system",
          "Advanced SEO",
          "E-commerce ready",
          "6 months support",
          "Performance optimization",
          "Social media integration"
        ]
      },
      {
        name: "Enterprise",
        price: "7,500",
        period: "project",
        description: "For large businesses with complex needs",
        features: [
          "Unlimited pages",
          "Custom functionality",
          "Advanced integrations",
          "Multi-language support",
          "Advanced security",
          "1 year support",
          "Priority development",
          "Dedicated project manager"
        ]
      }
    ]
  };

  return <ServicePageLayout {...serviceData} />;
};

export default WebDevelopmentPage;