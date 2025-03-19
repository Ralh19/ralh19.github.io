function openModal(element) {
    const modal = document.getElementById('certification-modal');
    const modalImg = document.getElementById('modal-cert-img');
    const modalTitle = document.getElementById('modal-cert-title');
    const modalDescription = document.getElementById('modal-cert-description');
    const modalSkills = document.getElementById('modal-cert-skills');

    // Get data from element
    const title = element.getAttribute('data-title');
    const description = element.getAttribute('data-description');
    const skills = element.getAttribute('data-skills');
    const image = element.getAttribute('data-image');

    // Set modal content
    modalImg.src = image;
    modalImg.alt = title;
    modalTitle.textContent = title;
    modalDescription.textContent = description;

    // Handle skills icons
    modalSkills.innerHTML = ''; // Clear existing skills
    if (skills) {
        skills.split(',').forEach(skill => {
            const skillIcon = document.createElement('img');
            skillIcon.src = `images/skillsIcons/${skill}_ico.png`;
            skillIcon.alt = skill;
            skillIcon.className = 'w-12 h-12 object-contain';
            modalSkills.appendChild(skillIcon);
        });
    }

    // Show modal and navigation
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';

    // Store current image and its type for carousel
    window.currentImage = element;
    window.currentType = element.getAttribute('data-type') || 
                        element.closest('.card').getAttribute('data-type');

    // Ensure navigation buttons are visible
    const navButtons = modal.querySelectorAll('button[onclick^="switchImage"]');
    navButtons.forEach(button => {
        button.classList.remove('hidden');
    });
}

function updateModalContent(element) {
    const modalImg = document.getElementById('modal-cert-img');
    const modalTitle = document.getElementById('modal-cert-title');
    const modalDesc = document.getElementById('modal-cert-description');
    const modalSkills = document.getElementById('modal-cert-skills');
    
    // Handle different element types (certification images vs project buttons)
    const isProject = element.hasAttribute('onclick');
    
    // Update image source
    modalImg.src = isProject ? element.getAttribute('data-image') : element.src;
    modalTitle.textContent = isProject ? element.getAttribute('data-title') : element.dataset.title;
    
    // Clear and set main description
    modalDesc.innerHTML = '';
    const descriptionP = document.createElement('p');
    descriptionP.textContent = isProject ? element.getAttribute('data-description') : element.dataset.description;
    descriptionP.className = 'text-gray-600 mb-4 text-lg';
    modalDesc.appendChild(descriptionP);
    
    // Handle bullet point list if it exists
    const descriptionList = isProject ? element.getAttribute('data-description-list') : element.dataset.descriptionList;
    if (descriptionList) {
        const ul = document.createElement('ul');
        ul.className = 'list-none space-y-2 ml-4';
        
        const items = descriptionList.split('•').filter(item => item.trim() !== '');
        items.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item.trim();
            li.className = 'text-gray-600 flex items-start text-lg';
            li.insertAdjacentHTML('afterbegin', '<span class="mr-2">•&nbsp;&nbsp;&nbsp;</span>');
            ul.appendChild(li);
        });
        
        modalDesc.appendChild(ul);
    }
    
    // Clear previous skills
    modalSkills.innerHTML = '';
    
    // Get skills data based on element type
    const skillsData = isProject ? element.getAttribute('data-skills') : element.dataset.skills;
    
    // Only add skills if they exist and are not empty
    if (skillsData && skillsData.trim() !== '') {
        const skills = skillsData.split(',');
        skills.forEach(skill => {
            const skillIcon = document.createElement('img');
            skillIcon.src = `images/skillsIcons/${skill}_ico.png`;
            skillIcon.style.width = '5rem';
            skillIcon.style.height = '5rem';
            skillIcon.style.objectFit = 'contain';
            modalSkills.appendChild(skillIcon);
        });
    }
}

function switchImage(direction) {
    const currentImage = window.currentImage;
    const currentType = currentImage.getAttribute('data-type') || 
                       currentImage.closest('.card').getAttribute('data-type');
    
    // Select only images of the same type
    const selector = currentType === 'certification' 
        ? 'img[data-type="certification"]'
        : '.card button[onclick="openModal(this)"][data-type="project"]';
    
    const allImages = document.querySelectorAll(selector);
    const currentIndex = Array.from(allImages).indexOf(currentImage);
    
    let nextIndex;
    if (direction === 'next') {
        nextIndex = (currentIndex + 1) % allImages.length;
    } else {
        nextIndex = (currentIndex - 1 + allImages.length) % allImages.length;
    }
    
    window.currentImage = allImages[nextIndex];
    updateModalContent(allImages[nextIndex]);
}

function closeModal() {
    const modal = document.getElementById('certification-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    
    // Re-enable scrolling
    document.body.style.overflow = 'auto';
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!document.getElementById('certification-modal').classList.contains('hidden')) {
        if (e.key === 'ArrowRight') switchImage('next');
        if (e.key === 'ArrowLeft') switchImage('prev');
        if (e.key === 'Escape') closeModal();
    }
});