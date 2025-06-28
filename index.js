import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const API_URL = "www.thecocktaildb.com/api/json/v1/1/";

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs", {cocktailName: null});
});

app.post("/searchcocktail", async (req, res) => {
  const cocktailName = req.body.name;
  try {
    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${cocktailName}`);
    const randomIndex = Math.floor(Math.random() * result.data.drinks.length);
    result.data = result.data.drinks[randomIndex];
    res.render("index.ejs", { cocktailId: JSON.stringify(result.data.idDrink),
      cocktailName: JSON.stringify(result.data.strDrink),
      cocktailCategory: JSON.stringify(result.data.strCategory),
      cocktailAlcoholic: JSON.stringify(result.data.strAlcoholic),
      cocktailInstructions: JSON.stringify(result.data.strInstructions),
      source: result.data.strDrinkThumb,
      error: null });
  } catch (error) {
    res.render("index.ejs", { cocktailName: null, error: "Cocktail not found." });
  }
});

app.post("/listalcoholic", async (req, res) => {
  const alcoholic = req.body.alcoholic;
  try {
    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${alcoholic}`);
    const randomIndex = Math.floor(Math.random() * result.data.drinks.length);
    result.data = result.data.drinks[randomIndex];
    res.render("index.ejs", { cocktailId: JSON.stringify(result.data.idDrink),
      cocktailName: JSON.stringify(result.data.strDrink),
      cocktailCategory: JSON.stringify(result.data.strCategory),
      cocktailAlcoholic: JSON.stringify(result.data.strAlcoholic),
      cocktailInstructions: JSON.stringify(result.data.strInstructions),
      source: result.data.strDrinkThumb,
      error: null });
  } catch (error) {
    res.render("index.ejs", { cocktailName: null, error: "Cocktail not found." });
  }
});

app.post("/category", async (req, res) => {
  const category = req.body.category;
  try {
    const result = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
    const randomIndex = Math.floor(Math.random() * result.data.drinks.length);
    result.data = result.data.drinks[randomIndex];
    res.render("index.ejs", { cocktailId: JSON.stringify(result.data.idDrink),
      cocktailName: JSON.stringify(result.data.strDrink),
      cocktailCategory: JSON.stringify(result.data.strCategory),
      cocktailAlcoholic: JSON.stringify(result.data.strAlcoholic),
      cocktailInstructions: JSON.stringify(result.data.strInstructions),
      source: result.data.strDrinkThumb,
      error: null });
  } catch (error) {
    res.render("index.ejs", { cocktailName: null, error: "Cocktail not found." });
  }
});

app.post("/random", async (req, res) => {
  try {
    const result = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
    const randomIndex = Math.floor(Math.random() * result.data.drinks.length);
    result.data = result.data.drinks[randomIndex];
    res.render("index.ejs", { cocktailId: JSON.stringify(result.data.idDrink),
      cocktailName: JSON.stringify(result.data.strDrink),
      cocktailCategory: JSON.stringify(result.data.strCategory),
      cocktailAlcoholic: JSON.stringify(result.data.strAlcoholic),
      cocktailInstructions: JSON.stringify(result.data.strInstructions),
      source: result.data.strDrinkThumb,
      error: null });
  } catch (error) {
    res.render("index.ejs", { cocktailName: null, error: "Cocktail not found." });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
