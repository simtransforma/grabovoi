import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useLeadCapture } from "@/contexts/LeadCaptureContext";
import { useCheckoutUrl } from "@/hooks/use-checkout-url";
import { Gift, Lock, ArrowRight, Loader2 } from "lucide-react";

const WEBHOOK_URL = "https://n8n.edsonburgersim.com/webhook/d6f2e4ab-f2e9-4c9f-b995-54d08064bb05";

// Format phone as (XX) XXXXX-XXXX or (XX) XXXX-XXXX
function formatPhone(value: string): string {
  const numbers = value.replace(/\D/g, "").slice(0, 11);

  if (numbers.length <= 2) {
    return numbers.length ? `(${numbers}` : "";
  }
  if (numbers.length <= 6) {
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
  }
  // Cell (11 digits) or landline (10 digits)
  const isCell = numbers.length >= 7 && numbers[2] === "9";
  if (numbers.length <= 10) {
    const split = isCell ? 7 : 6;
    if (numbers.length <= split) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    }
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, split)}-${numbers.slice(split)}`;
  }
  // Full 11 digits (cell)
  return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
}

// Clean phone for webhook: 55 + only numbers
function cleanPhone(formatted: string): string {
  return "55" + formatted.replace(/\D/g, "");
}

const LeadCaptureDialog = () => {
  const { isOpen, closeLeadCapture } = useLeadCapture();
  const { checkoutUrl, utmParams } = useCheckoutUrl();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {};

    if (!name.trim() || name.trim().length < 2) {
      newErrors.name = "Digite seu nome completo";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = "Digite um e-mail válido";
    }

    const phoneNumbers = phone.replace(/\D/g, "");
    if (phoneNumbers.length < 10) {
      newErrors.phone = "Digite um telefone válido com DDD";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    const payload = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: cleanPhone(phone),
      utm_source: utmParams.utm_source || "",
      utm_medium: utmParams.utm_medium || "",
      utm_campaign: utmParams.utm_campaign || "",
      utm_content: utmParams.utm_content || "",
      utm_term: utmParams.utm_term || "",
      timestamp: new Date().toISOString(),
    };

    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        mode: "no-cors", // Webhook may not have CORS enabled
      });
    } catch (error) {
      // Even if webhook fails, redirect to checkout
      console.error("Webhook error:", error);
    }

    // Redirect to checkout
    window.open(checkoutUrl, "_blank");
    
    // Reset form and close dialog
    setName("");
    setEmail("");
    setPhone("");
    setErrors({});
    setIsLoading(false);
    closeLeadCapture();
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeLeadCapture()}>
      <DialogContent className="sm:max-w-md bg-card border-primary/30">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-2 text-xl font-playfair">
            <Gift className="h-6 w-6 text-primary" />
            Quase lá! Complete seus dados
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={errors.name ? "border-destructive" : ""}
              disabled={isLoading}
            />
            {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={errors.email ? "border-destructive" : ""}
              disabled={isLoading}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">WhatsApp</Label>
            <div className="flex">
              <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input bg-secondary text-muted-foreground text-sm">
                +55
              </span>
              <Input
                id="phone"
                type="tel"
                placeholder="(11) 91234-5678"
                value={phone}
                onChange={handlePhoneChange}
                className={`rounded-l-none ${errors.phone ? "border-destructive" : ""}`}
                disabled={isLoading}
              />
            </div>
            {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-gradient-gold hover:opacity-90 text-primary-foreground font-bold shadow-gold"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                ENVIANDO...
              </>
            ) : (
              <>
                CONTINUAR PARA O PAGAMENTO
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>

          <p className="text-center text-xs text-muted-foreground flex items-center justify-center gap-1.5">
            <Lock className="h-3.5 w-3.5" />
            Seus dados estão seguros e não serão compartilhados
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureDialog;
