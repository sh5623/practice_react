import React from "react";

function Algorithm() {
  const solution = (progresses, speeds) => {
    let answer = [];

    let day = 1;
    let cnt = 0;
    let progress = 0;

    while (progresses[0]) {
      progress = progresses[0] + speeds[0] * day;
      if (progress >= 100) {
        cnt++;
        progresses.shift();
        speeds.shift();
      } else {
        if (cnt > 0) {
          answer.push(cnt);
        }
        day++;
        cnt = 0;
      }
    }

    debugger;

    return answer;
  };

  const progress = [93, 30, 55];
  const speeds = [1, 30, 5];
  // return [2,1]

  solution(progress, speeds);

  return <></>;
}

export default Algorithm;
