import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feedx from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />

          <div className="app__body">
            <Sidebar />
            <Feedx />
            <Widgets />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
