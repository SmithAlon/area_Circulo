// main.js
document.addEventListener('DOMContentLoaded', () => {
    // Create container
    const container = document.createElement('div');
    container.style.textAlign = 'center';
    container.style.marginTop = '50px';
    container.style.fontFamily = 'Arial, sans-serif';
    document.body.appendChild(container);

    // Create title
    const title = document.createElement('h1');
    title.textContent = 'Área de un círculo';
    container.appendChild(title);

    // Create form elements
    const form = document.createElement('div');
    form.style.margin = '20px';
    container.appendChild(form);

    // Create label
    const label = document.createElement('label');
    label.textContent = 'Radio: ';
    label.style.marginRight = '10px';
    form.appendChild(label);

    // Create input
    const input = document.createElement('input');
    input.type = 'number';
    input.style.padding = '5px';
    input.style.marginRight = '10px';
    input.value = '9';
    form.appendChild(input);

    // Create button
    const button = document.createElement('button');
    button.textContent = 'Calcular';
    button.style.padding = '5px 15px';
    button.style.cursor = 'pointer';
    form.appendChild(button);

    // Create result display
    const result = document.createElement('div');
    result.style.marginTop = '20px';
    result.style.fontSize = '18px';
    result.textContent = 'Área: 254.47';
    container.appendChild(result);

    // Add calculation functionality
    button.addEventListener('click', () => {
        const radius = parseFloat(input.value);
        if (!isNaN(radius)) {
            const area = Math.PI * radius * radius;
            result.textContent = `Área: ${area.toFixed(2)}`;
        } else {
            result.textContent = 'Por favor, ingrese un número válido';
        }
    });
});