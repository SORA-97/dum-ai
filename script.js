const button = document.getElementById("generate");
const status = document.getElementById("status");
const img = document.getElementById("result");
const promptInput = document.getElementById("prompt");

button.addEventListener("click", () => {
  const prompt = promptInput.value.trim();

  // 入力チェック
  if (prompt === "") {
    status.textContent = "Please enter a prompt before generating.";
    img.style.display = "none";
    return;
  }

  // 生成開始
  button.disabled = true;
  img.style.display = "none";
  status.textContent = "Analyzing prompt...";

  setTimeout(() => {
    status.textContent = "Interpreting semantic meaning...";
  }, 2000);

  setTimeout(() => {
    status.textContent = "Consulting visual model...";
  }, 4000);

  setTimeout(() => {
    status.textContent = "Resolving latent space...";
  }, 6500);

  setTimeout(() => {
    status.textContent = "Finalizing output...";
  }, 8500);

  setTimeout(() => {
    // 1〜40 のランダム整数
    const randomNumber = Math.floor(Math.random() * 40) + 1;

    img.src = `images/img${randomNumber}.jpg`;
    img.style.display = "block";
    status.textContent = "Generation complete.";

    // ボタン再有効化
    button.disabled = false;
  }, 10500);
});
