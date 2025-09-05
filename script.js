/*-----------------------------------*\
  #script.js
\*-----------------------------------*/

/* ===== SIDEBAR TOGGLE ===== */
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", () => {
  sidebar.classList.toggle("active");
});

/* ===== PAGE NAVIGATION ===== */
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("article");

navLinks.forEach((link, i) => {
  link.addEventListener("click", () => {
    pages.forEach(page => page.classList.remove("active"));
    navLinks.forEach(nav => nav.classList.remove("active"));

    pages[i].classList.add("active");
    link.classList.add("active");

    // scroll to top when switching pages
    window.scrollTo(0, 0);
  });
});

/* ===== TESTIMONIAL MODAL ===== */
const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const overlay = document.querySelector("[data-overlay]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

if (testimonialsItems.length) {
  testimonialsItems.forEach(item => {
    item.addEventListener("click", () => {
      modalContainer.classList.add("active");
      overlay.classList.add("active");

      modalImg.src = item.querySelector("[data-testimonials-avatar]").src;
      modalTitle.textContent = item.querySelector("[data-testimonials-title]").textContent;
      modalText.innerHTML = item.querySelector("[data-testimonials-text]").innerHTML;
    });
  });
}

const closeModal = () => {
  modalContainer.classList.remove("active");
  overlay.classList.remove("active");
};

if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
if (overlay) overlay.addEventListener("click", closeModal);

/* ===== PORTFOLIO FILTER ===== */
const filterBtns = document.querySelectorAll("[data-select-item]");
const projectItems = document.querySelectorAll("[data-filter-item]");

if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.textContent.toLowerCase();

      projectItems.forEach(item => {
        if (selected === "all" || item.dataset.category.toLowerCase() === selected) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    });
  });
}
