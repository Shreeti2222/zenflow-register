import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import InstituteRegister from "./pages/InstituteRegister";
import InstituteLogin from "./pages/InstituteLogin";
import InstituteDashboard from "./pages/InstituteDashboard";
import StudentAuth from "./pages/StudentAuth";
import BrowseCourses from "./pages/BrowseCourses";
import CourseEnrollment from "./pages/CourseEnrollment";
import PaymentSuccess from "./pages/PaymentSuccess";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/institute/register" element={<InstituteRegister />} />
          <Route path="/institute/login" element={<InstituteLogin />} />
          <Route path="/institute/dashboard" element={<InstituteDashboard />} />
          <Route path="/student/auth" element={<StudentAuth />} />
          <Route path="/courses" element={<BrowseCourses />} />
          <Route path="/enroll/:courseId" element={<CourseEnrollment />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
