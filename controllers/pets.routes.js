const router = require("express").Router();
const Pet = require("../models/pet");

// POST /pets

router.post("/", async (req, res) => {
  try {
    const createdPet = await Pet.create(req.body);
    res.status(201).json(createdPet);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

// GET /pets

router.get("/", async (req, res) => {
  try {
    const allPets = await Pet.find();
    res.json(allPets);
  } catch (err) {
    console.log(err);
    res.json(err);
  }
});

// GET /pets/:id
router.get('/:id', async(req,res)=>{
    try{
        const foundPet = await Pet.findById(req.params.id)
        console.log(foundPet)

        if(!foundPet){
            return res.status(404).json({message:"No Pet with this ID exists"})
        }

        res.json(foundPet)



    }
    catch(err){
        console.log(err)
        res.json(err)
    }
})


// PUT /pets/:id

// DELETE /pets/:id

module.exports = router;
