import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { GraduationCap, Building, Flower, Leaf, Users, Heart } from "lucide-react";
import wellnessHero from "@/assets/wellness-hero.jpg";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${wellnessHero})` }}
        />
        <div className="relative bg-gradient-to-br from-wellness-sage/10 to-wellness-sky/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
            <div className="flex justify-center mb-8">
              <div className="flex items-center space-x-2">
                <Flower className="h-12 w-12 text-primary" />
                <Leaf className="h-8 w-8 text-wellness-sage" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Welcome to <span className="text-primary">ZenFlow</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Connect with authentic wellness institutes offering Yoga, Ayurveda, and healing courses. 
              Find your path to inner peace and holistic health.
            </p>

            {/* Main Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Card className="w-full sm:w-80 bg-card/80 backdrop-blur border-2 hover:border-primary/30 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <Building className="h-12 w-12 text-primary" />
                  </div>
                  <CardTitle className="text-xl">I'm an Institute</CardTitle>
                  <CardDescription>
                    Register your wellness center and start offering courses to seekers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 rounded-xl">
                    <Link to="/institute/register">Register Institute</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full mt-3 rounded-xl">
                    <Link to="/institute/login">Institute Login</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="w-full sm:w-80 bg-card/80 backdrop-blur border-2 hover:border-wellness-sage/30 transition-all duration-300 hover:shadow-lg">
                <CardHeader className="text-center">
                  <div className="flex justify-center mb-4">
                    <GraduationCap className="h-12 w-12 text-wellness-sage" />
                  </div>
                  <CardTitle className="text-xl">I'm a Student</CardTitle>
                  <CardDescription>
                    Discover and enroll in authentic wellness courses near you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-wellness-sage hover:bg-wellness-sage/90 rounded-xl">
                    <Link to="/student/auth">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full mt-3 rounded-xl">
                    <Link to="/courses">Browse Courses</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-wellness-warm/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">Why Choose ZenFlow?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We bridge the gap between authentic wellness institutes and passionate learners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Authentic Institutes</h3>
              <p className="text-muted-foreground">
                Connect with verified wellness centers offering genuine traditional practices
              </p>
            </div>

            <div className="text-center">
              <div className="bg-wellness-sage/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flower className="h-8 w-8 text-wellness-sage" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Holistic Learning</h3>
              <p className="text-muted-foreground">
                From Yoga to Ayurveda, discover courses that nurture mind, body, and spirit
              </p>
            </div>

            <div className="text-center">
              <div className="bg-wellness-sky/30 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-wellness-sky" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-muted-foreground">
                Join WhatsApp groups and connect with like-minded wellness enthusiasts
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;