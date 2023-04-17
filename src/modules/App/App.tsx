import React from "react";
import { Route, Routes } from "react-router-dom";
import { PAGES } from "pages";
import { StyledApp } from './App.styles';

const App = () => {
  return (
    <StyledApp>
      <Routes>
        {PAGES.map((page) => (
          <Route key={page.path} Component={page.Component} path={page.path} />
        ))}
      </Routes>
    </StyledApp>
  );
};

export default App;
