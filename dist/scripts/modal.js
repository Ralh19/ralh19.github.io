function openModal(element) {
    const modal = document.getElementById('certification-modal');
    const modalImg = document.getElementById('modal-cert-img');
    const modalTitle = document.getElementById('modal-cert-title');
    const modalDesc = document.getElementById('modal-cert-description');
    const modalSkills = document.getElementById('modal-cert-skills');

    // Add navigation buttons
    const navigation = `
        <button onclick="switchImage('prev')" class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
            <i class="bi bi-chevron-left text-4xl"></i>
        </button>
        <button onclick="switchImage('next')" class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700">
            <i class="bi bi-chevron-right text-4xl"></i>
        </button>
    `;
    
    modal.insertAdjacentHTML('afterbegin', navigation);
    
    // Store current image element globally
    window.currentImage = element;
    
    updateModalContent(element);
    
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

function updateModalContent(element) {
    const modalImg = document.getElementById('modal-cert-img');
    const modalTitle = document.getElementById('modal-cert-title');
    const modalDesc = document.getElementById('modal-cert-description');
    const modalSkills = document.getElementById('modal-cert-skills');
    
    modalImg.src = element.src;
    modalTitle.textContent = element.dataset.title;
    
    // Clear and set main description
    modalDesc.innerHTML = '';
    const descriptionP = document.createElement('p');
    descriptionP.textContent = element.dataset.description;
    descriptionP.className = 'text-gray-600 mb-4 text-lg';
    modalDesc.appendChild(descriptionP);
    
    // Handle bullet point list if it exists
    if (element.dataset.descriptionList) {
        const ul = document.createElement('ul');
        ul.className = 'list-none space-y-2 ml-4';
        
        const items = element.dataset.descriptionList.split('•').filter(item => item.trim() !== '');
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
    
    // Only add skills if data-skills exists and is not empty
    if (element.dataset.skills && element.dataset.skills.trim() !== '') {
        const skills = element.dataset.skills.split(',');
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
    const allImages = document.querySelectorAll('img[onclick="openModal(this)"]');
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
    
    // Remove navigation buttons
    const buttons = modal.querySelectorAll('button[onclick^="switchImage"]');
    buttons.forEach(button => button.remove());
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (!document.getElementById('certification-modal').classList.contains('hidden')) {
        if (e.key === 'ArrowRight') switchImage('next');
        if (e.key === 'ArrowLeft') switchImage('prev');
        if (e.key === 'Escape') closeModal();
    }
});