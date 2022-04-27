import { createBrowserHistory } from "history";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { RestaurantDetails } from "./pages/RestaurantDetails";
import { RestaurantPage } from "./pages/RestaurantPage";
import EditRestaurant from "./components/EditRestaurant";
import { AddNew } from "./components/AddNew";
export const history = createBrowserHistory();
function App() {
  return (
    <Switch history={history}>
      <Route component={RestaurantDetails} path="/detail/:id" exact />
      <Route component={RestaurantPage} path="/" exact />
      <Route component={EditRestaurant} path="/edit/:id" exact />
      <Route component={AddNew} path="/create" exact />
    </Switch>
  );
}

export default App;
