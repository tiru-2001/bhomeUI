import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Parent,
  Home,
  Cricket,
  Tennis,
  Casino,
  Soccer,
  HorseRacing,
  GreyHoundRacing,
  Kabaddi,
  Basketball,
  Politics,
  Lottery,
  MultiMarkets,
  Binary,
} from "./pages";
const App = () => {
  return (
    <main className=" min-h-screen">
      <Router>
        <Routes>
          <Route path="/" element={<Parent />}>
            <Route index element={<Home />} />
            <Route path="/cricket" element={<Cricket />} />
            <Route path="/tennis" element={<Tennis />} />
            <Route path="/casino" element={<Casino />} />
            <Route path="/soccer" element={<Soccer />} />
            <Route path="/horse-racing" element={<HorseRacing />} />
            <Route path="/greyhound-racing" element={<GreyHoundRacing />} />
            <Route path="/kabaddi" element={<Kabaddi />} />
            <Route path="/basket-ball" element={<Basketball />} />
            <Route path="/politics" element={<Politics />} />
            <Route path="/lottery" element={<Lottery />} />
            <Route path="/multi-markets" element={<MultiMarkets />} />
            <Route path="/binary" element={<Binary />} />
            <Route path="/virtual-sports" element={<Binary />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
};

export default App;
