import React from "react";
import Testimonials from "./Components/Testimonials";
import reviews from "./data";
const App = () => {
  return (
  <div className="flex flex-col w-[100vh] justify-center items-center bg-grey-200">
    <div className="text-center">
      <h1 className="text-4xl font-bold">Our Tetimonials</h1>
      <div className="bg-violet-400 h-[4px] w-[1/5] mt-1"></div>
      <Testimonials reviews={reviews}/>
    </div>
  </div>
  );
};

export default App;
