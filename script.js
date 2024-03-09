const copyButton = document.querySelector(".how-copy");
const textToCopy = document.querySelector(".how-text").textContent;

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(textToCopy);

  // Отобразить сообщение об успешном копировании
  const successMessage = document.querySelector(".success-message");
  successMessage.classList.remove("hidden");
  setTimeout(() => {
    successMessage.classList.add("hidden");
  }, 2000);

  // // Изменить текст кнопки
  // copyButton.textContent = "Copied!";
  // setTimeout(() => {
  //   copyButton.textContent = "Copy";
  // }, 2000);

  // Сделать другие действия, например, отправить аналитику
});
