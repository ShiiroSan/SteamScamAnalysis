Afin de simplifier l'appelation, le fichier de-obfusqué et analysé sera disponible [ici](..\source%20code\cleaned\script2.js).

## Architecture du code

* Chiffre l'User-Agent en MD5
* Récupère un cookie ayant pour nom le hachage MD5 du User-Agent
* Si ce dernier n'existe pas, on le créer. 
* La valeur du cookie est une valeur aléatoire qui représentera le nom d'un fichier .js à intégrer
