const router = require("express").Router()
const { Recipe } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const allRecipes = await Recipe.findAll()
        res.status(200).json(allRecipes)
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
});

router.post('/', async (req, res) => {
    try {
        const addRecipe = await Recipe.create(req.body)
       res.status(200).json(addRecipe) 
    } catch (err) {
        console.error(err)
        res.status(500).json(err)
    }
})
    


module.exports = router