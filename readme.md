# Instructions:
Given an array containing a list of five images, create a carousel as in the attached screenshot.

## MILESTONE 1
First, let's create the static markup: we build the container and insert a large image in the center: this way we will have the basic structure and styles ready to then be able to focus only on the logical aspect.

## MILESTONE 2
Now let's remove all the static markup and insert all the images dynamically using the provided array and a simple for loop that concatenates a template literal. All images will be hidden, except the first, which will have a specific class that will make it visible. At the end of this phase we will find ourselves with the same slider drawn up in milestone 1, but built dynamically through JavaScript.

## MILESTONE 3
When the user clicks on the arrows, the program will change the active image, which will then be displayed in place of the previous one.


### BONUS 1:
Add the infinite carousel loop. That is, if the first image is active and the user clicks the arrow to go to the previous image, the last image in the array must appear and vice versa.

### BONUS 2:
Display all the thumbnails to the right of the active large image, as in the proposed screenshot. All thumbnails will have a dark opacity layer, except the one corresponding to the active image, which will instead have a colored border. By clicking the arrows, in addition to changing the active image, you can manage the change of the active thumbnail.
