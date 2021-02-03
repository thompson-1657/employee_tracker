const inquirer = require('inquirer')
const mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Rootroot23',
    database: 'employee_trackerDB'
});
connection.connect(err => {
    if (err) throw err
    console.log(`Connected to mySQL on thread ${connection.threadId}`)
    promptAction()

})

const choices = ['Add Employee', 'View Employees', 'Add Department', 'View Departments', 'Add Role', 'View Roles', 'Exit']
const promptAction = () => {
    inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: 'What would you like to do?',
            choices: choices
        }
    ]).then(answer => {
        console.log(answer)
        if (answer.action === choices[0]) {
            artistSearch()
        } else if (answer.action === choices[1]) {
            multiSearch()
        } else if (answer.action === choices[2]) {
            rangeSearch()
        } else if (answer.action === choices[3]) {
            songSearch()
        } else if (answer.action === choices[4]) {
            songSearch()
        } else if (answer.action === choices[5]) {
            songSearch()
        } else {
            exit()
        }
    })
}