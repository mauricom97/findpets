const models = require('../../models');



module.exports = async (req, res) => {
try {
    const newPet = await models.Pet.create({
        doc: req.body.doc,
        race: req.body.race,
        description: req.body.description,
        gender: req.body.gender,
        photo: req.body.photo
    });
    return res.send(newPet)
} catch (error) {
    console.log(error)
}
};