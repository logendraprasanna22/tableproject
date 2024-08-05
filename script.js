function showForm() {
    document.getElementById("formPopup").style.display = "block";
}

function closeForm() {
    document.getElementById("formPopup").style.display = "none";
}

function addRow() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const country = document.getElementById("country").value;
    const email = document.getElementById("email").value;

    if (name && age && country && email) {
        const table = document.getElementById('dynamicTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const nameCell = newRow.insertCell(0);
        const ageCell = newRow.insertCell(1);
        const countryCell = newRow.insertCell(2);
        const emailCell = newRow.insertCell(3);
        const actionCell = newRow.insertCell(4);

        nameCell.innerHTML = name;
        ageCell.innerHTML = age;
        countryCell.innerHTML = country;
        emailCell.innerHTML = email;
        actionCell.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';

        closeForm();
        document.getElementById("form").reset();
    } else {
        alert("All fields are required!");
    }
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}