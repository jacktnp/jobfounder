const express = require('express');
const router = express.Router();

const User = require('../model/user');
// const Product = require('../model/product');
// const Donate = require('../model/donate');
// const Inventory = require('../model/inventory');
const Work = require('../model/work');
const Company = require('../model/company')
const Profile = require('../model/profile')
const Approve = require('../model/approve')

var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
const mongoDB = require('monk')('mongodb+srv://prachya:prachya@cluster0.8ztqc.mongodb.net/test')
var JsSearch = require('js-search');





const profileDB = mongoDB.get("profiles")
const workDB = mongoDB.get("works")
const userDB = mongoDB.get("users")
const companyDB = mongoDB.get("companys")
// -----------------------
// function
function enSureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  } else {
    res.redirect('/login');
  }
}



// var fs = require('fs');
// var wkhtmltopdf = require('wkhtmltopdf');
// router.get('/get-pdf', async (req, res, next) => {
//   wkhtmltopdf.command = "C:\\Program Files\\wkhtmltopdf\\bin\\wkhtmltopdf.exe";
// const pang = 'apng'

// await wkhtmltopdf(`<h1>Test</h1><p>Hello world ${pang}</p>`, { pageSize: 'letter' })
//   .pipe(await fs.createWriteStream('out1.pdf'));

//   res.sendFile(__dirname+'/out1.pdf')
// })





// ---------------------------------


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});



router.get('/get-all-work', async (req, res, next) => {
  Work.getPost(
    function (err, project) {
      console.log(project)
      res.send(project);
    })
  // console.log(work)
  // res.send(work)
});


router.post('/crate-work', enSureAuthenticated, async (req, res, next) => {
  const {
    username,
    title,
    description,
    due_date,
    status,
  } = req.body;
  var info = {}
  info.username = username,
    info.title = title
    info.description = description
    info.due_date = due_date
    info.status = status
  var newWork = new Work(info);
  newWork.save(Work)
  // console.log(req.body)
  console.log("inApi")
  res.send(newWork)
})

router.post('/update-work/:id', async (req, res, next) => {
  const data = {
    username,
    title,
    description,
    due_date,
    status,
  } = req.body;
  console.log("inApi")
  var info = {}
  Object.keys(data).map((loopdata, index) => {
    info[loopdata] = Object.values(data)[index]
    console.log(info)
  })

  await Work.update({
    _id: req.params.id
  }, {
    $set: info
  })

  res.send(data)
})


router.post('/delete-work/:id', async (req, res, next) => {
  const deleteWork = await Work.remove({
    _id: req.params.id
  })
  res.send(req.params.id)
})







router.post('/create-company', enSureAuthenticated, async (req, res, next) => {
  const {
    username,
    company_name,
    company_address,
    addrcompany_phoneess,
    company_email,
    company_website
  } = req.body;
  const info = {}
  info.username = username,
    info.company_name = company_name,
    info.company_address = company_address,
    info.addrcompany_phoneess = addrcompany_phoneess,
    info.company_email = company_email,
    info.company_website = company_website
  var newCompany = new Company(info);
  newCompany.save(Company)
  console.log("inApi")
  res.send(newCompany)
})

router.post('/delete-company/:id', async (req, res, next) => {
  const deleteWork = await Company.remove({
    _id: req.params.id
  })
  res.send(req.params.id)
})

router.post('/update-company/:id', async (req, res, next) => {
  const data = {
    username,
    company_name,
    company_address,
    addrcompany_phoneess,
    company_email,
    company_website
  } = req.body;
  console.log("inApi")
  var info = {}
  Object.keys(data).map((loopdata, index) => {
    info[loopdata] = Object.values(data)[index]
    console.log(info)
  })
  const updataProfile = await Company.update({
    _id: req.params.id
  }, {
    $set: info
  })
  res.send(data)
})

router.get('/get-all-company', async (req, res, next) => {
  const getCompany = await Company.find()
  res.send(getCompany)
})



router.post('/get-company-data-by-user', async (req, res, next) => {
  getCompany = await Company.find({ username: req.body.username })
  res.send(getCompany)
})

router.get('/get-all-member', enSureAuthenticated, async (req, res, next) => {
  getMember = await User.find()
  res.send(getMember)
})


router.post('/get-member-by-role', enSureAuthenticated, async (req, res, next) => {
  getMember = await User.find({ role: req.body.role })
  res.send(getMember)
})



router.post('/search-data', async (req, res, next) => {
  const mySearch = {
    searchText
  } = req.body

  var search = new JsSearch.Search('_id');
  search.addIndex("username");
  search.addIndex("title")
  search.addIndex("description")
  search.addIndex("due_date")
  search.addIndex("status")
  console.log(mySearch.searchText)
  const mySearch2 = await Work.find()
  console.log(mySearch2)
  await search.addDocuments(mySearch2);
  var ans = await search.search(mySearch.searchText);
  res.send(await search.search(mySearch.searchText))
})


router.post('/update-approve/:id', async (req, res, next) => {
  const {
    status
  } = req.body
  const data = await Approve.update({
    _id: req.params.id
  }, { $set: {status:status} })
  res.send({status:"success"})
})

router.get('/get-all-approve', async (req, res, next) => {
  const data = await Approve.find()
  res.send(data)
})

router.post('/get-approve-trustby', async (req, res, next) => {
  const data = await Approve.find({trustby:req.body.trustby})
  res.send(data)
})

router.post('/get-approve-trustby-status', async (req, res, next) => {
  const {
    status,
    trustby
  } = req.body
  const data = await Approve.find({trustby:trustby,status:status})
  res.send(data)
})

router.post('/count-approve-trustby-waiting', async (req, res, next) => {
  const {
    trustby
  } = req.body
  const data = {number :await Approve.countDocuments({trustby:trustby,status:'Waiting'})}
  console.log(typeof data)
  res.send(data)
})



router.post('/create-profile', async (req, res, next) => {
  const {
    username,
    description,
    title,
    img,
    trustby
  } = req.body;
  const profile = {}
  const approve = {}
  profile.username = username,
  profile.description = description,
  profile.title = title
  profile.img = img,
  profile.trustby = trustby

  approve.username = username,
  approve.trustby = trustby,
  approve.status = "Waiting"

  const newProfile = new Profile(profile);
  newProfile.save(Profile)

  const newApprove= new Approve(approve);
  newApprove.save(Approve)

  res.send(newProfile)
})


router.post('/update-profile/:id', async (req, res, next) => {
  const data = {
    username,
    description,
    title,
    img,
    trustby
  } = req.body;
  var info = {}
  Object.keys(data).map((loopdata, index) => {
    info[loopdata] = Object.values(data)[index]
  })
  const updataProfile = await Profile.update({
    _id: req.params.id
  }, {
    $set: info
  })
  res.send(data)
})

router.post('/delete-profile/:id', async (req, res, next) => {
  const deleteProfile = await Profile.remove({
    _id: req.params.id
  })
  res.send(req.params.id)
})

router.get('/get-profile', async (req, res, next) => {
  const deleteProfile = await Profile.find()
  res.send(deleteProfile)
})











module.exports = router;
