Un "write-up" sur le nouveau scam prenant de plus en plus d'ampleurs sur Steam. Ce dernier devrait se répandre assez rapidement, au vu de "l'efficacité" du type de phishing.

 > 
 > \[!CAUTION\]
 > Les liens, bouts de code, n'importe quoi provenant des recherches doivent être considérés comme malicieuse et traités avec la plus grande précaution. Chaque éléments provenant de virus **actif** et **fonctionnel**. Il est donc grandement conseillé d'analyser les dits éléments en machine virtuel ou sandbox. 
 > 
 > **Je, ShiiroSan, ne saurais être considéré comme responsable de l'ignorance de cette mise en garde.**

## Summary de l'action

Un contact m'ajoute sur Steam et me propose de rejoindre sa team *FACEIT[^1]*. 
Pour se faire, je n'ai qu'à aller sur l'URL suivante : https://faceit.pixel-panthers.com (*le lien est maintenant mort*), faire une connexion via la page Steam et je pourrais rejoindre son groupe. 

![Pasted image 20240814182409.png](https://github.com/ShiiroSan/SteamScamAnalysis/blob/master/assets/Pasted%20image%2020240814182409.png)

## Du point de vue d'un utilisateur lambda

Une fois le site ouvert, on est accueil par un popup s'assurant que l'on doit lié son compte Steam à FACEIT, que l'on accepte les Termes et Conditions, que le compte soit conforme etc. 

Le bouton *Close* en haut nous mène vers le vrai site contenant un bouton "Confirm" (qui ramène vers le popup). 

![Pasted image 20240814183118.png](https://github.com/ShiiroSan/SteamScamAnalysis/blob/master/assets/Pasted%20image%2020240814183118.png)
Cliquer sur *Terms & Conditions* et *Privacy Policy* ramène vers les termes et la privacy policy de FACEIT. 
Le reste de la page n'est que du texte sans grand intérêt, avec le minimum d'interaction possible. 

Revenons donc au popup. Sur le popup, l'appuie sur *Terms & Conditions* ou *Contact FACEIT Support* mène vers les vraies pages FACEIT. 
Un appui sur le bouton *VERIFY CS2 & GET PLAYER ID* quant à lui ouvre une page de connexion Steam afin de lié son compte Steam à *FACEIT*. 
![Pasted image 20240814183649.png](https://github.com/ShiiroSan/SteamScamAnalysis/blob/master/assets/Pasted%20image%2020240814183649.png)

Ce popup ressemble en tout point au popup d'authentification via des services tiers qui peuvent exister. La moindre interaction avec un lien sur le popup redirige vers la vraie page Steam affilié. Le QR code défile correctement. 
La lecture du code QR avec un QR scanner redirige réellement vers un lien de connexion Steam. En apparence, la page semble correct. 
Essayons de se connecter avec un compte Steam fraichement créer pour voir ce qu'il se passe. 
![Pasted image 20240814184654.png](https://github.com/ShiiroSan/SteamScamAnalysis/blob/master/assets/Pasted%20image%2020240814184654.png)
La page *FACEIT* nous informe qu'il faut renseigner le code 2FA pour pouvoir valider la connexion. Un mail a bien été reçu contenant le code 2FA, ainsi qu'une approximation de l'endroit de connexion
![Pasted image 20240814184801.png](https://github.com/ShiiroSan/SteamScamAnalysis/blob/master/assets/Pasted%20image%2020240814184801.png)
Le mail est un véritable mail de connexion Steam, provenant bien d'une adresse officiel de Steam. Pas de soucis de ce côté. 
Néanmoins, renseigner le code à 2FA indique sur le site une erreur comme quoi le code est incorrect. Une tentative de régénération du code produit la même erreur. 

Dans un scénario classique, l'utilisateur penserait que le code n'a juste pas fonctionné et laisserais tomber ou retournerais vers le contact lui ayant demandé de rejoindre son groupe. A ce point l'attaque a déjà été un succès. L'attaquant à récupérer le nom d'utilisateur, le mot de passe et même le double facteur d'authentification. 

 > 
 > Mais comment ? Je n'ai pas renseigner mes identifiants sur une page frauduleuse pourtant ! Tout est bon ! J'ai vérifié l'URL, le cadenas, le texte est clair, tout fonctionne ! J'ai même essayé de mettre un faux compte pour voir et ça ne marchait pas ! C'est une vraie page Steam que j'ai là !

Ah bon? Dans ce cas, regardons le contenu du site en détail.

## Analyse préliminaire du code source du site

 > 
 > \[!NOTE\]
 > Cette partie n'est pas forcément écrite pour être compris par tout le monde. Les prochaines partie d'analyse se voudront d'autant plus poussés. 

### DevTools

L'ouverture du DevTools de Chrome nous notifie d'entrée de jeu qu'une fonctionne détecte l'utilisation du *Debugger*.
![Pasted image 20240814190606.png](https://github.com/ShiiroSan/SteamScamAnalysis/blob/master/assets/Pasted%20image%2020240814190606.png)
La page s'en trouve du coup, "mise en pause". Aucune interaction n'est possible avec cette dernière tant que le debugger est ouvert. Il s'agit d'une protection assez courante afin d'éviter les analyses "à chaud". Cela n'est néanmoins pas un problème, l'analyse "à froid" étant toujours possible. 

#### Analyse à froid

L'ouverture du DevTools mets en évidence diverses éléments présents intriguant. 
![Pasted image 20240814190941.png](https://github.com/ShiiroSan/SteamScamAnalysis/blob/master/assets/Pasted%20image%2020240814190941.png)

 > 
 > \[!NOTE\]
 > Les éléments de code source seront présent dans le dossier à la racine du repo, dans le dossier source code. Le code source obfusqué sera disponible dans le dossier "obfuscated", une version dés-obfuscaté, déminifé et analysé sera dispo dans le dossier "cleaned". 

Chacun des 3 fichiers JS ne contiennent que du code minifié[^2] et obfusqué[^3]. 
![Pasted image 20240814191636.png](https://github.com/ShiiroSan/SteamScamAnalysis/blob/master/assets/Pasted%20image%2020240814191636.png)
L'analyse du code source de la page principale révèle plusieurs éléments intéressant malgré l'obfuscation de la page. 

````html
<div class="rzelfkahixrmain" style="width: 1018px; height: 840px; display: none;">
        <div class="ifbhinlmmrl">
            <div class="uguohggkw"></div>
            <div class="hvjfhjouqcfgygr">Steam Community <span class="ubgmslrdcsoqafgza">- Mozilla Firefox</span></div>
            <div class="pgmgqqhxpaleivw">
                <img class="ekardfndfoz vtiafoxjspikpx" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAA4CAYAAAB9lO9TAAAABGdBTUEAALGPC/xhBQAAAAJJREFUeAHsGn7SAAAAnElEQVTtwcFtAgEAxECzogw+Sf81cTygDtJEsE7IM5fj8XqTjxtRjChGFCOKEcWIYkQxohhRjChGFCOKEcWIYkQxohhRjChGFCOKEcWIYkQxohhRjChGFFdO5Pfnxn+6H0/OYkRx5UTux5NvNaIYUYwoRhQjihHFiGJEMaIYUYwoRhQjihHFiGJEMaIYUYwoRhQjihHFiGJEMaL4A1ekCbhpiypjAAAAAElFTkSuQmCC">
                <img class="qjatkdwxo vtiafoxjspikpx" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAA4CAYAAAB9lO9TAAAABGdBTUEAALGPC/xhBQAAAAJJREFUeAHsGn7SAAAAnElEQVTtwdFJAwEABcH1kY4EIf1/RE7OlkwTyXLIznx8//z+kbcbUYwoRhQjihHFiGJEMaIYUYwoRhQjihHFiGJEMaIYUYwoRhQjihHFiGJEMaIYUYwoRhQ3LuT+9ckrPY6TqxhR3LiQx3HyX40oRhQjihHFiGJEMaIYUYwoRhQjihHFiGJEMaIYUYwoRhQjihHFiGJEMaIYUYwonk0cCTIYqDxjAAAAAElFTkSuQmCC" style="opacity:0;">
                <img class="vwjxzzpwggs vtiafoxjspikpx" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAA4CAYAAAB9lO9TAAAABGdBTUEAALGPC/xhBQAAAAJJREFUeAHsGn7SAAAArUlEQVTtwcFNQgEABcH15VfBhYT+a8LgAcvQItDND9mZj8+v7x/y70YUI4oRxYhiRDGiGFGMKEYUI4oRxYhiRDGiGFGMKEYUI4qDk7hdL/yl++PJmYwoDk7m/njyitv1whmNKEYUI4oRxYhiRDGiGFGMKEYUI4oRxYhiRDGiODiZ2/XCOxpRHJzE/fHknY0oRhQjihHFiGJEMaIYUYwoRhQjihHFiGJEMaIYUfwC9HwNH/rpr0cAAAAASUVORK5CYII=">
                <img class="bgdoadqpmtby vtiafoxjspikpx" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAA4CAYAAAB9lO9TAAAABGdBTUEAALGPC/xhBQAAAAJJREFUeAHsGn7SAAAAq0lEQVTtwbFNAwEABMFl9Q05s/sP/ESmIygCOL2snfk4P7++yb+TTEgmJBOSCcmEZEIyIZmQTEgmJBOSCcmEZEIyIZmQTEgmDi7icb/xl57niyuRTBxczPN88RuP+40rkkxIJiQTkgnJhGRCMiGZkExIJiQTkgnJhGRCMnFwMY/7jXckmTi4iOf54p1JJiQTkgnJhGRCMiGZkExIJiQTkgnJhGRCMiGZkEz8ANd9DNhfw7dmAAAAAElFTkSuQmCC" style="opacity:0;">
                <img class="slyehsccao vtiafoxjspikpx" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAA4CAYAAAB9lO9TAAAABGdBTUEAALGPC/xhBQAAAAJJREFUeAHsGn7SAAAC+ElEQVTtwcGOFUUUgOGfg2uGZXedqoU8BBvCksRdm2lL5zFIfAGf5vbA7RZvNBp9D2EJyXRVnZmXGFdsSAhgQqUmqe+79/ZduqX76oSuCqGrQuiqELoqhK4KoatC6KoQuiqErgqhq0LoqhC6KoSuCqGrQuiqELoqhK4KoatCaMSjbz1PnzymlMz/VUrm6ZPHPPrW0xqhEeocKWcu4jlmhS9lVriI56Sc8aq0RmjEcrnhVblKO3GeMCt8LrNCnCeu0o46x8v1N1ojNMKHwGFZ8aqknInzhFnhU8wKcZ5IOaPOcdxODMNIa4SG+BA4LCtelZQzcZ4wK3yMWSHOEyln1DmO24lhGGmR0BgfAodlxauScibOE2aFD5kV4jyRckad47idGIaRVgkN8iFwWFa8Kiln4jxhVnjPrBDniZQz6hzH7cQwjLRMaJQPgcOy4lVJORPnCbOCWSHOEyln1DmO24lhGGnd/efPf/6FRj04O+PZs+/45++/SDnz5x+/8/JyIVshqOfF+opxdNwFQuN8CCyXG16Vcm2Ua0Od48X6inF03BXCHXD/m/s8eHDGew/PHnJ7e8tdIjTOrHARz3n95jVBPeoc/755zUU8x6xwVwgNMyvEeeIq7ahzvFhfsVxueFWu0k6cJ8wKd4HQqLTvxHki5Yw6x3E7MQwjPgQOy4pXJeVMnCfMCq0TGpT2nThPpJxR5zhuJ4Zh5D0fAodlxauScibOE2aFlgmNSftOnCfs5hp1juN2YhhGPuRD4LCseFVSzsR5wqzQKqEhad+J84TdXKPOcdxODMPIx/gQOCwrXpWUM3GeMCu0SGhE2nfiPGE316hzHLcTwzDyKT4EDsuKVyXlTJwnzAqtERpx8dM5dnNNUM9xOzEMI5/Lh8BhWVHnSDnz4w/f0xqhESlngnouj78yDCNfyofAcrmhzrGnRGvuvX2Xbum+OqGrQuiqELoqhK4KoatC6KoQuiqErgqhq0LoqhC6KoSuCqGrQuiqELoqhK6K/wDAuTba1sYjEQAAAABJRU5ErkJggg==">
                <img class="fkqgzrb vtiafoxjspikpx" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAAA4CAYAAAB9lO9TAAAABGdBTUEAALGPC/xhBQAAAAJJREFUeAHsGn7SAAADGElEQVTtwUFuHTUcwOFf/+4i7CpPqNNY09dHKxacAwllErJAqphGHKMH6GFQOt2ixywqToJQn4bBRA6MKc0qCzussqlUtUWq5Uj+vltndx5dUX1yQpWFUGUhVFkIVRZClYVQZSFUWQhVFkKVhVBlIVRZCFUWQpWFUGUhVFkIVRZClYVQZXGbQpjwK8kvhMOe+Gri/1BfrNA/D4hp8PpLSiIUIs1niGnQ4wvUwwd8LPXwAXp8gZiGNJ9RGqEQ4eiE5DxyV6M3z1HrFR9KrVfozXPkriY5Tzg6oTRCIeLsCF1Pch4xDXocUOsV76PWK/Q4IKYhOU/oeuLsKI1QkDg7QteTnEdMgx4H1HrFu6j1Cj0OiGlIzhO6njg7SiQUJs6O0PUk5xHToMcBtV7xNrVeoccBMQ3JeULXE2dHqYQCxdkRup7kPGIa9DigWss1tV6hxwExDcl5QtcTZ0fJ1NMd/YwCXb254HLzkp3jA+Te5+wcH3C5eYk0Gj0OiGlIzhO6njg7Sqee7uhnFOrqzQWX4y/sHB8g1rBzfMBnPzxG9nZJf54Tjk6Iv//BTSAULk4z4fAJyXnEGmRvl+Q84fAJcZq5KYSbQASU4lr694KbRiicWrXon35E9nZJf/1D+vs1t796hN6colrLTSEUTLUWvTlFrCE5T/j6O8I3j0l+QaxBjwOqtdwEQqFUa9HjgFhD8guh64mzI24nQteT/IJYgx4HVGspnVAg1Vr0OCDWkPxC6Hri7LgWtxOh60l+QaxBjwOqtZRMKIxqLXocEGtIfiF0PXE78ba4nQhdT/ILYg16HFCtpVRCQVRr0eOAWEPyC6HriduJd4nbidD1JL8g1qDHAdnfo0RCIVRr0eOAWEPyC6HriduJ94nbidD1JL8g1qDHAdnfozRCIfTmFLGGdB4Ihz1xO/Gh4nYifHtCOg+o+/vocaA0QiGkvUc6D4SD74mvJj5W/G1LOOy5Wl6j7u9Tmltndx5dUX1yQpWFUGUhVFkIVRZClYVQZSFUWQhVFkKVhVBlIVRZCFUWQpWFUGUhVFkIVRb/AXhcMysY8zkeAAAAAElFTkSuQmCC" style="opacity: 0;">
            </div>
        </div>
        <div class="ixxzoyasvifilgs">
            <div class="iuvoemjurgprsv">
                <div class="wpegesp">
                    <img class="ysdpdpbdr sskzegkafewabzoffj" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABACAYAAABMQLqaAAAABGdBTUEAALGPC/xhBQAAAAJJREFUeAHsGn7SAAABuUlEQVTtwU1LlGEYhuFzLmaXTmmk5KaCSCs1CKwoW6bjB6Xl7xAX/quMxIEKrSGNoaVZbTRXicEMCBno9o13ETTeECj0jIvrOAo/fx1kWBNhgbBAWCAsENYsyxDWrFBAWCAsEBYIC4QFwgJhgbBAWCAsEBYIC4QFwgJhgbCgyCmw/mmDWu0jW9+2yfVeu8rw8ANuDQ7QCkVabHGpQrW6yt82t7bZ3NpmrDzCWHmE1Iq00Pr6BtXqKrnRkUc8HL5Pbu1DjeWVt7x+s8yVy5fo6+slJdFCK++q5KanHjMxPkqp1E6p1M7kRJnJ8TK56vs1UhMttLv7g9zQ0G2OunvvDrnvOzukJlooyzJybWfaOOpsqUTu8OCQ1IQFRRL7/OUrlcor6o0Gf8zOzfMvs3PzdHd3M/Vkkps3rvO/icSeL7yk3mhwXPV6nYUXi6QgEtvf3+ek9vb2SEFYICwQFggLhAXCAmGBsEBYIBLr6DjHSZ3v7CQFkdizp1N0XejiuHp6LjIzM00KRRIbHOhncKCf00xYICwQFggLhAXCAmGBsEBYICwQFggLhAXCAmGBsGZZhrBmhQLCAmHBbywaXfesrF4oAAAAAElFTkSuQmCC">
                    <img class="deadblbursnf sskzegkafewabzoffj" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABACAYAAABMQLqaAAAABGdBTUEAALGPC/xhBQAAAAJJREFUeAHsGn7SAAABtUlEQVTtwc9L03Ecx/HnXuxmWxoqdqggTLF5yKgQb+n8EU7srxEP/k8x+mFRqKxM7JYlXaangTBtBw92XHwPQfMNgUKfeXg9Hrlm82cb6yAsEBYIC4QFwjq1QVinHAgLhAXCAmGBsEBYICwQFggLhAXCAmGBsEBYICwQFuS5Avb2vrOz+4WDg0Myw8N3mZqcZHz8Pt2Qp8tevVmnVtvmb/X6IfX6IbPlaWbL06SWp4u+7n2jVtsmMzP9lKnJJ2S2d3bZ2Nzi/YcN7ty+xcjIPVISXbS59ZHMUuUZ83MzFIoFCsUCC/NlFubKZGqfPpOa6KKjoyMyExMPOO/R44dkGo0GqYkuarfbZK719HBesVAkc3b2i9SEBXkS29//wfrbdzSPT/hjZXWNf1lZXWNwcIDFxQXGRkf530RiL6ovaR6fcFHN5jHV6mtSEImdnp5yWa1WixSEBcICYYGwQFggLBAWCAuEBSKx3t7rXNaNvj5SEIktL1UY6O/nooZuDrH8vEIKeRIrlcYolca4yoQFwgJhgbBAWCAsEBYIC4QFwgJhgbBAWCAsEBYI69QGYZ1yICwQFvwGBzFb+6yTacYAAAAASUVORK5CYII=" style="opacity: 0;">
                    <img class="ocsnjjaomcdibyelma sskzegkafewabzoffj" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEUAAABACAYAAABMQLqaAAAABGdBTUEAALGPC/xhBQAAAAJJREFUeAHsGn7SAAAFS0lEQVTtwd2PG1cZwOHfec/xnPF47CQN9AYQtFVIJVRApHfkowUalb+rqtS/CJVWtBIEuoRW3DVUXDS5iqiSKmt7Zjxf50WDtNLieD+8u3Z37TyPeTaeKC/8H+GF5wgvPMexRmVZ0rYtIQTaNhBCQFUJIaCq7GeMQUQwxiAiWCuICNZavPeskmOFQghUVUVV1VRVhapyXKpK27YsYsyUKIqIoh5RFCEinCXHCjRNQ5blVFXFKqgqZVlSliWdKIoYDBKcc5yaKo4z1DQteZ5TliXrVFUVVVXhvSdJEpyznJgxOM5A27YURUFRzPgulWVJWZb0+zH9fh9rLSfhOKWqqhiPJ6gq50VRzJjNSobDFO89yxJOIc8LdnfHqCrnjaoyHk/I84JlOU5AVZlOM2azGeddlmW0bUuaDjDGcByOJYUQ2N0d0zQNF8VsNqNpGkajIdZajiIsQVXZ3R3TNA0XTdM0jMcTVJWjCEuYTKY0TcNF1TQN02nGUYRjyvOCsiy56GazGXlecBjhGMqyJMsyNkWWZVRVxUGEI6gq02nGpplMpqgqiwhHKIqCEAKbJoRAURQsIhyibVvyvGBT5XlBCIF5wiHyvEBV2VSqSp7nzBMO0DQts9mMTVcUM9q2ZT/hAFmWsS2m04z9hAVUlbqu2RZ1XaOq7HEsUJYlqsq6PHjwLz7/4p88fPSIzis/+TFv3rjB66//lHVQVcqyJI5jOo4F6rphXT7+0yfs7Nxnv68fPuLrh4+4fesmd27fZB3quiGO+R/HAmVZsg5ffvmAnZ37dG7d/DVv3vgVnX98/gX3/vo3/vyXe/zohz/g1VdfYdXqumaPMKdpGlSVdbj32Q6du+/8lrfu3CJNB6TpgLffus3bd27T+ezv91mHtm1pmoaOMKeua9blm/98Q+eNN37GvF/88ud0Hj9+zLrUdU1HmBNCYF1UlU7ST5g3TFM6RTFjXVSVjjAnBGVbtW2g45jTti2r9NVX/+aTTz/lydNv2fPe+x9wmPfe/4Cr37vKO7/7Dddee41VaduWjjAnhMAq/eGPH/Hk6bcs6+mTp3z44ceskmqgI8wJIbBK08mEk3r27Bmr1LaBjvDCc4Q51grbylqhI8wxRthWxggdYY61lm1lraUjzBExbCsRQ0eYY4ywrYwROsIc5yzbyjlLR5jT6/UwxrBtjDH0ej06whxjDN57to33HmMMHWGBXs+xKqPRkJO6fOkSq9LrOfYIC3jvMcawCu/evcvVl15iWS+//H3e/f1dVsEYg/eePY4FjDH0ej2qquKsXb9+jevXr3Ge9Ho9jDHsEQ6QpgO2RZoO2E84gLWWOI7ZdHEcY61lP+EQSZKwyYwxJEnCPOEQ1gr9fsym6vdjrBXmCUdIkgRjDJvGGEO/32cR4QgiQjoYsGmGwxQRYRHhGOJ+zGCQsCkGgwTvPQcRjilJErz3XHTee5Ik4TDCEobDFOccF5VzjuEw5SjCEowxjEZDrLVcNNZaRqMhxhiOIizJWsuVK5eJ45iLIo5jrly5jLWW43CcgDGG4TDFWkuWZZxng8GAJOmzDMcpJEkfa4XJZIqqcp4YYxgOU7z3LMtxSt57nHMURUFRzDgP+v2YJEkQEU7CcQastaRpShz3yfOcsiz5LnjvSZIE5yyn4ThDzllGoyFN0yfLcqqqYh2iKGIwSHDOcWqqOFbAOcelSyNCCFRVRVXVVFWFqnIWjDFEUUQU9YiiCBHhzBiDY4VEhDiOieOYTlmWtG1LCIG2DYQQUFVCCKgq+xljEBGMMYgI1goignOOKIpYJccaee+5CP4LAbwPFXaWmREAAAAASUVORK5CYII=" style="opacity:0;">
                </div>
                <div class="dfptpxwssjypypbjck" style="background-color: rgb(241, 243, 244);">
                    <span class="tloktjwpgeifelpg cpdvevgzrqweeqb" style="background-color: rgb(241, 243, 244);">steamcommunity.com</span>
                    <span class="tloktjwpgeifelpg yjhnvlhtcjjlumtzttc" style="background-color: rgb(241, 243, 244);">/openid/loginform/?openid.ns=https%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;openid.mode=checkid_setup&amp;openid.return_to=https%3A%2F%2Fhttps://faceit.pixel-panthers.com%2F%3Flogin&amp;openid.realm=https%3A%2F%2Fhttps://faceit.pixel-panthers.com&amp;openid.ns.sreg=https%3A%2F%2Fopenid.net%2Fextensions%2Fsreg%2F1.1&amp;openid.claimed_id=https%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.identity=https%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select</span>
                </div>
                <div class="qkkigqwumwckcofmfr"><input type="text" value="steamcommunity.com/openid/loginform/?openid.ns=https%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;openid.mode=checkid_setup&amp;openid.return_to=https%3A%2F%2Fhttps://faceit.pixel-panthers.com%2F%3Flogin&amp;openid.realm=https%3A%2F%2Fhttps://faceit.pixel-panthers.com&amp;openid.ns.sreg=https%3A%2F%2Fopenid.net%2Fextensions%2Fsreg%2F1.1&amp;openid.claimed_id=https%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.identity=https%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select">
                </div>
            </div>
            <iframe class="cyzsecivp" src=""></iframe>
        </div>
    </div>
````

En excluant les éléments d'encryption, le bout de code permet la création d'une page ayant pour nom "Steam Community - Mozilla Firefox". On peut même voir un champ de type *input* ayant pour value une URL commençant par *steamcommunity.com/\[...\]*. 
![Pasted image 20240814193516.png](https://github.com/ShiiroSan/SteamScamAnalysis/blob/master/assets/Pasted%20image%2020240814193516.png)
On peut donc assez aisément en déduire que la page de "connexion" provenant de Steam est directement créer par le site.
Et il est là, le vecteur d'attaque ! Ce qui, en apparence, ressemblait à une page de connexion réel de Steam, en prenant même l'aspect de type popup n'était qu'une page créer dynamiquement sur le site. Plusieurs éléments permettait de mettre cela en visibilité, même sans se fié au code source de la page. 
Premièrement, il était impossible de modifier la taille du popup ou de déplacer la popup. Elle était fix. Deuxièmement, il était possible d'interagir avec le contenu de la page derrière sans pour autant que le popup disparaisse. 

## Analyse plus poussé du virus

Maintenant que l'on a la certitude qu'il s'agit d'une page de phishing et que l'on sait comment est créer l'interface de récupération des identifiants, essayons de pousser un peu plus la recherche en se concentrant sur l'analyse des fichiers JS afin de comprendre le cœur de l'attaque. 

 > 
 > \[!INFO\]
 > Cette partie ne se veut pas du tout friendly pour des personnes inexpérimentés. 
 > Je ne rentrerais pas forcément dans le détails de chaque bout de code, et il ne s'agit que d'une analyse afin de comprendre le fonctionnement même de l'attaque de phishing afin d'identifier en profondeur quels éléments sont récupérés et surtout comment et vers où. 

Afin de fluidifier la lecture, chaque analyse de fichier aura droit à une page propre. 

* [Analyse de 1304f81.js](Analyse%20de%201304f81.js.md)
* [Analyse de 2607859.js](Analyse%20de%202607859.js.md)
* [Analyse de ghdxhb7.js](Analyse%20de%20ghdxhb7.js.md)

## Résumé du fonctionnement de la page de phishing

![Pasted image 20240826164125.png](https://github.com/ShiiroSan/SteamScamAnalysis/blob/master/assets/Pasted%20image%2020240826164125.png)

* Le site prends l'apparence d'une page de groupe FACEIT et nous demande de nous connecter via une page OAuth Steam. 
* Cette page OAuth est créer par le site en lui même pour faire croire qu'il s'agit d'une vraie page de Steam. 
* Les infos sont ensuite utiliser dynamiquement pour créer un cookie de connexion via un accès sur leur serveur. Cela permet de faire la demande de 2FA de manière dynamique, et donc de rendre cette dernière obsolète. Afin de forcer la validation du cookie, l'attaquant récupère aussi notre User-Agent. 

### Par rapport à la création du popup :

* Le cadenas "HTTPS" n'est qu'une image mise
* Le titre du popup change pour s'adapter en fonction du navigateur utilisé
* Le lien du popup génère une apparence similaire à un véritable popup Steam en intégrant de faux paramètre à l'URL
* Les différents liens sur le popup redirige réellement vers le contenu du site officiel
* Le QR Code retourne une véritable valeur ressemblant à Steam, mais ne permettant pas l'authentification. Une erreur sera retourné lors d'une tentative
* Lorsque l'utilisateur fourni des identifiants, une session est créer en fond pour vérifier et récupérer la double authentification. Cela permets de demander la double authentification et renforcer le réalisme de l'attaque

[^1]: *FACEIT* est un site permettant de participer à des compétitions de jeux vidéos. 
    [^2]: Mettre tout le code sur une seule ligne
    [^3]: Rendre le code illisible pour un humain en remplaçant le nom des variables, le nom des fonctions, etc
