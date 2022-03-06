import { Provider } from "react-redux";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Firms from "./Component/Firms";
import Lawyer from "./Component/Lawyer.js";
import store from "./Redux/store.js";
import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import ErrorPage from "./Component/ErrorPage";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <BrowserRouter>
          <ReactNotifications />
          <Switch>
            <Route exact path="/firms/:id" component={Firms} />
            <Route exact path="/" component={Lawyer} />
            <Route component={ErrorPage} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
