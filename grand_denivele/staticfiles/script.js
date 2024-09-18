// static/script.js

document.addEventListener('DOMContentLoaded', () => {
    const teams = [...document.querySelectorAll('#team-table tr')].map(row => {
        const cells = row.querySelectorAll('td');
        return {
            name: cells[0].textContent,
            altitude: parseInt(cells[1].textContent, 10)
        };
    });

    const pointsContainer = document.getElementById('points-container');
    const maxAltitude = 1000; // Ajustez cette valeur en fonction de l'échelle de votre image

    teams.forEach(team => {
        const point = document.createElement('div');
        point.className = 'point';
        const yPosition = 100 - (team.altitude / maxAltitude) * 100;
        point.style.top = `${yPosition}%`;
        point.style.left = `${Math.random() * 100}%`;
        pointsContainer.appendChild(point);
    });
});
