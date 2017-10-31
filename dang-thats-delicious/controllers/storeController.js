exports.homePage = (req, res) => {
    res.render("hello")
  }

  exports.addStore = (req,res) =>{
    res.render("editStore",{title:'ADD STORE'})
  }

  exports.createStore = (req,res) =>{
      res.json(req.body )
  }