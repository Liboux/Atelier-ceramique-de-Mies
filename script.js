document.addEventListener('DOMContentLoaded', function () {
    // Animation du texte au survol
    document.querySelectorAll('.sous-titre').forEach(element => {
        element.addEventListener('mouseover', () => {
            element.style.transition = 'transform 0.2s, color 0.3s';
            element.style.transform = 'scale(1.03)';
            element.style.color = '#e4c2c2'; // Couleur changeante au survol
        });

        element.addEventListener('mouseout', () => {
            element.style.transform = 'scale(1)';
            element.style.color = ''; // Retour à la couleur d'origine
        });
    });

    // Effet de zoom sur les images de la galerie
    document.querySelectorAll('.gallery img').forEach(img => {
        img.addEventListener('click', () => {
            img.classList.toggle('zoomed');
        });
    });

    // Ajout d'un bouton de retour en haut de page
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑';
    backToTopButton.className = 'back-to-top';
    document.body.appendChild(backToTopButton);

    // Affiche le bouton retour en haut de page en fonction du scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Défilement vers le haut en douceur lorsqu'on clique sur le bouton
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Fonction de filtrage des images
    function filterImages(category) {
        const images = document.querySelectorAll('.gallery img');
        const imageSets = {
            'céramique': [
                'photo_pinguin2.jpeg', 'decoration_table.jpeg', 'oiseaux1.jpeg', 'photo_armoire_atelier.jpeg', 
                'photo_assiette.jpeg', 'photo_atelier1.jpeg', 'photo_canard.jpeg', 'photo_chevres_famille.jpeg', 
                'photo_elephant_carre.jpeg', 'photo_famille_pot.jpeg', 'photo_perroquet.jpeg', 'photo_pinguin1.jpeg', 
                'photo_éléphants.jpeg', 'photo_éléphant_famille.jpeg', 'photo_poisson_dehors.jpeg', 'photo_poisson_dedans.jpeg', 
                'photo_poisson_dehors_famille.jpeg'
            ],
            'famille': [
                'oiseaux1.jpeg', 'photo_atelier1.jpeg', 'photo_canard.jpeg', 'photo_chevres_famille.jpeg', 
                'photo_famille_pot.jpeg', 'photo_éléphants.jpeg', 'photo_éléphant_famille.jpeg'
            ],
            'extérieur': [
                'oiseaux1.jpeg', 'photo_poisson_dehors.jpeg'
            ],
            'intérieur': [
                'photo_pinguin2.jpeg', 'decoration_table.jpeg', 'photo_armoire_atelier.jpeg', 'photo_assiette.jpeg', 
                'photo_atelier1.jpeg', 'photo_canard.jpeg', 'photo_chevres_famille.jpeg', 'photo_elephant_carre.jpeg', 
                'photo_famille_pot.jpeg', 'photo_perroquet.jpeg', 'photo_pinguin1.jpeg', 'photo_éléphants.jpeg', 
                'photo_éléphant_famille.jpeg'
            ]
        };

        images.forEach(img => {
            const src = img.src.split('/').pop(); // Récupère le nom du fichier de l'URL de l'image
            if (category === 'tous' || imageSets[category].includes(src)) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
    }

    // Création des boutons de filtre de catégorie
    const categories = ['Céramique', 'Famille', 'Extérieur', 'Intérieur'];
    const filterContainer = document.createElement('div');
    filterContainer.className = 'filter-container';

    categories.forEach(category => {
        const button = document.createElement('button');
        button.textContent = category;
        button.className = 'filter-button';
        button.addEventListener('click', () => filterImages(category.toLowerCase()));
        filterContainer.appendChild(button);
    });

    // Insère les boutons de filtre en haut de la section galerie s'il y en a une
    const gallerySection = document.querySelector('.gallery-section');
    if (gallerySection) {
        gallerySection.prepend(filterContainer);
    } else {
        console.error('Section de la galerie non trouvée.');
    }
});