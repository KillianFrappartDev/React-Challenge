# Checkpoint 2 - 4h

---

### EN version (:warning: Scroll down for FR version :warning:)

---

You will have 4 hours to finish this checkpoint. This checkpoint is not an exam, it will allow us to validate your skills, so try to do it as much as possible on your side.
This checkpoint is very consistent, if you can't do everything it doesn't matter, do your best;)

## !!! FIRST STEP REQUIRED BEFORE STARTING THE FIRST EXERCISE!

- Clone this project
- Create a `city_lastname_firstname` branch, which will contain your progress. Replace `city_lastname_firstname` with the city of your campus, your last name and first name.

## Step 1 - Quizz

- To answer the quiz go to [this application](https://wild-quiz-client.herokuapp.com/).
- Answer the questions in the Quiz **Checkpoint 2 - JS - React**.
- Once the quiz is completed, copy the link provided by the application.
- Creates a Quiz.md file at the root of the project
- Stick the link you have just retrieved on it
- `commit` your file

## Step 2 - React

<img src="https://giphygifs.s3.amazonaws.com/media/14hVsVZomE4hj2/giphy.gif" height="150">

In this step, you will create a new React project in which there will be 2 components that will display data from an API.

Think about `commit` regularly with an explicit message. For example: `Create GameList and Game components`.

The API is available on this url [https://apis.wilders.dev/wild-games](https://apis.wilders.dev/wild-games).
You can use either `axios` or `fetch` to recover the data.

If the link to the API becomes inaccessible, here are two mirrors:

- [https://checkpoint2.wild-projects.duckdns.org/](https://checkpoint2.wild-projects.duckdns.org/)
- [https://wild-games.basile.vernouillet.dev/](https://wild-games.basile.vernouillet.dev/)

### Let's start!

- Create a new React project named **list-games** thanks to `create-react-app`.
- Create a `<Header />` component that displays a `Welcome to website` title and makes it display the component.
- Send the name of your website by props to `<Header />` and display the name in the title, instead of `website`.

### List of video games

- Create two components `<GameList />` and `<Game />`.
- `<GameList />` is below `<Header />`: it retrieves the games (with the `/games` route of the API) and displays them in as many `<Game />` components.
- `<Game />` retrieves some information from each game with `props` (`name`, `background_image`, `rating`...) and displays them in the format of your choice.
- `<Game />` contains a `<button>` which allows you to add a game as a favorite. A game thus added will have a ❤️ heart displayed after its name. If a game is already added as a favourite, clicking on the same button will remove its favourite status.

### Filter games by note

- Adds a `Best Games` button to filter games by `rating`.
- When the button is clicked, only games with a rating of 4.5 or higher are displayed.
- The button text is replaced by "All Games" and when clicked, all games are displayed again.

### Game details page

Uses the `react-router' library:

- Create a `<GameDetails />` component, detailing all the information of a game from its identifier (with the `/games/:id` route of the API).
- Add a navigation link in each game in the list, in order to redirect to a page displaying the detailed information of the game (remember to send the game id in the link).
- In the game details page, also displays a navigation link to return to the home page.

### Bonus - Withdrawing a game

- `<Game />` contains a `<button>` which allows you to remove a game from the list _(no need to remove it in the API)_.

## Step 3 - Congratulations!

You can go and have a drink at the brewery, you've amply deserved it!

**N.B.: You mustn't start with this step ;)**

![Good Luck](https://media.giphy.com/media/AC1PtbdsJZyOQ/giphy.gif)

---

### FR version

---

Pour ce travail tu as 4h devant toi. Ce checkpoint n'est pas un examen, il va nous permettre de valider tes compétences, essaye donc de le faire au maximum de ton côté.
Ce checkpoint est très consistant, si tu n'arrives pas à tout faire ce n'est pas grave, fais de ton mieux ;)

## !!! PREMIERE ÉTAPE OBLIGATOIRE AVANT DE COMMENCER LE PREMIER EXERCICE !!!

- Clone ce projet
- Crée une branche `ville_nom_prenom`, qui va contenir ton avancée. Remplace `ville_nom_prenom` par la ville de ton campus, ton nom et ton prénom.

## Étape 1 - Quiz

- Pour répondre au quiz rend toi sur [cette application](https://wild-quiz-client.herokuapp.com/).
- Réponds aux questions du Quiz **Checkpoint 2 - JS - React**
- Une fois le quiz terminé, copie le lien fourni par l'application
- Crée un fichier Quiz.md à la racine du projet
- Colles-y le lien que tu viens de récupérer
- `commit` ton fichier

## Étape 2 - React

<img src="https://giphygifs.s3.amazonaws.com/media/14hVsVZomE4hj2/giphy.gif" height="150">

Dans cette étape, tu vas créer un nouveau projet React dans lequel il y aura 2 composants qui afficheront des données provenant d'une API.

Pense bien à `commit` régulièrement avec un message explicite. Par exemple : `"Create GameList and Game components"`.

L'API est accessible sur cette url [https://apis.wilders.dev/wild-games](https://apis.wilders.dev/wild-games).
Tu peux utiliser au choix `axios` ou `fetch` pour récupérer les données.

Si le lien vers l'API devient inaccessible, voici deux miroirs :

- [https://checkpoint2.wild-projects.duckdns.org/](https://checkpoint2.wild-projects.duckdns.org/)
- [https://wild-games.basile.vernouillet.dev/](https://wild-games.basile.vernouillet.dev/)

### On démarre !

- Crée un nouveau projet React nommé **list-games** grâce à `create-react-app`.
- Crée un composant `<Header />` qui affiche un titre `Welcome to website` et fait en sorte d'afficher le composant.
- Envoie le nom de ton site par les props vers `<Header />` et affiche le nom dans le titre, à la place de `website`.

### Lister les jeux

- Crée deux composants `<GameList />` et `<Game />`.
- `<GameList />` se trouve en dessous de `<Header />` : il récupère les jeux (avec la route `/games` de l'API) et les affiche dans autant de composants `<Game />`.
- `<Game />` récupère quelques informations de chaque jeu avec des `props` (`name`, `background_image`, `rating`…) et les affiche au format de ton choix.
- `<Game />` contient un `<button>` qui permet d'ajouter un jeu en favori. Un jeu ainsi ajouté aura un coeur ❤️ affiché après son nom. Si un jeu est déjà ajouté en favori, le clic sur le même bouton retirera son statut de favori.

### Filter les jeux par note

- Ajoute un bouton `Best Games` pour filter les jeux par `rating`.
- Quand on clique sur le bouton seuls les jeux dont le `rating` est supérieur ou égal à 4.5 sont affichés.
- Le texte du bouton est remplacé par `All Games` et quand on clique dessus, tous les jeux sont affichés à nouveau.

### Page des détails d'un jeu

Utilise la bibliothèque `react-router` :

- Crée un composant `<GameDetails />`, détaillant toutes les informations d'un jeu à partir de son identifiant (avec la route `/games/:id` de l'API).
- Ajoute un lien de navigation dans chaque jeu de la liste, afin de rediriger vers une page affichant les informations détaillées du jeu (pense à envoyer l'identifiant du jeu dans le lien).
- Dans la page des détails du jeu, affiche également un lien de navigation permettant de revenir sur la page d'accueil.

### Bonus - Retrait d'un jeu

- `<Game />` contient un `<button>` qui permet de retirer un jeu de la liste _(pas besoin de le supprimer dans L'API)_.

## Étape 3 - Félicitations !

Tu peux aller te désaltérer à la brasserie, tu l'as amplement mérité !

**N.B. : Tu ne dois pas commencer par cette étape… ;)**

![Good Luck](https://media.giphy.com/media/AC1PtbdsJZyOQ/giphy.gif)
