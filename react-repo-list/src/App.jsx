import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { RepositoryList } from "./RepositoryList";
import "./App.css";
import { get } from "./api";

function App() {
  const [userName, setUserName] = useState("");
  const [repoList, setRepoList] = useState([]);

  useEffect(() => {
    get(`https://api.github.com/users/${userName}/repos`)
      .then((dataList) => {
        const repos = dataList.map((elem) => elem.full_name);
        setRepoList([...repos]);
      })
      .catch((err) => alert(err));
  }, [userName]);

  function handleUserNameChange(e) {
    setUserName(e.target.value);
  }

  return (
    <div className="App">
      <SearchBar onUserNameChange={handleUserNameChange} />
      <RepositoryList repoList={repoList} />
    </div>
  );
}

export default App;
