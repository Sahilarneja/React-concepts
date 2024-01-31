import React, { useState } from "react";
import Card from './Card';

const Cards = (props) => {
  const { courses, category } = props;
  const [likedCourses, setLikedCourses] = useState([]);

  // Check if courses is defined and not null
  if (!courses || typeof courses !== 'object') {
    // Handle the case when courses is not a valid object
    return <div>No courses available</div>;
  }

  // Use the map function directly instead of building an array with forEach
  const allCourses = category === "All" ? Object.values(courses).flat() : courses[category];

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {allCourses.map((course) => (
        <Card
          key={course.id}
          course={course}
          likedCourses={likedCourses}
          setLikedCourses={setLikedCourses}
        />
      ))}
    </div>
  );
};

export default Cards;


