import { RouteProps } from "react-router";
import { ROUTES } from "common";
import HomePage from "./Home.page";
import GamePage from "./Game.page";

export const PAGES: RouteProps[] = [
  {
    path: ROUTES.HOME,
    Component: HomePage,
  },
  {
    path: ROUTES.GAME,
    Component: GamePage,
  },
];
