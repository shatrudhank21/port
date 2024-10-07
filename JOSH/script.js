window.onload = function() {
    // Get the current page path
    let currentPage = window.location.pathname;

    // Get all the nav items
    let navLinks = document.querySelectorAll('nav ul li a');

    // Loop through nav items and add the 'active' class to the matching link
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage.substring(currentPage.lastIndexOf('/') + 1)) {
        link.classList.add('active');
      }
    });
  };





document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const addSkillBtn = document.getElementById('add-skills');
    const closeModalBtn = document.getElementById('close-btn');
    const form = document.getElementById('skill-form');
    const addSkillFieldBtn = document.getElementById('add-skill-field');
    const skillsContainer = document.getElementById('skills-container');
    const domainInput = document.getElementById('domain');
    const domainError = document.getElementById('domain-error');
    const skillsError = document.getElementById('skills-error');

    // Open modal
    addSkillBtn.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    // Close modal
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Add another skill field
    addSkillFieldBtn.addEventListener('click', () => {
        const skillRow = document.createElement('div');
        skillRow.classList.add('skill-row');
        skillRow.innerHTML = `
            <input type="text" name="skill-name" placeholder="Skill Name" required>
            <select name="proficiency" required>
                <option value="">Proficiency</option>
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Expert">Expert</option>
            </select>
        `;
        skillsContainer.appendChild(skillRow);
    });

    // Form submission
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let isValid = true;

        // Validate Domain
        if (!domainInput.value) {
            domainError.textContent = 'Domain is required';
            domainError.style.display = 'block';
            isValid = false;
        } else {
            domainError.style.display = 'none';
        }

        // Validate Skills and Proficiency
        const skillRows = document.querySelectorAll('.skill-row');
        let skillValidationPassed = true;

        skillRows.forEach((row) => {
            const skillName = row.querySelector('input[name="skill-name"]');
            const proficiency = row.querySelector('select[name="proficiency"]');
            if (!skillName.value || !proficiency.value) {
                skillValidationPassed = false;
            }
        });

        if (!skillValidationPassed) {
            skillsError.textContent = 'Each skill and proficiency level is required';
            skillsError.style.display = 'block';
            isValid = false;
        } else {
            skillsError.style.display = 'none';
        }

        // If valid, submit the form (for demo purposes, just close the modal)
        if (isValid) {
            modal.style.display = 'none';
            console.log('Form Submitted');
            // Perform further actions like sending the form data to the backend.
        }
    });

    // Close modal when clicking outside of the content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});