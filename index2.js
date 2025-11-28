// Modal elements
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalCaption = document.getElementById("modalCaption");
const closeBtn = document.getElementById("closeBtn");

// Show image in modal
document.querySelectorAll(".img-card").forEach(card => {
    card.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = card.getAttribute("data-src");
        modalCaption.textContent = card.getAttribute("data-title");
    });
});

// Close modal
closeBtn.onclick = () => modal.style.display = "none";
modal.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
};
