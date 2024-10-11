// Toggle light and dark theme
document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const themeToggleBtn = document.createElement("button");
    themeToggleBtn.textContent = "Switch Theme";
    themeToggleBtn.classList.add("btn-toggle-theme", "btn", "btn-secondary");
    document.body.appendChild(themeToggleBtn);

    themeToggleBtn.addEventListener("click", () => {
        if (body.classList.contains("dark-mode")) {
            body.classList.replace("dark-mode", "light-mode");
        } else {
            body.classList.replace("light-mode", "dark-mode");
        }
    });

    // QR code generation
    QRCode.toDataURL(window.location.href, function (err, url) {
        document.getElementById('qrcode').src = url();
    });

    // Search button functionality
    document.getElementById("searchBtn").addEventListener("click", () => {
        const query = document.getElementById("searchInput").value;
        if (query) {
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.open(searchUrl, '_blank');
        }
    });
});
