document.getElementById('boxingForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('fullName').value;
    const nickname = document.getElementById('nickname').value || '-';
    const age = document.getElementById('age').value;
    const weight = document.getElementById('weight').value;
    const category = document.getElementById('category').value;
    const phone = document.getElementById('phone').value;
    const club = document.getElementById('club').value || 'Independen';

    // Format Pesan WhatsApp
    const text = `*PENDAFTARAN BANDUNG FIGHT NIGHT*%0A%0A` +
                 `*Nama:* ${name}%0A` +
                 `*Julukan:* ${nickname}%0A` +
                 `*Umur:* ${age} Tahun%0A` +
                 `*Berat:* ${weight} kg%0A` +
                 `*Kelas:* ${category}%0A` +
                 `*Camp/Sasana:* ${club}%0A` +
                 `*WhatsApp:* ${phone}%0A%0A` +
                 `Saya telah menyetujui syarat & ketentuan event.`;

    // Buka WhatsApp Panitia
    const whatsappNumber = "6289672477444";
    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
});