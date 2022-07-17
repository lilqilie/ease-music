import React from "react";
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
// import routes from "./router";
import { Provider } from "react-redux";
import Discover from "./pages/discover";
import { Outlet } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Recommend from "./pages/discover/c-pages/recommend";
import Ranking from "./pages/discover/c-pages/ranking";
import Songs from "./pages/discover/c-pages/songs";
import Djradio from "./pages/discover/c-pages/djradio";
import Artist from "./pages/discover/c-pages/artist";
import Album from "./pages/discover/c-pages/album";
import store from "./store";
// import HYMain from './pages/main';

function App() {
  return (
    <Provider store={store}>
      <div>
        <AppHeader></AppHeader>

        <Routes>
          <Route path="/" element={<Discover />}>
            <Route path="/album" element={<Album />} />
            <Route path="/discover" element={<Recommend />} />
            <Route path="/recommend" element={<Recommend />} />
            <Route path="/artist" element={<Artist />} />
            <Route path="/songs" element={<Songs />} />
            <Route path="/djradio" element={<Djradio />} />
          </Route>
          {/* <Route path="/signIn" element={<SignInPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/detail/:touristRouteID" element={<Detail />}></Route>
          <Route path="/search/:keywords" element={<SearchPage />}></Route> */}
        </Routes>

        <AppFooter></AppFooter>
      </div>
    </Provider>

    // </Routes>
  );
}

export default App;
