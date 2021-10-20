## Projet tiré de la formation : Udemy - React 16+ Le Guide Complet (+Redux, React Router & Firebase) par _Anthony Welc_

Petit chat pour mettre en oeuvre l'utilisation de router avec react-router-dom, d'utiliser un service de base de données (firebase Realtime Database) via firebase et re-base, mettre en place de l'affichage conditionnel, gérer le cycle de vie d'un composant, utiliser des refs du DOM et mettre en place des transitions avec react-transition-group.

Modifications par rapport au projet de base :
- Utilisation de la derniière version de firebase (9.1.3) et remplacement de re-base incompatible avec les dernières version de firebase. /src/utils/DB/messagesDB.js permet de gérer les appels à l'api de firebase pour faciliter les requêtes à la base de données. Il y a l'initialisation de la base aisni qu'une fonction permettant de mettre en place un eventListener sur la base pour la charger et recevoir les mises à jour et une fonction permettant d'insérer un nouvel objet message.
- Refactoring pour utiliser des composants fonctions
- Utilisation de hooks
- Redécoupage de l'application pour ne pas tout avoir dans un seul et même dossier

-> dans le dossier config, il y a un fichier readme expliquant le fichier de configuration à ajouter