const generatePasswordButton = document.querySelector(
  "#open-generate-password"
);
const generatedPasswordButton = document.querySelector("#generated-password");

const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};

const getSymmbol = () => {
  const symbols = "!@#$%¨&*()-=_+-*/[]{}?.,";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (
  getLetterLowerCase,
  getLetterUpperCase,
  getNumber,
  getSymmbol
) => {
  let password = "";

  const passwordLenght = 10;

  const generatos = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymmbol,
  ];
  for (i = 0; i < passwordLenght; i = i + 4) {
    generatos.forEach(() => {
      const randomValue =
        generatos[Math.floor(Math.random() * generatos.length)]();

      password += randomValue;
    });
  }
  password = password.slice(0, passwordLenght);

  generatedPasswordButton.style.display = "block";
  generatedPasswordButton.querySelector("h4").innerText = password;
};

generatePasswordButton.addEventListener("click", () => {
  generatePassword(
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymmbol
  );
});
