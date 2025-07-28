import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { Building, ArrowLeft } from "lucide-react";

const InstituteRegister = () => {
  const [formData, setFormData] = useState({
    instituteName: "",
    email: "",
    password: "",
    location: "",
    contactNumber: ""
  });
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.instituteName || !formData.email || !formData.password) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Simulate registration
    toast({
      title: "Registration Successful!",
      description: "Welcome to ZenFlow. Redirecting to your dashboard...",
    });

    // Redirect after short delay
    setTimeout(() => {
      navigate("/institute/dashboard");
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-wellness-sage/5 to-wellness-sky/5 py-12">
        <div className="max-w-md mx-auto px-4">
          <div className="mb-6">
            <Button variant="ghost" asChild className="mb-4">
              <Link to="/" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Link>
            </Button>
          </div>

          <Card className="bg-card/95 backdrop-blur border border-border shadow-lg">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Building className="h-12 w-12 text-primary" />
              </div>
              <CardTitle className="text-2xl">Institute Registration</CardTitle>
              <CardDescription>
                Register your wellness institute and start offering courses
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="instituteName">Institute Name *</Label>
                  <Input
                    id="instituteName"
                    name="instituteName"
                    type="text"
                    placeholder="e.g., Peaceful Yoga Center"
                    value={formData.instituteName}
                    onChange={handleChange}
                    className="rounded-lg"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="institute@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="rounded-lg"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password *</Label>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Create a secure password"
                    value={formData.password}
                    onChange={handleChange}
                    className="rounded-lg"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    placeholder="City, State"
                    value={formData.location}
                    onChange={handleChange}
                    className="rounded-lg"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactNumber">Contact Number</Label>
                  <Input
                    id="contactNumber"
                    name="contactNumber"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    className="rounded-lg"
                  />
                </div>

                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 rounded-lg">
                  Register Institute
                </Button>
              </form>

              <div className="text-center mt-6">
                <p className="text-muted-foreground">
                  Already have an account?{" "}
                  <Link to="/institute/login" className="text-primary hover:underline">
                    Login here
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default InstituteRegister;