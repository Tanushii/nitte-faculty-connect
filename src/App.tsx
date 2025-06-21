
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import FacultyDashboard from "./pages/FacultyDashboard";
import FacultyUploadForm from "./pages/FacultyUploadForm";
import ProgramsAttendedForm from "./pages/ProgramsAttendedForm";
import ProgramsOrganizedForm from "./pages/ProgramsOrganizedForm";
import ProfessionalCertificationsForm from "./pages/ProfessionalCertificationsForm";
import HODDashboard from "./pages/HODDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/faculty-dashboard" element={<FacultyDashboard />} />
          <Route path="/faculty/upload-form" element={<FacultyUploadForm />} />
          <Route path="/faculty/form/programs-attended" element={<ProgramsAttendedForm />} />
          <Route path="/faculty/form/programs-organized" element={<ProgramsOrganizedForm />} />
          <Route path="/faculty/form/certification-programs" element={<ProfessionalCertificationsForm />} />
          <Route path="/hod-dashboard" element={<HODDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
