import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Home from "@/pages/home";
import Themes from "@/pages/themes";
import About from "@/pages/about";
import FAQs from "@/pages/faqs";
// import Register from "@/pages/register"; // Commented out Register import
import ThemeDetailPage from "@/pages/theme-detail";
import RegistrationDetailsPage from "@/pages/registration-details";
import IPPolicyRulesPage from "@/pages/ip-policy-rules";
import ScrollToTop from "@/components/ui/scroll-to-top";
import AnnouncementBanner from "@/components/layout/AnnouncementBanner";
import ScrollToTopOnRouteChange from "@/components/ui/scroll-to-top-on-route-change";
import PrelimsPage from "./pages/prelims";
import FinalsPage from "./pages/finals";
import SubmissionTemplatePage from "./pages/submission-template";
import Popup from "@/components/ui/Popup";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupShown = sessionStorage.getItem("popupShown");
    if (!popupShown) {
      setShowPopup(true);
      sessionStorage.setItem("popupShown", "true");
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <TooltipProvider>
      {showPopup && <Popup onClose={handleClosePopup} />}
      <div className="flex flex-col min-h-screen">
        <ScrollToTopOnRouteChange />
        <AnnouncementBanner />
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/themes" component={Themes} />
            <Route path="/themes/:slug" component={ThemeDetailPage} />
            <Route path="/faqs" component={FAQs} />
            {/* <Route path="/register" component={Register} /> */}{/* Commented out /register route */}
            <Route path="/registration-details" component={RegistrationDetailsPage} />
            <Route path="/ip-policy-rules" component={IPPolicyRulesPage} />
            <Route path="/prelims" component={PrelimsPage} />
            <Route path="/finals" component={FinalsPage} />
            <Route path="/submission-template" component={SubmissionTemplatePage} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
      <Toaster />
    </TooltipProvider>
  );
}

export default App;
