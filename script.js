document.addEventListener('DOMContentLoaded', () => {
    
    // --- Cart Functionality ---
    const addToCartBtns = document.querySelectorAll('.add-to-cart-btn');
    const cartCountEl = document.querySelector('.cart-count');
    let cartCount = 0;

    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Increment Cart
            cartCount++;
            cartCountEl.textContent = cartCount;
            cartCountEl.style.transform = "scale(1.2)";
            setTimeout(() => cartCountEl.style.transform = "scale(1)", 200);

            // Show Toast Notification
            showToast();
        });
    });

    function showToast() {
        const toast = document.getElementById("toast");
        toast.className = "show";
        setTimeout(() => { 
            toast.className = toast.className.replace("show", ""); 
        }, 3000);
    }

    // --- Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    fadeElements.forEach(el => observer.observe(el));

    // --- Navbar Blur on Scroll ---
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.85)';
            navbar.style.boxShadow = 'none';
        }
    });

    // --- Mobile Menu Toggle (Simple Implementation) ---
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '70px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = '#0a0a0a';
            navLinks.style.padding = '20px';
            navLinks.style.borderBottom = '1px solid #333';
        }
    });
});