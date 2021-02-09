# Employee Tracker

![GitHub](https://img.shields.io/github/license/thompson-1657/professional_readme_generator?color=%230288d1)

## Description

---

Employee Tracker is a command line application that utilizes the [Inquirer](https://www.npmjs.com/package/inquirer) and [MySQL](https://www.npmjs.com/package/mysql) node modules to allow a business owner to easily view and manage the departments, roles and employees in their company.

## Table of Contents

---

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies](#technologies)
- [License](#license)
- [Questions](#questions)

## Installation

---

To install the Employee Tracker the user can start by cloning the application from the repository onto their local machine.

```
https://github.com/thompson-1657/employee_tracker.git
```

Once cloned the user can run

```
npm install

```

in the terminal to install the package.json and the node modules. Be sure to change user and password in the server.js file to your MySQL username and password in order to connect. The application can then be run in the terminal command line by entering

```
node index.js
```

## Usage

---

[![recording](https://user-images.githubusercontent.com/71091515/107426105-6cc77c80-6ae5-11eb-9b11-bf5b8ecbe751.gif)](https://drive.google.com/file/d/1B_juTmwazFvRxD76DrBd7VJx9PjLh6JH/view)
Click gif to link to the full usage video.

Following the installation of the application the program can be utilized by opening the terminal and entering

```
node index.js
```

in the command line. The user will be prompted to Add Employee, View Employees, Add Department, View Departments, Add Role, View Roles, Update Employee Role, Delete Employee, Delete Department, Delete Role or View Employees by Manager. Through the Inquirer package the user is prompted to submit answers based on their choices from the original prompt. The inital prompt will generate again and again so the user can accomplish multiple tasks involving their database. Once the user is finished viewing, adding, or editing their employee database they can click on the choose the 'Exit' option and will be exited from the applications command line with the display text 'You have exited your employee database.' In the future the user can re-enter the application by rerunning node index.js in the command line.

## Technologies

---

- Node.js
- MySQL npm
- Inquirer npm

## License

---

[MIT License](LICENSE)

## Questions

---

If you have any questions regarding the functionality or use of this application feel free to contact me via the information below.

GitHub: [thompson-1657](https://github.com/thompson-1657)

Email: thompson.1657@gmail.com
