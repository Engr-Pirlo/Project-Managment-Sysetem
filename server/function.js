const express =require('express');
const mysql =require('mysql');
const cors =require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const db =mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'projectmanegment'
})


//  users  


// insert users
app.post('/bages/dashboard/ProjectManegment/Accoung/CreateUser',(req,res)=> {
  
    const sql ="INSERT INTO `user`( `firstName`, `userName`, `gmail`, `Role`, `password`) VALUES (?,?,?,?,?)";
  

    db.query(sql,
       [
        req.body.first,
        req.body.user,
        req.body.email,
        req.body.Role,
        req.body.password
       ]
         ,(err , data) =>{
        if(err){
            res.status(422).json('Error is lost');
        }else{
            res.status(201).json({Data:data});
        }
      

    })
})


//  select tabless


app.get('/bages/dashboard/ProjectManegment/Accoung/listUser',(req,res)=>{
    const sql = "SELECT * FROM `user`";
    db.query(sql, (err, data) => {

        if(err) return res.json("Error");
        return res.json(data);

    });
    
})


//   select edits users


app.get('/bages/dashboard/ProjectManegment/Accoung/editUser/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM user where id = ?";
    db.query(sql, [ id ] , (err, data) => {
   
        if(err) return res.json({Error: "gest user eror in sql"})
          return res.json({Status: "Success" , Data: data})
    })
})


//     edit users   \\\



app.put('/bages/dashboard/ProjectManegment/Accoung/editUser/:id',(req,res)=> {
    const id =req.params.id;
    const sql = "UPDATE `user` SET `firstName`=?,`userName`=?,`gmail`=?,`Role`=?,`password`=? WHERE id = ?";
    db.query(sql,[
        req.body.first,
        req.body.user,
        req.body.email,
        req.body.Role,
        req.body.password,
        id
         
        
    ], (err, data)=> {
        if(err) return res.json({Error: "Update user failed"})
        return res.json(data[0])
    })
    // console.log(req.body);
})



//delete users

app.delete('/bages/dashboard/ProjectManegment/Accoung/listUser/:id',(req,res) => {


    const id =req.params.id;
    const sql = "DELETE from `user`  WHERE id = ?";
    db.query(sql,[id], (err, result)=> {
        if(err) return res.json({Error: "delete user failed"})
        return res.json({Status: "Success"})
    })

})



// login

app.post('',(req,res)=> {
    const sql ="SELECT * FROM `user` WHERE gmail = ? AND password = ? ";

    db.query(sql,[req.body.email , req.body.password ] ,(err ,data) => {
        if(err)
        {
            return res.json('Error');
        }
        if(data.length > 0){
            return res.status(201).json(data);
        }else {
            return res.json("Faile");
        }

    })
})










app.post('/bages/dashboard/ProjectManegment/Categreis/listCategreis',(req,res)=> {
    const sql ="INSERT INTO `categry`(`Categry`) VALUES (?)";
    const values =[ req.body.categry,]

    db.query(sql,[values] ,(err ,data) =>{
        if(err)
        {
            return res.json('Error');
        }
        return res.json(data);

    })
})


app.get('/bages/dashboard/ProjectManegment/Categreis/listCategreis',(req,res) => {

    sql ='Select * from categry '

    db.query(sql, (err, rows) =>  {
        if(err) return res.json("error feild")
         return res.json(rows)
    })
})

app.get('/bages/dashboard/ProjectManegment/Categreis/listCategreis/:id' ,(req,res) =>{

    const id  = req.params.id ;
    sql = "SELECT * FROM categry where categryId  = ?";

    db.query(sql ,[id ],(err,data) =>{
        if(err) return res.json({Error: "gest user eror in sql"})
        return res.json({Status: "Success" , Data: data})
  })


})


//delete categry

app.delete('/bages/dashboard/ProjectManegment/Categreis/listCategreis/:categryId',(req,res) => {


    const categryId =req.params.categryId;
    const sql = "DELETE from categry  WHERE categryId = ?";
    db.query(sql,[categryId], (err, result)=> {
        if(err) return res.json({Error: "delete categry failed"})
        return res.json({Status: "Success"})
    })

})


//end categry






// Team members


// insert Members
app.post('/bages/dashboard/ProjectManegment/TeamMembers/createTeamMember',(req,res)=> {
    const sql ="INSERT INTO `teammember`( `team_name`, `team_Email`, `Team_No`, `categryId`, `level`) VALUES (?)";
    const values =[
        req.body.tName,
        req.body.temail,
        req.body.no,
        req.body.categry,
        req.body.level

    ]

    db.query(sql,[values] ,(err ,data) =>{
        if(err)
        {
            return res.json('Error');
        }
        return res.json(data);

    })
})


//  list view select * members

app.get('/bages/dashboard/ProjectManegment/TeamMembers/listTeamMember',(req,res)=>{
    const sql = "SELECT * FROM `teammember`";
    db.query(sql, (err, data) => {

        if(err) return res.json("Error");
        return res.json(data);

    });
    
})

// where id select update


app.get('/bages/dashboard/ProjectManegment/TeamMembers/editTeamMember/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM teammember where team_id  = ?";
    db.query(sql, [ id ] , (err, data) => {
   
        if(err) return res.json({Error: "gest teammember eror in sql"})
          return res.json({Status: "Success" , Data: data})
    })
})



//[update teammembers]



app.put('/bages/dashboard/ProjectManegment/TeamMembers/editTeamMember/:id',(req,res)=> {
    const id =req.params.id;
    const sql = "UPDATE `teammember` SET `team_name`= ?,`team_Email`= ?,`Team_No`= ?,`categryId`= ?,`level`= ? WHERE team_id = ?";
    db.query(sql,[
        req.body.tName,
        req.body.temail,
        req.body.no,
        req.body.categry,
        req.body.level,
        id
         
        
    ], (err, result)=> {
        if(err) return res.json({Error: "Update TeamMemmbers failed"})
        return res.json({Status: "Success"})
    })
    // console.log(req.body);
})



// [delete teammmebr]

//delete users

app.delete('/bages/dashboard/ProjectManegment/TeamMembers/listTeamMember/:id',(req,res) => {


    const id =req.params.id;
    const sql = "DELETE from `teammember`  WHERE team_id = ?";
    db.query(sql,[id], (err, result)=> {
        if(err) return res.json({Error: "delete teamMembers failed"})
        return res.json({Status: "Success"})
    })

})

// end teammMembers


// Start manegrs

// [insert to data databases]
app.post('/bages/dashboard/ProjectManegment/Manegrs/listManeger',(req,res)=> {
    const sql ="INSERT INTO `manager`( `m_name`, `M_Emali`, `M_Experices`, `M_address`) VALUES  (?)";
    const values =[
        req.body.name,
        req.body.email,
        req.body.experices,
        req.body.adress,
       

    ]

    db.query(sql,[values] ,(err ,data) =>{
        if(err)
        {
            return res.json('Error');
        }
        return res.json(data);

    })
})



// select
app.get('/bages/dashboard/ProjectManegment/Manegrs/listManeger',(req,res)=>{
    const sql = "SELECT * FROM `manager`";
    db.query(sql, (err, data) => {

        if(err) return res.json("Error");
        return res.json(data);

    });
    
})


//[ edit projectmanegers]

app.get('/bages/dashboard/ProjectManegment/Manegrs/editManeger/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM `manager` WHERE mid   = ?";
    db.query(sql, [ id ] , (err, data) => {
   
        if(err) return res.json({Error: "gest teammember eror in sql"})
          return res.json({Status: "Success" , Data: data})
    })
})



//[update teammembers]



app.put('/bages/dashboard/ProjectManegment/Manegrs/editManeger/:id',(req,res)=> {
    const id =req.params.id;
    const sql = "UPDATE `manager` SET `m_name`=?,`M_Emali`=?,`M_Experices`=?,`M_address`=? WHERE mid = ?";
    db.query(sql,[
        req.body.name,
        req.body.email,
        req.body.experices,
        req.body.adress,
        id
         
        
    ], (err, result)=> {
        if(err) return res.json({Error: "Update manegers failed"})
        return res.json({Status: "Success"})
    })
    // console.log(req.body);
})




//delete manegers

app.delete('/bages/dashboard/ProjectManegment/Manegrs/listManeger/:id',(req,res) => {


    const id =req.params.id;
    const sql = "DELETE from `manager`  WHERE mid = ?";
    db.query(sql,[id], (err, result)=> {
        if(err) return res.json({Error: "delete managers failed"})
        return res.json({Status: "Success"})
    })

})


app.get('/bages/dashboard/ProjectManegment/projects/listProjects',(req,res) =>{
    sql = 'SELECT mid,m_name FROM `manager` ';
    db.query(sql,(err,data) =>{
        if(err) return res.json("Error");
        return res.json(data);
    })

})





app.get('/bages/dashboard/ProjectManegment/projects/listProjects/categry',(req,res) =>{
    sql = 'SELECT categryId,categry FROM categry ';
    db.query(sql,(err,data) =>{
        if(err) return res.json("Error");
        return res.json(data);
    })

})



app.get('/bages/dashboard/ProjectManegment/projects/listProjects/Member',(req,res) =>{
    sql = 'SELECT team_id , team_name,level FROM teammember ';
    db.query(sql,(err,data) =>{
        if(err) return res.json("Error");
        return res.json(data);
    })

})


// [insert to data databases]
app.post('/bages/dashboard/ProjectManegment/projects/CreateProjects',(req,res)=> {
    const sql ="INSERT INTO `brojects`( `Name`, `mid`, `categryId`, `team_id`, `StartDate`, `EndDate`, `Status`) VALUES  (?)";
    const values =[
        req.body.pName,
        req.body.maneger,
        req.body.categry,
        req.body.team,
        req.body.start,
        req.body.end,
        req.body.status,
       

    ]

    db.query(sql,[values] ,(err ,data) =>{
        if(err)
        {
            return res.json('Error');
        }
        return res.json(data);

    })
})



// select veiw

app.get('/bages/dashboard/ProjectManegment/projects/listProjects/view',(req,res) =>{
    // sql = "CALL `Rebort_One`()";
     sql = "SELECT  brojects.pid ,brojects.Name projectName, manager.m_name manager,teammember.team_name Teamname,categry.Categry categry, brojects.Status, MONTHNAME(brojects.StartDate) StartDate, MONTHNAME(brojects.EndDate) enddate  FROM `brojects` INNER JOIN teammember ON teammember.team_id =brojects.team_id INNER JOIN manager ON manager.mid =  brojects.mid INNER JOIN categry ON categry.categryId= brojects.categryId";
    db.query(sql,(err,data) =>{
        if(err) return res.json("Error");
        return res.json(data);
    })

})



app.get('/bages/dashboard/ProjectManegment/projects/edit/maneger/:id',(req,res) =>{
    sql = 'SELECT mid,m_name FROM `manager` ';
    db.query(sql,(err,data) =>{
        if(err) return res.json("Error");
        return res.json(data);
    })

})





app.get('/bages/dashboard/ProjectManegment/projects/edit/categry/:id',(req,res) =>{
    sql = 'SELECT categryId,categry FROM categry ';
    db.query(sql,(err,data) =>{
        if(err) return res.json("Error");
        return res.json(data);
    })

})



app.get('/bages/dashboard/ProjectManegment/projects/edit/Member/:id',(req,res) =>{
    sql = 'SELECT team_id , team_name,level FROM teammember ';
    db.query(sql,(err,data) =>{
        if(err) return res.json("Error");
        return res.json(data);
    })

})

//select value get projects
app.get('/bages/dashboard/ProjectManegment/projects/edit/:id', (req, res) => {
    const id = req.params.id;
    const sql = "SELECT * FROM `brojects` WHERE pid=?";
    db.query(sql, [ id ] , (err, data) => {
   
        if(err) return res.json({Error: "gest teammember eror in sql"})
          return res.json({Status: "Success" , Data: data})
    })
})


//[update projects]



app.put('/bages/dashboard/ProjectManegment/projects/edit/:id',(req,res)=> {
    const id =req.params.id;
    const sql = "UPDATE `brojects` SET `Name`=?,`mid`=?,`categryId`=?,`team_id`=?,`StartDate`=?,`EndDate`=?,`Status`=? WHERE pid = ?";
    db.query(sql,[
        req.body.pName,
        req.body.maneger,
        req.body.categry,
        req.body.team,
        req.body.start,
        req.body.end,
        req.body.status,
       
        id
         
        
    ], (err, result)=> {
        if(err) return res.json({Error: "Update manegers failed"})
        return res.json({Status: "Updated"})
    })
    // console.log(req.body);
})


app.post('/bages/dashboard/ProjectManegment/projects/Reborts',(req, res) => {
     const sql = "CALL `RebortInformation`('0', '', '')";
    db.query(sql,[
        req.body.all, 
        req.body.categry, 
        req.body.status
    ],(err,data) =>{
        if(err){
            res.status(422).json('Error is lost');
        }else{
            res.status(201).json(data[0]);
        }
              

    })
})


//counts

app.get('/bages/dashboard/CountUsers',(req,res) =>{
   const sql = "SELECT COUNT(*) Totalusers FROM `user` WHERE 1 ";
   db.query(sql,(err,data) =>{
    if(err) return res.json("Error");
    return res.json(data);
})
})


app.get('/bages/dashboard/Countprojects',(req,res) =>{
    const sql = "SELECT COUNT(*) CountProects FROM `brojects` WHERE 1 ";
    db.query(sql,(err,data) =>{
     if(err) return res.json("Error");
     return res.json(data);
 })
 })
// SELECT COUNT(*)CountProects FROM `brojects` WHERE 1


app.listen(2022,()=>{
    console.log('listening Runing');
})
