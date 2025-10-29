document.addEventListener('DOMContentLoaded', () => {
    const choiceButtons = document.querySelectorAll('.choice-btn');
    const officialButton = document.getElementById('officialBtn');
    const spideyPopup = document.getElementById('spideyPopup');
    const closePopup = document.querySelector('.close-btn');

    let isAnyChoiceSelected = false;

    // Fungsionalitas Tombol Pilihan
    choiceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.getAttribute('data-value');

            // Logic 'benar semua'
            if (value === 'benar semua') {
                choiceButtons.forEach(btn => {
                    // Hanya pilih 3 opsi pertama (yg merupakan jawaban ya)
                    if (btn.getAttribute('data-value') !== 'benar semua') {
                        btn.classList.add('selected');
                    } else {
                        // Hilangkan fokus dari tombol 'benar semua' setelah digunakan
                        btn.blur();
                    }
                });
            } else {
                // Toggle pilihan
                this.classList.toggle('selected');
            }

            // Cek apakah ada pilihan yang terpilih
            isAnyChoiceSelected = document.querySelectorAll('.choice-btn.selected').length > 0;

            // Aktifkan atau nonaktifkan tombol utama
            officialButton.disabled = !isAnyChoiceSelected;
        });
    });

    // Fungsionalitas Tombol Resmi
    officialButton.addEventListener('click', () => {
        if (!officialButton.disabled) {
            spideyPopup.classList.add('show');
        }
    });

    // Fungsionalitas Tutup Pop-up
    closePopup.addEventListener('click', () => {
        spideyPopup.classList.remove('show');
    });

    // Tutup pop-up jika mengklik di luar area pop-up
    window.addEventListener('click', (event) => {
        if (event.target === spideyPopup) {
            spideyPopup.classList.remove('show');
        }
    });
});
