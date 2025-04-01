function Openbar() {
    const sidebar = document.querySelector('.sidebar');
    
    if (window.innerWidth < 1024) {
        sidebar.classList.toggle('-translate-x-full');
    }
}

// Close sidebar when clicking outside
document.addEventListener('click', (e) => {
    const sidebar = document.querySelector('.sidebar');
    const hamburger = document.querySelector('.bi-list').parentElement;
    
    if (!sidebar.contains(e.target) && 
        !hamburger.contains(e.target) && 
        window.innerWidth < 1024 && 
        !sidebar.classList.contains('-translate-x-full')) {
        sidebar.classList.add('-translate-x-full');
    }
});

// Handle initial state
document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    
    if (window.innerWidth < 1024) {
        sidebar.classList.add('left-[-300px]');
    }
});