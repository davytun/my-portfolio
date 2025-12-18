import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

// Define project data interface
interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  slug: string;
  client?: string;
  year: string;
  link?: string;
  features: string[];
  gallery: string[];
}

// Sample project data
const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform Redesign",
    category: "Web Development",
    description: "Modern e-commerce platform with streamlined checkout process and responsive design.",
    fullDescription: "A comprehensive redesign of an established e-commerce platform to improve user experience, increase conversion rates, and modernize the visual aesthetic. The project involved creating a fully responsive design, implementing an intuitive product filtering system, and streamlining the checkout process to reduce cart abandonment rates. The new platform has resulted in a 35% increase in mobile conversions and a 25% reduction in checkout abandonment.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Redux", "SCSS"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop",
    slug: "ecommerce-platform",
    client: "Fashion Retailer Inc.",
    year: "2023",
    link: "https://example.com",
    features: [
      "Responsive design optimized for mobile, tablet, and desktop",
      "Advanced product filtering and search capabilities",
      "Streamlined 3-step checkout process",
      "Integrated payment gateway with multiple payment options",
      "Customer account management and order history",
      "Real-time inventory tracking",
      "Wishlist and saved items functionality"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1629118177511-3f8e780ee655?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1561069934-eee225952461?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541336744128-c4b211d13087?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Investment Portfolio Dashboard",
    category: "Web Application",
    description: "Interactive dashboard for tracking investments with real-time data visualization.",
    fullDescription: "A sophisticated investment portfolio dashboard designed for financial advisors and individual investors. The application provides comprehensive portfolio analytics, real-time market data, and interactive data visualizations to help users make informed investment decisions. The dashboard aggregates data from multiple sources and presents it in an intuitive interface that allows for deep analysis while remaining accessible to non-technical users.",
    technologies: ["React", "TypeScript", "D3.js", "Firebase", "Material UI", "RESTful APIs"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop",
    slug: "investment-dashboard",
    client: "Financial Advisors Group",
    year: "2023",
    features: [
      "Real-time portfolio performance tracking",
      "Interactive charts and data visualizations",
      "Asset allocation analysis tools",
      "Risk assessment metrics",
      "Market trends and news integration",
      "Customizable alerts and notifications",
      "Multi-device synchronization"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1639152210737-cbc06a60d8ee?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1579226905180-636b76d96082?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Health & Fitness Mobile App",
    category: "Mobile Application",
    description: "Comprehensive fitness tracking app with personalized workout plans and nutrition guidance.",
    fullDescription: "A holistic health and fitness mobile application that combines workout tracking, nutrition planning, and wellness monitoring in one seamless experience. The app offers personalized workout recommendations based on user goals, tracks progress through visual metrics, and provides customized meal plans with integrated grocery lists. Built with a focus on user engagement, the app incorporates gamification elements and social features to keep users motivated on their fitness journey.",
    technologies: ["React Native", "TypeScript", "Redux", "Node.js", "MongoDB", "Firebase"],
    image: "https://images.unsplash.com/photo-1601925259972-f310dbf22b84?q=80&w=1000&auto=format&fit=crop",
    slug: "fitness-mobile-app",
    client: "HealthTech Solutions",
    year: "2022",
    link: "https://apps.apple.com/example",
    features: [
      "Customizable workout plans based on user goals",
      "Exercise library with video demonstrations",
      "Progress tracking with visual graphs",
      "Nutrition planning and meal suggestions",
      "Integration with wearable fitness devices",
      "Community challenges and social sharing",
      "Habit tracking and achievement rewards"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1598136490937-e9d615ce8833?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 4,
    title: "Smart Home Control System",
    category: "IoT Development",
    description: "Integrated IoT solution for managing smart home devices through a single interface.",
    fullDescription: "An innovative smart home system that unifies control of various IoT devices through a single, intuitive interface. The solution connects and manages lighting, climate control, security systems, and entertainment devices from different manufacturers. The system uses machine learning to adapt to user preferences over time, creating automated routines that anticipate needs based on usage patterns, time of day, and external factors like weather conditions.",
    technologies: ["React", "Node.js", "MQTT", "WebSockets", "TensorFlow.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1000&auto=format&fit=crop",
    slug: "smart-home-system",
    client: "ConnectedHome Technologies",
    year: "2022",
    features: [
      "Unified dashboard for all smart home devices",
      "Voice control integration with major assistants",
      "Custom automation routines and schedules",
      "Energy consumption monitoring and optimization",
      "AI-powered predictive controls",
      "Remote access and monitoring",
      "Detailed usage analytics"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1585045545273-a05f1556f250?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557316844-11c98e3b8508?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1609094651466-e807d5af9766?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 5,
    title: "Educational Learning Platform",
    category: "Web Development",
    description: "Interactive online learning platform with course management and progress tracking.",
    fullDescription: "A comprehensive educational platform designed to make learning accessible and engaging for students of all ages. The platform features course management tools for educators, interactive learning materials, and detailed progress tracking for students. It incorporates multimedia content, collaborative learning exercises, and gamification elements to enhance the educational experience. The responsive design ensures a seamless experience across devices, allowing students to learn anywhere, anytime.",
    technologies: ["Next.js", "TypeScript", "GraphQL", "PostgreSQL", "AWS", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1000&auto=format&fit=crop",
    slug: "educational-platform",
    client: "Global Education Initiative",
    year: "2021",
    link: "https://example-edu.com",
    features: [
      "Course creation and management tools",
      "Interactive learning materials and quizzes",
      "Student progress tracking and analytics",
      "Discussion forums and collaborative workspaces",
      "Video conferencing for virtual classrooms",
      "Digital certificate generation",
      "Accessibility features for all learners"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800&auto=format&fit=crop"
    ]
  },
  {
    id: 6,
    title: "Sustainable City Planning Tool",
    category: "Data Visualization",
    description: "Urban planning software with 3D visualization and environmental impact assessment.",
    fullDescription: "An innovative city planning tool that helps urban planners, architects, and policy makers design more sustainable cities. The application features 3D visualization of urban environments, environmental impact assessment tools, and simulation capabilities for traffic patterns and energy usage. The platform incorporates public transportation optimization, green space planning, and renewable energy integration to create more livable and environmentally friendly urban spaces.",
    technologies: ["Three.js", "React", "Python", "GIS", "TensorFlow", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1000&auto=format&fit=crop",
    slug: "city-planning-tool",
    client: "Urban Development Agency",
    year: "2021",
    features: [
      "3D urban environment modeling",
      "Environmental impact assessment",
      "Traffic flow simulation and optimization",
      "Solar potential analysis for buildings",
      "Public transportation route planning",
      "Green space and biodiversity impact analysis",
      "Stakeholder collaboration tools"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1524133735798-338eb2e518c4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1593008011781-66c736ca6366?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1492162766372-2fee09abff3d?q=80&w=800&auto=format&fit=crop"
    ]
  }
];

const ProjectPage = () => {
  const { slug } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (slug) {
      const project = projectsData.find(p => p.slug === slug);
      if (project) {
        document.title = `${project.title} | Projects`;
      } else {
        document.title = "Projects";
      }
    } else {
      document.title = "Projects | Portfolio";
    }
  }, [slug]);
  
  // If we have a slug, display the individual project
  if (slug) {
    const project = projectsData.find(p => p.slug === slug);
    
    if (!project) {
      return (
        <div className="min-h-screen">
          <Navbar />
          <div className="container py-20">
            <h1 className="text-4xl font-bold mb-6">Project Not Found</h1>
            <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/projects" 
              className="btn-primary inline-flex items-center"
            >
              Back to All Projects
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
            <Link to="/projects" className="text-primary flex items-center mb-8 hover:underline">
              <ArrowRight className="mr-2 rotate-180 h-4 w-4" /> Back to All Projects
            </Link>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Project Image */}
              <div>
                <div className="rounded-2xl overflow-hidden mb-8">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-auto" 
                  />
                </div>
                
                {/* Project Gallery */}
                <div className="grid grid-cols-3 gap-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                      <img 
                        src={image} 
                        alt={`${project.title} gallery ${index + 1}`} 
                        className="w-full h-auto aspect-video object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Project Details */}
              <div>
                <div className="mb-6">
                  <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                    {project.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
                </div>
                
                <div className="prose prose-lg max-w-none mb-8">
                  <p>{project.fullDescription}</p>
                </div>
                
                {/* Project Metadata */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">Client</h3>
                    <p className="font-medium">{project.client || "N/A"}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm text-muted-foreground mb-1">Year</h3>
                    <p className="font-medium">{project.year}</p>
                  </div>
                  
                  {project.link && (
                    <div>
                      <h3 className="text-sm text-muted-foreground mb-1">Website</h3>
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-primary hover:underline font-medium"
                      >
                        Visit Project
                      </a>
                    </div>
                  )}
                </div>
                
                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="font-bold text-xl mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-muted px-3 py-1.5 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Features */}
                <div>
                  <h3 className="font-bold text-xl mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* More Projects Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">More Projects</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projectsData
                .filter(p => p.slug !== slug)
                .slice(0, 3)
                .map(project => (
                  <Link 
                    key={project.id} 
                    to={`/projects/${project.slug}`}
                    className="bg-background rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                  >
                    <div className="h-56 overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-medium px-3 py-1.5 bg-primary/10 text-primary rounded-full">
                        {project.category}
                      </span>
                      <h3 className="font-bold text-xl mt-4 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </Link>
                ))
              }
            </div>
            
            <div className="text-center mt-12">
              <Link 
                to="/projects" 
                className="btn-primary inline-flex items-center"
              >
                View All Projects
              </Link>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }
  
  // Otherwise, display all projects
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container">
          <div className="max-w-xl mx-auto mb-16 text-center">
            <span className="inline-block py-2 px-5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
              MY PROJECTS
            </span>
            <h1 className="mb-6 text-4xl md:text-6xl font-bold tracking-tight">
              Featured <span className="gradient-text">Projects</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore my selected projects showcasing my expertise in web development, design, and problem-solving.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map(project => (
              <Link 
                key={project.id} 
                to={`/projects/${project.slug}`}
                className="bg-background rounded-2xl overflow-hidden shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                  />
                </div>
                <div className="p-8">
                  <span className="text-xs font-medium px-3 py-1.5 bg-primary/10 text-primary rounded-full">
                    {project.category}
                  </span>
                  <h3 className="font-bold text-xl mt-4 mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {project.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm">
                      <span className="text-muted-foreground">Year: </span>
                      <span className="font-medium">{project.year}</span>
                    </div>
                    <div className="flex items-center text-primary font-medium">
                      View Project <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProjectPage;
