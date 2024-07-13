const express=require("express")
const {createTodo,updateTodo} = require("./types")
const app=express()
app.use(express.json())

app.post('/todo',(req,res)=>{
    const response=createTodo.safeParse(req.body)
    if(!response.success){
        res.status(411).json({
            mssg:"you sent the wrong inputs"
        })
        return;
    }
    res.status(200).json({
        mssg:"user added successfully"
    })
})

app.get('/todos',(req,res)=>{

})

app.put('/completed',(req,res)=>{
    const response=updateTodo.safeParse(req.body)
    if(!response.success){
        res.status(411).json({
            mssg :"wrong inputs"
        })
        return;
    }
    res.status(200).json({
        mssg:"updated successfully"
    })
})


app.listen(3000)