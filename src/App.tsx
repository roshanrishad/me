import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <GoogleReCaptchaProvider
        reCaptchaKey="6LeDpJQrAAAAACtCfSP6GOmudXkRXzrEROY-rsmJ"
        language="en"
        useRecaptchaNet={false}
        useEnterprise={false}
        scriptProps={{
          async: false, // optional, default to false,
          defer: false, // optional, default to false
          appendTo: "head", // optional, default to "head", can be "head" or "body",
          nonce: undefined, // optional, default undefined
        }}
        // container={{ // optional to render inside custom element
        //   element: "[required_id_or_htmlelement]",
        //   parameters: {
        //     badge: 'inline', // optional, default undefined
        //     theme: 'dark', // optional, default undefined
        //   }
        // }}
      >
        <BrowserRouter basename="/me">
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GoogleReCaptchaProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
