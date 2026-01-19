// Main JavaScript for Glam by Keith Website

// ===== CURRENT YEAR IN FOOTER =====
document.addEventListener('DOMContentLoaded', function() {
    const currentYear = document.getElementById('currentYear');
    if (currentYear) {
        currentYear.textContent = new Date().getFullYear();
    }
    
    // ===== HAMBURGER MENU TOGGLE =====
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mainNav = document.querySelector('nav');
    
    if (hamburgerMenu && mainNav) {
        hamburgerMenu.addEventListener('click', () => {
            hamburgerMenu.classList.toggle('active');
            mainNav.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            if (mainNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerMenu.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });
    }
    
    // ===== PORTFOLIO FILTER =====
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-page-item');
    
    if (filterButtons.length > 0 && portfolioItems.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Update active filter button
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                
                const filterValue = button.getAttribute('data-filter');
                
                // Filter portfolio items
                portfolioItems.forEach(item => {
                    if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 10);
                    } else {
                        item.style.opacity = '0';
                        item.style.transform = 'scale(0.8)';
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                });
            });
        });
    }
    
    // ===== FAQ TOGGLE =====
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');
        });
    });
    
    // ===== BOOKING FORM SUBMISSION =====
    const bookingForm = document.getElementById('bookingForm');
    
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Simple form validation
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const eventType = document.getElementById('eventType').value;
            const date = document.getElementById('date').value;
            
            if (!name || !email || !phone || !eventType || !date) {
                alert('Please fill in all required fields marked with *');
                return;
            }
            
            // In a real implementation, you would send this data to a server
            // For now, we'll show a success message
            alert('Thank you for your inquiry! Agaba will contact you within 24-48 hours to discuss your booking.');
            bookingForm.reset();
        });
    }
    
    // ===== STICKY HEADER ON SCROLL =====
    window.addEventListener('scroll', () => {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.padding = '15px 0';
                header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.padding = '20px 0';
                header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.05)';
            }
        }
    });
    
    // ===== SET MINIMUM DATE FOR EVENT DATE INPUT =====
    const dateInput = document.getElementById('date');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
    
    // Initialize header padding
    const header = document.querySelector('header');
    if (header && window.scrollY > 100) {
        header.style.padding = '15px 0';
        header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
    }
});