import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "@/components/Layout";
import HomePage from "@/pages/Home";
import ResourcesPage from "@/pages/Resources";
import ResourceCategoryPage from "@/pages/ResourceCategory";
import FavoritesPage from "@/pages/Favorites";
import AboutPage from "@/pages/About";
import ContactPage from "@/pages/Contact";
import NotFoundPage from "@/pages/NotFound";
import Dashboard from "@/pages/Dashboard";
import Settings from "@/pages/Settings";
import MyReviews from "@/pages/MyReviews";
import Achievements from "@/pages/Achievements";
import ResourceDetail from "@/pages/ResourceDetail";

import { AuthProvider } from "@/contexts/AuthContext";
import ErrorBoundary from "@/components/ui/ErrorBoundary";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<HomePage />} />
                  <Route path="resources" element={<ResourcesPage />} />
                  <Route path="resources/:categoryId" element={<ResourceCategoryPage />} />
                  <Route path="resource/:resourceId" element={<ResourceDetail />} />
                  <Route path="favorites" element={<FavoritesPage />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="my-reviews" element={<MyReviews />} />
                  <Route path="achievements" element={<Achievements />} />
                  <Route path="about" element={<AboutPage />} />
                  <Route path="contact" element={<ContactPage />} />
                </Route>
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </AuthProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;