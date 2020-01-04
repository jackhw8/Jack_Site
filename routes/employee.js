/*
    CRUD implementation
*/

// Bring in express
const express = require('express')
// Create our employee router
const employeeRouter = express.Router();
// Bring in Employee module that we created inside model folder
const Employee = require('../model/Employee');


/* Routing : URI(또는 경로) 및 특정한 HTTP 요청 메소드(GET,POST)인 특정 엔드포인트에 대한 클라이언트 요청에 애플리케이션이
             응답하는 방법을 결정하는 것
*/

// 1. read : Return all the employees within our employee collection
// GET 메소드로 '/' 을 받았을 때 다음을 실행
// req : 요청한 정보, 클라이언트에게 받은 정보가 들어감
// res : 반응해줄 정보, 클라이언트에게 보내줄 정보가 들어감
employeeRouter.get('/', (req, res) => {
    // find {} 뜻은 못찾았다는 뜻, 그러므로 err 메세지를 리턴
    Employee.find({}, (err, response)=>{
        if(err) {
            // status 500 : internal error
            res.status(500).json({message: {
                msgBody : "Unable to get employees",
                msgError : true
            }});
        }
        else {
            // status 200 : ok
            res.status(200).json({response});
        }
    });
});

// 2. create : receive the data from client side, be in the reuqest body
employeeRouter.post('/', (req, res) => {
    // whenever we have a new instance of the model(new Employee(req.body)), this will create document(const employee) for us
    const employee = new Employee(req.body);
    // with this doc, save it to db
    employee.save((err, document) => {
        if(err) {
            res.status(500).json({message: {
                msgBody : "Unable to add employee",
                msgError : true
            }});
        }
        else {
            res.status(200).json({message:{
                msgBody: "Successfully Added Employee",
                msgError : false
            }});
        }       
    });
});

// 3. delete
// id is primary key of the document of the employee that we want to delete
employeeRouter.delete('/:id', (req, res) => {
    Employee.findByIdAndDelete(req.params.id, err => {
        if(err) {
            res.status(500).json({message: {
                msgBody : "Unable to Delete Employee",
                msgError : true
            }});
        }
        else {
            res.status(200).json({message:{
                msgBody: "Successfully Deleted Employee",
                msgError : false
            }});
        } 
    });
});

// 4. update
employeeRouter.put('/:id', (req, res) => {
    // 1st arg is query
    // 2nd arg is document that we want to update with(the new employee) which is in request body
    // 3rd arg is option, by default Mongoose runsValidators for all request accept update
    Employee.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true}, (err, response) => {
        if(err) {
            res.status(500).json({message: {
                msgBody : "Unable to Update Employee",
                msgError : true
            }});
        }
        else {
            res.status(200).json({message:{
                msgBody: "Successfully Updated Employee",
                msgError : false
            }});
        } 
    });
});


// Last thing to do : Export our employee router so our index.js can use it
module.exports = employeeRouter;