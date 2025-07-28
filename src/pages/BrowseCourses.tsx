import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Layout from "@/components/Layout";
import { Search, MapPin, DollarSign, Clock, User, Wifi, Building } from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
  institute: string;
  category: string;
  mode: "online" | "offline";
  instructor: string;
  price: number;
  duration: string;
  location?: string;
}

const BrowseCourses = () => {
  const [courses] = useState<Course[]>([
    {
      id: "1",
      title: "Hatha Yoga Fundamentals",
      description: "Learn the basics of Hatha Yoga with focus on alignment and breathing techniques. Perfect for beginners.",
      institute: "Peaceful Yoga Center",
      category: "Yoga",
      mode: "offline",
      instructor: "Sarah Johnson",
      price: 299,
      duration: "4 weeks",
      location: "San Francisco, CA"
    },
    {
      id: "2",
      title: "Ayurvedic Nutrition Online",
      description: "Discover principles of Ayurvedic eating for optimal health and wellness in this comprehensive course.",
      institute: "Peaceful Yoga Center",
      category: "Ayurveda",
      mode: "online",
      instructor: "Dr. Raj Patel",
      price: 199,
      duration: "6 weeks"
    },
    {
      id: "3",
      title: "Reiki Healing Level 1",
      description: "Introduction to Reiki energy healing techniques and hands-on practice sessions.",
      institute: "Healing Light Institute",
      category: "Energy Healing",
      mode: "offline",
      instructor: "Master Chen",
      price: 399,
      duration: "3 days",
      location: "Seattle, WA"
    },
    {
      id: "4",
      title: "Meditation for Beginners",
      description: "Learn various meditation techniques to reduce stress and increase mindfulness.",
      institute: "Mindful Living Center",
      category: "Meditation",
      mode: "online",
      instructor: "Lisa Thompson",
      price: 149,
      duration: "8 weeks"
    },
    {
      id: "5",
      title: "Vinyasa Flow Yoga",
      description: "Dynamic yoga practice linking breath with movement for strength and flexibility.",
      institute: "Flow Studio",
      category: "Yoga",
      mode: "offline",
      instructor: "Maya Rodriguez",
      price: 259,
      duration: "6 weeks",
      location: "Austin, TX"
    },
    {
      id: "6",
      title: "Herbal Medicine Basics",
      description: "Learn about medicinal plants and how to prepare natural remedies at home.",
      institute: "Nature's Wisdom School",
      category: "Ayurveda",
      mode: "online",
      instructor: "Dr. Green",
      price: 179,
      duration: "5 weeks"
    }
  ]);

  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedMode, setSelectedMode] = useState("");
  const [selectedInstitute, setSelectedInstitute] = useState("");

  const categories = [...new Set(courses.map(course => course.category))];
  const institutes = [...new Set(courses.map(course => course.institute))];

  const filterCourses = () => {
    let filtered = courses;

    if (searchTerm) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory && selectedCategory !== "all") {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    if (selectedMode && selectedMode !== "all") {
      filtered = filtered.filter(course => course.mode === selectedMode);
    }

    if (selectedInstitute && selectedInstitute !== "all") {
      filtered = filtered.filter(course => course.institute === selectedInstitute);
    }

    setFilteredCourses(filtered);
  };

  // Apply filters when any filter changes
  useState(() => {
    filterCourses();
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setTimeout(filterCourses, 300); // Debounce search
  };

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    filterCourses();
  };

  const handleModeChange = (value: string) => {
    setSelectedMode(value);
    filterCourses();
  };

  const handleInstituteChange = (value: string) => {
    setSelectedInstitute(value);
    filterCourses();
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("all");
    setSelectedMode("all");
    setSelectedInstitute("all");
    setFilteredCourses(courses);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-wellness-sage/5 to-wellness-sky/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Browse Wellness Courses</h1>
            <p className="text-muted-foreground">Discover your perfect path to wellness and healing</p>
          </div>

          {/* Filters */}
          <Card className="mb-8 bg-card/80 backdrop-blur">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Find Your Perfect Course
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
                <div className="lg:col-span-2">
                  <Input
                    placeholder="Search courses, instructors..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="rounded-lg"
                  />
                </div>
                
                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map(category => (
                      <SelectItem key={category} value={category}>{category}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={selectedMode} onValueChange={handleModeChange}>
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Modes</SelectItem>
                    <SelectItem value="online">Online</SelectItem>
                    <SelectItem value="offline">Offline</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedInstitute} onValueChange={handleInstituteChange}>
                  <SelectTrigger className="rounded-lg">
                    <SelectValue placeholder="Institute" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Institutes</SelectItem>
                    {institutes.map(institute => (
                      <SelectItem key={institute} value={institute}>{institute}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {(searchTerm || (selectedCategory && selectedCategory !== "all") || (selectedMode && selectedMode !== "all") || (selectedInstitute && selectedInstitute !== "all")) && (
                <Button variant="outline" onClick={clearFilters} className="rounded-lg">
                  Clear Filters
                </Button>
              )}
            </CardContent>
          </Card>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? 's' : ''}
            </p>
          </div>

          {/* Course Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <Card key={course.id} className="bg-card border border-border hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={course.mode === 'online' ? 'default' : 'secondary'} className="mb-2">
                      {course.mode === 'online' ? (
                        <><Wifi className="h-3 w-3 mr-1" /> Online</>
                      ) : (
                        <><Building className="h-3 w-3 mr-1" /> Offline</>
                      )}
                    </Badge>
                    <Badge variant="outline">{course.category}</Badge>
                  </div>
                  
                  <CardTitle className="text-xl leading-tight">{course.title}</CardTitle>
                  <CardDescription className="text-sm line-clamp-2">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-muted-foreground">
                      <div className="flex items-center mb-1">
                        <Building className="h-4 w-4 mr-2" />
                        {course.institute}
                      </div>
                      <div className="flex items-center mb-1">
                        <User className="h-4 w-4 mr-2" />
                        {course.instructor}
                      </div>
                      {course.location && (
                        <div className="flex items-center mb-1">
                          <MapPin className="h-4 w-4 mr-2" />
                          {course.location}
                        </div>
                      )}
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {course.duration}
                      </div>
                      <div className="flex items-center font-semibold text-primary">
                        <DollarSign className="h-4 w-4" />
                        {course.price}
                      </div>
                    </div>

                    <Button asChild className="w-full bg-primary hover:bg-primary/90 rounded-lg">
                      <Link to={`/enroll/${course.id}`}>
                        Enroll Now
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <Card className="text-center py-12">
              <CardContent>
                <p className="text-muted-foreground text-lg mb-4">No courses found matching your criteria</p>
                <Button onClick={clearFilters} variant="outline" className="rounded-lg">
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default BrowseCourses;