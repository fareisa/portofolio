// Mobile menu toggle
document.getElementById('mobile-menu-toggle').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.toggle('open');
    document.getElementById('mobile-menu-overlay').classList.toggle('hidden');
});

// Close mobile menu when clicking overlay
document.getElementById('mobile-menu-overlay').addEventListener('click', function() {
    document.querySelector('.sidebar').classList.remove('open');
    this.classList.add('hidden');
});

// Documentation navigation
document.querySelectorAll('.doc-nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get target section
        const sectionId = this.getAttribute('data-section');
        const targetSection = document.getElementById(sectionId);
        
        // Hide all sections
        document.querySelectorAll('.doc-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show target section
        targetSection.classList.add('active');
        
        // Update active nav link
        document.querySelectorAll('.doc-nav-link').forEach(navLink => {
            navLink.classList.remove('active-doc');
        });
        this.classList.add('active-doc');
        
        // Close mobile menu if open
        document.querySelector('.sidebar').classList.remove('open');
        document.getElementById('mobile-menu-overlay').classList.add('hidden');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Table of contents links
document.querySelectorAll('.table-of-contents a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Get target section
        const sectionId = this.getAttribute('data-section');
        const targetSection = document.getElementById(sectionId);
        
        // Hide all sections
        document.querySelectorAll('.doc-section').forEach(section => {
            section.classList.remove('active');
        });
        
        // Show target section
        targetSection.classList.add('active');
        
        // Update active nav link
        document.querySelectorAll('.doc-nav-link').forEach(navLink => {
            navLink.classList.remove('active-doc');
            if (navLink.getAttribute('data-section') === sectionId) {
                navLink.classList.add('active-doc');
            }
        });
        
        // Close mobile menu if open
        document.querySelector('.sidebar').classList.remove('open');
        document.getElementById('mobile-menu-overlay').classList.add('hidden');
        
        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// Expandable navigation groups
document.querySelectorAll('.nav-group').forEach(group => {
    const header = group.querySelector('.flex.items-center.justify-between');
    const content = group.querySelector('.nav-group-content');
    const icon = group.querySelector('.nav-group-icon');
    
    header.addEventListener('click', function() {
        content.classList.toggle('expanded');
        icon.classList.toggle('rotated');
    });
});

// Set last updated date
document.getElementById('last-updated').textContent = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});