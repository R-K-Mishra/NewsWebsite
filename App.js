import Pagination from "./Pagination";
import Search from "./Search";
import Stories from "./Stories";
import "./App.css";
import Footer from "./Footer";


const App = () => {
  return (
    <>
      <Search />
      <Pagination />
      <Stories />
      <Footer/>
    </>
  );
};

export default App;
