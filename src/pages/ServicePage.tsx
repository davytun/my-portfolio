import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useParams, Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { useEffect } from "react";

// Define service interface
interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  slug: string;
  fullDescription: string;
  process: {
    title: string;
    description: string;
  }[];
  benefits: string[];
  packages: {
    name: string;
    price: string;
    features: string[];
    popular?: boolean;
  }[];
}

// Sample services data
const servicesData: Service[] = [
  {
    id: 1,
    title: "Web Design & Development",
    description: "Custom websites and web applications designed and developed with the latest technologies.",
    icon: "https://api.iconify.design/solar:code-line-duotone.svg?color=%236366f1",
    slug: "web-design-development",
    fullDescription: "I create beautiful, functional websites and web applications tailored to your specific needs. From simple landing pages to complex e-commerce platforms, my approach combines strategic design thinking with modern development practices to deliver outstanding digital experiences. I focus on creating responsive, accessible, and performance-optimized websites that help you achieve your business goals.",
    process: [
      {
        title: "Discovery & Planning",
        description: "In-depth consultation to understand your goals, target audience, and requirements."
      },
      {
        title: "Design & Prototyping",
        description: "Creation of wireframes and high-fidelity designs for review and feedback."
      },
      {
        title: "Development & Testing",
        description: "Custom coding of your website with rigorous testing across devices and browsers."
      },
      {
        title: "Deployment & Training",
        description: "Launch of your website and training on how to manage and update content."
      }
    ],
    benefits: [
      "Custom design tailored to your brand",
      "Mobile-responsive layouts for all devices",
      "Search engine optimization (SEO) best practices",
      "Fast loading speeds and performance optimization",
      "Secure coding practices and SSL implementation",
      "Integration with third-party services and APIs",
      "Content management system (CMS) setup"
    ],
    packages: [
      {
        name: "Basic",
        price: "$1,200",
        features: [
          "5-page responsive website",
          "Basic SEO optimization",
          "Contact form",
          "Mobile-friendly design",
          "3 rounds of revisions"
        ]
      },
      {
        name: "Professional",
        price: "$3,500",
        features: [
          "Up to 10 pages",
          "Advanced SEO setup",
          "Content management system",
          "Basic e-commerce functionality",
          "Social media integration",
          "Google Analytics setup",
          "5 rounds of revisions"
        ],
        popular: true
      },
      {
        name: "Enterprise",
        price: "$8,000+",
        features: [
          "Custom web application",
          "Advanced e-commerce features",
          "Custom database integration",
          "User authentication system",
          "API development and integration",
          "Performance optimization",
          "Unlimited revisions"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "User-centered design that enhances user experience and increases conversion rates.",
    icon: "https://api.iconify.design/solar:pen-new-square-line-duotone.svg?color=%236366f1",
    slug: "ui-ux-design",
    fullDescription: "Great design goes beyond aesthetics—it solves problems and creates meaningful experiences for users. My UI/UX design service focuses on creating intuitive, engaging interfaces that guide users naturally through your digital product. I combine visual design expertise with user research and testing to ensure your website or application not only looks beautiful but also delivers results.",
    process: [
      {
        title: "User Research",
        description: "Understanding your users' needs, behaviors, and pain points through research and analysis."
      },
      {
        title: "Information Architecture",
        description: "Organizing content and functionality in a logical, intuitive structure."
      },
      {
        title: "Wireframing & Prototyping",
        description: "Creating low and high-fidelity prototypes to visualize and test the user experience."
      },
      {
        title: "Visual Design",
        description: "Developing the visual language including colors, typography, and components."
      },
      {
        title: "User Testing",
        description: "Validating designs with real users to refine and improve the experience."
      }
    ],
    benefits: [
      "Improved user satisfaction and engagement",
      "Higher conversion rates and reduced bounce rates",
      "Consistent brand experience across all touchpoints",
      "Reduced development time through detailed specifications",
      "Data-driven design decisions based on user testing",
      "Accessible interfaces that work for all users",
      "Scalable design systems for future growth"
    ],
    packages: [
      {
        name: "UX Audit",
        price: "$1,500",
        features: [
          "Comprehensive UX analysis",
          "Usability evaluation",
          "Detailed report with findings",
          "Prioritized recommendations",
          "One follow-up consultation"
        ]
      },
      {
        name: "Design System",
        price: "$4,000",
        features: [
          "Complete brand style guide",
          "UI component library",
          "Design tokens and variables",
          "Interactive prototype",
          "Design documentation",
          "Development handoff assets",
          "2 rounds of revisions"
        ],
        popular: true
      },
      {
        name: "Full Design Process",
        price: "$7,500+",
        features: [
          "User research and personas",
          "Journey mapping",
          "Information architecture",
          "Wireframing and prototyping",
          "Visual design of all screens",
          "Usability testing",
          "Complete design system"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: "https://api.iconify.design/solar:smartphone-line-duotone.svg?color=%236366f1",
    slug: "mobile-app-development",
    fullDescription: "I develop high-quality mobile applications that engage users and deliver value. Whether you need a native app for iOS or Android, or a cross-platform solution that works on both, I can help bring your app idea to life. My mobile development process focuses on creating performant, intuitive apps with clean code and thoughtful features that keep users coming back.",
    process: [
      {
        title: "Concept & Strategy",
        description: "Defining your app concept, target audience, and technical approach."
      },
      {
        title: "UI/UX Design",
        description: "Creating intuitive interfaces following platform-specific design guidelines."
      },
      {
        title: "Development",
        description: "Building the app with clean, scalable code using the appropriate technologies."
      },
      {
        title: "Testing & QA",
        description: "Thorough testing across devices and operating system versions."
      },
      {
        title: "Deployment & Launch",
        description: "Publishing to app stores and implementing launch strategy."
      }
    ],
    benefits: [
      "Native performance and feel on each platform",
      "Intuitive user experience following platform guidelines",
      "Offline functionality when appropriate",
      "Efficient battery and data usage",
      "Integration with device features (camera, GPS, etc.)",
      "Secure data handling and storage",
      "Ongoing maintenance and updates"
    ],
    packages: [
      {
        name: "MVP",
        price: "$15,000",
        features: [
          "Core functionality implementation",
          "Basic UI/UX design",
          "Single platform (iOS or Android)",
          "Essential features only",
          "App store submission",
          "30 days of support"
        ]
      },
      {
        name: "Professional",
        price: "$30,000",
        features: [
          "Cross-platform development",
          "Custom UI/UX design",
          "User authentication",
          "Data persistence",
          "Basic API integration",
          "Analytics implementation",
          "90 days of support"
        ],
        popular: true
      },
      {
        name: "Enterprise",
        price: "$60,000+",
        features: [
          "Advanced feature set",
          "Complex API integrations",
          "Offline functionality",
          "Push notifications",
          "In-app purchases",
          "Admin dashboard",
          "6 months of support and updates"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "E-Commerce Solutions",
    description: "Full-featured online stores with secure payment processing and inventory management.",
    icon: "https://api.iconify.design/solar:cart-line-duotone.svg?color=%236366f1",
    slug: "ecommerce-solutions",
    fullDescription: "I create powerful e-commerce solutions that help you sell products or services online effectively. From small boutique shops to large multi-vendor marketplaces, I build secure, scalable online stores that provide a seamless shopping experience for your customers while giving you the tools you need to manage your business efficiently.",
    process: [
      {
        title: "Requirements Analysis",
        description: "Understanding your product catalog, payment needs, and business processes."
      },
      {
        title: "Platform Selection",
        description: "Choosing the right e-commerce platform based on your specific requirements."
      },
      {
        title: "Design & Customization",
        description: "Creating a branded shopping experience that showcases your products effectively."
      },
      {
        title: "Development & Integration",
        description: "Building custom features and integrating with payment gateways, shipping providers, etc."
      },
      {
        title: "Testing & Launch",
        description: "Thorough testing of the entire purchase process before going live."
      }
    ],
    benefits: [
      "Mobile-optimized shopping experience",
      "Secure payment processing",
      "Inventory and order management",
      "Product catalog and search functionality",
      "Customer account management",
      "Shipping and tax calculation",
      "Analytics and sales reporting"
    ],
    packages: [
      {
        name: "Starter Store",
        price: "$3,500",
        features: [
          "Up to 100 products",
          "Standard product pages",
          "Basic payment processing",
          "Responsive design",
          "Essential plugins and features",
          "Basic SEO setup"
        ]
      },
      {
        name: "Business Store",
        price: "$8,000",
        features: [
          "Up to 1,000 products",
          "Custom product templates",
          "Multiple payment gateways",
          "Inventory management",
          "Discount and coupon system",
          "Advanced SEO optimization",
          "Basic marketing integrations"
        ],
        popular: true
      },
      {
        name: "Enterprise Solution",
        price: "$15,000+",
        features: [
          "Unlimited products",
          "Custom features development",
          "Multiple currencies and languages",
          "Advanced inventory system",
          "CRM integration",
          "Marketplace capabilities",
          "Subscription and recurring payment options"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Digital Marketing",
    description: "Comprehensive digital marketing strategies to increase visibility and drive conversions.",
    icon: "https://api.iconify.design/solar:chart-line-duotone.svg?color=%236366f1",
    slug: "digital-marketing",
    fullDescription: "I offer strategic digital marketing services designed to increase your online visibility, drive qualified traffic to your website, and convert visitors into customers. My data-driven approach ensures that your marketing budget is invested effectively, targeting the right audience with the right message at the right time to maximize your return on investment.",
    process: [
      {
        title: "Strategy Development",
        description: "Creating a comprehensive marketing plan aligned with your business goals."
      },
      {
        title: "Campaign Setup",
        description: "Setting up targeted campaigns across relevant digital channels."
      },
      {
        title: "Content Creation",
        description: "Developing engaging content that resonates with your target audience."
      },
      {
        title: "Implementation",
        description: "Executing campaigns with continuous optimization based on performance data."
      },
      {
        title: "Analysis & Reporting",
        description: "Regular reporting on key metrics and ROI with actionable insights."
      }
    ],
    benefits: [
      "Increased brand awareness and visibility",
      "Targeted traffic to your website",
      "Higher conversion rates and lead generation",
      "Improved search engine rankings",
      "Greater engagement on social platforms",
      "Data-driven decision making",
      "Measurable return on investment"
    ],
    packages: [
      {
        name: "Starter",
        price: "$1,000/mo",
        features: [
          "SEO audit and basic optimization",
          "Google Business Profile management",
          "Social media setup",
          "Basic content creation",
          "Monthly performance report"
        ]
      },
      {
        name: "Growth",
        price: "$2,500/mo",
        features: [
          "Comprehensive SEO strategy",
          "Paid search campaign management",
          "Social media management",
          "Content marketing",
          "Email marketing campaigns",
          "Conversion rate optimization",
          "Bi-weekly reporting and strategy calls"
        ],
        popular: true
      },
      {
        name: "Premium",
        price: "$5,000+/mo",
        features: [
          "Advanced SEO and content strategy",
          "Multi-channel paid advertising",
          "Social media advertising",
          "Marketing automation",
          "CRM integration and lead nurturing",
          "Comprehensive analytics",
          "Weekly strategy sessions"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Brand Identity Design",
    description: "Distinctive visual identity design including logos, color palettes, and brand guidelines.",
    icon: "https://api.iconify.design/solar:magic-stick-line-duotone.svg?color=%236366f1",
    slug: "brand-identity-design",
    fullDescription: "I create cohesive brand identities that capture your company's essence and resonate with your target audience. My branding process goes beyond just designing a logo—it's about developing a complete visual language that communicates your values and distinguishes you from competitors. A strong brand identity creates recognition, builds trust, and provides the foundation for all your marketing efforts.",
    process: [
      {
        title: "Discovery & Research",
        description: "Understanding your brand values, target audience, and competitive landscape."
      },
      {
        title: "Concept Development",
        description: "Creating initial concepts based on research findings and brand attributes."
      },
      {
        title: "Visual Identity Design",
        description: "Developing your logo, color palette, typography, and other visual elements."
      },
      {
        title: "Refinement",
        description: "Refining the chosen direction based on feedback and considerations."
      },
      {
        title: "Brand Guidelines",
        description: "Creating comprehensive guidelines for consistent brand application."
      }
    ],
    benefits: [
      "Distinctive visual identity that stands out",
      "Consistent brand representation across all touchpoints",
      "Professional image that builds trust",
      "Clear guidance for future marketing materials",
      "Adaptable assets for various applications",
      "Foundation for brand recognition and equity",
      "Long-term value for your business"
    ],
    packages: [
      {
        name: "Logo Design",
        price: "$1,200",
        features: [
          "Logo concept exploration",
          "2-3 initial concepts",
          "Final logo in multiple formats",
          "Simple style guide",
          "2 rounds of revisions"
        ]
      },
      {
        name: "Brand Identity",
        price: "$3,000",
        features: [
          "Logo design",
          "Color palette development",
          "Typography selection",
          "Brand patterns and elements",
          "Stationery design (business cards, letterhead)",
          "Comprehensive brand guidelines",
          "3 rounds of revisions"
        ],
        popular: true
      },
      {
        name: "Complete Branding",
        price: "$6,000+",
        features: [
          "Everything in Brand Identity package",
          "Brand messaging and positioning",
          "Extended applications (packaging, signage, etc.)",
          "Social media templates",
          "Marketing material templates",
          "Brand strategy consultation",
          "Unlimited revisions"
        ]
      }
    ]
  }
];

const ServicePage = () => {
  const { slug } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (slug) {
      const service = servicesData.find(s => s.slug === slug);
      if (service) {
        document.title = `${service.title} | Services`;
      } else {
        document.title = "Services";
      }
    } else {
      document.title = "Services | Portfolio";
    }
  }, [slug]);
  
  // If we have a slug, display the individual service
  if (slug) {
    const service = servicesData.find(s => s.slug === slug);
    
    if (!service) {
      return (
        <div className="min-h-screen">
          <Navbar />
          <div className="container py-20">
            <h1 className="text-4xl font-bold mb-6">Service Not Found</h1>
            <p className="mb-8">The service you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/services" 
              className="btn-primary inline-flex items-center"
            >
              Back to All Services
            </Link>
          </div>
          <Footer />
        </div>
      );
    }
    
    return (
      <div className="min-h-screen">
        <Navbar />
        
        <section className="pt-32 pb-16">
          <div className="container">
            <Link to="/services" className="text-primary flex items-center mb-8 hover:underline">
              <ArrowRight className="mr-2 rotate-180 h-4 w-4" /> Back to All Services
            </Link>
            
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-2/3">
                <div className="mb-12">
                  <div className="inline-block p-3 rounded-2xl bg-primary/10 mb-6">
                    <img src={service.icon} className="w-12 h-12" alt={service.title} />
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
                  <p className="text-xl text-muted-foreground">{service.fullDescription}</p>
                </div>
                
                {/* Process Section */}
                <div className="mb-16">
                  <h2 className="text-2xl font-bold mb-8">My Process</h2>
                  <div className="space-y-8">
                    {service.process.map((step, index) => (
                      <div key={index} className="flex">
                        <div className="mr-6">
                          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold">
                            {index + 1}
                          </div>
                          {index < service.process.length - 1 && (
                            <div className="h-full w-0.5 bg-primary/20 mx-auto mt-2"></div>
                          )}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Benefits Section */}
                <div>
                  <h2 className="text-2xl font-bold mb-8">Key Benefits</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <div className="p-1 rounded-full bg-primary/10 text-primary mr-4 mt-1">
                          <Check className="w-4 h-4" />
                        </div>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Pricing Section */}
              <div className="lg:w-1/3">
                <div className="sticky top-24">
                  <h2 className="text-2xl font-bold mb-8">Pricing Packages</h2>
                  <div className="space-y-6">
                    {service.packages.map((pkg, index) => (
                      <div 
                        key={index} 
                        className={`rounded-2xl p-6 border relative ${
                          pkg.popular 
                            ? "border-primary/50 bg-primary/5 shadow-lg" 
                            : "border-border bg-white shadow"
                        }`}
                      >
                        {pkg.popular && (
                          <span className="absolute top-0 right-6 -translate-y-1/2 px-4 py-1 bg-primary text-primary-foreground text-xs font-bold rounded-full">
                            Popular
                          </span>
                        )}
                        <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                        <div className="text-3xl font-bold mb-6">
                          {pkg.price}
                        </div>
                        <div className="space-y-3 mb-6">
                          {pkg.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start">
                              <div className="p-1 rounded-full bg-primary/10 text-primary mr-3 mt-0.5">
                                <Check className="w-3 h-3" />
                              </div>
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <a 
                          href="#contact" 
                          className={`w-full py-2.5 px-4 rounded-lg text-center block font-medium ${
                            pkg.popular 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-muted hover:bg-primary/10"
                          }`}
                        >
                          Get Started
                        </a>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 text-center">
                    <p className="text-muted-foreground">Need a custom solution?</p>
                    <a href="#contact" className="text-primary font-medium hover:underline">
                      Contact me for a personalized quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Other Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicesData
                .filter(s => s.slug !== slug)
                .slice(0, 3)
                .map(service => (
                  <Link 
                    key={service.id} 
                    to={`/services/${service.slug}`}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300 group"
                  >
                    <div className="inline-block p-3 rounded-2xl bg-primary/10 mb-6">
                      <img src={service.icon} className="w-10 h-10" alt={service.title} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                ))
              }
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/services" 
                className="btn-primary inline-flex items-center"
              >
                View All Services
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
  
  // Otherwise, display all services
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-xl mx-auto mb-16 text-center">
            <span className="inline-block py-2 px-5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
              MY SERVICES
            </span>
            <h1 className="mb-6 text-4xl md:text-6xl font-bold tracking-tight">
              Expert <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              I offer a range of professional services to help your business thrive in the digital world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map(service => (
              <Link 
                key={service.id} 
                to={`/services/${service.slug}`}
                className="bg-white rounded-2xl p-8 shadow-lg hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="inline-block p-3 rounded-2xl bg-primary/10 mb-6">
                  <img src={service.icon} className="w-12 h-12" alt={service.title} />
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <div className="flex items-center text-primary font-medium">
                  Learn More <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-primary/90 to-secondary/90 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl mb-8 text-white/90">
              Let's work together to create something amazing. Contact me today to discuss your needs and how I can help bring your vision to life.
            </p>
            <Link 
              to="/contact" 
              className="px-10 py-4 bg-white text-primary rounded-full hover:bg-white/90 transition-colors text-lg font-medium"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ServicePage;
