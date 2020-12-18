let workflow = require('../models/workFlow')
let userController = require('./userController');

function addLevel(req, res){
    try{
        levelObj = req.body;
        
        let preLevel = workflow.find().sort({level:-1}).limit(1);
        
        console.log(id);
        for(let x = 0; x < levelObj.users.length; x++) {
            let id = userController.getUserId(levelObj.users[x]);
            let pri = 0;
            if(levelObj.approval == 'sequence') {
                pri = x;
            }
            let currObj = {user_name: levelObj.users[x],
                        level: preLevel + 1,
                        status: "pending",
                        Approval: levelObj.approval,
                        user_id: id,
                        Priority: pri};
                        workflow.insertOne(currObj,(err,users)=>{
                            if(err){
                                console.log('Error creating user');
                                return;
                            }
                        })
        }
        res.status(200).json({
            status:"addded succesfully"
        })
    }    
    catch(err) {
        res.status(400).json({
            status: "error occured",
            "error": err
        })
    }
}

module.exports.addLevel = addLevel;