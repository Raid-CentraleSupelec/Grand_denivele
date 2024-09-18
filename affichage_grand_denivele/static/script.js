// script.js
document.addEventListener('DOMContentLoaded', () => {
    const teamLabelsContainer = document.getElementById('teamLabels');
    const teamDataUrl = '/team-data/';  // URL de l'API Django

    //fonction purement esthétique pour obtenir une couleur pour chaque équipe
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Fonction pour récupérer les données depuis l'API
    function fetchTeamData() {
        fetch(teamDataUrl)
            .then(response => response.json())
            .then(data => {
                // Créer et afficher les étiquettes des équipes
                displayTeamLabels(data);
            })
            .catch(error => console.error('Error fetching team data:', error));
    }

    // Fonction pour créer et afficher les étiquettes des équipes
    function displayTeamLabels(teams) {
        teams.forEach(team => {
            const label = document.createElement('div');
            label.className = 'team-label';
            label.textContent = team.nom;
            
            // Calculer la position top de l'étiquette en fonction de l'altitude
            if(team.altitude < 1800){

                const topPosition = 735 - team.altitude * (735 - 590) / 1800; // Ajuster la position top
                label.style.top = `${topPosition}px`;

                const leftPosition = 280 - team.altitude * (280-180) / 1800; // Ajuste la position verticale
                label.style.left = `${leftPosition}px`;

            }
            else if(team.altitude < 6400){

                const topPosition = 590 - (team.altitude-1800) * (590 - 365) / (6400-1800); // Ajuster la position top
                label.style.top = `${topPosition}px`;

                const leftPosition = 180 - (team.altitude-1800) * (180-680) / (6400-1800); // Ajuste la position verticale
                label.style.left = `${leftPosition}px`;

            }
            else if(team.altitude<10000){

                const topPosition = 365 - (team.altitude-6400) * (365 - 165) / (10000-6400); // Ajuster la position top
                label.style.top = `${topPosition}px`;

                const leftPosition = 680 - (team.altitude-6400) * (680-372) / (10000-6400); // Ajuste la position verticale
                label.style.left = `${leftPosition}px`;

            }
            else {

                const topPosition = 165 - (team.altitude-10000) * (165 - 88) / (12000-10000); // Ajuster la position top
                label.style.top = `${topPosition}px`;

                const leftPosition = 372 - (team.altitude-10000) * (372-440) / (12000-10000); // Ajuste la position verticale
                label.style.left = `${leftPosition}px`;

            }

            label.style.backgroundColor = getRandomColor();
            label.style.color = '#ffffff'; 
            teamLabelsContainer.appendChild(label);
        });
    }

    // Initialiser les données des équipes
    fetchTeamData();


});

document.addEventListener('DOMContentLoaded', () => {
    const fullscreenBtn = document.getElementById('fullscreenBtn');

    function toggleFullscreen() {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    }

    function updateButtonVisibility() {
        if (document.fullscreenElement) {
            fullscreenBtn.style.display = 'none';
        } else {
            fullscreenBtn.style.display = 'block';
        }
    }
    
    fullscreenBtn.addEventListener('click', toggleFullscreen);
    document.addEventListener('fullscreenchange', updateButtonVisibility);
    
    // Initial check
    updateButtonVisibility();
});
