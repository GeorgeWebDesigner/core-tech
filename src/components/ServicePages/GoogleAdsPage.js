import React from 'react';
import ServicePageLayout from './ServicePageLayout';
import { 
  FaAd, 
  FaChartLine,
  FaDollarSign,
  FaUsers,
  FaEye,
  FaMousePointer,
  FaCalendarAlt,
  FaCogs,
  FaLightbulb,
  FaShieldAlt
} from 'react-icons/fa';
import { 
  SiGoogleads,
  SiGoogleanalytics,
  SiGooglesearchconsole
} from 'react-icons/si';

const GoogleAdsPage = () => {
  const serviceData = {
    title: "Google Ads",
    subtitle: "Drive targeted traffic and generate quality leads",
    description: "We create and manage high-performing Google Ads campaigns that deliver measurable results. From keyword research to conversion optimization, we maximize your ROI and grow your business.",
    heroImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    icon: <FaAd />,

    whyNeeded: [
      {
        icon: <FaUsers />,
        title: "Reach Your Ideal Customers",
        description: "Target users actively searching for your products or services with precise demographic and geographic targeting."
      },
      {
        icon: <FaDollarSign />,
        title: "Maximize ROI",
        description: "Get the best return on investment with optimized campaigns, smart bidding strategies, and continuous performance monitoring."
      },
      {
        icon: <FaEye />,
        title: "Instant Visibility",
        description: "Appear at the top of Google search results immediately, bypassing the time needed for organic SEO rankings."
      },
      {
        icon: <FaMousePointer />,
        title: "Drive Quality Traffic",
        description: "Attract visitors who are more likely to convert with targeted keywords and compelling ad copy."
      },
      {
        icon: <FaChartLine />,
        title: "Measurable Results",
        description: "Track every click, conversion, and dollar spent with detailed analytics and transparent reporting."
      },
      {
        icon: <FaShieldAlt />,
        title: "Competitive Advantage",
        description: "Stay ahead of competitors by capturing market share in your industry's most valuable search terms."
      }
    ],

    stages: [
      {
        title: "Account Audit & Strategy",
        description: "Analyze current performance, research competitors, and develop a comprehensive advertising strategy.",
        duration: "1 week"
      },
      {
        title: "Keyword Research",
        description: "Identify high-value keywords, analyze search volume and competition, and build targeted keyword lists.",
        duration: "3-5 days"
      },
      {
        title: "Campaign Setup",
        description: "Create campaign structure, write compelling ad copy, set up conversion tracking, and configure bidding strategies.",
        duration: "1 week"
      },
      {
        title: "Landing Page Optimization",
        description: "Optimize landing pages for better Quality Score and conversion rates, ensuring seamless user experience.",
        duration: "1-2 weeks"
      },
      {
        title: "Launch & Monitoring",
        description: "Launch campaigns with careful monitoring, making immediate adjustments based on initial performance data.",
        duration: "Ongoing"
      },
      {
        title: "Optimization & Scaling",
        description: "Continuously optimize campaigns, test new strategies, and scale successful campaigns for maximum growth.",
        duration: "Ongoing"
      }
    ],

    technologies: [
      {
        icon: <SiGoogleads />,
        name: "Google Ads",
        color: "#4285F4",
        description: "Complete campaign management platform"
      },
      {
        icon: <SiGoogleanalytics />,
        name: "Google Analytics",
        color: "#E37400",
        description: "Advanced conversion tracking and insights"
      },
      {
        icon: <SiGooglesearchconsole />,
        name: "Search Console",
        color: "#458CF5",
        description: "Search performance and keyword insights"
      },
      {
        icon: <FaCogs />,
        name: "Google Optimize",
        color: "#7B68EE",
        description: "Landing page testing and optimization"
      },
      {
        icon: <FaChartLine />,
        name: "Google Data Studio",
        color: "#4285F4",
        description: "Custom reporting dashboards"
      },
      {
        icon: <FaCogs />,
        name: "Automation Tools",
        color: "#34A853",
        description: "Automated bidding and optimization"
      },
      {
        icon: <FaLightbulb />,
        name: "A/B Testing",
        color: "#EA4335",
        description: "Ad copy and landing page testing"
      },
      {
        icon: <FaCalendarAlt />,
        name: "Scheduling Tools",
        color: "#FBBC04",
        description: "Ad scheduling and dayparting"
      }
    ],

    pricing: [
      {
        name: "Starter",
        price: "800",
        period: "month",
        description: "Perfect for small businesses starting with Google Ads",
        features: [
          "$1,000-$3,000 ad spend/month",
          "Search campaigns setup",
          "Basic keyword research",
          "Ad copy creation (3 variants)",
          "Monthly reporting",
          "Conversion tracking setup"
        ]
      },
      {
        name: "Professional",
        price: "1,500",
        period: "month",
        description: "Comprehensive campaigns for growing businesses",
        popular: true,
        features: [
          "$3,000-$10,000 ad spend/month",
          "Search + Display campaigns",
          "Advanced keyword research",
          "A/B testing & optimization",
          "Landing page optimization",
          "Bi-weekly reporting",
          "Remarketing campaigns",
          "Competitor analysis"
        ]
      },
      {
        name: "Enterprise",
        price: "3,000",
        period: "month",
        description: "Advanced campaigns for large businesses",
        features: [
          "$10,000+ ad spend/month",
          "Full-funnel campaign strategy",
          "Advanced audience targeting",
          "Custom automation scripts",
          "Weekly strategy calls",
          "Custom dashboard",
          "Multi-platform integration",
          "Dedicated account manager",
          "24/7 monitoring"
        ]
      }
    ]
  };

  return <ServicePageLayout {...serviceData} />;
};

export default GoogleAdsPage;