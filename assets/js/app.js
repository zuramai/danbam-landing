let contactForm = document.getElementById("contact-form");

// if contact form exist then add event
if(contactForm) contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let errors = [];

    // get #name whom inside form
    let name = e.target.querySelector('#name');
    let email = e.target.querySelector('#email');
    let gender = e.target.querySelectorAll("input[name='gender']");
    let branch = e.target.querySelector('#branch');
    let message = e.target.querySelector('#message');

    /**
     * Validate input
     * @returns void
     * @param key the name 
     * @param value The value want to validated
     */ 
    function validate(key, value, type=null) {
        // check if empty
        if(!value) errors.push(`${key} is required`)
        // check min length
        else if(value.length < 3) errors.push(`${key} minimum 3 characters!`)
        // check max length
        else if(value.length > 100) errors.push(`${key} maximum 100 characters!`)
        // check is email
        else if(type == 'email' && !value.endsWith("@gmail.com")) errors.push(`You should use gmail!`)
        
    }
    
    validate("name", name.value);
    validate("email", email.value);
    validate("branch", branch.value);
    validate("message", message.value);

    // validate gender is checked
    let isGenderChecked = Array.from(gender).some(g => g.checked)
    if(!isGenderChecked) errors.push("Gender is required")

    showErrors(errors)
});


function showErrors(errors) {
    if(!errors.length) return alert("Success");
    return alert(errors.join("\n"));
}

let sliderControlLeft = document.querySelector('.slider-control-left');
let sliderControlRight = document.querySelector('.slider-control-right');
let sliderWrapper = document.querySelector('.slider-wrapper');
let sliders = document.querySelectorAll('.slider');

// if in page menu, add event listener to slider
if(document.querySelector('.page-menu')) {
    sliderControlLeft.addEventListener('click', moveSliderToLeft);
    sliderControlRight.addEventListener('click', moveSliderToRight);
}

function moveSliderToLeft(e) {
    let sliderPosition = parseInt(sliderWrapper.getAttribute('data-current-slider'));

    // can't slide to left if you are in the first
    if(sliderPosition == 1) return;

    let nextSlide = sliderPosition - 2;
    let nextSlidePercent = nextSlide * -100;
    sliders.forEach(s => s.style.transform = `translateX(${nextSlidePercent}%)`)

    // update attribute
    sliderWrapper.setAttribute('data-current-slider',sliderPosition-1)
}

function moveSliderToRight(e) {
    let sliderPosition = parseInt(sliderWrapper.getAttribute('data-current-slider'));

    // can't slide to right if you are in the last slide
    if(sliderPosition == sliders.length) return;

    let nextSlidePercent = sliderPosition * -100;
    sliders.forEach(s => s.style.transform = `translateX(${nextSlidePercent}%)`)

    sliderWrapper.setAttribute('data-current-slider',sliderPosition+1)
}


// btn toggle
let btnToggle = document.querySelector('.btn-toggle button')
btnToggle.addEventListener('click', function() {
    let navbarMenu = document.querySelector('.navbar__menu');

    navbarMenu.classList.toggle('show')
});

// Dropdown
let dropdowns = document.querySelectorAll('.has-dropdown');
dropdowns.forEach(dropdownMenu => {
    dropdownMenu.addEventListener('click', function(e) {
        let theDropdown = e.target.closest('li').querySelector('.dropdown-menu');
        theDropdown.classList.toggle('active')
    });
});