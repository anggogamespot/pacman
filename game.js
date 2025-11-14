// Dapatkan elemen canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const scoreDisplay = document.getElementById('score');

// Konstanta
const TILE_SIZE = 25; // Ukuran setiap kotak di grid

// Objek Pac-Man
let pacman = {
    x: TILE_SIZE,
    y: TILE_SIZE,
    radius: TILE_SIZE / 2 - 2,
    color: 'yellow',
    speed: 5,
    direction: 'right',
    score: 0
};

// --- Fungsi Gambar ---

function drawPacman() {
    ctx.beginPath();
    // Menggambar bentuk Pac-Man (untuk demo sederhana, kita gambar lingkaran)
    ctx.arc(pacman.x, pacman.y, pacman.radius, 0, Math.PI * 2);
    ctx.fillStyle = pacman.color;
    ctx.fill();
    ctx.closePath();
}

function updateScore() {
    scoreDisplay.textContent = `Skor: ${pacman.score}`;
}

// --- Fungsi Pergerakan dan Game Loop ---

function gameLoop() {
    // 1. Hapus layar
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // 2. Perbarui posisi (Akan diisi dengan logika pergerakan Pac-Man dan Hantu)
    // Logika sederhana pergerakan berdasarkan arah
    if (pacman.direction === 'right') pacman.x += pacman.speed;
    else if (pacman.direction === 'left') pacman.x -= pacman.speed;
    else if (pacman.direction === 'up') pacman.y -= pacman.speed;
    else if (pacman.direction === 'down') pacman.y += pacman.speed;
    
    // Batasi pergerakan agar tetap di dalam canvas
    if (pacman.x < pacman.radius) pacman.x = pacman.radius;
    if (pacman.x > canvas.width - pacman.radius) pacman.x = canvas.width - pacman.radius;
    if (pacman.y < pacman.radius) pacman.y = pacman.radius;
    if (pacman.y > canvas.height - pacman.radius) pacman.y = canvas.height - pacman.radius;

    // 3. Gambar semua elemen
    // Di sini Anda akan menggambar Peta, Biskuit, Pac-Man, dan Hantu
    drawPacman();
    
    // 4. Minta *frame* berikutnya
    requestAnimationFrame(gameLoop);
}

// --- Kontrol Keyboard ---

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') pacman.direction = 'right';
    else if (e.key === 'ArrowLeft') pacman.direction = 'left';
    else if (e.key === 'ArrowUp') pacman.direction = 'up';
    else if (e.key === 'ArrowDown') pacman.direction = 'down';
});

// --- Mulai Game ---
gameLoop();
updateScore(); // Inisialisasi tampilan skor
