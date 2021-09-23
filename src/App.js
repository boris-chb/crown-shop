import "./App.scss";
import { Switch, Route } from "react-router-dom";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import AuthenticationPage from "./pages/authentication/authentication.component";
import Header from "./components/header/header.component";

function App() {
  return (
    <div>
      {/* Placing Header outside Switch allows component be rendered on any page */}
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/auth" component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
