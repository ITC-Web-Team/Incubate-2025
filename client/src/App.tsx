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
import Register from "@/pages/register";
import ThemeDetailPage from "@/pages/theme-detail";
import ScrollToTop from "@/components/ui/scroll-to-top";
import AnnouncementBanner from "@/components/layout/AnnouncementBanner";
import ScrollToTopOnRouteChange from "@/components/ui/scroll-to-top-on-route-change";

function App() {
  return (
    <TooltipProvider>
      <div className="flex flex-col min-h-screen">
        <ScrollToTopOnRouteChange />
        <AnnouncementBanner />
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/themes" component={Themes} />
            <Route path="/themes/:slug" component={ThemeDetailPage} />
            <Route path="/about" component={About} />
            <Route path="/faqs" component={FAQs} />
            <Route path="/register" component={Register} />
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
