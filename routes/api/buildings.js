const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const buildings= require('../../MOCK_DATA.json');
//Get All Buildings
router.get('/',(req,res)=>{
    res.json(buildings);
});

//Get Building by Id.
router.get('/:id', (req, res)=>{
    const found=buildings.some(buildings=>buildings.id===parseInt(req.params.id));
    if(found){
        res.json(buildings.filter(buildings=>buildings.id===parseInt(req.params.id)));
    }else{
        res.status(400).json({msg:`Building ID '${req.params.id}', not found.`});
    }
});
//GetBuildingsByAttribute
router.get('/address/:address', (req, res)=>{
    const found=buildings.some(buildings=>buildings.address===(req.params.address));
    if(found){
        res.json(buildings.filter(buildings=>buildings.address===req.params.address))
    }else{
        res.status(400).json({msg:`Address ${req.params.address}, not found.`})
    }
});
router.get('/boilers/:boilersId',(req, res)=>{
    const found = buildings.some(buildings=>buildings.boilersId===parseInt(req.params.boilersId));
    if(found){
        res.json(buildings.filter(buildings=>buildings.boilersId===parseInt(req.params.boilersId)));
    }else{
        res.status(400).json({msg:`Boilers ID ${req.params.boilersId}, not found.`});
    }
});
router.get('/name/:fullName',(req, res)=>{
    const found = buildings.some(buildings=>buildings.fullName===req.params.fullName);
    if(found){
        res.json(buildings.filter(buildings=>buildings.fullName===req.params.fullName));
    }else{
        res.status(400).json({msg:`Full Name ${req.params.fullName}, not found.`});
    };
});
router.get('/phone/:phone',(req, res)=>{
    const found = buildings.some(buildings=>buildings.phone===req.params.phone);
    if(found){
        res.json(buildings.filter(buildings=>buildings.phone===req.params.phone));
    }else{
        res.status(400).json({msg:`Phone ${req.params.phone}, not found.`});
    }
});

//Delete Building
router.delete('/:id', (req, res)=>{
    const found = buildings.some(buildings=>buildings.id===parseInt(req.params.id));
    if(found){
        res.json({
            msg:'Building Deleted',
            buildings: buildings.filter(buildings=>buildings.id!==parseInt(req.params.id))
        })
    }else{
        res.status(400).json({msg:`No building with the ID of ${req.params.id}`})
    }
})
//Create Building
router.post('/', (req, res)=>{
    const newMember = {
        id:uuid.v4(),
        address:req.body.address
    };
    if(!newMember.id||!newMember.address){
        return res.status(400).json({msg: "please include a name and email"});
    };
    buildings.push(newMember);
    res.json(buildings);


});
module.exports=router;