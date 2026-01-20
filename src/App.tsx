import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LeadCaptureProvider } from "@/contexts/LeadCaptureContext";
import LeadCaptureDialog from "@/components/landing/LeadCaptureDialog";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const App = () => (
  <TooltipProvider>
    <LeadCaptureProvider>
      <Toaster />
      <Sonner />
      <LeadCaptureDialog />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LeadCaptureProvider>
  </TooltipProvider>
);

export default App;
