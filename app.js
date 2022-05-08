// import request from "request";
import express from "express";
import api from "./route/api.js"
const app = new express();
import bodyparser from 'body-parser'
app.use(bodyparser.urlencoded({
    extende: true
  }));
app.use(bodyparser.json())
// import http from "http";

//加载admin模块
app.all('*',function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  res.header('Content-Type', 'application/json;charset=utf-8');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});
app.use("/api",api);

app.listen(80);
console.log(`----Start Server----`)




// app.use("/login", function(req,res){
//     console.log(1)
//     let a = {code:20000,data:{token:"admin-token"}}
//     res.end(JSON.stringify(a))
// })

// app.use("/user/info", function(req,res){
//     console.log(1)
//     let a = {code:20000,data:{info:{
//         roles: ['admin'],
//         introduction: 'I am a super administrator',                                                                                                                                                                                                                                                                                                                                                                                                          
//         avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
//         name: 'Super Admin'
//       }}}
//     res.end(JSON.stringify(a))
// })
// app.use("/login",async function(req,res){
//   console.log(req)
//   res.end()
// })