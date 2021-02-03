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
            addEmployee()
        } else if (answer.action === choices[1]) {
            viewEmployees()
        } else if (answer.action === choices[2]) {
            addDepartment()
        } else if (answer.action === choices[3]) {
            viewDepartments()
        } else if (answer.action === choices[4]) {
            addRole()
        } else if (answer.action === choices[5]) {
            viewRoles()
        } else {
            exit()
        }
    })
}

const addEmployee = () => {

    promptAction()
}

const viewEmployees = () => {

    connection.query("SELECT * FROM employee;", (err, result) => {
        if (err) throw err
        console.table(result)
        promptAction()
    })

}

const addDepartment = () => {

    promptAction()
}

const viewDepartments = () => {

    promptAction()
}

const addRole = () => {

    promptAction()
}

const viewRoles = () => {

    promptAction()
}