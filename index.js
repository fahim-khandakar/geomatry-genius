function calculateTriangleArea() {
  const base = getInputValue("triangle-base");
  const height = getInputValue("triangle-height");
  if (isNaN(base) || isNaN(height)) {
    alert("Please provide me number");
    return;
  }
  const value = 0.5 * base * height;
  setValue("triangle-area-show", value);
  addToCalculationEntry("Triangle", value);
}

function calculateRectangleArea() {
  const width = getInputValue("rectangle-width");
  const height = getInputValue("rectangle-length");
  if (isNaN(width) || isNaN(height)) {
    alert("Please provide me number");
    return;
  }
  const value = width * height;
  setValue("rectangle-area-show", value);
  addToCalculationEntry("Rectangle", value);
}

function calculateParallelogramArea() {
  const base = getInputValue("parallelogram-base");
  const height = getInputValue("parallelogram-height");
  if (isNaN(base) || isNaN(height)) {
    alert("Please provide me number");
    return;
  }
  const value = base * height;
  setValue("parallelogram-area-show", value);
  addToCalculationEntry("Parallelogram", value);
}

function calculateEllipseArea() {
  const majorRadius = getInputValue("ellipse-major-radius");
  const minorRadius = getInputValue("ellipse-minor-radius");
  if (isNaN(majorRadius) || isNaN(minorRadius)) {
    alert("Please provide me number");
    return;
  }
  const value = 3.14 * majorRadius * minorRadius;
  const valueTwoDecimal = value.toFixed(2);
  setValue("ellipse-area-show", valueTwoDecimal);
  addToCalculationEntry("Ellipse", value);
}

function calculateRhombusArea() {
  const d1 = getInputValue("rhombus-d1");
  const d2 = getInputValue("rhombus-d2");
  if (isNaN(d1) || isNaN(d2)) {
    alert("Please provide me number");
    return;
  }

  const value = 0.5 * d1 * d2;
  setValue("rhombus-area-show", value);
  addToCalculationEntry("Rhombus", value);
}

function calculatePentagonArea() {
  const p = getInputValue("pentagon-p");
  const b = getInputValue("pentagon-b");
  if (isNaN(p) || isNaN(b)) {
    alert("Please provide me number");
    return;
  }
  const value = 0.5 * p * b;
  setValue("pentagon-area-show", value);
  addToCalculationEntry("Pentagon", value);
}
// reusable function
function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputValueText = inputField.value;
  const value = parseFloat(inputValueText);
  return value;
}

// reusable set function
function setValue(outputId, value) {
  const getId = document.getElementById(outputId);
  getId.innerText = value;
}

function addToCalculationEntry(areaName, value) {
  const areaCalculation = document.getElementById("area-calculation");
  const count = areaCalculation.childElementCount;
  const p = document.createElement("p");
  p.classList.add("my-3");
  p.innerHTML = `${
    count + 1
  }. ${areaName} ${value} cm <sup>2</sup> <button id= "dynamicElement" class = "btn btn-sm btn-success">Delete</button>`;
  areaCalculation.appendChild(p);

  dynamicElement.addEventListener("click", function (e) {
    e.target.parentNode.remove();
  });
}
