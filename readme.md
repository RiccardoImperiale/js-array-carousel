# Instructions:
Given an array containing a list of five images, create a carousel as in the attached screenshot.

## MILESTONE 1
First, let's create the static markup: we build the container and insert a large image in the center: this way we will have the basic structure and styles ready to then be able to focus only on the logical aspect.

## MILESTONE 2
Now let's remove all the static markup and insert all the images dynamically using the provided array and a simple for loop that concatenates a template literal. All images will be hidden, except the first, which will have a specific class that will make it visible. At the end of this phase we will find ourselves with the same slider drawn up in milestone 1, but built dynamically through JavaScript.

## MILESTONE 3
When the user clicks on the arrows, the program will change the active image, which will then be displayed in place of the previous one.


### BONUS 1:
Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

### BONUS 2:
Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
