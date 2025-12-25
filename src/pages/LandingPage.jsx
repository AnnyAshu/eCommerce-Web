import Child from "../components/Child";
import Parent from "../components/Parent";
import ProductGallery from "../components/ProductGallery";
import HomeSlider from "./HomeSlider";

const LandingPage = () => {
  return (
    <>
      <HomeSlider />
      <ProductGallery />
      <Parent>
        <Child id={1}/>
        <Child id={2}/>
        <Child id={3}/>
      </Parent>
    </>
  );
};

export default LandingPage;

// 1. useState
// 2. props
// 3. Array.from()
// 4. [].map() -> dynamic component generation
// 5. Routing -> react-router
// 6. tailwind-css
// 7. vite setup
// 8. conditional Rendering
// 9. Slide using swiper.js
// 10. React Intro -> JSX rules
