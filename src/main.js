const express = require('express')
const mongoose=require('mongoose')
const app = express()
const path = require('path')
const hbs = require('hbs')
const crypto=require('crypto')
const bodyParser=require('body-parser')
const multer=require('multer')
const gridFsStorage=require('multer-gridfs-storage')
const grid=require('gridfs-stream')
const methodOverride=require('method-override')
require("./models/mongoose")
const User = require("./models/signup")

const publicDirectoryPath = path.join(__dirname,'../public')
const viewPath = path.join(__dirname,'../templates/views')
const partialPath = path.join(__dirname,'../templates/partials')

app.use(express.static(publicDirectoryPath))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

hbs.registerPartials(partialPath)


//Middleware
app.use(bodyParser.json())
app.use(methodOverride('_method'))

app.set('view engine','hbs')
app.set('views', viewPath)
app.get('',(req,res) => {
    res.render('home')
})
app.get('/home',(req,res) =>{
    res.render('home')
})

app.get('/select_menu_one',(req,res) => {
    res.render('select_menu_one')
})
app.get('/select_menu_two',(req,res) => {
    res.render('select_menu_two')
})
app.get('/select_menu_three',(req,res) => {
    res.render('select_menu_three')
})
app.get('/select_menu_four',(req,res) => {
    res.render('select_menu_four')
})
app.get('/select_menu_five',(req,res) => {
    res.render('select_menu_five')
})
app.get('/select_menu_six',(req,res) => {
    res.render('select_menu_six')
})
app.get('/select_menu_seven',(req,res) => {
    res.render('select_menu_seven')
})
app.get('/text_one',(req,res)=>{
    res.render('text_one')
})
app.get('/text_two',(req,res)=>{
    res.render('text_two')
})
app.get('/text_three',(req,res)=>{
    res.render('text_three')
})
app.get('/text_four',(req,res)=>{
    res.render('text_four')
})
app.get('/text_five',(req,res)=>{
    res.render('text_five')
})
app.get('/text_six',(req,res)=>{
    res.render('text_six')
})
app.get('/text_seven',(req,res)=>{
    res.render('text_seven')
})
app.get('/video_one',(req,res)=>{
    res.render('video_one')
})
app.get('/video_two',(req,res)=>{
    res.render('video_two')
})
app.get('/video_three',(req,res)=>{
    res.render('video_three')
})
app.get('/video_four',(req,res)=>{
    res.render('video_four')
})
app.get('/video_five',(req,res)=>{
    res.render('video_five')
})
app.get('/video_six',(req,res)=>{
    res.render('video_six')
})
app.get('/video_seven',(req,res)=>{
    res.render('video_seven')
})
app.get('/signup',(req,res) => {
    res.render('signup')
})
app.get('/login',(req,res)=>{
    res.render('login')
})
app.get('/uploadFile',(req,res)=>{
    res.render('uploadFile')
})
app.post('/signup',(req,res)=>{
   try{
        const password = req.body.password
        const confirm_password = req.body.con_password
        if(password === confirm_password){
            const userSignup = new User({
                userName:req.body.username,
                email:req.body.email,
                password:req.body.password,
                confirm_password:req.body.con_password
            })
                
            userSignup.save()
            res.render('home')
            
        }
        else{
            res.send("Password is not matched!")
        }
        
   }
   catch(error){
        res.send(error)
   }
})

app.post('/login',async(req,res)=>{
    
    try{
    const email = req.body.email
    const password = req.body.password
    const userCredentials = await User.findOne({email:email})
    if(userCredentials.password==password){
        res.render('home')
    } else{
        res.send("Invalid login!")
    }
    } catch(error){
        res.send(error)
    }
    /* try{
        const user = User.findByCredentials(req.body.email,req.body.password)
       // res.send(user)
       // console.log(user)
    } catch(e){
        res.send(e)
    }  */
})

// Starting the server
app.listen(3000,() => {
    console.log('Server is up and running')
})
