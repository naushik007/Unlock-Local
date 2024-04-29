import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const InAppGifting = React.lazy(() => import("pages/InAppGifting"));
const SignupLoginModule = React.lazy(() => import("pages/SignupLoginModule"));
const LoyaltySystem = React.lazy(() => import("pages/LoyaltySystem"));
const CouponCodeGenerator = React.lazy(
  () => import("pages/CouponCodeGenerator"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/couponcodegenerator"
            element={<CouponCodeGenerator />}
          />
          <Route path="/loyaltysystem" element={<LoyaltySystem />} />
          <Route path="/signuploginmodule" element={<SignupLoginModule />} />
          <Route path="/inappgifting" element={<InAppGifting />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
