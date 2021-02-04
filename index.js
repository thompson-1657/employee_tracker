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

const choices = ['Add Employee', 'View Employees', 'Add Department', 'View Departments', 'Add Role', 'View Roles', 'Update employee role', 'Delete Employee', 'Delete Department', 'Delete Role', 'View employees by manager', 'Update Employee Managers', 'Exit']
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
        } else if (answer.action === choices[6]) {
            updateRole()
        } else if (answer.action === choices[7]) {
            deleteEmployee()
        } else if (answer.action === choices[8]) {
            deleteDepartment()
        } else if (answer.action === choices[9]) {
            deleteRole()
        } else if (answer.action === choices[10]) {
            viewByManager()
        } else if (answer.action === choices[11]) {
            updateEmpManager()
        } else {
            exit()
        }
    })
}

const addEmployee = () => {
    inquirer
        .prompt([
            {
                name: "first_name",
                type: "input",
                message: "Enter new employee's first name "
            },
            {
                name: "last_name",
                type: "input",
                message: "Enter new employee's last name"
            },
            {
                name: "role",
                type: "input",
                message: "What is their role id? ",

            },
            {
                name: "manager_id",
                type: "input",
                message: "Whats their manager's id?",
            }
        ]).then(answer => {
            connection.query("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)", [answer.first_name, answer.last_name, answer.role, answer.manager_id],
                (err, result) => {
                    if (err) throw err
                    console.log(`${answer.first_name} ${answer.last_name} was added as a new employee.`)
                    promptAction()
                })
        })



}

const viewEmployees = () => {

    connection.query("SELECT * FROM employee;", (err, result) => {
        if (err) throw err
        console.table(result)
        promptAction()
    })

}

const addDepartment = () => {
    inquirer
        .prompt([
            {
                name: "name",
                type: "input",
                message: "What is the name of the department you would like to add? "
            }
        ]).then(answer => {
            connection.query("INSERT INTO department(name) VALUES (?)", [answer.name],
                (err, result) => {
                    if (err) throw err
                    console.log(`${answer.name} has been added as a new department.`)
                    promptAction()
                })
        })
}

const viewDepartments = () => {

    connection.query("SELECT * FROM department;", (err, result) => {
        if (err) throw err
        console.table(result)
        promptAction()
    })

}

const addRole = () => {
    inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What is the name of the job title you would like to add?"
            },
            {
                name: "salary",
                type: "input",
                message: "What is the salary for this role?"
            },
            {
                name: "department_id",
                type: "input",
                message: "What is the department id for this role?"
            }
        ]).then(answer => {
            connection.query("INSERT INTO role(title, salary, department_id) VALUES (?,?,?)", [answer.title, answer.salary, answer.department_id],
                (err, result) => {
                    if (err) throw err
                    console.log(`${answer.title} has been added as a new role with a salary of ${answer.salary} and a department id of ${answer.department_id} `)
                    promptAction()
                })
        })
}

const viewRoles = () => {

    connection.query("SELECT * FROM role;", (err, result) => {
        if (err) throw err
        console.table(result)
        promptAction()
    })
}

const updateRole = () => {
    inquirer
        .prompt([
            {
                name: "role_id",
                type: "input",
                message: "What is the role id you would like to update the employee to?"
            },
            {
                name: "id",
                type: "input",
                message: "What is the id of the employee who's role you would like to update"
            }
        ]).then(answer => {
            connection.query("UPDATE employee SET role_id = ? WHERE id = ?", [answer.role_id, answer.id],
                (err, result) => {
                    if (err) throw err
                    console.log(`Employee with the id of ${answer.id} is now has to role id ${answer.role_id}`)
                    promptAction()
                })
        })
}

const deleteEmployee = () => {
    inquirer
        .prompt([
            {
                name: "id",
                type: "input",
                message: "What is the id of the employee you would like to remove?"
            }
        ]).then(answer => {
            connection.query("DELETE FROM employee WHERE id = ?",
                [answer.id],
                (err, result) => {
                    if (err) throw err
                    console.log(`Employee with the id of ${answer.id} has been removed`)
                    promptAction()
                })
        })
}

const deleteDepartment = () => {
    inquirer
        .prompt([
            {
                name: "id",
                type: "input",
                message: "What is the id of the department you would like to remove?"
            }
        ]).then(answer => {
            connection.query("DELETE FROM department WHERE id = ?",
                [answer.id],
                (err, result) => {
                    if (err) throw err
                    console.log(`The department with the id of ${answer.id} has been removed`)
                    promptAction()
                })
        })
}

const deleteRole = () => {
    inquirer
        .prompt([
            {
                name: "id",
                type: "input",
                message: "What is the id of the role you would like to remove?"
            }
        ]).then(answer => {
            connection.query("DELETE FROM role WHERE id = ?",
                [answer.id],
                (err, result) => {
                    if (err) throw err
                    console.log(`The role with the id of ${answer.id} has been removed`)
                    promptAction()
                })
        })
}

const viewByManager = () => {
    inquirer
        .prompt([
            {
                name: "manager_id",
                type: "input",
                message: "To view employees by manager, enter the manager id"
            }
        ]).then(answer => {
            connection.query("SELECT * FROM employee WHERE manager_id = ?",
                [answer.manager_id],
                (err, result) => {
                    if (err) throw err
                    console.table(result)
                    promptAction()
                })
        })
}

const updateEmpManager = () => {
    inquirer
        .prompt([
            {
                name: "manager_id",
                type: "input",
                message: "What is the new manager id you would like to update the employee to?"
            },
            {
                name: "id",
                type: "input",
                message: "What is the id of the employee who's manager you would like to update?"
            }
        ]).then(answer => {
            connection.query("UPDATE employee SET manager_id = ? WHERE id = ?", [answer.manager_id, answer.id],
                (err, result) => {
                    if (err) throw err
                    console.log(`Employee with the id of ${answer.id} now has the manager with the id of  ${answer.manager_id}`)
                    promptAction()
                })
        })
}