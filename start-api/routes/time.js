const router = require("express").Router();
const Time = require("../models/UserMoveMap");
const verify = require("../verifyToken");

router.get("/", verify, async (req ,res) =>{
  const {movieID} = req.query
  const {id} = req.user
  try {

    // find user move map
    const userMove = await Time.findOne({
        $and: [{UserId: id}, {MovieId:movieID }]
    })
      return res.status(200).json(userMove || null)
  } catch (err) {
    return res.status(403).send(err.toString());

  }
});

router.post("/save", verify, async (req ,res) =>{
    const { movieID, time } = req.body;
    const { id } = req.user;
    if (!movieID) return res.status(400).send('Movie ID is required')
    try{
        console.log('req.user')
        console.log(id)
        // find user move map
        const userMove = await Time.findOne({
            $and: [{UserId: id}, {MovieId:movieID }]
        })
        // check if this movie exist or not
        if (userMove) {
            // update time
            userMove.time =  time || 0;
            // save
            await userMove.save()
            return res.status(201).json(userMove);
        } else {
            // create
            const newUserMove = new Time({
                UserId: id,
                MovieId: movieID,
                time:  time
            })
            await newUserMove.save();
            return res.status(201).json(newUserMove);
        }
        // create or update schema
        // save
        // savedTime = await newTime.save();
      return res.status(201).json(userMove);
    }catch(err){
        return res.status(403).send(err.toString());
    }
});




module.exports = router;