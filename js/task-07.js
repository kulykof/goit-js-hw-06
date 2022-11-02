let controleFontSize = document.getElementById("font-size-control");

let textEl = document.getElementById("text");

controleFontSize.oninput = function () {
    textEl.style.fontSize = controleFontSize.value + "px";
};