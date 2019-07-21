const db =  require('../models');


exports.newEmployee = async (req, res, next) => {


    try { 
        const employee = await db.Employee.create(req.body);
        console.log(employee);
        const {
            id,
            code,
            name
        } = employee;


        // const token = jwt.sign({
        //     id,
        //     email
        // }, process.env.SECRET);


        res.status(201).json({
            id,
            code,
            name 
        });
    } catch (err) {
        if (err.code === 11000) {
            err.message = 'Sorry, something went wrong';
        }
        next(err);
    }


};

exports.showEmployees =  async(req, res, next) => {
    try { 
    console.log("ff");
    const allEmployees = await db.Employee.find().sort({created : -1}); 

    const employees = await db.Employee.find().select({
        "name": 1,
        "department": 1,
        "code" : 1, 
        "delete" : 1,
        "created" : 1
    }).sort({
        created: -1
    });

        res.status(200).json(employees);
    } catch (err) {
        err.status = 400;
        next(err);
    }
}


exports.showEmployee =  async(req, res, next) => {
    try {
        const Employee = await db.Employee.find({_id:req.params.id}).select({
           "name": 1,
           "department": 1,
           "code" : 1, 
           "delete" : 1,
           "created" : 1
        });
        
      
        // const token = jwt.sign({id, name,  duration, details, created}, process.env.SECRET);


        res.status(201).json(Employee);
    } catch (err) { 
        err.message = 'Invalid employee id';
        next(err);
    }
 
}


exports.updateEmployee = async (req, res, next) => {

    try {
        console.log(req.body);
        const data = req.body.data;

        const Employee = await db.Employee.update({
            _id: req.body.id
        },{
            name : data.name,
            department: data.department,
            code: data.code
        } );


        // const token = jwt.sign({id, name,  duration, details, created}, process.env.SECRET);

console.log(Employee);   


const newEmployee = await db.Employee.find({_id:req.body.id}).select({
       "name": 1,
        "department": 1,
        "code" : 1, 
        "delete" : 1,
    "created" : 1 
});


res.status(201).json(newEmployee);


    } catch (err) {
        err.message = 'Invalid input, email or mobile number is already used.';
        next(err);
    }

}


exports.deleteEmployee = async (req, res, next) => {

    try {
        console.log(req.body); 

        const newEmployee = await db.Employee.findOne({_id:req.body.id}).remove()  ;
 

        console.log(newEmployee); 
        res.status(201).json(newEmployee);
    } catch (err) {
        err.message = 'Invalid employee id';
        next(err);
    }

} 