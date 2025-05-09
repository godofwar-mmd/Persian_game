window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
    }, 4000);
});

function toggleMenu(open) {
    const menu = document.getElementById('menuItems');
    const btn = document.getElementById('menuBtn');
    if (open) {
        menu.classList.add('show');
        btn.style.opacity = '0';
    } else {
        menu.classList.remove('show');
        btn.style.opacity = '1';
    }
}

document.getElementById('menuBtn').addEventListener('click', () => {
    const menu = document.getElementById('menuItems');
    toggleMenu(!menu.classList.contains('show'));
});

document.addEventListener('click', e => {
    if (!document.getElementById('languageBtn').contains(e.target)) {
        document.getElementById('languageDropdown').style.display = 'none';
    }
});

document.getElementById('languageBtn').addEventListener('click', e => {
    e.preventDefault();
    const dropdown = document.getElementById('languageDropdown');
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});
