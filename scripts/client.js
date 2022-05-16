console.log('JS FILE LOADED');

$(document).ready(handleReady);

let roster = [];



function handleReady() {
    console.log('jquery loaded!');

    // click listeners
    $('#addEmployee').on('click', handleClick);
    // dynamic click listener
    // $(EXISTS_NOW).on('click', 'EXISTS_LATER', HandleClick)
    $('#target').on('click', '.deleteBtn', handleDelete);
}

function handleDelete() {
    console.log('deleted!');
    //remove the thing that they clicked on!
    //method chaining
    // $(this).parent().parent().remove();
    // $(this).parents('tr').remove();
    $(this).closest('tr').remove();

    //stretch we also need to remove from the array!

}

function handleClick() {
    console.log('clicked!');
    let firstName = $('#fName').val();
    let lastName = $('#lName').val();
    let idNum = $('#idNum').val();
    let title = $('#jobTitle').val();
    let salary = $('#salary').val();

    // console.log(firstName, lastName, idNum, title, salary);

    const newEmployee = {
        firstName: firstName,
        lastName: lastName,
        idNum: idNum,
        title: title,
        salary: Number(salary)
    };

    // console.log(newEmployee);

    //add our employee to our l
    roster.push(newEmployee);

    $('.field').val('');

    renderEmployees();
}

function renderEmployees() {
    //clear dom before we loop
    // helps avoid duplicates!
    $('#target').empty();

    let runningTotal = 0;
    // append all employees in roster
    for (let employee of roster) {
        console.log(employee);

        runningTotal += employee.salary;

        $('#target').append(`
                <tr>
                    <td>${employee.firstName}</td>
                    <td>${employee.lastName}</td>
                    <td>${employee.idNum}</td>
                    <td>${employee.title}</td>
                    <td>${employee.salary}</td>
                    <td><button class="deleteBtn">DELETE?</button></td>
                </tr>
        
        `);

    }
    console.log(runningTotal);

    let monthlyTotal = (runningTotal / 12);



    $('#monthly').text(monthlyTotal.toLocaleString('en-US'));

    if(monthlyTotal > 20000) {
        $('#monthly').addClass('red');
    }

}