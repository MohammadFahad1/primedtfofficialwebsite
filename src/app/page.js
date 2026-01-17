import Image from "next/image";
import HeroSection from "./components/HeroSection";
import CustomerReviews from "./components/CustomerReviews";
import WhyChooseUs from "./components/WhyChooseUs";
import FeatureHighlights from "./components/FeatureHighlights";
import ReadyToPrint from "./components/ReadyToPrint";
import BrandSlider from "./components/Brands";
// import BulkDiscountPage from "./components/BulkDiscountPage";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CustomerReviews />
      <WhyChooseUs />
      <FeatureHighlights />
      {/* <BulkDiscountPage /> */}
      <BrandSlider />
      <ReadyToPrint />
    </>
  );
}
