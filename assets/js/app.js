let contactForm = document.getElementById("contact-form");

contactForm.addEventListener('submit', function(e) {
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