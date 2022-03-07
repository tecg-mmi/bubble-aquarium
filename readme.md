# Un aquarium de bulles

> A JS exercise use at HEPL for MMI.

* * *

**bubble-aquarium** is an educational project, which will be used for `JS` courses.

**Note:** the school where the course is given, the [HEPL](https://hepl.be) from Liège, Belgium, is a French-speaking school. From this point, the instruction will be in French. Sorry.

* * *

## Énoncé


Une version du projet se trouve [ici](https://hepl-mmi.github.io/bubble-aquarium)

1. Dessinez un canvas qui occupe 60% de la hauteur et 80% de la largeur de la fenêtre. Ce pourcentage  est paramétrable à partir du fichier `settings.ts`. La taille doit être mise à jour dès lors qu'on redimensionne la fenêtre. 
2. Commencez par remplir le canvas avec un dégradé. Ce dernier s'étend de la couleur `hsl(165, 19%, 40%)` à `hsl(133, 18%, 59%)`. Ce dégradé doit être mis à jour dès lors qu'on redimensionne la fenêtre. ![1](img/1.gif)
3. Générez un certain nombre de cercles. Chaque cercle a un rayon, une opacité, une position et une couleur aléatoire. Une couleur permis `[hsl(201, 20%, 23%),hsl(186, 21%, 26%),hsl(165, 19%, 40%),hsl(133, 18%, 59%),hsl(97, 13%, 80%)]`. Les couleurs sont définies dans le fichier `settings.ts`.
4. Un cercle commence sa vie à une position qui se trouve en dessous du canvas et il remonte vers le haut. L'effet de remontée est provoqué par une vitesse en `y` plus importante. Notez que les grandes bulles remontent plus vite que les petites bulles. La vitesse est proportionnelle au rayon. Le rayon d'un cercle étant généré aléatoirement entre une valeur minimale et maximale.
5. Quand le cercle sort du canvas, il recommence une nouvelle vie. Notez qu'il change de couleurs, de rayon, d'opacité, etc.![2](img/2.gif)
6. Le nombre de bulles est calculé dynamiquement à partir de la largeur réelle du canvas. Il doit être mis à jour. Ainsi le nombre de bulles augmente ou diminue quand on redimensionne la fenêtre. (Voir le point suivant.)
7. Les bulles ne sont pas générées d'un coup au chargement, elles sont générées dans la boucle d’animation. Autrement dit, chaque fois que le canvas est mis à jour, on vérifie le nombre de bulles réel avec le nombre de bulles attendu.![3](img/3.gif)
8. Dessinez un cercle qui représente la souris. Sa couleur, son rayon, et son opacité sont définis dans le fichier de configuration. La position du cercle doit se mettre à jour quand on déplace la souris, dans le canvas.![4](img/4.gif)
9. Chaque cercle, avant de se dessiner, vérifie s'il entre en [collision](https://developer.mozilla.org/fr/docs/Games/Techniques/2D_collision_detection#collision_de_cercles) avec le curseur. Si c'est le cas, alors il change son opacité à 0 jusqu'à sortir du canvas. Puisqu'une fois qu'il sort, ses paramètres sont regénérés.![5](img/5.gif)


