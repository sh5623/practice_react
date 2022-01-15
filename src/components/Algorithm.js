import React from "react";

function Algorithm() {
  const solution = (P) => {
    let answer = 0;
    let sortP = P.map((data) => {
      return data.sort();
    });

    let setP = [...new Set(sortP.join("|").split("|"))];

    answer = sortP.length - setP.length;
    return answer;
  };

  const P = [
    [1, 3],
    [3, 1],
    [3, 5],
    [2, 5],
    [5, 3],
  ];

  solution(P);

  return <></>;
}

export default Algorithm;
