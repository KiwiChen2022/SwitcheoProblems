const btn = document.querySelector("button");
const inputs = document.getElementsByTagName("input");

const ETHaddress = document.querySelector("input[name='address']");
const amount = document.querySelector("input[name='amount']");
const OTP = document.querySelector("input[name='OTP']");
const invisiblePart = document.querySelector(".invisible");

function isValidAddress(address) {
  var re = /^0x[0-9a-fA-F]{40}$/;
  var OK = re.exec(address);
  if (!OK) {
    return false;
  }
  return true;
}

function isValidAmount(amount) {
  // amount is a number
  return !isNaN(amount) && amount;
}

function isValidOTP(OTP) {
  // fetch the correct OTP from backend
  return true;
}

btn.addEventListener("click", () => {
  var isValid = true;
  if (!isValidAddress(ETHaddress.value)) {
    alert("ETH Address is not valid!");
    isValid = false;
  }
  if (!isValidAmount(amount.value)) {
    alert("Amount is not valid!");
    isValid = false;
  }
  if (!isValidOTP) {
    alert("OTP is not valid!");
    isValid = false;
  }
  if (isValid) {
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].value = "";
    }
    window.location.href = "successSubmit.html";
  }
});
