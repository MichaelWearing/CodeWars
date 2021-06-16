function humanReadable(seconds) {
  let sec = 0;
  let min = 0;
  let hour = 0;
  let remainingSeconds = seconds;

  while (remainingSeconds > 0) {
    console.log("Remainig Time: ", remainingSeconds);

    if (remainingSeconds >= 3600) {
      console.log("hours");
      remainingSeconds -= 3600;
      hour++;
    } else if (remainingSeconds >= 60) {
      console.log("minutes");
      remainingSeconds -= 60;
      min++;
    } else {
      console.log("seconds");
      sec = remainingSeconds;
      remainingSeconds = 0;
    }
  }

  if (hour === 0) {
    hour = "00";
  } else if (hour < 10) {
    hour = `0${hour}`;
  }
  if (min === 0) {
    min = "00";
  } else if (min < 10) {
    min = `0${min}`;
  }
  if (sec < 10) {
    sec = `0${sec}`;
  }

  let humanTime = `${hour}:${min}:${sec}`;

  return humanTime;
}

console.log(humanReadable(3600));

// Refactored from results page

function humanReadable(seconds) {
  var hours = parseInt(seconds / 3600);
  var minutes = parseInt(seconds / 60) % 60;
  var seconds = seconds % 60;

  var pad = function (val) {
    return val < 10 ? "0" + val : val;
  };

  return pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
}
