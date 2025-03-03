// Function to change text of multiple paragraphs
const changeParagraphText = (elements, newText) => {
    elements.forEach(para => {
        if (para) {
            para.innerText = newText;
        }
    });
};

// Function to add class
const addClass = (element, className) => {
    if (element && !element.classList.contains(className)) {
        element.classList.add(className);
    }
};

// Function to remove class
const removeClass = (element, className) => {
    if (element && element.classList.contains(className)) {
        element.classList.remove(className);
    }
};

// Function to toggle class
const toggleClass = (element, className) => {
    if (element) {
        element.classList.toggle(className);
    }
};

// Select elements
const firstPara = document.querySelector('p');
const allParas = document.querySelectorAll('p');
const content = document.querySelector('.content');
const link = document.querySelector('a');
const button = document.querySelector('.my-button');

// Manipulate text content of a single paragraph
if (firstPara) {
    firstPara.innerText = 'Devs are awesome!';
}

// Change text content of all paragraphs
changeParagraphText(allParas, 'Updated text for all paragraphs');

// Update HTML content
if (content) {
    content.innerHTML = `
        <h2>This is a new h2</h2>
        <p>mario</p>
        <p>luigi</p>
        <p>yoshi</p>
    `;
}

// Update attributes
if (link) {
    console.log(link.getAttribute('href'));
    link.setAttribute('href', 'https://www.thenetninja.co.uk');
    link.innerText = 'The Net Ninja Website';
}

// Add, remove, or toggle classes
if (firstPara) {
    addClass(firstPara, 'highlight');
    removeClass(firstPara, 'error');
    toggleClass(firstPara, 'success');
}

// Event listener for button click
if (button) {
    button.addEventListener('click', () => {
        console.log('Button clicked!');
    });
}

// Toggle class for paragraphs that contain 'error' or 'success'
allParas.forEach(para => {
    if (para.textContent.includes('error')) {
        addClass(para, 'error');
    }
    if (para.innerText.includes('success')) {
        addClass(para, 'success');
    }
});
