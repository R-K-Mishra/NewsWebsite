import React,{useState} from "react";
import { useGlobalContext } from "./context";

const Search = () => {
  const { query, searchPost, sortArticlesByComments, filterArticlesByAuthor } = useGlobalContext();
  
  const [authorFilter, setAuthorFilter] = useState("");
  const handleAuthorFilterChange = (e) => {
    setAuthorFilter(e.target.value);
  };
  const handleFilterByAuthor = () => {
    filterArticlesByAuthor(authorFilter);
  };


  return (
    <>
      <h1>Aaj_Kal News</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="search here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          />
        </div>
      </form>
<div style={{ position: "fixed", bottom: "10px", width: "100px",right: "10px", display: "flex", flexDirection: "column", alignItems: "flex-end" }} >
<button onClick={handleFilterByAuthor} style={{ width: "100px", marginBottom: "20px", marginRight: "150px", display: "flex" }}>Filter</button>
<input
          type="text"
          placeholder="Filter by Author"
          value={authorFilter}
          onChange={handleAuthorFilterChange}
          style={{ width: "100px", marginRight: "5px", marginBottom: "365px", display: "flex" }}
        />

</div>
      <button className="sort-button" onClick={sortArticlesByComments}>Sort by Comments</button>     
    </>
  );
};

export default Search;