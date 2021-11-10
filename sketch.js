let inputUsername;
let enterButton;
let password;

function setup() {
  showInput();
}

function showInput() {
  inputUsername = createInput("").attribute("placeholder", "type your federal username");
  let acapo = createDiv("<br>");
  enterButton = createButton("enter");
  enterButton.mousePressed(showPassword);
}

function showPassword() {
  password = createP('Password for file.zip: c0-D£sign_2021');
}

function draw() {
  // put drawing code here
}
