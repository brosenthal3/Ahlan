const contactPage = () => {
    const contactPage = document.createElement('div');

    const intro = document.createElement('intro');
    intro.classList.add('intro', 'intro-menu');
    const title = document.createElement('h2');
    title.textContent = 'Contact Us';
    intro.appendChild(title);
    
    const main = document.createElement('main');
    main.classList.add('container', 'contact');
    const infoSection = document.createElement('section');
    const infoTitle = document.createElement('h4');
    infoTitle.textContent = 'Info:';
    const p = document.createElement('p');
    p.innerHTML = `
    Adress:
    <br>
    Fake Street 21, Amsterdam, NL.
    <br><br>
    Opening hours: <br>
    Monday-Friday: 10AM - 12PM. <br>
    Saturday-Sunday: 12AM - 8PM.
    `;
    infoSection.appendChild(infoTitle);
    infoSection.appendChild(p);

    const form = document.createElement('div');
    form.classList.add('contact-form');
    const formTitle = document.createElement('h4');
    formTitle.textContent = 'Get in touch:';

    const createInput = () => document.createElement('input');

    const nameField = document.createElement('div');
    nameField.classList.add('form-item');
    const nameLabel = document.createElement('label');
    nameLabel.textContent = 'Your Name:';
    nameLabel.appendChild(createInput());
    nameField.appendChild(nameLabel);

    const emailField = document.createElement('div');
    emailField.classList.add('form-item');
    const emailLabel = document.createElement('label');
    emailLabel.textContent = 'Your Email:';
    emailLabel.appendChild(createInput());
    emailField.appendChild(emailLabel);

    const messageField = document.createElement('div');
    messageField.classList.add('form-item');
    const messageLabel = document.createElement('label');
    messageLabel.textContent = 'Your Message:';
    messageLabel.appendChild(document.createElement('textarea'));
    messageField.appendChild(messageLabel);

    const submitField = document.createElement('div');
    submitField.classList.add('form-item');
    const submit = document.createElement('button');
    submit.textContent = "Submit";
    submit.id = 'submit';
    submitField.appendChild(submit);

    form.appendChild(formTitle);
    form.appendChild(nameField);
    form.appendChild(emailField);
    form.appendChild(messageField);
    form.appendChild(submitField);

    main.appendChild(infoSection);
    main.appendChild(form);

    contactPage.appendChild(intro);
    contactPage.appendChild(main);

    return contactPage;
}

export default contactPage;