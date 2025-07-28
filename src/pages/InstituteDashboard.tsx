import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";
import { Building, Plus, Edit, Trash2, Users, User } from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  mode: "online" | "offline";
  instructor: string;
  price: number;
  duration: string;
  students: number;
}

const InstituteDashboard = () => {
  const [courses, setCourses] = useState<Course[]>([
    {
      id: "1",
      title: "Hatha Yoga Fundamentals",
      description: "Learn the basics of Hatha Yoga with focus on alignment and breathing",
      mode: "offline",
      instructor: "Sarah Johnson",
      price: 299,
      duration: "4 weeks",
      students: 15
    },
    {
      id: "2", 
      title: "Ayurvedic Nutrition Online",
      description: "Discover principles of Ayurvedic eating for optimal health",
      mode: "online",
      instructor: "Dr. Raj Patel",
      price: 199,
      duration: "6 weeks",
      students: 8
    }
  ]);

  const [instituteInfo, setInstituteInfo] = useState({
    name: "Peaceful Yoga Center",
    email: "info@peacefulyoga.com",
    location: "San Francisco, CA",
    contact: "+1 (555) 123-4567"
  });

  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    mode: "",
    instructor: "",
    price: "",
    duration: ""
  });

  const [editingCourse, setEditingCourse] = useState<Course | null>(null);
  const { toast } = useToast();

  const handleAddCourse = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newCourse.title || !newCourse.instructor || !newCourse.price) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const course: Course = {
      id: Date.now().toString(),
      title: newCourse.title,
      description: newCourse.description,
      mode: newCourse.mode as "online" | "offline",
      instructor: newCourse.instructor,
      price: parseInt(newCourse.price),
      duration: newCourse.duration,
      students: 0
    };

    setCourses(prev => [...prev, course]);
    setNewCourse({
      title: "",
      description: "",
      mode: "",
      instructor: "",
      price: "",
      duration: ""
    });

    toast({
      title: "Course Added!",
      description: "Your new course has been added successfully",
    });
  };

  const handleUpdateInstitute = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Information Updated!",
      description: "Your institute information has been updated",
    });
  };

  const deleteCourse = (courseId: string) => {
    setCourses(prev => prev.filter(course => course.id !== courseId));
    toast({
      title: "Course Deleted",
      description: "The course has been removed",
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-wellness-sage/5 to-wellness-sky/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex items-center space-x-3 mb-2">
              <Building className="h-8 w-8 text-primary" />
              <h1 className="text-3xl font-bold text-foreground">Institute Dashboard</h1>
            </div>
            <p className="text-muted-foreground">Manage your courses and institute information</p>
          </div>

          <Tabs defaultValue="courses" className="space-y-6">
            <TabsList className="grid w-full grid-cols-3 bg-card rounded-lg">
              <TabsTrigger value="courses">Courses</TabsTrigger>
              <TabsTrigger value="add-course">Add Course</TabsTrigger>
              <TabsTrigger value="institute">Institute Info</TabsTrigger>
            </TabsList>

            {/* Courses Tab */}
            <TabsContent value="courses">
              <div className="grid gap-6">
                <h2 className="text-2xl font-semibold flex items-center">
                  <Users className="h-6 w-6 mr-2" />
                  Your Courses
                </h2>
                
                {courses.length === 0 ? (
                  <Card>
                    <CardContent className="text-center py-12">
                      <p className="text-muted-foreground">No courses yet. Add your first course!</p>
                    </CardContent>
                  </Card>
                ) : (
                  <div className="grid gap-4">
                    {courses.map((course) => (
                      <Card key={course.id} className="bg-card border border-border">
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="flex items-center gap-2">
                                {course.title}
                                <Badge variant={course.mode === 'online' ? 'default' : 'secondary'}>
                                  {course.mode}
                                </Badge>
                              </CardTitle>
                              <CardDescription>{course.description}</CardDescription>
                            </div>
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <Edit className="h-4 w-4" />
                              </Button>
                              <Button 
                                variant="outline" 
                                size="sm" 
                                onClick={() => deleteCourse(course.id)}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="font-medium">Instructor:</span>
                              <p className="text-muted-foreground">{course.instructor}</p>
                            </div>
                            <div>
                              <span className="font-medium">Price:</span>
                              <p className="text-muted-foreground">${course.price}</p>
                            </div>
                            <div>
                              <span className="font-medium">Duration:</span>
                              <p className="text-muted-foreground">{course.duration}</p>
                            </div>
                            <div>
                              <span className="font-medium">Students:</span>
                              <p className="text-muted-foreground flex items-center">
                                <User className="h-4 w-4 mr-1" />
                                {course.students}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            </TabsContent>

            {/* Add Course Tab */}
            <TabsContent value="add-course">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Plus className="h-6 w-6 mr-2" />
                    Add New Course
                  </CardTitle>
                  <CardDescription>
                    Create a new course for your students
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleAddCourse} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="title">Course Title *</Label>
                        <Input
                          id="title"
                          value={newCourse.title}
                          onChange={(e) => setNewCourse(prev => ({...prev, title: e.target.value}))}
                          placeholder="e.g., Beginner Yoga"
                          className="rounded-lg"
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="instructor">Instructor *</Label>
                        <Input
                          id="instructor"
                          value={newCourse.instructor}
                          onChange={(e) => setNewCourse(prev => ({...prev, instructor: e.target.value}))}
                          placeholder="Instructor name"
                          className="rounded-lg"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={newCourse.description}
                        onChange={(e) => setNewCourse(prev => ({...prev, description: e.target.value}))}
                        placeholder="Describe your course..."
                        className="rounded-lg"
                        rows={3}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="mode">Mode *</Label>
                        <Select 
                          value={newCourse.mode} 
                          onValueChange={(value) => setNewCourse(prev => ({...prev, mode: value}))}
                        >
                          <SelectTrigger className="rounded-lg">
                            <SelectValue placeholder="Select mode" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="online">Online</SelectItem>
                            <SelectItem value="offline">Offline</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="price">Price ($) *</Label>
                        <Input
                          id="price"
                          type="number"
                          value={newCourse.price}
                          onChange={(e) => setNewCourse(prev => ({...prev, price: e.target.value}))}
                          placeholder="199"
                          className="rounded-lg"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="duration">Duration</Label>
                        <Input
                          id="duration"
                          value={newCourse.duration}
                          onChange={(e) => setNewCourse(prev => ({...prev, duration: e.target.value}))}
                          placeholder="e.g., 4 weeks"
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 rounded-lg">
                      Add Course
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Institute Info Tab */}
            <TabsContent value="institute">
              <Card>
                <CardHeader>
                  <CardTitle>Institute Information</CardTitle>
                  <CardDescription>
                    Update your institute details
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleUpdateInstitute} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Institute Name</Label>
                        <Input
                          id="name"
                          value={instituteInfo.name}
                          onChange={(e) => setInstituteInfo(prev => ({...prev, name: e.target.value}))}
                          className="rounded-lg"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={instituteInfo.email}
                          onChange={(e) => setInstituteInfo(prev => ({...prev, email: e.target.value}))}
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="location">Location</Label>
                        <Input
                          id="location"
                          value={instituteInfo.location}
                          onChange={(e) => setInstituteInfo(prev => ({...prev, location: e.target.value}))}
                          className="rounded-lg"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="contact">Contact Number</Label>
                        <Input
                          id="contact"
                          value={instituteInfo.contact}
                          onChange={(e) => setInstituteInfo(prev => ({...prev, contact: e.target.value}))}
                          className="rounded-lg"
                        />
                      </div>
                    </div>

                    <Button type="submit" className="bg-primary hover:bg-primary/90 rounded-lg">
                      Update Information
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default InstituteDashboard;