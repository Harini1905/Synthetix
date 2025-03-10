document.addEventListener('DOMContentLoaded', () => {
    const paymentInput = document.getElementById('payment');
    const paymentPreview = document.getElementById('paymentPreview');
    const projectUrlInput = document.getElementById('projectUrl');
    const submissionUrlInput = document.getElementById('submissionUrl');

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

    // Add URL validation for project URL
    projectUrlInput.addEventListener('input', function(e) {
        try {
            new URL(this.value);
            this.setCustomValidity('');
        } catch (err) {
            this.setCustomValidity('Please enter a valid URL');
        }
    });

    // Add URL validation for submission URL
    submissionUrlInput.addEventListener('input', function(e) {
        try {
            new URL(this.value);
            this.setCustomValidity('');
        } catch (err) {
            this.setCustomValidity('Please enter a valid submission URL');
        }
    });
});
