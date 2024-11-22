
//crud operation
app.get('/create',async (req,res)=>{
  const userdata= await userdatamodels.create({
      name:'bibek',
      username:'bibek sah',
      email:'bibeksah123@gmail.com'
    })
    console.log('data upload to your mongoose',userdata)
    res.send(userdata)
    })
    app.get('/update',async (req,res)=>{
      const userdata= await userdatamodels.findOneAndUpdate({
          name:'bibek'},{
            name:'bibek shah'
          },{new:true})
        console.log('data upload to your mongoose',userdata)
        res.send(userdata)
        })
        app.get('/read',async (req,res)=>{
          const userdata= await userdatamodels.find()
            console.log('data upload to your mongoose',userdata)
            res.send(userdata)
            })