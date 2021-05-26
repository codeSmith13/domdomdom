document.addEventListener("DOMContentLoaded", function () {
  let btn = document.createElement("btn");
  let btnText = document.createTextNode("Add Square");
  let squareI = 1;
  document.body.appendChild(btn);
  btn.className = "btn";
  btn.appendChild(btnText);
  let div = document.createElement("div");
  div.className = "div";
  document.body.appendChild(div);

  btn.addEventListener("click", function () {
    let square = document.createElement("div");
    let txtContainer = document.createElement("div");
    let squareText = document.createElement("h2");

    square.className = "square";
    squareText.className = "squareText";
    square.id = squareI++;
    squareText.innerHTML = `${square.id}`;
    squareText.style.color = "white";
    txtContainer.appendChild(squareText);
    txtContainer.style.visibility = "hidden";
    square.appendChild(txtContainer);

    div.appendChild(square);

    square.addEventListener("mouseover", function () {
      txtContainer.style.visibility = "visible";
    });
    square.addEventListener("mouseout", function () {
      txtContainer.style.visibility = "hidden";
    });

    square.addEventListener("click", function () {
      let colors = [
        "#FF6633",
        "#FFB399",
        "#FF33FF",
        "#FFFF99",
        "#00B3E6",
        "#E6B333",
        "#3366E6",
        "#999966",
        "#99FF99",
        "#B34D4D",
        "#80B300",
        "#809900",
        "#E6B3B3",
        "#6680B3",
        "#66991A",
        "#FF99E6",
        "#CCFF1A",
        "#FF1A66",
        "#E6331A",
        "#33FFCC",
        "#66994D",
        "#B366CC",
        "#4D8000",
        "#B33300",
        "#CC80CC",
        "#66664D",
        "#991AFF",
        "#E666FF",
        "#4DB3FF",
        "#1AB399",
        "#E666B3",
        "#33991A",
        "#CC9999",
        "#B3B31A",
        "#00E680",
        "#4D8066",
        "#809980",
        "#E6FF80",
        "#1AFF33",
        "#999933",
        "#FF3380",
        "#CCCC00",
        "#66E64D",
        "#4D80CC",
        "#9900B3",
        "#E64D66",
        "#4DB380",
        "#FF4D4D",
        "#99E6E6",
        "#6666FF",
      ];

      square.style.backgroundColor =
        colors[Math.floor(Math.random() * colors.length)];
    });

    square.addEventListener("dblclick", function () {
      if (square.nextSibling && square.id % 2 == 0) {
        square.nextSibling.remove();
      } else if (!square.nextSibling && square.id % 2 == 0) {
        alert("Nothing after this to remove!");
      } else if (square.previousSibling && square.id % 2 !== 0) {
        square.previousSibling.remove();
      } else if (!square.previousSibling && square.id % 2 !== 0) {
        alert("Nothing before this to remove!");
      }
    });
  });
});
