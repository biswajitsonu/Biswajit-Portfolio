import React from "react";
import Header from "./components/Header";
import ProfileSection from "./components/ProfileSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import RecentWork from "./components/RecentWork";
import GetInTouch from "./components/GetInTouch";

function App() {
  return (
    <>
      <div className="sticky top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <ProfileSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <RecentWork />
      <GetInTouch />
    </>
  );
}

export default App;
