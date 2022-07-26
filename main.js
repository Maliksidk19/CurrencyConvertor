const btnConvert = document.getElementById("btnConvert");
const btnReset = document.getElementById("btnReset");
const cur = document.getElementById("cur");
const res = document.getElementById("res");

for (let i = 0; i < 4; i++) {
  if (cur[i].value === res.value) {
    cur[i].disabled = true;
  }
}
// when res.value is changed
res.addEventListener("change", () => {
  for (let i = 0; i < 4; i++) {
    if (cur[i].value === res.value) {
      cur[i].disabled = true;
    }
    if (cur[i].value !== res.value) {
      cur[i].disabled = false;
    }
  }
});

btnConvert.addEventListener("click", () => {
  const curVal = document.getElementById("curVal");

  const resVal = document.getElementById("resVal");

  //   for getting pkr value result
  if (res.value === "pkr") {
    if (cur.value === "usd") {
      resVal.value = curVal.value * 227.3;
    } else if (cur.value === "gbp") {
      resVal.value = curVal.value * 272.86;
    } else if (cur.value === "euro") {
      resVal.value = curVal.value * 232.14;
    }
  }

  //   for getting usd value result
  if (res.value === "usd") {
    if (cur.value === "pkr") {
      resVal.value = Math.round((curVal.value / 227.3) * 100) / 100;
    } else if (cur.value === "gbp") {
      resVal.value = curVal.value * 1.2;
    } else if (cur.value === "euro") {
      resVal.value = curVal.value * 1.02;
    }
  }

  //   for getting gbp value result
  if (res.value === "gbp") {
    if (cur.value === "pkr") {
      resVal.value = Math.round((curVal.value / 272.86) * 100) / 100;
    } else if (cur.value === "usd") {
      resVal.value = Math.round((curVal.value / 1.2) * 100) / 100;
    } else if (cur.value === "euro") {
      resVal.value = Math.round((curVal.value / 1.18) * 100) / 100;
    }
  }

  //   for getting euro value result
  if (res.value === "euro") {
    if (cur.value === "pkr") {
      resVal.value = Math.round((curVal.value / 232.14) * 100) / 100;
    } else if (cur.value === "usd") {
      resVal.value = Math.round((curVal.value / 1.02) * 100) / 100;
    } else if (cur.value === "gbp") {
      resVal.value = curVal.value * 1.18;
    }
  }
});

btnReset.addEventListener("click", () => {
  document.getElementById("curVal").value = "";
  document.getElementById("resVal").value = "";
  document.getElementById("cur").value = "usd";
  document.getElementById("res").value = "pkr";
});
