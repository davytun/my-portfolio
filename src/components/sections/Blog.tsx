
import { ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Link } from "react-router-dom";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  coverImage: string;
  category: string;
  date: string;
  readTime: string;
  slug: string;
  author: string;
  authorImage: string;
}

// Enhanced mock data
const blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: "10 Essential UI Design Principles Every Developer Should Know",
    excerpt: "Learn the fundamental UI design principles that can dramatically improve your projects and create exceptional user experiences.",
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
    coverImage: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=500&auto=format&fit=crop",
    category: "Technology",
    date: "June 5, 2023",
    readTime: "7 min read",
    slug: "web-development-trends",
    author: "Alex Johnson",
    authorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100&auto=format&fit=crop"
  },
];

const Blog = () => {
  return (
    <section id="blog" className="section-padding relative">
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
          <h2 className="mb-6 text-4xl md:text-6xl font-bold tracking-tight">Latest <span className="gradient-text">Articles</span></h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and updates from my blog to keep you informed about the latest trends and technologies.
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

        <div className="text-center mt-16">
          <Link to="/blog" className="btn-primary bg-gradient-to-r from-primary to-secondary px-10 py-4 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
