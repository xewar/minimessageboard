var express = require("express");
var router = express.Router();
const moment = require("moment");

const messages = [
  {
    title: "IV",
    text: `aromas de distantes jardines
    gritos remotos
    notas de una canción
    dicha en otra lengua
    el viento con su sonoora presencia
    hace más vasta la noche`,
    author: "José Manuel Arango",
    added: "Asilo, 1973",
  },

  {
    title: "XIV",
    text: `éste es un país de sol y viento
    de acres montañas 
    
    como en los frescos antiguos
    la piel cuarteada de las mujeres
    
    calladas y duras que paren
    de rodillas sus hijos
    
    por las rocas acechan 
    pumas sin sombra
    
    y al fondo canta
    el mar, nacido de una calabaza`,
    author: "José Manuel Arango",
    added: "Signos, 1978",
  },
  {
    title: "XIV",
    text: `qué solitario
    tu llanto silencioso
    
    de miedo, de alegría
    
    la noche que en tu lecho de niña
    y señalada con un trazo de sangre
    en una adolescente milagrosa
    despertasta transfigurada`,
    author: "José Manuel Arango",
    added: "Signos, 1978",
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});
router.post("/new", function (req, res, next) {
  let { messageText: messageText, author: author } = req.body;
  messages.push({
    text: messageText,
    author: author,
    added: moment(new Date()).format("MMMM Do"),
  });
  res.redirect("/");
});

module.exports = router;
