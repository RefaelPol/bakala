const serverUrl = `http://127.0.0.1:3000/customers/response`;

// 1) get all customers:
function getAllCustomers() {
    fetch(`${serverUrl}/get-all-customers.json`)
        // `http://127.0.0.1:3000/customers/response/get-all-customers.json` (take the Url to this json file.)

        .then(res => res.json())
        .then(customers => {
            let html = '';
            customers.forEach(singleCustomer => {
                html += `<tr>
                <td>${singleCustomer.id}</td>
                <td>${singleCustomer.name}</td>
                <td>${singleCustomer.email}</td>
                </tr>`;
            });
            document.getElementById('customers-table').innerHTML = html;
        })
        .catch(error => {
            throw new Error(error);
        })
}
document.getElementById(`get-all-customers-button`).addEventListener('click', getAllCustomers);