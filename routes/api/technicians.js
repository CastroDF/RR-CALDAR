const express = require('express');
const router = express.Router();
const technicians = require('../../data/technicians-data');
//this are only methods for get an answer
//get all technicians
router.get('/', (req, res) => {
    res.json(technicians);
});

//get single technicians by id
router.get('/:id', (req, res) =>{
    // res.send(req.params.id);
    const found = technicians.some(technical => technical.id === parseInt(req.params.id));
    if(found){
        res.json(technicians.filter(technical => technical.id === parseInt(req.params.id)));//parsea porq devuelve un string 
    } else {
        res.status(400).json({msg: `Member not found ${req.params.id}`});//an answerwhen the response fail
    }
});

// //Create a member
// router.post('/', (req, res) => {
//     const newMember ={
//         id: uuid.v4(),
//         name: req.body.name,
//         email: req.body.email,
//         status: 'active'
//     }

//     if(!newMember.name || !newMember.email) {
//         return res.status(400).json({ msg: 'Please include a name and enail'})
//     }

//     members.push(newMember);
//     res.json(members);
// });
// // update member
// router.put('/:id', (req, res) =>{
//     // res.send(req.params.id);
//     const found = members.some(member => member.id === parseInt(req.params.id));
//     if(found){
//         const updMember = req.body;
//         members.forEach(member =>{
//             if(member.id === parseInt(req.params.id)){
//                 member.name = updMember.name ? updMember.name : member.name;
//                 member.email = updMember.email ? updMember.email : member.mail;
//                 res.json({ msg: 'The members was update', member})
//             }
//         })
//     } else {
//         res.status(400).json({msg: `Member not found ${req.params.id}`});//an answerwhen the response fail
//     }
// });
// //Delete a member
// router.delete('/:id', (req, res) =>{
//     // res.send(req.params.id);
//     const found = members.some(member => member.id === parseInt(req.params.id));
//     if(found){
//         res.json({msg: 'Member deleted', memebers: members.filter(member => member.id !== parseInt(req.params.id))});//parsea porq devuelve un string 
//     } else {
//         res.status(400).json({msg: `Member not found ${req.params.id}`});//an answerwhen the response fail
//     }
// });


module.exports = router;