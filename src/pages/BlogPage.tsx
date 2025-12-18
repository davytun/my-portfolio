import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useEffect } from "react";
import { ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import { useParams, Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  author: string;
  authorImage: string;
}

// Enhanced blog posts data with full content
const blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: "10 Essential UI Design Principles Every Developer Should Know",
    excerpt: "Learn the fundamental UI design principles that can dramatically improve your projects and create exceptional user experiences.",
    content: `
      <h2>Understanding UI Design Principles</h2>
      <p>Good UI design is crucial for the success of any digital product. It's not just about making things look pretty—it's about creating interfaces that are intuitive, efficient, and enjoyable to use.</p>
      
      <h3>1. Clarity is Key</h3>
      <p>Your interface should clearly communicate its purpose and function. Users should never have to guess how to interact with your design. Use clear language, recognizable icons, and intuitive layouts.</p>
      
      <h3>2. Maintain Consistency</h3>
      <p>Consistency in design creates familiarity and builds trust. Use consistent patterns, colors, and interactions throughout your interface to help users learn and navigate your application more efficiently.</p>
      
      <h3>3. Provide Feedback</h3>
      <p>Always let users know what's happening in your application. Whether it's a button changing color when pressed or a loading indicator during a process, feedback acknowledges user actions and keeps them informed.</p>
      
      <h3>4. Respect the Hierarchy</h3>
      <p>Visual hierarchy guides users through your content in order of importance. Use size, color, contrast, and spacing to establish a clear path for the user's eye to follow.</p>
      
      <h3>5. Make It Accessible</h3>
      <p>Design for all users, including those with disabilities. This means considering color contrast, text size, keyboard navigation, and screen reader compatibility.</p>
      
      <h3>6. Keep It Simple</h3>
      <p>Simplicity is at the core of good UI design. Remove unnecessary elements and streamline your interface to focus on what's truly important.</p>
      
      <h3>7. Be Forgiving</h3>
      <p>Design interfaces that allow users to make mistakes and easily recover from them. Confirm destructive actions, provide undo options, and use clear error messages.</p>
      
      <h3>8. Consider Context</h3>
      <p>Understand where, when, and how users will interact with your interface. Consider device limitations, environment, and user goals when making design decisions.</p>
      
      <h3>9. Use Familiar Patterns</h3>
      <p>Don't reinvent the wheel. Using established design patterns helps users understand your interface faster because they already know how similar elements work in other applications.</p>
      
      <h3>10. Test with Real Users</h3>
      <p>No matter how experienced you are, there's no substitute for real user feedback. Test your designs with actual users to uncover issues and validate your design decisions.</p>
      
      <h2>Conclusion</h2>
      <p>By incorporating these principles into your development process, you'll create more intuitive, effective, and enjoyable user experiences. Remember that great UI design isn't just about aesthetics—it's about solving problems for users in the most elegant way possible.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=500&auto=format&fit=crop",
    category: "Design",
    date: "May 15, 2023",
    readTime: "8 min read",
    slug: "ui-design-principles",
    author: "Alex Johnson",
    authorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "How to Optimize React Performance in Large-Scale Applications",
    excerpt: "Practical tips and techniques to boost the performance of your React applications when dealing with complex, data-heavy interfaces.",
    content: `
      <h2>React Performance Optimization</h2>
      <p>As your React application grows, performance issues can start to emerge. This is especially true for large-scale applications with complex state management and numerous components. In this article, we'll explore effective strategies to optimize your React application's performance.</p>
      
      <h3>1. Use Production Builds</h3>
      <p>Always use production builds for deployment. Development builds include extra warnings and development-only features that slow down your application. Production builds are significantly faster and smaller.</p>
      
      <h3>2. Implement Code Splitting</h3>
      <p>Code splitting allows you to split your code into small chunks which can be loaded on demand. This reduces the initial load time of your application. React.lazy and Suspense make this implementation straightforward.</p>
      
      <h3>3. Virtualize Long Lists</h3>
      <p>When rendering long lists of data, consider using virtualization libraries like react-window or react-virtualized. These libraries only render visible items in a list, significantly improving performance.</p>
      
      <h3>4. Memoize Components</h3>
      <p>Use React.memo, useMemo, and useCallback to prevent unnecessary re-renders. Memoization helps React skip rendering components whose props haven't changed, which can be a significant performance boost.</p>
      
      <h3>5. Optimize Context API Usage</h3>
      <p>The Context API can cause performance issues if not used correctly. Split your context into smaller, more focused contexts and use them only where needed to prevent unnecessary re-renders.</p>
      
      <h3>6. Use Web Workers for CPU-Intensive Tasks</h3>
      <p>Move CPU-intensive operations off the main thread using Web Workers. This keeps your UI responsive even during complex calculations or data processing.</p>
      
      <h3>7. Implement Proper State Management</h3>
      <p>Choose the right state management approach for your application's needs. For complex applications, consider libraries like Redux Toolkit or Zustand which provide efficient ways to manage and update state.</p>
      
      <h3>8. Optimize Images and Assets</h3>
      <p>Optimize all images and assets in your application. Use modern formats like WebP, lazy load images, and implement responsive images to reduce load times.</p>
      
      <h3>9. Avoid Inline Function Definitions</h3>
      <p>Inline function definitions in render methods create new function instances on every render. Define these functions outside the render method or use useCallback to prevent unnecessary re-renders.</p>
      
      <h3>10. Profile and Monitor Performance</h3>
      <p>Regularly profile your application using React DevTools and Chrome's Performance tab. This helps identify specific components or operations that are causing performance bottlenecks.</p>
      
      <h2>Conclusion</h2>
      <p>Performance optimization is an ongoing process, not a one-time task. By implementing these strategies, you can significantly improve the speed and responsiveness of your React applications, providing a better experience for your users.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=500&auto=format&fit=crop",
    category: "Development",
    date: "April 28, 2023",
    readTime: "10 min read",
    slug: "react-performance",
    author: "Alex Johnson",
    authorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "The Future of Web Development: Trends to Watch in 2023",
    excerpt: "Explore emerging technologies and practices shaping the future of web development, from AI integration to immersive experiences.",
    content: `
      <h2>Web Development Trends for 2023</h2>
      <p>The web development landscape continues to evolve at a rapid pace. As we move through 2023, several key trends are emerging that will shape how we build and experience the web in the near future.</p>
      
      <h3>1. AI-Powered Development Tools</h3>
      <p>Artificial intelligence is transforming how developers write code. Tools like GitHub Copilot and other AI assistants can now suggest code completions, generate entire functions, and help debug issues. This trend is making developers more productive and opening up coding to a wider audience.</p>
      
      <h3>2. WebAssembly (WASM) Goes Mainstream</h3>
      <p>WebAssembly continues to gain adoption, allowing developers to run code written in languages like C++, Rust, and Go directly in the browser at near-native speed. This is enabling more complex applications to run efficiently on the web, from video editing tools to games and simulations.</p>
      
      <h3>3. Edge Computing in Web Development</h3>
      <p>Edge computing is becoming increasingly important for web applications. By moving computation closer to users, edge functions reduce latency and improve performance. Frameworks like Next.js and platforms like Vercel and Netlify are making edge computing accessible to more developers.</p>
      
      <h3>4. Immersive Experiences with WebXR</h3>
      <p>The WebXR API is enabling immersive augmented and virtual reality experiences directly in the browser. As VR/AR devices become more common, expect to see more websites incorporating 3D and immersive elements without requiring special apps or plugins.</p>
      
      <h3>5. API-First Development</h3>
      <p>API-first development continues to grow, with more companies building robust APIs before developing their front-end applications. This approach enables greater flexibility, better integration with third-party services, and supports omnichannel experiences across different platforms.</p>
      
      <h3>6. Progressive Web Apps 2.0</h3>
      <p>PWAs are evolving with new capabilities like File System Access, Web Share, and Contact Picker APIs. These advancements are blurring the line between web and native apps even further, providing users with fast, reliable, and engaging experiences.</p>
      
      <h3>7. Micro-Frontends Architecture</h3>
      <p>Large organizations are increasingly adopting micro-frontends, breaking down monolithic frontend applications into smaller, more manageable pieces that can be developed and deployed independently by different teams.</p>
      
      <h3>8. Accessibility as a Priority</h3>
      <p>Web accessibility is finally getting the attention it deserves. More developers are now building with accessibility in mind from the start, rather than treating it as an afterthought, partly due to increasing legal requirements and partly due to better tooling and awareness.</p>
      
      <h3>9. Low-Code and No-Code Platforms</h3>
      <p>Low-code and no-code platforms are becoming more sophisticated, allowing non-developers to build web applications. This trend is changing how developers work, often shifting their role toward customization, integration, and solving more complex problems.</p>
      
      <h3>10. Green Web Development</h3>
      <p>Environmental impact is becoming a consideration in web development. Techniques to reduce the carbon footprint of websites—like optimizing images, reducing JavaScript, and choosing green hosting providers—are gaining attention in the development community.</p>
      
      <h2>Conclusion</h2>
      <p>The future of web development is exciting and diverse, with new technologies and approaches making the web more powerful, accessible, and performance-oriented than ever before. Staying informed about these trends can help developers build better experiences and stay competitive in the rapidly evolving digital landscape.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=500&auto=format&fit=crop",
    category: "Technology",
    date: "June 5, 2023",
    readTime: "7 min read",
    slug: "web-development-trends",
    author: "Alex Johnson",
    authorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Building Accessible Web Applications: A Comprehensive Guide",
    excerpt: "Learn how to make your web applications accessible to everyone, including people with disabilities.",
    content: `
      <h2>Introduction to Web Accessibility</h2>
      <p>Web accessibility means designing and developing websites that can be used by everyone, including people with disabilities. This isn't just a nice-to-have feature—it's a necessity for creating truly inclusive digital experiences.</p>
      
      <h3>Understanding Accessibility Standards</h3>
      <p>The Web Content Accessibility Guidelines (WCAG) provide a framework for making web content more accessible. These guidelines are organized around four principles: Perceivable, Operable, Understandable, and Robust (POUR).</p>
      
      <h3>Semantic HTML: The Foundation</h3>
      <p>Using proper semantic HTML elements is the foundation of accessible websites. Screen readers and other assistive technologies rely on semantic markup to understand and interpret web content correctly.</p>
      
      <h3>Keyboard Navigation</h3>
      <p>Not all users can use a mouse. Ensure all interactive elements are keyboard accessible and that there's a visible focus indicator so users know where they are on the page.</p>
      
      <h3>Color and Contrast</h3>
      <p>Color should never be the only way to convey information. Ensure sufficient contrast between text and background colors to make content readable for users with visual impairments.</p>
      
      <h3>Alternative Text for Images</h3>
      <p>Always provide descriptive alt text for images that convey information. This allows screen reader users to understand the content and purpose of the images.</p>
      
      <h3>Forms and Error Handling</h3>
      <p>Label form elements properly, provide clear instructions, and ensure error messages are clear and easily identifiable for all users.</p>
      
      <h3>ARIA (Accessible Rich Internet Applications)</h3>
      <p>Use ARIA attributes when necessary to enhance accessibility, especially for complex interactive components where standard HTML semantics aren't sufficient.</p>
      
      <h3>Testing for Accessibility</h3>
      <p>Regularly test your applications using a combination of automated tools (like Lighthouse or axe), manual keyboard testing, and testing with actual assistive technologies.</p>
      
      <h2>Conclusion</h2>
      <p>Building accessible web applications is not just about compliance with laws and regulations—it's about creating products that can be used by everyone. By incorporating these practices into your development workflow, you'll be creating more inclusive digital experiences for all users.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1573867639040-6dd25fa5f597?q=80&w=500&auto=format&fit=crop",
    category: "Accessibility",
    date: "July 12, 2023",
    readTime: "9 min read",
    slug: "web-accessibility-guide",
    author: "Alex Johnson",
    authorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Modern CSS Techniques That Every Developer Should Know",
    excerpt: "Explore powerful CSS features and techniques that can transform your web development workflow.",
    content: `
      <h2>The Evolution of CSS</h2>
      <p>CSS has evolved dramatically in recent years, with powerful new features that make complex layouts and interactions much easier to implement. This article covers modern CSS techniques that can elevate your web development skills.</p>
      
      <h3>CSS Grid for Complex Layouts</h3>
      <p>CSS Grid has revolutionized how we approach layout design. It provides a two-dimensional system that handles both columns and rows simultaneously, making complex layouts much simpler to implement.</p>
      
      <h3>Flexible Layouts with Flexbox</h3>
      <p>Flexbox provides a more efficient way to layout, align, and distribute space among items in a container. It's particularly useful for one-dimensional layouts and aligning items within a row or column.</p>
      
      <h3>CSS Custom Properties (Variables)</h3>
      <p>CSS variables allow you to store specific values to reuse throughout your document. They help maintain consistency, reduce repetition, and make global changes much easier to implement.</p>
      
      <h3>Modern CSS Units</h3>
      <p>Beyond pixels, there are more responsive and context-aware units like rem, em, vh, vw, and clamp() that adapt to different viewport sizes and user preferences.</p>
      
      <h3>CSS Animations and Transitions</h3>
      <p>CSS now provides powerful animation capabilities without requiring JavaScript. Learn how to use keyframe animations and transitions to create smooth, performant animations.</p>
      
      <h3>CSS Logical Properties</h3>
      <p>Logical properties like block-start and inline-end make it easier to build layouts that work across different writing modes and directions, improving international support.</p>
      
      <h3>Container Queries</h3>
      <p>Container queries allow components to adapt based on their parent container's size rather than the viewport, bringing true component-based responsive design.</p>
      
      <h3>Modern CSS Selectors</h3>
      <p>Advanced selectors like :is(), :where(), and :has() provide new ways to target elements with cleaner, more maintainable code.</p>
      
      <h2>Conclusion</h2>
      <p>Modern CSS has evolved far beyond simple styling, offering powerful tools for creating responsive, accessible, and visually engaging websites. By mastering these techniques, you can write more efficient code and create better user experiences.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=500&auto=format&fit=crop",
    category: "CSS",
    date: "August 23, 2023",
    readTime: "6 min read",
    slug: "modern-css-techniques",
    author: "Alex Johnson",
    authorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Getting Started with TypeScript: A Beginner's Guide",
    excerpt: "Learn the basics of TypeScript and how it can enhance your JavaScript development experience.",
    content: `
      <h2>Why TypeScript?</h2>
      <p>TypeScript extends JavaScript by adding static type definitions, making your code more robust and helping catch errors before runtime. This guide will help you get started with TypeScript in your projects.</p>
      
      <h3>Setting Up Your Development Environment</h3>
      <p>To start using TypeScript, you'll need to install it globally or as a project dependency using npm. Configure your project with a tsconfig.json file to specify compiler options.</p>
      
      <h3>Basic Types in TypeScript</h3>
      <p>Learn about TypeScript's basic types like string, number, boolean, array, and any. Understanding these fundamentals is essential for effective type checking.</p>
      
      <h3>Interfaces and Type Aliases</h3>
      <p>Interfaces and type aliases help define the shape of objects and create reusable type definitions. They're crucial for creating maintainable and scalable TypeScript code.</p>
      
      <h3>Functions in TypeScript</h3>
      <p>TypeScript allows you to define the types of function parameters and return values, making function signatures more explicit and self-documenting.</p>
      
      <h3>Classes and Object-Oriented Programming</h3>
      <p>TypeScript enhances JavaScript's class syntax with additional features like access modifiers and abstract classes, supporting robust object-oriented programming patterns.</p>
      
      <h3>Generics</h3>
      <p>Generics enable you to create reusable components that work with a variety of types rather than a single one, adding significant flexibility to your code.</p>
      
      <h3>Type Inference</h3>
      <p>TypeScript's intelligent type inference often means you don't need to explicitly annotate every variable, making your code cleaner while maintaining type safety.</p>
      
      <h3>Integration with JavaScript</h3>
      <p>TypeScript is designed to work seamlessly with existing JavaScript code, allowing for gradual adoption in established projects.</p>
      
      <h2>Conclusion</h2>
      <p>TypeScript offers significant advantages for JavaScript developers, from catching errors earlier to enabling better IDE support and documentation. By understanding these fundamentals, you're well on your way to writing more robust and maintainable code.</p>
    `,
    coverImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=500&auto=format&fit=crop",
    category: "TypeScript",
    date: "September 10, 2023",
    readTime: "8 min read",
    slug: "typescript-beginners-guide",
    author: "Alex Johnson",
    authorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
  },
];

const BlogPage = () => {
  const { slug } = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (slug) {
      const post = blogPostsData.find(post => post.slug === slug);
      if (post) {
        document.title = `${post.title} | Blog`;
      } else {
        document.title = "Blog";
      }
    } else {
      document.title = "Blog | All Articles";
    }
  }, [slug]);
  
  // If we have a slug, display the single blog post
  if (slug) {
    const post = blogPostsData.find(post => post.slug === slug);
    
    if (!post) {
      return (
        <div className="min-h-screen">
          <Navbar />
          <div className="container py-20">
            <h1 className="text-4xl font-bold mb-6">Article Not Found</h1>
            <p className="mb-8">The article you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/blog" 
              className="btn-primary inline-flex items-center"
            >
              Back to All Articles
            </Link>
          </div>
          <Footer />
        </div>
      );
    }
    
    return (
      <div className="min-h-screen">
        <Navbar />
        <section className="pt-32 pb-20">
          <div className="container max-w-4xl">
            <div className="mb-8">
              <Link to="/blog" className="text-primary flex items-center mb-6 hover:underline">
                <ArrowRight className="mr-2 rotate-180 h-4 w-4" /> Back to All Articles
              </Link>
              <div className="flex gap-4 mb-6">
                <span className="text-xs font-medium px-3 py-1.5 bg-primary/10 text-primary rounded-full flex items-center">
                  <Tag className="w-3.5 h-3.5 mr-1.5" />
                  {post.category}
                </span>
                <span className="text-muted-foreground flex items-center text-sm">
                  <Calendar className="w-3.5 h-3.5 mr-1.5" />
                  {post.date}
                </span>
                <span className="text-muted-foreground flex items-center text-sm">
                  <Clock className="w-3.5 h-3.5 mr-1.5" />
                  {post.readTime}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
              <div className="flex items-center space-x-4 mb-8">
                <img src={post.authorImage} alt={post.author} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-medium">{post.author}</div>
                  <div className="text-sm text-muted-foreground">Author</div>
                </div>
              </div>
            </div>

            <div className="mb-12 rounded-2xl overflow-hidden">
              <img 
                src={post.coverImage} 
                alt={post.title} 
                className="w-full h-auto" 
              />
            </div>

            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </section>
        <Footer />
      </div>
    );
  }
  
  // Otherwise, display the blog listing page
  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 relative">
        {/* Background elements */}
        <div className="absolute inset-0 bg-muted/30 backdrop-blur-sm -z-10"></div>
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none -z-5">
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-secondary/5 blur-3xl animate-pulse-medium"></div>
          <div className="absolute bottom-[30%] left-[10%] w-[35%] h-[35%] rounded-full bg-accent/5 blur-3xl animate-pulse-slow"></div>
        </div>

        <div className="container">
          <div className="max-w-xl mx-auto mb-16 text-center">
            <span className="inline-block py-2 px-5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
              MY BLOG
            </span>
            <h1 className="mb-6 text-4xl md:text-6xl font-bold tracking-tight">All <span className="gradient-text">Articles</span></h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, tutorials, and updates to keep you informed about the latest trends and technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPostsData.map((post) => (
              <div
                key={post.id}
                className="glass rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 group border border-white/20 hover:border-white/40"
              >
                <div className="h-56 overflow-hidden">
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4 text-sm">
                    <span className="text-xs font-medium px-3 py-1.5 bg-primary/10 text-primary rounded-full flex items-center">
                      <Tag className="w-3.5 h-3.5 mr-1.5" />
                      {post.category}
                    </span>
                    <span className="text-muted-foreground flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3">{post.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                      <img src={post.authorImage} alt={post.author} className="w-8 h-8 rounded-full object-cover" />
                      <span className="text-sm">{post.author}</span>
                    </div>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="w-3.5 h-3.5 mr-1.5" />
                      {post.readTime}
                    </span>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-white/10">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center text-primary font-medium hover:text-secondary transition-colors"
                    >
                      Read Article <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;
