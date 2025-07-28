import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { CreditCard, Building, User, Clock, DollarSign, Wifi, MapPin } from "lucide-react";

const CourseEnrollment = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock course data - in a real app, this would be fetched based on courseId
  const course = {
    id: courseId,
    title: "Hatha Yoga Fundamentals",
    description: "Learn the basics of Hatha Yoga with focus on alignment and breathing techniques. Perfect for beginners seeking to establish a solid foundation in yoga practice.",
    institute: "Peaceful Yoga Center",
    instructor: "Sarah Johnson",
    price: 299,
    duration: "4 weeks",
    location: "San Francisco, CA",
    modes: ["online", "offline"]
  };

  const [selectedMode, setSelectedMode] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handleEnrollment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedMode || !paymentMethod) {
      toast({
        title: "Missing Information",
        description: "Please select both course mode and payment method",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Payment Successful!",
      description: "Enrollment completed. Redirecting to success page...",
    });

    setTimeout(() => {
      navigate("/payment-success", { 
        state: { 
          course: course.title, 
          mode: selectedMode,
          instructor: course.instructor 
        } 
      });
    }, 1500);
  };

  if (!course) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <Card>
            <CardContent className="text-center py-12">
              <p className="text-muted-foreground">Course not found</p>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-wellness-sage/5 to-wellness-sky/5 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Course Enrollment</h1>
            <p className="text-muted-foreground">Complete your enrollment to join this wellness journey</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Course Information */}
            <Card className="bg-card/80 backdrop-blur border border-border">
              <CardHeader>
                <CardTitle className="text-2xl">{course.title}</CardTitle>
                <CardDescription>{course.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center text-sm">
                    <Building className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-medium mr-2">Institute:</span>
                    <span className="text-muted-foreground">{course.institute}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <User className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-medium mr-2">Instructor:</span>
                    <span className="text-muted-foreground">{course.instructor}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-medium mr-2">Duration:</span>
                    <span className="text-muted-foreground">{course.duration}</span>
                  </div>
                  
                  <div className="flex items-center text-sm">
                    <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="font-medium mr-2">Location:</span>
                    <span className="text-muted-foreground">{course.location}</span>
                  </div>
                  
                  <div className="flex items-center text-lg font-semibold text-primary mt-4">
                    <DollarSign className="h-5 w-5 mr-1" />
                    {course.price}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enrollment Form */}
            <Card className="bg-card/80 backdrop-blur border border-border">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-6 w-6 mr-2" />
                  Enrollment Details
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleEnrollment} className="space-y-6">
                  {/* Course Mode Selection */}
                  <div className="space-y-3">
                    <Label className="text-base font-medium">Select Course Mode *</Label>
                    <RadioGroup value={selectedMode} onValueChange={setSelectedMode}>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="online" id="online" />
                        <Label htmlFor="online" className="flex items-center flex-1 cursor-pointer">
                          <Wifi className="h-4 w-4 mr-2" />
                          <div>
                            <div className="font-medium">Online Classes</div>
                            <div className="text-sm text-muted-foreground">Join from anywhere via video call</div>
                          </div>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="offline" id="offline" />
                        <Label htmlFor="offline" className="flex items-center flex-1 cursor-pointer">
                          <Building className="h-4 w-4 mr-2" />
                          <div>
                            <div className="font-medium">In-Person Classes</div>
                            <div className="text-sm text-muted-foreground">Attend at {course.location}</div>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Payment Method Selection */}
                  <div className="space-y-3">
                    <Label className="text-base font-medium">Payment Method *</Label>
                    <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                      <SelectTrigger className="rounded-lg">
                        <SelectValue placeholder="Choose payment method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="card">💳 Credit/Debit Card</SelectItem>
                        <SelectItem value="upi">📱 UPI Payment</SelectItem>
                        <SelectItem value="netbanking">🏦 Net Banking</SelectItem>
                        <SelectItem value="wallet">💰 Digital Wallet</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Summary */}
                  {selectedMode && (
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <h4 className="font-medium mb-2">Enrollment Summary</h4>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span>Course:</span>
                          <span>{course.title}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Mode:</span>
                          <Badge variant={selectedMode === 'online' ? 'default' : 'secondary'}>
                            {selectedMode}
                          </Badge>
                        </div>
                        <div className="flex justify-between font-medium">
                          <span>Total Amount:</span>
                          <span>${course.price}</span>
                        </div>
                      </div>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 rounded-lg"
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing Payment..." : `Pay $${course.price} & Enroll`}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseEnrollment;