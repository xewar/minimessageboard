var express = require("express");
var router = express.Router();
const moment = require("moment");

const messages = [
  {
    title: "IV",
    text: `
aromas de distantes jardines
gritos remotos
notas de una canción
dicha en otra lengua
el viento con su sonora presencia
hace más vasta la noche`,
    author: "José Manuel Arango, Asilo, 1973",
  },

  {
    title: "XIV",
    text: `
éste es un país de sol y viento
de acres montañas 

como en los frescos antiguos
la piel cuarteada de las mujeres

calladas y duras que paren
de rodillas sus hijos

por las rocas acechan 
pumas sin sombra

y al fondo canta
el mar, nacido de una calabaza`,
    author: "José Manuel Arango, Signos, 1978",
  },
  {
    title: "XIV",
    text: `
qué solitario
tu llanto silencioso

de miedo, de alegría

la noche que en tu lecho de niña
y señalada con un trazo de sangre
en una adolescente milagrosa
despertaste transfigurada`,
    author: "José Manuel Arango, Signos, 1978",
  },
  {
    title: "Flowers",
    text: `
Some men never think of it.
You did. You’d come along
And say you’d nearly brought me flowers
But something had gone wrong.

The shop was closed. Or you had doubts –
The sort that minds like ours
Dream up incessantly. You thought
I might not want your flowers.

It made me smile and hug you then.
Now I can only smile.
But, look, the flowers you nearly brought
Have lasted all this while.`,
    author: "Wendy Cope, Serious Concerns, 1992",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "shared poems", messages: messages });
});
router.post("/new", function (req, res, next) {
  let { messageText: messageText, author: author, title: title } = req.body;
  messages.push({
    title: title,
    text: messageText,
    author: author,
  });
  res.redirect("/");
});

module.exports = router;
