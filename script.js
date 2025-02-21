function areaCirculo() {
    const radio = document.getElementById('radio').value;
    const area = Math.PI * Math.pow(radio, 2);
    document.getElementById('area').textContent = area.toFixed(2);
}
