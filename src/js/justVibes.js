//========== [DATA FOTO] ==========//
const photos = [
    { id: 1, src: "../images/my_Vibes/IMG_0094.jpg", title: "Warung Pantai", location: "Pantai Wedi Awu, Indonesia" },
    { id: 2, src: "../images/my_Vibes/IMG_0096.jpg", title: "Pantai Wedi Awu", location: "Pantai Wedi Awu, Indonesia" },
    { id: 3, src: "../images/my_Vibes/IMG_0098.jpg", title: "Nelayan", location: "Pantai Wedi Awu, Indonesia" },
    { id: 4, src: "../images/my_Vibes/IMG_0099.jpg", title: "Jalan Arah Pantai Wedi Awu", location: "Pantai Wedi Awu, Indonesia" },
    { id: 5, src: "../images/my_Vibes/IMG_0100.jpg", title: "Gunung Semeru", location: "Lumajang, Indonesia" },
    { id: 6, src: "../images/my_Vibes/IMG_0101.jpg", title: "Purple Sunset", location: "Malang, Indonesia" },
    { id: 7, src: "../images/my_Vibes/IMG_0102.jpg", title: "Siang Menjelang Sore", location: "Malang, Indonesia" },
    { id: 8, src: "../images/my_Vibes/IMG_0103.jpg", title: "Bromo Sunrise", location: "Malang, Indonesia" },
    { id: 9, src: "../images/my_Vibes/IMG_0104.jpg", title: "Paralayang", location: "Batu, Indonesia" },
    { id: 10, src: "../images/my_Vibes/IMG_0105.jpg", title: "Paralayang Golden Sunrise", location: "Batu, Indonesia" },
    { id: 11, src: "../images/my_Vibes/IMG_0106.jpg", title: "Pagi di UNMER Malang", location: "Malang, Indonesia" },
    { id: 12, src: "../images/my_Vibes/IMG_0108.jpg", title: "Paralayang", location: "Batu, Indonesia" },
    { id: 13, src: "../images/my_Vibes/IMG_0109.jpg", title: "Paralayang Batu", location: "Batu, Indonesia" }
];

//========== [GALLERY] ==========//
function generateGallery() {
    const galleryGrid = document.getElementById('gallery-grid');

    photos.forEach(photo => {
        const photoCard = document.createElement('div');
        photoCard.className = 'photo-card';
        photoCard.onclick = () => openPhotoPopup(photo);

        photoCard.innerHTML = `
            <div class="photo-container">
                <img
                    src="${photo.src}"
                    alt="${photo.title}"
                    class="photo-image"
                    loading="lazy"
                    onload="handleImageLoad(event)"
                    onerror="handleImageError(event)"
                />
                <div class="photo-overlay">
                    <div class="photo-info">
                        <h3 class="photo-title">${photo.title}</h3>
                        <p class="photo-location">${photo.location}</p>
                    </div>
                </div>
            </div>
        `;

        galleryGrid.appendChild(photoCard);
    });
}

//========== [HANDLE LOAD IMAGE] ==========//
function handleImageLoad(e) {
    const img = e.target;
    const card = img.closest('.photo-card');

    if (!card) return;

    card.classList.remove('portrait', 'landscape', 'square');

    const aspectRatio = img.naturalWidth / img.naturalHeight;

    if (aspectRatio > 1.2) {
        card.classList.add('landscape');
    } else if (aspectRatio < 0.8) {
        card.classList.add('portrait');
    } else {
        card.classList.add('square');
    }
}

//========== [HANDLE ERROR IMAGE] ==========//
function handleImageError(e) {
    const img = e.target;
    const card = img.closest('.photo-card');

    if (!card) return;

    card.classList.remove('portrait', 'landscape', 'square');
    card.classList.add('landscape');
    img.alt = "Image failed to load";
}

//========== [OPEN PHOTO POPUP] ==========//
function openPhotoPopup(photo) {
    const popup = document.getElementById('photo-popup');
    const popupImage = document.getElementById('popup-image');
    const popupTitle = document.getElementById('popup-title');
    const popupLocation = document.getElementById('popup-location');

    popupImage.src = photo.src;
    popupImage.alt = photo.title;
    popupTitle.textContent = photo.title;
    popupLocation.textContent = photo.location;

    popup.classList.add('active');
    document.body.style.overflow = 'hidden';
}

//========== [CLOSE PHOTO POOPUP] ==========//
function closePhotoPopup() {
    const popup = document.getElementById('photo-popup');
    popup.classList.remove('active');
    document.body.style.overflow = 'auto';
}

//========== [CLOSE POPUP (klik diluar element)] ==========//
document.getElementById('photo-popup').addEventListener('click', function (e) {
    if (e.target.classList.contains('photo-popup')) {
        closePhotoPopup();
    }
});

//========== [HAANDLE ESC POPUP] ==========//
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closePhotoPopup();
    }
});

//========== [INISIASI LOAD (all elements)] ==========//
document.addEventListener('DOMContentLoaded', function () {
    generateGallery();
});