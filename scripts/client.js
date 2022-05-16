console.log('JS FILE LOADED');

$(document).ready(handleReady);

let roster = [];



function handleReady() {
    console.log('jquery loaded!');

    // click listeners
    $('#addEmployee').on('click', handleClick);
}

function handleClick() {
    console.log('clicked!');
    let firstName = $('#fName').val();
    let lastName = $('#lName').val();
    let idNum = $('#idNum').val();
    let title = $('#jobTitle').val();
    let salary = $('#salary').val();

    console.log(firstName, lastName, idNum, title, salary);

    const newEmployee = {
        firstName: firstName,
        lastName: lastName,
        idNum: idNum,
        title: title,
        salary: salary
    }

    console.log(newEmployee);

    //add our employee to our l
    roster.push(newEmployee);

    $('.field').val('');
}