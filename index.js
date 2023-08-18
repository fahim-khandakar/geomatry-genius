function calculateTriangleArea() {
  const base = getInputValue("triangle-base");
  const height = getInputValue("triangle-height");
  if (isNaN(base) || isNaN(height)) {
    alert("Please provide me number");
    return;
  }
  const value = 0.5 * base * height;
  setValue("triangle-area-show");
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
