import React, { useState, createContext } from "react";

export const CourseContext = createContext();

const CourseContextProvider = (props) => {
  const [show, setShow] = useState(false);

  const [choose, setChoose] = useState(false);

  const getShow = () => {
    setShow(true);
  };

  const getChoose = () => {
    setChoose(!choose);
  }

  return (
    <CourseContext.Provider
      value={{
        getShow,
        show,
        getChoose,
        choose
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;
