const express = require("express");

const {allQuestions,readQuestion,createQuestion,showFormQuestion,updateQuestion,questionWithEdit,deleteQuestion}= require("./controllers/qcontrollers.js")
 

const {checkUser, access } = require('./middleWares/authMiddleWare');

const router = express.Router();

router.get("*", checkUser)
router.post("*", checkUser)

router.get("/",allQuestions)
router.get("/question/:id", readQuestion)

router.get("/new/question",access,showFormQuestion)
router.post("/new/question", createQuestion)

router.get("/edit/question/:id",access,updateQuestion)
router.post("/edit/question/:id",questionWithEdit)

router.get('/delete/question/:id',  deleteQuestion)


//Answer router
const Answer = require("./controllers/answerController")


router.post("/new/answer/:id",Answer.AnswerForm)


router.get("/edit/answer/:id",Answer.UpdateAnswer)
router.post("/edit/answer/:id",Answer.AnswerWithEdit)

router.get('/delete/answer/:id', Answer.DeleteAnswer)



module.exports = router;