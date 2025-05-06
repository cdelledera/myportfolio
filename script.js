// Add a DOMContentLoaded event listener to ensure the DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {
    // Example: Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
// Example: Back-to-top button functionality
const backToTopButton = document.querySelector(".back-to-top");
if (backToTopButton) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 300) {
            backToTopButton.classList.add("visible");
        } else {
            backToTopButton.classList.remove("visible");
        }
    });

    backToTopButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Example: Lazy loading images
const lazyImages = document.querySelectorAll("img[data-src]");
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute("data-src");
            observer.unobserve(img);
        }
    });
});

lazyImages.forEach(img => {
    imageObserver.observe(img);
});
// Example: Form validation
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", (event) => {
        const inputs = form.querySelectorAll("input[required], textarea[required]");
        let isValid = true;

        inputs.forEach(input => {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add("error");
            } else {
                input.classList.remove("error");
            }
        });

        if (!isValid) {
            event.preventDefault();
            alert("Please fill out all required fields.");
        }
    });

    function triggerKonamiEasterEgg() {
        document.body.classList.add("konami-mode");
      }
    }