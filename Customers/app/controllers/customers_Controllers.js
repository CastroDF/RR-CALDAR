const db = require("../models"); //../../data_customers/data_customers.json
const Customers = db.Customers;

exports.create = (req, res)  => {
    if(!req.body.id_customer || !req.body.type || !req.body.email || !req.body.city){
        return res.status(400).send({
            message: "Please, data entry cannot be empty."
        });
    }
    const newCustomer = new Customers({
        id_customer: req.body.id_customer,
        type: req.body.type,
        email: req.body.email,
        city: req.body.city
    });
    newCustomer
        .save(newCustomer)
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while creating a New Customer"
            });
        });
};

exports.findAll = (req, res) => {
    Customers.find({})
        .then(data =>{
            res.send(data);
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while retrieving a Customer."
            });
        });
};

exports.findOne = (req, res) =>{
    Customers.findOne({id: req.params.id_customer})
        .then(data =>{
            if(!data){
                return res.status(404).send({
                    message: `Customer with id ${req.params.id_customer} was not found`
                })
            }
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while retrieving a Customer."
            });
        });
};

exports.findOne = (req, res) =>{
    Customers.findOne({id_customer: req.params.value})
        .then(data =>{
            if(!data){
                return res.status(404).send({
                    message: `Customer with id ${req.params.value} was not found`
                })
            }
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while retrieving a Customer."
            });
        });
};

exports.update = (req, res) => {
    if(!req.body){
        return res.status(400).send({
            message: "Update entry cannot be empty"
        });
    }

    const id = req.params.id_customer;

    Customers.findOneAndUpdate({id}, req.body, {useFindAndModify: false})
        .then(data =>{
            if(!data){
                res.status(404).send({
                    message: "Cannot update Customer with id = ${id}. Customer not found!"
                });
            }else{
                res.send({
                    message: `Customer updated successfully`
                });
            }
        })
}

exports.delete = (req, res) =>{
    const id = req.params.id_customer;
    Customers.findOneAndRemove({id}, { useFindAndModify: false })
        .then(data =>
            res.send({ message: "Customer removed successfully"})
        )
        .catch(err =>{
            res.status(500).send({
                message: "Error removing Customer with id = "+  id
            });
        });
};