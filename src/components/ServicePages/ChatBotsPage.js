import React from 'react';
import ServicePageLayout from './ServicePageLayout';
import { 
  FaRobot, 
  FaComments, 
  FaClock,
  FaUsers,
  FaChartLine,
  FaDollarSign,
  FaLightbulb,
  FaCogs,
  FaMobile
} from 'react-icons/fa';
import { 
  SiOpenai,
  SiTelegram,
  SiWhatsapp,
  SiDiscord,
  SiSlack
} from 'react-icons/si';

const ChatBotsPage = () => {
  const serviceData = {
    title: "Chat Bots",
    subtitle: "Intelligent automation for customer communication",
    description: "We create smart chatbots that handle customer inquiries 24/7, qualify leads, process orders, and provide instant support. Powered by AI and tailored to your business needs.",
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    icon: <FaRobot />,

    whyNeeded: [
      {
        icon: <FaClock />,
        title: "24/7 Customer Support",
        description: "Provide instant responses to customer queries around the clock, even when your team is offline."
      },
      {
        icon: <FaDollarSign />,
        title: "Reduce Support Costs",
        description: "Handle up to 80% of common inquiries automatically, reducing the need for human support agents."
      },
      {
        icon: <FaUsers />,
        title: "Lead Generation & Qualification",
        description: "Capture and qualify leads automatically, scheduling appointments and gathering contact information."
      },
      {
        icon: <FaChartLine />,
        title: "Increase Sales Conversions",
        description: "Guide customers through the sales process with personalized recommendations and instant answers."
      },
      {
        icon: <FaLightbulb />,
        title: "Smart Customer Insights",
        description: "Collect valuable data about customer preferences, pain points, and behavior patterns."
      },
      {
        icon: <FaMobile />,
        title: "Multi-Platform Presence",
        description: "Deploy on websites, WhatsApp, Telegram, Facebook Messenger, and other popular platforms."
      }
    ],

    stages: [
      {
        title: "Use Case Analysis",
        description: "Identify the most valuable automation opportunities and define chatbot objectives and success metrics.",
        duration: "3-5 days"
      },
      {
        title: "Conversation Design",
        description: "Map out conversation flows, create dialogue scripts, and design the chatbot personality and tone.",
        duration: "1-2 weeks"
      },
      {
        title: "AI Training & Setup",
        description: "Train the AI model with your business data, configure natural language processing, and set up integrations.",
        duration: "1-2 weeks"
      },
      {
        title: "Bot Development",
        description: "Build the chatbot logic, implement conversation flows, and integrate with your existing systems.",
        duration: "2-3 weeks"
      },
      {
        title: "Testing & Optimization",
        description: "Test all conversation scenarios, optimize responses, and fine-tune the AI understanding.",
        duration: "1 week"
      },
      {
        title: "Deployment & Training",
        description: "Deploy the chatbot to your platforms and train your team on monitoring and management.",
        duration: "3-5 days"
      }
    ],

    technologies: [
      {
        icon: <SiOpenai />,
        name: "OpenAI GPT",
        color: "#412991",
        description: "Advanced natural language understanding"
      },
      {
        icon: <SiTelegram />,
        name: "Telegram Bot API",
        color: "#0088CC",
        description: "Native Telegram bot integration"
      },
      {
        icon: <SiWhatsapp />,
        name: "WhatsApp Business",
        color: "#25D366",
        description: "WhatsApp Business API integration"
      },
      {
        icon: <FaComments />,
        name: "Dialogflow",
        color: "#FF9800",
        description: "Google's conversation AI platform"
      },
      {
        icon: <SiDiscord />,
        name: "Discord.js",
        color: "#5865F2",
        description: "Discord bot development framework"
      },
      {
        icon: <SiSlack />,
        name: "Slack API",
        color: "#4A154B",
        description: "Slack workspace automation"
      },
      {
        icon: <FaCogs />,
        name: "Webhook APIs",
        color: "#6366F1",
        description: "Custom integrations and workflows"
      },
      {
        icon: <FaChartLine />,
        name: "Analytics",
        color: "#10B981",
        description: "Conversation analytics and insights"
      }
    ],

    pricing: [
      {
        name: "Basic Bot",
        price: "2,500",
        period: "project",
        description: "Simple FAQ and customer service bot",
        features: [
          "FAQ automation",
          "Basic conversation flows",
          "Single platform deployment",
          "Admin dashboard",
          "3 months support",
          "Analytics reporting"
        ]
      },
      {
        name: "Smart Assistant",
        price: "6,500",
        period: "project",
        description: "AI-powered bot with advanced features",
        popular: true,
        features: [
          "AI natural language processing",
          "Multi-platform deployment",
          "CRM/API integrations",
          "Lead qualification",
          "Payment processing",
          "6 months support",
          "Advanced analytics",
          "A/B testing"
        ]
      },
      {
        name: "Enterprise Solution",
        price: "15,000",
        period: "project",
        description: "Custom enterprise chatbot with full automation",
        features: [
          "Custom AI training",
          "Advanced integrations",
          "Multi-language support",
          "Voice capabilities",
          "Advanced security",
          "1 year support",
          "24/7 monitoring",
          "Dedicated success manager",
          "White-label options"
        ]
      }
    ]
  };

  return <ServicePageLayout {...serviceData} />;
};

export default ChatBotsPage;