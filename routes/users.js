//подключаем внешние библиотеки
const express = require("express");
const router = express.Router();
const passport = require("passport"); // для авторизации
const { checkNotAuthenticated, checkAuthenticated } = require("../passport-config");
const bcrypt = require("bcrypt"); // шифрование пароля

//==== Подключаем модель данных пользователя для базы данных ==== 
const User = require("../models/user");

//==== Авторизация ==== 
router.get("/login", checkNotAuthenticated, (req, res) => {
  res.render("login.ejs");
});

router.post(
  "/login",
  checkNotAuthenticated,
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

//==== Регистрация ==== 

//==== Деавторизация ==== 

module.exports = router;
