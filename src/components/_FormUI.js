export default function formUI() {
    const form = document.createElement('form');
    const input = document.createElement('input');
    const submit = document.createElement('button');

    input.placeholder = 'Search for a city...'
    submit.type = 'submit';
    submit.innerHTML = 'Search';

    form.appendChild(input);
    form.appendChild(submit);

    return form;
}