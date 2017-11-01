const mongoose = require("mongoose")
const Store = mongoose.model("Store")

exports.homePage = (req, res) => {
  res.render("hello")
}

exports.addStore = (req, res) => {
  res.render("editStore", { title: 'ADD STORE' })
}

exports.createStore = async (req, res) => {
  const store = new Store(req.body)
  await store.save()
  req.flash("success", `Successfully Created ${store.name}. Care to leave a review?`)
  res.redirect(`/store/${store.slug}`)
}

exports.getStores = async (req, res) => {
  const stores = await Store.find()
  res.render('stores', { title: 'Stores', stores })
}

exports.editStore = async (req, res) => {
  // 1.获取当前的 store的id
  const store = await Store.findOne({_id:req.params.id})
  //2. 校验该是否是该store的主人
  //todo
  // 3. 渲染编辑的表单
  res.render("editStore",{title:`Edit ${store.name}`,store})
}

exports.updateStore = async (req,res) => {
  // 找到并且更新
  const store = await Store.findOneAndUpdate({_id:req.params.id},req.body,{
    new:true,
    runValidators: true
  }).exec()
  req.flash('success', `Successfully updated <strong>${store.name}</strong>. <a href="/stores/${store.slug}">View Store →</a>`);
  res.redirect(`/stores/${store._id}/edit`);
}