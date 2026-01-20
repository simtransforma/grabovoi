import { createContext, useContext, useState, ReactNode } from "react";

interface LeadCaptureContextType {
  isOpen: boolean;
  openLeadCapture: () => void;
  closeLeadCapture: () => void;
}

const LeadCaptureContext = createContext<LeadCaptureContextType | undefined>(undefined);

export function LeadCaptureProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openLeadCapture = () => setIsOpen(true);
  const closeLeadCapture = () => setIsOpen(false);

  return (
    <LeadCaptureContext.Provider value={{ isOpen, openLeadCapture, closeLeadCapture }}>
      {children}
    </LeadCaptureContext.Provider>
  );
}

export function useLeadCapture() {
  const context = useContext(LeadCaptureContext);
  if (context === undefined) {
    throw new Error("useLeadCapture must be used within a LeadCaptureProvider");
  }
  return context;
}
