import React from "react";

export const RepositoryList = ({ repoList }) => {
  const listItems = repoList.map((repoName, i) => <li key={i}>{repoName}</li>);

  return <ul className="repository-list">{listItems || "Nenhum Resultado"}</ul>;
};
