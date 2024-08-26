Afin de simplifier l'appelation, le fichier de-obfusqué et analysé sera disponible [ici](..\source%20code\cleaned\script3.js).

 > 
 > \[!NOTE\]
 > Ce code n'aura pas pu être analysé intégralement, le site ayant été fermé entre temps. Le code reste lisible et analysé autant que possible.

## Architecture du code

* Récupère un cookie enregistré dans le navigateur
* S'assure que le cookie est correct
* Decode le cookie en passant dans une fonction `decodeString`
* Lit les informations décodés en JSON
* Vérifie si l'utilisateur est sur téléphone ou autres en se basant sur l'User-Agent
* Récupère le type de navigateur (Chrome, Firefox, Safari, ...)
* Créer la fausse URL Steam
* Initialise des noms de *class* aléatoire
* Créer la page
  * Intègre les différentes images, incluant le cadenas de page "sécurisé"
