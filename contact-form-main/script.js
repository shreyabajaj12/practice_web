document.addEventListener("DOMContentLoaded", () => {
    const submit = document.querySelector(".btn");
    const content = document.querySelector(".main");

    // Validate email format
    function validateEmail() {
        const emailInput = document.querySelector("#email-add");
        const emailError = document.querySelector(".req-type");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailInput.value.trim() === "") {
            emailError.textContent = "This field is required";
            emailError.style.display = "block";
            return false;
        } else if (!emailRegex.test(emailInput.value.trim())) {
            emailError.textContent = "Please enter a valid email address";
            emailError.style.display = "block";
            return false;
        } else {
            emailError.style.display = "none";
            return true;
        }
    }

    // Check if required fields are filled
    function validateEmptyFields() {
        let isValid = true;
        const requiredInputs = document.querySelectorAll(".empty");

        requiredInputs.forEach((input) => {
            const errorDiv = input.nextElementSibling;
            if(input.value.trim() === "") {
                errorDiv.textContent = "This field is required";
                errorDiv.style.display = "block";
                isValid = false;
            } else {
                errorDiv.style.display = "none";
            }
        });

        return isValid;
    }

    // Validate if a query type is selected
    function validateQueryType() {
        const generalRadio = document.querySelector(".rad");
        const supportRadio = document.querySelector(".rad2");
        const errorDiv = document.querySelector(".choice");
        
        if (generalRadio.style.display !== "block" && supportRadio.style.display !== "block") {
            errorDiv.style.display = "block";
            return false;
        } else {
            errorDiv.style.display = "none";
            return true;
        }
    }

    // Validate if checkbox is checked
    function validateConsent() {
        const checkbox = document.querySelector(".check img");
        const errorDiv = document.querySelector(".consent-error");
        
        if (checkbox.style.display !== "block") {
            errorDiv.textContent = "To submit this form, please consent to being contacted";
            errorDiv.style.display = "block";
            return false;
        } else {
            errorDiv.style.display = "none";
            return true;
        }
    }

    // Add toggle functionality to radio buttons
    function setupQueryTypeSelection() {
        const general = document.querySelector(".general");
        const support = document.querySelector(".support");
        const generalRadio = document.querySelector(".rad");
        const supportRadio = document.querySelector(".rad2");

        general.addEventListener("click", () => {
            generalRadio.style.display = "block";
            supportRadio.style.display = "none";
        });

        support.addEventListener("click", () => {
            supportRadio.style.display = "block";
            generalRadio.style.display = "none";
        });
    }

    // Toggle checkbox selection
    function setupConsentToggle() {
        const checkbox = document.querySelector(".check img");
        const checkDiv = document.querySelector(".check");

        checkDiv.addEventListener("click", () => {
            if (checkbox.style.display === "none" || checkbox.style.display === "") {
                checkbox.style.display = "block";
            } else {
                checkbox.style.display = "none";
            }
        });
    }

    // Initialize the form
    function initForm() {
        setupQueryTypeSelection();
        setupConsentToggle();

        submit.addEventListener("click", (e) => {
            e.preventDefault();
            
            // Reset all error messages first
            document.querySelectorAll(".error").forEach(error => {
                error.style.display = "none";
            });

            const isFieldsValid = validateEmptyFields();
            const isEmailValid = validateEmail();
            const isQueryValid = validateQueryType();
            const isConsentValid = validateConsent();

            if (isFieldsValid && isEmailValid && isQueryValid && isConsentValid) {
                content.innerHTML = `<div class="thank">
                    <div class="card2">
                        <div class="sent">
                            <img src="./assets/images/icon-success-check.svg">
                            <p>Message Sent!</p>
                        </div>
                        <div class="confirm">Thanks for completing the form. We'll be in touch soon!</div>
                    </div>
                </div>`;
            }
        });
    }

    initForm();
});