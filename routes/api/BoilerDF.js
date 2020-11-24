const express = require('express');
const uuid = require('uuid');
const router = express.Router();
const boilersDF = require('../../BoilerDF_DATA.json');

//Get All boilers
router.get('/',(req,res)=>{
    res.json(boilersDF);
})

//Get BoilersByID
router.get('/:id', (req, res)=>{
    const found=boilersDF.some(boilersDF=>boilersDF.id===parseInt(req.params.id));
    if(found){
        res.json(boilersDF.filter(boilersDF=>boilersDF.id===parseInt(req.params.id)));
    }else{
        res.status(400).json({msg:`Boiler ID '${req.params.id}', not found.`});
    }
});
//GetBuildingsByAttribute
router.get('/typeId/:typeId', (req, res)=>{
    const found=boilersDF.some(boilersDF=>boilersDF.typeId===(req.params.typeId));
    if(found){
        res.json(boilersDF.filter(boilersDF=>boilersDF.typeId===req.params.typeId))
    }else{
        res.status(400).json({msg:`TYPE ID ${req.params.typeId}, not found.`})
    }
});
router.get('/maintainceRate/:maintaince_rate',(req, res)=>{
    const found = boilersDF.some(boilersDF=>boilersDF.maintaince_rate===req.params.maintaince_rate);
    if(found){
        res.json(boilersDF.filter(boilersDF=>boilersDF.maintaince_rate===req.params.maintaince_rate));
    }else{
        res.status(400).json({msg:`Maintance Rate ${req.params.maintaince_rate}, not found.`});
    }
});
router.get('/hourMCost/:hour_maintenaince_cost',(req, res)=>{
    const found = boilersDF.some(boilersDF=>boilersDF.hour_maintenaince_cost===req.params.hour_maintenaince_cost);
    if(found){
        res.json(boilersDF.filter(boilersDF=>boilersDF.hour_maintenaince_cost===req.params.hour_maintenaince_cost));
    }else{
        res.status(400).json({msg:`Maintenance Hour Cost ${req.params.hour_maintenaince_cost}, not found.`});
    };
});
router.get('/hourECost/:hour_eventual_cost',(req, res)=>{
    const found = boilersDF.some(boilersDF=>boilersDF.hour_eventual_cost===req.params.hour_eventual_cost);
    if(found){
        res.json(boilersDF.filter(boilersDF=>boilersDF.hour_eventual_cost===req.params.hour_eventual_cost));
    }else{
        res.status(400).json({msg:`Eventual Hour Cost ${req.params.hour_eventual_cost}, not found.`});
    }
});
//Delete Boiler
router.delete('/:id', (req, res)=>{
    const found = boilersDF.some(boilersDF=>boilersDF.id===parseInt(req.params.id));
    if(found){
        res.json({
            msg:'Boiler Deleted',
            boilersDF: boilersDF.filter(boilersDF=>boilersDF.id!==parseInt(req.params.id))
        })
    }else{
        res.status(400).json({msg:`No Boiler with the ID of ${req.params.id}`})
    }
})

module.exports=router;