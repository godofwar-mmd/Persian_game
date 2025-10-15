// نمایش بخش‌ها
function showSection(id){
    document.querySelectorAll('section').forEach(s => s.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

// منو باز/بسته
const menuBtn = document.getElementById("menuBtn");
const menuItems = document.getElementById("menuItems");
menuBtn.addEventListener("click", ()=> menuItems.classList.toggle("show"));
