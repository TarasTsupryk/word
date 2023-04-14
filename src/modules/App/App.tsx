import React from "react";
import { Route, Routes } from "react-router-dom";
import { PAGES } from "pages";

const App = () => {
  return (
    <div>
      <Routes>
        {PAGES.map((page) => (
          <Route key={page.path} Component={page.Component} path={page.path} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
