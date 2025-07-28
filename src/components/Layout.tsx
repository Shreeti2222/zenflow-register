import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Leaf, Heart, Home } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="text-xl font-semibold text-foreground">ZenFlow</span>
            </Link>
            
            <div className="flex items-center space-x-6">
              <Link to="/" className="flex items-center space-x-1 text-muted-foreground hover:text-primary transition-colors">
                <Home className="h-4 w-4" />
                <span>Home</span>
              </Link>
              <Link to="/courses" className="text-muted-foreground hover:text-primary transition-colors">
                Browse Courses
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t border-border mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="h-6 w-6 text-primary" />
                <span className="text-lg font-semibold">ZenFlow</span>
              </div>
              <p className="text-muted-foreground">
                Connecting wellness seekers with authentic healing institutes.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact & Help</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: help@zenflow.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Support: 24/7 Available</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Wellness Categories</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>🧘 Yoga & Meditation</p>
                <p>🌿 Ayurveda & Herbs</p>
                <p>💫 Energy Healing</p>
                <p>🏃 Holistic Fitness</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2024 ZenFlow. Made with <Heart className="inline h-4 w-4 text-red-500" /> for wellness.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;