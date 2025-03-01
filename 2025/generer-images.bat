@echo off
echo ===================================================
echo Generateur d'images pour la Chasse au Tresor
echo ===================================================
echo.
echo Ce script va installer les dependances necessaires
echo et generer toutes les images manquantes.
echo.
echo Prerequis: Node.js doit etre installe sur votre ordinateur.
echo Si ce n'est pas le cas, telechargez-le depuis https://nodejs.org/
echo.
pause

echo.
echo Installation de la bibliotheque Canvas...
call npm install canvas

echo.
echo Generation des images en cours...
node generate-images.js

echo.
echo ===================================================
echo Toutes les images ont ete generees avec succes!
echo ===================================================
echo.
echo Les images ont ete placees dans les dossiers suivants:
echo - images/games/ (images des jeux)
echo - images/qr-codes/ (images QR des jeux)
echo - images/ (image QR exemple)
echo - images/archives/ (images d'archives)
echo.
pause
