document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('touristRegistration');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        if (validateForm()) {
            submitForm();
        }
    });

    // Real-time validation
    const inputs = form.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(input);
        });
    });

    function validateField(field) {
        const formGroup = field.closest('.form-group');
        
        // Remove existing error message
        const existingError = formGroup.querySelector('.error-message');
        if (existingError) {
            existingError.remove();
        }

        // Basic validation
        if (field.required && !field.value.trim()) {
            showError(field, 'This field is required');
            return false;
        }

        // Email validation
        if (field.type === 'email' && field.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(field.value)) {
                showError(field, 'Please enter a valid email address');
                return false;
            }
        }

        // Phone validation
        if (field.id === 'phone' && field.value) {
            const phoneRegex = /^\+?[\d\s-]{8,}$/;
            if (!phoneRegex.test(field.value)) {
                showError(field, 'Please enter a valid phone number');
                return false;
            }
        }

        // Date validation
        if (field.type === 'date' && field.value) {
            const selectedDate = new Date(field.value);
            const today = new Date();
            if (selectedDate < today) {
                showError(field, 'Please select a future date');
                return false;
            }
        }

        formGroup.classList.remove('error');
        formGroup.classList.add('success');
        return true;
    }

    function showError(field, message) {
        const formGroup = field.closest('.form-group');
        formGroup.classList.add('error');
        formGroup.classList.remove('success');
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;
        formGroup.appendChild(errorDiv);
    }

    function validateForm() {
        let isValid = true;
        const requiredFields = form.querySelectorAll('[required]');
        
        requiredFields.forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });

        // Check if at least one interest is selected
        const interests = form.querySelectorAll('input[name="interests"]:checked');
        if (interests.length === 0) {
            const interestsGroup = form.querySelector('.checkbox-group').closest('.form-group');
            showError(interestsGroup.querySelector('input'), 'Please select at least one interest');
            isValid = false;
        }

        return isValid;
    }

    function submitForm() {
        const submitButton = form.querySelector('.submit-button');
        const originalText = submitButton.innerHTML;
        
        // Show loading state
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
        submitButton.disabled = true;

        // Simulate form submission (replace with actual API call)
        setTimeout(() => {
            showSuccessMessage();
            form.reset();
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }, 2000);
    }

    function showSuccessMessage() {
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <div class="success-content">
                <i class="fas fa-check-circle"></i>
                <h3>Registration Successful!</h3>
                <p>We'll contact you shortly to confirm your tour details.</p>
            </div>
        `;
        
        document.body.appendChild(successMessage);
        
        setTimeout(() => {
            successMessage.remove();
        }, 5000);
    }
}); 