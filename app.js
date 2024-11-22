const path=require('path')
const express=require('express')
const app=express()
const {userdatamodels}=require('./models/user')
app.set('view engine','ejs')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'publich')))
app.get('/',(req,res)=>{
res.render('index')
})
app.post('/create',async (req,res)=>{
   const {name,image,email}=req.body
 const usercreate=await userdatamodels.create({
  name,
  image,
  email
  })
  res.redirect('/read')
  })
app.get('/read',async (req,res)=>{
  const users=await userdatamodels.find()
  res.render('read',{users})
  })
  app.get('/delete/:id',async(req,res)=>{
    let users=await userdatamodels.findOneAndDelete({_id: req.params.id});
    res.redirect('/read')
  })
  app.get('/edit/:id',async(req,res)=>{
    let users=await userdatamodels.findOne({_id: req.params.id});
    res.render('edit',{users})
  })
  app.post('/update/:id',async(req,res)=>{
    const {image,name,email}=req.body
    let users=await userdatamodels.findOneAndUpdate({_id: req.params.id},{image,name,email});
    res.redirect('/read')
  })

app.listen(3000)