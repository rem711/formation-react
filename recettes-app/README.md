## Projet tiré de la formation : Udemy - React 16+ Le Guide Complet (+Redux, React Router & Firebase) par _Anthony Welc_

Application de gestion de recettes de cuisine, où chaque utilisateur possède son livre de recette consultable par tous mais éditable uniquement par lui même. L'application utilise Firebase Realtime Database et Firebase Authentification couplé avec Facebook pour gérer l'authentification OAuth. Elle permet également de montrer la gestion d'un formulaire directement à partir du state afin de simplifier le traitement et en gagner en modularité.

Modifications par rapport au projet de base :
- Utilisation de la derniière version de firebase (9.1.3) et remplacement de re-base incompatible avec les dernières version de firebase. /src/utils/DataBase/index.js contient les fonctions permettant dd'interagir avec firebase que ça soit pour récupérer une seule fois les données demandées, insérer des données mais également mettre en place un listener sur les données pour les mettre automatiquement à jour lorsqu'il y a des modifications.
- Mise en place d'un contexte pour gérer le thème
- Refactoring pour utiliser des composants fonctions (les composants class sont toujours présents mais commentés pour vérifier la cohérence du changement de code)
- Utilisation de hooks (useState, useEffect, useContext)
- Redécoupage de l'application pour ne pas tout avoir dans un seul et même dossier
- Ajout d'un script de lancement dans la package.json (start-https) afin de pouvoir lancer le server local en https et pouvoir utiliser la connexion Facebook en local

-> dans le dossier config, il y a un fichier readme expliquant le fichier de configuration à ajouter