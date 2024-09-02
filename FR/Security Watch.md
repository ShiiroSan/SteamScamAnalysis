# Analyse d'une tentative de phishing sur Steam

 > \[!CAUTION\]
 > Les liens, bouts de code, n'importe quoi provenant des recherches doit être considéré comme malicieuse et traité avec la plus grande précaution. Chaque éléments provenant de virus **actifs** et **fonctionnels**. Il est donc grandement conseillé d'analyser lesdits éléments en machine virtuelle ou sandbox.
 >
 > **Je, ShiiroSan, ne saurais être considéré comme responsable de l'ignorance de cette mise en garde.**

## Résumé de l'attaque

Un contact m'ajoute sur Steam et me propose de rejoindre sa team *FACEIT*[^1]. Pour ce faire, je dois aller sur un site, me connecter via Steam, et je pourrais rejoindre son groupe.

![Pasted image 20240814183118.png](https://github.com/ShiiroSan/SteamScamAnalysis/blob/master/assets/Pasted%20image%2020240814183118.png)

## Du point de vue d'un utilisateur lambda

Une fois le site ouvert, un popup apparaît pour lier son compte Steam à FACEIT. Cliquer sur les liens de *Terms & Conditions* et *Privacy Policy* mène vers les vraies pages de FACEIT. Le reste de la page est du texte sans grand intérêt.

![Pasted image 20240814182409.png](https://github.com/ShiiroSan/SteamScamAnalysis/blob/master/assets/Pasted%20image%2020240814182409.png)

Sur le popup, cliquer sur *VERIFY CS2 & GET PLAYER ID* ouvre une page de connexion Steam. Cette page ressemble à une vraie page d'authentification Steam. En apparence, tout semble correct.

![Pasted image 20240814183649.png](https://github.com/ShiiroSan/SteamScamAnalysis/blob/master/assets/Pasted%20image%2020240814183649.png)

En essayant de se connecter avec un compte Steam, la page demande un code 2FA (double authentification). Un mail officiel de Steam est reçu avec le code. Cependant, renseigner le code indique une erreur.

![Pasted image 20240814184654.png](https://github.com/ShiiroSan/SteamScamAnalysis/blob/master/assets/Pasted%20image%2020240814184654.png)

L'utilisateur pourrait penser que le code n'a pas fonctionné et abandonner. À ce point, l'attaquant a déjà récupéré le nom d'utilisateur, le mot de passe et le code 2FA.

## Analyse préliminaire du site

En regardant de plus près, on découvre que la page de connexion Steam est en réalité créée par le site lui-même. Ce qui semblait être une vraie page Steam est en fait une fausse page imitant parfaitement l'originale.

## Résumé du fonctionnement de la page de phishing

![Pasted image 20240826164125.png](https://github.com/ShiiroSan/SteamScamAnalysis/blob/master/assets/Pasted%20image%2020240826164125.png)

* Le site imite une page de groupe FACEIT et demande de se connecter via Steam.
* La page de connexion Steam est fausse, créée par le site pour tromper l'utilisateur.
* Les informations de connexion sont récupérées par l'attaquant, y compris le code 2FA.
* Le cadenas "HTTPS" est une simple image.
* Le titre du popup s'adapte au navigateur utilisé.
* Les liens sur le popup mènent vers le vrai site de Steam, sauf le lien de connexion.
* Le QR Code semble correct mais ne permet pas l'authentification.
* Les identifiants fournis sont utilisés pour créer une session et demander le code 2FA, rendant l'attaque plus réaliste.

[^1]: *FACEIT* est un site permettant de participer à des compétitions de jeux vidéos. Il est possible de créer des groupes pour jouer ensemble.