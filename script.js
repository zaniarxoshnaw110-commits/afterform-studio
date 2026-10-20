(() => {
  const body = document.body;
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  const toast = document.querySelector(".toast");
  const motionButton = document.querySelector(".motion-toggle");
  const motionLabel = document.querySelector(".motion-toggle-label");
  const motionIcon = document.querySelector(".motion-toggle-icon");
  const year = document.querySelector("#year");
  let toastTimer;
  if (year) year.textContent = String(new Date().getFullYear());

  const showToast = (message) => {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
  };

  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      menuButton.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
      nav.classList.toggle("is-open", !open);
    });
    nav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      nav.classList.remove("is-open");
    }));
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation");
        nav.classList.remove("is-open");
        menuButton.focus();
      }
    });
  }

  if (motionButton) {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) {
      motionButton.setAttribute("aria-pressed", "true");
      motionLabel.textContent = "Motion reduced by system";
      body.classList.add("motion-paused");
    }
    motionButton.addEventListener("click", () => {
      const paused = motionButton.getAttribute("aria-pressed") === "true";
      motionButton.setAttribute("aria-pressed", String(!paused));
      body.classList.toggle("motion-paused", !paused);
      motionLabel.textContent = paused ? "Pause motion" : "Resume motion";
      motionIcon.textContent = paused ? "Ⅱ" : "▶";
    });
  }

  const filterButtons = [...document.querySelectorAll(".filter-button")];
  const projects = [...document.querySelectorAll(".project")];
  const status = document.querySelector(".filter-status");
  const labels = { all: "all projects", identity: "identity projects", digital: "digital projects" };
  filterButtons.forEach((button) => button.addEventListener("click", () => {
    const filter = button.dataset.filter || "all";
    filterButtons.forEach((candidate) => {
      const active = candidate === button;
      candidate.classList.toggle("is-active", active);
      candidate.setAttribute("aria-pressed", String(active));
    });
    let visible = 0;
    projects.forEach((project) => {
      const show = filter === "all" || project.dataset.category === filter;
      project.hidden = !show;
      if (show) visible += 1;
    });
    if (status) status.textContent = "Showing " + visible + " " + (labels[filter] || "projects");
  }));

  const contactLink = document.querySelector(".contact-cta");
  if (contactLink) contactLink.addEventListener("click", () => {
    showToast("Prototype contact: replace hello@afterform.studio before launch.");
  });
})();