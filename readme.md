# WIK-DPS-TP01

## Lancement de projet

Pour lancer le projet, il est tout d'abord requis d'avoir Node.js d'installé sur votre ordinateur.

Voici maintenant la procédure à suivre : 

1. Depuis le root du projet executez la commande 
    `npm install --save-dev typescript`
    
    ##### Output
    ```
    added 1 package, and audited 2 packages in 1s

    found 0 vulnerabilities 
    ```

2.  Compiler le projet avec
    `npm tsc`

3. Run le project avec node en utilisant
    `node dist/app.js`
    
    ##### Output
    ```
    Express is listening at http://localhost:6969
    ```