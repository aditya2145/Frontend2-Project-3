let employeeArray = [];
let idCounter = 1;
const addBtn = document.getElementById('addBtn');

function addEmployee(event) {
    event.preventDefault(); 

    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const profession = document.getElementById('profession').value.trim();
    const message = document.getElementById('message');

    if (!name || !age || !profession) {
        message.textContent = 'Error: Please make sure all fields are filled before adding an employee!';
        message.className = 'errorMsg';
    } else {
        const newEmployee = {
            id: idCounter++,
            name: name,
            profession: profession,
            age: Number(age),
        };

        employeeArray.push(newEmployee);

        message.textContent = 'Success: Employee Added!';
        message.className = 'successMsg';

        // Clear the input values
        document.getElementById('name').value = '';
        document.getElementById('profession').value = '';
        document.getElementById('age').value = '';
    }
    displayEmployees();
}

function displayEmployees() {
    const employeesList = document.getElementById('employeesList');
    employeesList.innerHTML = ''; // Clear the list before adding new employees

    if (employeeArray.length === 0) {
        employeesList.textContent = 'You have 0 Employees.';
        id = 1;
        return;
    }

    employeeArray.forEach((employee) => {
        const div = document.createElement('div');
        div.className = 'employeeDiv';

        div.innerHTML = `
            <div class="employeeDetails">
                <span>${employee.id}</span>
                <span>Name: ${employee.name}</span>
                <span>Profession: ${employee.profession}</span>
                <span>Age: ${employee.age}</span>
            </div>
        `;

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.textContent = 'Delete User';
        deleteBtn.addEventListener('click', () => deleteEmployee(employee.id));

        div.appendChild(deleteBtn);
        employeesList.appendChild(div);
    });
}

function deleteEmployee(id) {
    employeeArray = employeeArray.filter(employee => employee.id !== id);
    displayEmployees();
}

addBtn.addEventListener('click', addEmployee);
