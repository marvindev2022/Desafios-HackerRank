let s = "07:05:45PM";

function timeConversion(s) {
  // Write your code here
  s.split("");

  let hh = parseInt(s[0] + s[1]);
  let mm = s[3] + s[4];
  let ss = s[6] + s[7];
  if (s[8] === "A" && hh == 12) {
    hh -= 12;
  } else if (s[8] === "P" && hh < 12) {
    hh += 12;
  }
  if (s[8] === "A" && hh < 10) {
    return [`0${hh}:${mm}:${ss}`];
  } else {
    return [`${hh}:${mm}:${ss}`];
  }
}

console.log(timeConversion(s));
