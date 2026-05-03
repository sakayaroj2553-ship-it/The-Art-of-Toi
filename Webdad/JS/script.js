const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const captionText = document.getElementById('lightbox-caption');
const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const title = item.querySelector('h3') ? item.querySelector('h3').innerText : "ผลงานของพ่อต้อย";

        // ใส่ข้อมูลรูป
        lightboxImg.src = img.src;
        if(captionText) captionText.innerText = title;

        // เปิดแบบสมูท
        lightbox.style.display = 'flex';
        // ใช้ setTimeout เล็กน้อยเพื่อให้ CSS Transition ทำงาน
        setTimeout(() => {
            lightbox.classList.add('active');
        }, 10);
        
        document.body.style.overflow = 'hidden'; // ปิดการ Scroll หลังเว็บ
    });
});

// ฟังก์ชันปิดแบบสมูท
function closeBox() {
    lightbox.classList.remove('active');
    // รอให้แอนิเมชัน Fade-out เสร็จก่อนค่อยซ่อน Element
    setTimeout(() => {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }, 400); 
}

// ปิดเมื่อคลิกที่ว่าง หรือกดปุ่มปิด
lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        closeBox();
    }
});

// รองรับปุ่ม ESC เพื่อปิด
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") closeBox();
});