import React from "react";
import MainComp from "./MainComp";


const accordionData = [
    {
      id: 1,
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of developers.",
    },
    {
      id: 2,
      question: "What are props in React?",
      answer:
        "Props are short for properties. They are used to pass data from parent to child components in React.",
    },
    {
      id: 3,
      question: "What is the difference between state and props?",
      answer:
        "State is managed within a component and can change over time, while props are read-only and passed down from parent components.",
    },
    {
      id: 4,
      question: "What are React hooks?",
      answer:
        "Hooks are special functions that let you use state and other React features without writing a class. Examples include useState and useEffect.",
    },
  ];

const AccordionData = () => {
  return(
    <div>
      <MainComp items={accordionData}/>
    </div>
  )
};

export default AccordionData;
