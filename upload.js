document.addEventListener('DOMContentLoaded', () => {
    const paymentInput = document.getElementById('payment');
    const paymentPreview = document.getElementById('paymentPreview');

    paymentInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        
        // Validate file type
        if (!file.type.startsWith('image/')) {
            alert('Please upload an image file');
            this.value = '';
            paymentPreview.style.display = 'none';
            return;
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            alert('File size should be less than 5MB');
            this.value = '';
            paymentPreview.style.display = 'none';
            return;
        }

        // Show preview
        const reader = new FileReader();
        reader.onload = function(e) {
            paymentPreview.src = e.target.result;
            paymentPreview.style.display = 'block';
        };
        reader.readAsDataURL(file);
    });
}));
