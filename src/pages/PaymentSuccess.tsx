import { useLocation, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { CheckCircle, MessageCircle, Home, BookOpen } from "lucide-react";

const PaymentSuccess = () => {
  const location = useLocation();
  const { course, mode, instructor } = location.state || {};

  // Mock WhatsApp group links based on mode
  const whatsappGroups = {
    online: "https://chat.whatsapp.com/online-wellness-group",
    offline: "https://chat.whatsapp.com/offline-wellness-group"
  };

  const groupLink = whatsappGroups[mode as keyof typeof whatsappGroups] || whatsappGroups.online;

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-wellness-sage/5 to-wellness-sky/5 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-card/95 backdrop-blur border border-border shadow-xl">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-6">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle className="text-3xl text-green-600 mb-2">Payment Successful!</CardTitle>
              <CardDescription className="text-lg">
                Congratulations! Your enrollment is complete.
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Enrollment Details */}
              <div className="bg-wellness-sage/10 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4 text-center">Enrollment Confirmation</h3>
                <div className="space-y-3 text-center">
                  {course && (
                    <div>
                      <span className="font-medium">Course:</span>
                      <p className="text-lg text-primary">{course}</p>
                    </div>
                  )}
                  {instructor && (
                    <div>
                      <span className="font-medium">Instructor:</span>
                      <p className="text-muted-foreground">{instructor}</p>
                    </div>
                  )}
                  {mode && (
                    <div>
                      <span className="font-medium">Mode:</span>
                      <p className="text-muted-foreground capitalize">{mode} Classes</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Success Message */}
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  🎉 Welcome to Your Wellness Journey!
                </h3>
                <p className="text-muted-foreground mb-6">
                  Your payment has been processed successfully. You're now enrolled in the course.
                  Join your class group below to connect with fellow students and receive important updates.
                </p>
              </div>

              {/* WhatsApp Group */}
              <div className="border border-green-200 bg-green-50/50 p-6 rounded-lg text-center">
                <h4 className="font-semibold text-lg mb-3 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-green-600" />
                  Join Your Class Group
                </h4>
                <p className="text-muted-foreground mb-4">
                  Connect with your instructor and classmates in our dedicated WhatsApp group
                  for {mode} classes.
                </p>
                <Button 
                  asChild 
                  className="bg-green-500 hover:bg-green-600 text-white rounded-lg"
                >
                  <a href={groupLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Join WhatsApp Group
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Click to open WhatsApp and join the group
                </p>
              </div>

              {/* What's Next */}
              <div className="bg-wellness-sky/10 p-6 rounded-lg">
                <h4 className="font-semibold text-lg mb-3">What's Next?</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>• You'll receive a welcome email with course details shortly</p>
                  <p>• Join the WhatsApp group to get class schedules and updates</p>
                  <p>• Your instructor will share course materials and resources</p>
                  <p>• Classes begin as per the schedule shared in the group</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button asChild variant="outline" className="flex-1 rounded-lg">
                  <Link to="/courses" className="flex items-center justify-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Browse More Courses
                  </Link>
                </Button>
                <Button asChild className="flex-1 bg-primary hover:bg-primary/90 rounded-lg">
                  <Link to="/" className="flex items-center justify-center">
                    <Home className="h-4 w-4 mr-2" />
                    Back to Home
                  </Link>
                </Button>
              </div>

              {/* Support */}
              <div className="text-center pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground">
                  Need help? Contact us at{" "}
                  <a href="mailto:support@zenflow.com" className="text-primary hover:underline">
                    support@zenflow.com
                  </a>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentSuccess;