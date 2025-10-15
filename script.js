body {
    margin: 0;
    font-family: sans-serif;
    direction: rtl;
    color: white;
    background: url('background.jpg') center/cover fixed;
    overflow-x: hidden;
}

/* دکمه ورود/عضویت */
#authBtn {
    position: fixed;
    top: 10px;
    left: 10px;
    z-index: 1002;
    background: #3bc94e;
    color: white;
    border: none;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
}

/* منو */
.menu-btn {
    position: fixed;
    top: 10px;
    right: 10px;
    font-size: 28px;
    cursor: pointer;
    color: white;
    background: #000;
    border-radius: 50%;
    padding: 5px 10px;
    z-index: 1001;
}
.menu-items {
    position: fixed;
    top: 0; right: 0;
    width: 60%; height: 100%;
    background: rgba(50,50,50,0.9);
    padding: 20px;
    transform: translateX(100%);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s, opacity 0.3s;
    z-index: 1000;
}
.menu-items.show {
    transform: translateX(0);
    opacity: 1;
    pointer-events: auto;
}

/* محصولات */
.section { padding: 80px 20px 20px; text-align: center; }
.product {
    background: rgba(0,0,0,0.6);
    margin: 10px auto; padding: 10px;
    width: 80%; border-radius: 10px;
}
.product img { width: 100%; border-radius: 10px; }
.pal-btn, .ntsc-btn {
    background: white; color: black; border: none;
    margin: 5px; padding: 12px 24px; border-radius: 10px;
    cursor: pointer;
}
.pal-btn:hover, .ntsc-btn:hover { background: #ddd; }

/* فرم SPA */
.auth-overlay {
    position: fixed;
    top:0; left:0; width:100%; height:100%;
    background: rgba(0,0,0,0.85);
    display: flex; justify-content: center; align-items: center;
    z-index: 2000;
}
.auth-card {
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    padding: 30px 40px;
    width: 300px;
    text-align: center;
}
.auth-card input {
    width: 100%; margin: 10px 0; padding: 10px;
    border-radius: 10px; border: none; font-size: 14px;
}
.btn-green { background:#3bc94e;color:white;padding:10px;margin-top:10px;border:none;border-radius:20px;cursor:pointer;width:100%; }
.btn-green:hover { background:#33b645; }
.btn-white { background:white;color:black;padding:10px;margin-top:10px;border:none;border-radius:20px;cursor:pointer;width:100%; }
.btn-white:hover { background:#ddd; }
.hidden { display: none; }
.link { color:#b184ff; cursor:pointer; font-size:13px; margin-top:5px; display:block; }
