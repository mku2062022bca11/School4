import React, { createContext, useContext, useState } from "react";

const SchoolContext = createContext();

export const useSchool = () => {
  const context = useContext(SchoolContext);
  if (!context) {
    throw new Error("useSchool must be used within a SchoolProvider");
  }
  return context;
};

export const SchoolProvider = ({ children }) => {
  const [schoolData, setSchoolData] = useState({
    name: "QB365 Public School",
    tagline: "Excellence Meets Innovation",
    foundedYear: "1985",
    address: "123 Education Street, Learning City, LC 12345",
    phone: "(555) 123-4567",
    email: "info@brightvalley.edu",
    principal: {
      name: "Dr. Michael Johnson",
      image: "/images/faculty-1.avif",
    },
    stats: {
      students: "2,500+",
      faculty: "150+",
      successRate: "95%",
      years: "40+",
    },
    programs: [
      {
        id: 1,
        title: "Core Curriculum",
        description: "Math, Science, English, Social Studies",
        image: "/images/home-2.avif",
      },
      {
        id: 2,
        title: "Arts Program",
        description: "Visual Arts, Music, Drama",
        image: "/images/home-3.avif",
      },
      {
        id: 3,
        title: "Technology",
        description: "Computer Science, Robotics",
        image: "/images/home-2.avif",
      },
    ],
    events: [
      {
        id: 1,
        title: "Science Fair",
        date: { month: "MAR", day: "15" },
        description: "Student project showcase",
        time: "9:00 AM - 4:00 PM",
        location: "Main Gymnasium",
        image: "/images/academics-6.avif",
      },
      {
        id: 2,
        title: "Art Exhibition",
        date: { month: "APR", day: "5" },
        description: "Student artwork displays",
        time: "6:00 PM - 9:00 PM",
        location: "Art Gallery",
        image: "/images/academics-1.avif",
      },
    ],
    faculty: [
      {
        id: 1,
        name: "Dr. Michael Johnson",
        position: "Principal",
        education: "Ph.D. Educational Leadership, Harvard",
        experience: "20+ years in education",
        image: "/images/faculty-1.avif",
      },
      {
        id: 2,
        name: "Sarah Williams",
        position: "Academic Director",
        education: "M.Ed. Curriculum & Instruction, Stanford",
        experience: "15+ years in curriculum",
        image: "/images/faculty-3.avif",
      },
    ],
  });

  const updateSchoolData = (field, value) => {
    setSchoolData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateNestedData = (section, field, value) => {
    setSchoolData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  const addItem = (section, item) => {
    setSchoolData((prev) => ({
      ...prev,
      [section]: [...prev[section], { ...item, id: Date.now() }],
    }));
  };

  const updateItem = (section, id, updatedItem) => {
    setSchoolData((prev) => ({
      ...prev,
      [section]: prev[section].map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      ),
    }));
  };

  const deleteItem = (section, id) => {
    setSchoolData((prev) => ({
      ...prev,
      [section]: prev[section].filter((item) => item.id !== id),
    }));
  };

  return (
    <SchoolContext.Provider
      value={{
        schoolData,
        updateSchoolData,
        updateNestedData,
        addItem,
        updateItem,
        deleteItem,
      }}
    >
      {children}
    </SchoolContext.Provider>
  );
};
