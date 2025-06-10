import React from 'react';
import ServicePageLayout from './ServicePageLayout';
import { 
  FaMobileAlt, 
  FaReact, 
  FaNodeJs, 
  FaCloud,
  FaCogs,
  FaRocket,
  FaUsers,
  FaChartLine,
  FaLock,
  FaSync
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiPostgresql, 
  SiRedis,
  SiDocker,
  SiFirebase
} from 'react-icons/si';

const WebApplicationsPage = () => {
  const serviceData = {
    title: "Web Applications",
    subtitle: "Powerful, scalable applications for modern business",
    description: "We develop custom web applications that streamline your business processes, increase efficiency, and provide exceptional user experiences. From simple dashboards to complex enterprise solutions.",
    heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    icon: <FaMobileAlt />,

    whyNeeded: [
      {
        icon: <FaCogs />,
        title: "Automate Business Processes",
        description: "Eliminate manual tasks and reduce errors with custom automation solutions tailored to your workflow."
      },
      {
        icon: <FaUsers />,
        title: "Improve Team Collaboration",
        description: "Enable seamless collaboration with real-time features, user management, and role-based access control."
      },
      {
        icon: <FaChartLine />,
        title: "Data-Driven Decisions",
        description: "Get actionable insights with integrated analytics, reporting, and dashboard visualization tools."
      },
      {
        icon: <FaRocket />,
        title: "Scale Your Business",
        description: "Build applications that grow with your business, handling increased users and data efficiently."
      },
      {
        icon: <FaLock />,
        title: "Enterprise Security",
        description: "Protect sensitive data with enterprise-grade security, authentication, and compliance features."
      },
      {
        icon: <FaSync />,
        title: "Real-Time Updates",
        description: "Keep your team synchronized with live updates, notifications, and collaborative features."
      }
    ],

    stages: [
      {
        title: "Requirements Analysis",
        description: "Deep dive into your business processes, user needs, and technical requirements to define the application scope.",
        duration: "1-2 weeks"
      },
      {
        title: "System Architecture",
        description: "Design scalable architecture, database structure, and integration points for optimal performance.",
        duration: "1 week"
      },
      {
        title: "UI/UX Design",
        description: "Create intuitive interfaces and user experiences that make complex tasks simple and efficient.",
        duration: "2-3 weeks"
      },
      {
        title: "Backend Development",
        description: "Build robust APIs, database systems, and server infrastructure to power your application.",
        duration: "4-8 weeks"
      },
      {
        title: "Frontend Development",
        description: "Develop responsive, interactive user interfaces with modern frameworks and best practices.",
        duration: "4-6 weeks"
      },
      {
        title: "Integration & Testing",
        description: "Connect all components, implement third-party integrations, and conduct comprehensive testing.",
        duration: "2-3 weeks"
      },
      {
        title: "Deployment & Training",
        description: "Deploy to production, set up monitoring, and train your team on using the new application.",
        duration: "1-2 weeks"
      }
    ],

    technologies: [
      {
        icon: <FaReact />,
        name: "React.js",
        color: "#61DAFB",
        description: "Dynamic and interactive user interfaces"
      },
      {
        icon: <FaNodeJs />,
        name: "Node.js",
        color: "#339933",
        description: "Scalable backend API development"
      },
      {
        icon: <SiPostgresql />,
        name: "PostgreSQL",
        color: "#336791",
        description: "Robust relational database management"
      },
      {
        icon: <SiMongodb />,
        name: "MongoDB",
        color: "#47A248",
        description: "Flexible NoSQL database solutions"
      },
      {
        icon: <SiRedis />,
        name: "Redis",
        color: "#DC382D",
        description: "High-performance caching and sessions"
      },
      {
        icon: <SiDocker />,
        name: "Docker",
        color: "#2496ED",
        description: "Containerized deployment and scaling"
      },
      {
        icon: <FaCloud />,
        name: "AWS/Azure",
        color: "#FF9900",
        description: "Enterprise cloud infrastructure"
      },
      {
        icon: <SiFirebase />,
        name: "Firebase",
        color: "#FFCA28",
        description: "Real-time database and authentication"
      }
    ],

    examples: [
      {
        title: "Project Management System",
        description: "Complete project management platform with task tracking, team collaboration, and time management.",
        image: "/example-project-mgmt.jpg",
        features: ["Task Management", "Team Chat", "Time Tracking", "Reporting", "File Sharing"]
      },
      {
        title: "Customer Portal",
        description: "Self-service customer portal with account management, support tickets, and billing integration.",
        image: "/example-customer-portal.jpg",
        features: ["User Dashboard", "Support System", "Billing Integration", "Document Management"]
      },
      {
        title: "Inventory Management",
        description: "Real-time inventory tracking with automated reordering, supplier management, and analytics.",
        image: "/example-inventory.jpg",
        features: ["Real-time Tracking", "Auto Reordering", "Supplier Portal", "Analytics Dashboard"]
      }
    ],

    pricing: [
      {
        name: "MVP",
        price: "5,000",
        period: "project",
        description: "Minimum viable product for validation",
        features: [
          "Core functionality",
          "Basic user management",
          "Simple dashboard",
          "Mobile responsive",
          "3 months support",
          "Cloud deployment"
        ]
      },
      {
        name: "Standard",
        price: "15,000",
        period: "project",
        description: "Full-featured application for growing businesses",
        popular: true,
        features: [
          "Advanced features",
          "Role-based access",
          "Real-time updates",
          "Third-party integrations",
          "Analytics dashboard",
          "6 months support",
          "Performance optimization",
          "Backup & security"
        ]
      },
      {
        name: "Enterprise",
        price: "35,000",
        period: "project",
        description: "Complex applications with advanced requirements",
        features: [
          "Custom architecture",
          "Advanced integrations",
          "Multi-tenant support",
          "Enterprise security",
          "Custom reporting",
          "1 year support",
          "24/7 monitoring",
          "Dedicated team",
          "SLA guarantee"
        ]
      }
    ]
  };

  return <ServicePageLayout {...serviceData} />;
};

export default WebApplicationsPage;