/*document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight Active Sidebar Icon
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('aside a');

    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // 2. Search Logic
    const searchInput = document.querySelector('.search-box input');
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                console.log(`Searching for: ${searchInput.value} on ${currentPage}`);
            }
        });
    }

    // 3. Simple Tab Switching (Visual Only)
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.style.background = 'white');
            tab.style.background = '#e9e9e9';
        });
    });
});*/
document.addEventListener('DOMContentLoaded', () => {
    // 1. Sidebar Link Handling
    const asideIcons = document.querySelectorAll('aside i');
    asideIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            // Remove active from all, add to this one
            asideIcons.forEach(i => i.style.color = '#555');
            icon.style.color = '#000';
        });
    });

    // 2. Search Placeholder Animation
    const searchInput = document.querySelector('.search-container input');
    searchInput.addEventListener('focus', () => {
        searchInput.placeholder = "Type keywords (e.g. Physics, UI Design)...";
    });
    searchInput.addEventListener('blur', () => {
        searchInput.placeholder = "what are you searching for ?";
    });

    // 3. Category Button Toggle
    const catBtns = document.querySelectorAll('.cat-btn');
    catBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            catBtns.forEach(b => {
                b.style.background = 'white';
                b.style.color = 'black';
            });
            btn.style.background = '#333';
            btn.style.color = 'white';

            const toggleBtn = document.getElementById('toggle-btn');
const formTitle = document.getElementById('form-title');
const confirmPass = document.getElementById('confirm-pass');
let isLogin = true;

toggleBtn.addEventListener('click', (e) => {
    e.preventDefault();
    isLogin = !isLogin;
    
    // Toggle UI State
    formTitle.innerText = isLogin ? "Log In" : "Sign Up";
    confirmPass.style.display = isLogin ? "none" : "block";
    toggleBtn.innerText = isLogin ? "Sign Up" : "Log In";
});
const subjects = [
    "PPS", "IIKS", "Chemistry", "Mathematics-1", "Engineering Mechanics",
    "BEE", "Physics", "EGD", "Mathematics-2", "EGPC"
];

const container = document.getElementById('subject-container');

subjects.forEach(subject => {
    container.innerHTML += `
        <div class="card">
            <div class="card-top"></div>
            <div class="card-content">
                <div class="icon-box"><i class="fa-solid fa-code"></i></div>
                <div class="card-title">${subject}</div>
                <div class="btn-group">
                    <button class="btn-buy">Buy Notes</button>
                    <span class="more-link">More Modules</span>
                </div>
            </div>
        </div>
    `;
});
        });
    });
});