// Placeholder for future interactivity if needed
console.log("Welcome to Rareblocks!");


function showPopup(itemName, price) {
    const popup = document.getElementById('popup');
    document.getElementById('popup-title').innerText = itemName;
    document.getElementById('popup-price').innerText = `Price: ${price}`;
    popup.classList.remove('hidden');
}

function hidePopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('hidden');
}

// Interaksi hover card (opsional, jika perlu tambahan interaksi)
document.querySelectorAll('.info-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});
// Placeholder if interactions or dynamic updates are needed later
console.log("Dashboard Stats Initialized");

// Example: Animasi angka atau data dinamis (opsional)
document.querySelectorAll('.stat-number').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.1)';
        element.style.transition = 'transform 0.3s ease';
    });
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)';
    });
});


