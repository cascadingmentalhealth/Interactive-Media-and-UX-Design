document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Check if all required fields are filled
        const requiredFields = form.querySelectorAll('[required]');
        let allFieldsFilled = true;
        requiredFields.forEach(field => {
            if (!field.value) {
                allFieldsFilled = false;
            }
        });
        if (allFieldsFilled) {
            window.location.href = "Home.html";
        } else {
            alert("Please fill all the required fields.");
        }
    });
});