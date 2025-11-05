let status = document.querySelector("#status");
let enterBtn = document.querySelector("#enterBtn");

enterBtn.addEventListener("click", () => {
	status.innerHTML = `<h1>${status.textContent}</h1>`
})