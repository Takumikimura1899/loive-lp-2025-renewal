document.addEventListener('DOMContentLoaded', () => {
  const studioButtons = document.querySelectorAll('.studio-button');
  const studioInfoContainers = document.querySelectorAll('.studio-info-container');
  const closeButtons = document.querySelectorAll('.close-button');

  const initiallyActiveStudio = 'jiyugaoka';

  studioButtons.forEach((button) => {
    button.addEventListener('click', () => {
      studioButtons.forEach((btn) => btn.classList.remove('active'));
      button.classList.add('active');
      studioInfoContainers.forEach((container) => (container.style.display = 'none'));

      const targetContainerId = `studio-info-container-${button.dataset.studio}`;
      const targetContainer = document.getElementById(targetContainerId);
      if (targetContainer) {
        targetContainer.style.display = 'block';
      }
    });

    if (button.dataset.studio === initiallyActiveStudio) {
      button.classList.add('active');
    }
  });

  closeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const targetContainerId = button.dataset.target;
      const targetContainer = document.getElementById(targetContainerId);

      if (targetContainer) {
        targetContainer.style.display = 'none';
      }

      studioButtons.forEach((btn) => btn.classList.remove('active'));
    });
  });

  const initiallyActiveContainer = document.getElementById(
    `studio-info-container-${initiallyActiveStudio}`,
  );
  if (initiallyActiveContainer) {
    initiallyActiveContainer.style.display = 'block';
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const btnFixed = document.querySelector(".btn-fixed");
  const targetElement = document.querySelector(".btn");

  function checkScroll() {
      if (!targetElement || !btnFixed) return;
      const rect = targetElement.getBoundingClientRect();
      const isAtBottom = rect.bottom <= window.innerHeight; 
      if (isAtBottom) {
          btnFixed.classList.add("show");
      } else {
          btnFixed.classList.remove("show");
      }
  }
  window.addEventListener("scroll", checkScroll);
  checkScroll(); 
});
