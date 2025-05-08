window.addEventListener('load', function() {
    setTimeout(function() {
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

let touchstartX = 0;
let touchendX = 0;

document.addEventListener('touchstart', e => {
    touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', e => {
    touchendX = e.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    if (touchendX < touchstartX - 50) {
        toggleMenu(true);
    }
    if (touchendX > touchstartX + 50) {
        toggleMenu(false);
    }
}

// دکمه‌های PAL و NTSC
document.querySelectorAll('.pal-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        window.open('palPage.html', '_blank');
    });
});

document.querySelectorAll('.ntsc-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        window.open('ntscPage.html', '_blank');
    });
});
