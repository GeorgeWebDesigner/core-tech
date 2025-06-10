import React from 'react';
import ServicePageLayout from './ServicePageLayout';
import { 
  FaHashtag, 
  FaUsers,
  FaChartLine,
  FaHeart,
  FaShare,
  FaCamera,
  FaPalette,
  FaCalendarAlt,
  FaLightbulb,
  FaTwitter
} from 'react-icons/fa';
import { 
  SiInstagram,
  SiFacebook,
  SiTiktok,
  SiLinkedin,
  SiYoutube
} from 'react-icons/si';

const SocialMediaPage = () => {
  const serviceData = {
    title: "Social Media Marketing",
    subtitle: "Build your brand and engage your audience",
    description: "We create compelling social media strategies that build brand awareness, engage your audience, and drive conversions across Instagram, Facebook, TikTok, and other platforms.",
    heroImage: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    icon: <FaHashtag />,

    whyNeeded: [
      {
        icon: <FaUsers />,
        title: "Build Brand Awareness",
        description: "Increase your brand visibility and reach new audiences with targeted social media campaigns and engaging content."
      },
      {
        icon: <FaHeart />,
        title: "Engage Your Community",
        description: "Build meaningful relationships with your audience through authentic interactions and valuable content."
      },
      {
        icon: <FaChartLine />,
        title: "Drive Website Traffic",
        description: "Generate qualified traffic to your website and increase conversions with strategic social media campaigns."
      },
      {
        icon: <FaShare />,
        title: "Viral Content Potential",
        description: "Create shareable content that can go viral and exponentially increase your brand's reach and recognition."
      },
      {
        icon: <FaCamera />,
        title: "Visual Storytelling",
        description: "Tell your brand story through compelling visuals, videos, and content that resonates with your target audience."
      },
      {
        icon: <FaLightbulb />,
        title: "Market Insights",
        description: "Gain valuable insights about your audience preferences, behaviors, and trends in your industry."
      }
    ],

    stages: [
      {
        title: "Brand Analysis & Strategy",
        description: "Analyze your brand identity, target audience, and competitors to develop a comprehensive social media strategy.",
        duration: "1 week"
      },
      {
        title: "Content Planning",
        description: "Create content calendars, plan campaigns, and develop content themes aligned with your brand goals.",
        duration: "1 week"
      },
      {
        title: "Visual Content Creation",
        description: "Design graphics, edit videos, and create engaging visual content optimized for each platform.",
        duration: "Ongoing"
      },
      {
        title: "Community Management",
        description: "Manage daily posting, respond to comments and messages, and engage with your audience consistently.",
        duration: "Ongoing"
      },
      {
        title: "Paid Campaign Management",
        description: "Create and optimize paid advertising campaigns to reach broader audiences and achieve specific goals.",
        duration: "Ongoing"
      },
      {
        title: "Analytics & Optimization",
        description: "Monitor performance metrics, analyze results, and continuously optimize strategy for better results.",
        duration: "Ongoing"
      }
    ],

    technologies: [
      {
        icon: <SiInstagram />,
        name: "Instagram",
        color: "#E4405F",
        description: "Stories, Reels, IGTV, and feed content"
      },
      {
        icon: <SiFacebook />,
        name: "Facebook",
        color: "#1877F2",
        description: "Posts, ads, groups, and events management"
      },
      {
        icon: <SiTiktok />,
        name: "TikTok",
        color: "#000000",
        description: "Short-form video content and TikTok ads"
      },
      {
        icon: <SiLinkedin />,
        name: "LinkedIn",
        color: "#0A66C2",
        description: "Professional networking and B2B content"
      },
      {
        icon: <SiYoutube />,
        name: "YouTube",
        color: "#FF0000",
        description: "Video content and YouTube advertising"
      },
      {
        icon: <FaTwitter />,
        name: "Twitter",
        color: "#1DA1F2",
        description: "Real-time engagement and trending topics"
      },
      {
        icon: <FaPalette />,
        name: "Design Tools",
        color: "#FF6B6B",
        description: "Canva, Adobe Creative Suite, Figma"
      },
      {
        icon: <FaCalendarAlt />,
        name: "Scheduling Tools",
        color: "#4ECDC4",
        description: "Hootsuite, Buffer, Later automation"
      }
    ],

    pricing: [
      {
        name: "Starter",
        price: "600",
        period: "month",
        description: "Essential social media management",
        features: [
          "2 social media platforms",
          "12 posts per month",
          "Basic graphics design",
          "Community management",
          "Monthly analytics report",
          "Content calendar"
        ]
      },
      {
        name: "Growth",
        price: "1,200",
        period: "month",
        description: "Comprehensive social media strategy",
        popular: true,
        features: [
          "4 social media platforms",
          "20 posts per month",
          "Custom graphics & videos",
          "Stories & Reels content",
          "Paid advertising management",
          "Bi-weekly reports",
          "Hashtag research",
          "Competitor analysis"
        ]
      },
      {
        name: "Premium",
        price: "2,500",
        period: "month",
        description: "Full-service social media marketing",
        features: [
          "All major platforms",
          "Daily posting & stories",
          "Professional photography",
          "Video production",
          "Influencer partnerships",
          "Advanced targeting",
          "Weekly strategy calls",
          "Dedicated social media manager",
          "24/7 monitoring"
        ]
      }
    ]
  };

  return <ServicePageLayout {...serviceData} />;
};

export default SocialMediaPage;