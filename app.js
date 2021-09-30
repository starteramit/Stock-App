var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitButton = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output");
var image = document.getElementById("image");

submitButton.addEventListener("click", submitHandler);

function submitHandler() {
  var initialValue = Number(initialPrice.value);
  var quantityValue = Number(stocksQuantity.value);
  var currentValue = Number(currentPrice.value);
  if (initialValue !== 0 || quantityValue !== 0 || currentValue !== 0) {
    calculateProfitAndLoss(initialValue, quantityValue, currentValue);
  } else {
    showText("Please Enter Valid Values!");
  }
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;
    showText(
      `Hey, the loss is ${loss} and the percent is ${lossPercentage}%`,
      "loss"
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    showText(
      `Hey, the profit is ${profit} and the percent is ${profitPercentage}%`,
      "profit"
    );
  } else {
    showText(`No Pain No Gain and No Gain No Pain`, "nothing");
  }
}

function showText(message, status) {
  outputBox.innerText = message;
  if (status === "profit") {
    image.src = "./assets/happy.gif";
  } else if (status === "loss") {
    image.src = "./assets/sad.gif";
  } else if (status === "nothing") {
    image.src = "./assets/nothing.gif";
  }
}