const config= require('config');
const Joi= require('joi');
const { request } = require('express');
const express = require('express');
const app= express();

//configuration
console.log('Application Name: '+ config.get('name'));
console.log('Mail- server: '+ config.get('mail.host'));

app.use(express.json());
const courses= [
    {"id" : 1, "name": 'course3'},
];

//app.get()
app.get('/', (req, res)=> {
    res.send('hello world');
});

app.get('/api/courses', (req, res)=>{
   res.send(courses);
});

app.get('/api/courses/:id', (req, res)=> {
 const course=  courses.find(c => c.id === parseInt(req.param.id));
 if(!course){
     return res.status(404).send('courrse with the id not found');
 }
 res.send(course);
});

app.post('/api/courses', (req, res)=> {
    const result= validateCourse(req.body);
    if(result.error){
        res.status(404).send(result.error.details[0].message);
        return;
    }
    const course= {
        id: courses.length +1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});


app.put('/api/courses/:id', (req, res)=> {

    //Look up the course
    //If not existing , rerurn 404
    const course=  courses.find(c => c.id === parseInt(req.param.id));
    if(!course){
        res.status(404).send('courrse with the id not found');
        return;
    }
    else   res.send(course);

    //Validate
    //If invalid, return 404- Bad request
    const result= validateCourse(req.body);
    if(result.error){
        res.status(404).send(result.error.details[0].message);
        return;
    }
    //update course
    course.name= req.body.name;
    //Return the updates course
    res.send(course);
});

app.delete('/api/courses/:id', (req, res)=> {
    //look up  for the course
    //if doesnot exist , return 404
    const course=  courses.find(c => c.id === parseInt(req.param.id));
    if(!course){
        res.status(404).send('courrse with the id not found');
        return;
    }
    else   res.send(course);
    
    //Delete
    const index= courses.index(course);
    courses.splice(index, 1);
    //Return the same course
    
});

function validateCourse(course){
    const schema= {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(course, schema);
}
//PORT: ENV VARIABLE
const port= process.env.PORT || 3000;
app.listen(port, ()=> console.log(`listening to prot ${port}`));


app.get('/api/courses/:id', (req,res) => {
    res.send(req.param.id);
});
