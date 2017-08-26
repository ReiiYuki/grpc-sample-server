
let customerList = []
let id = 0

function findCustomer(name) {
	for (let i = 0;i<customerList.length;i++) {
		if (customerList[i].name === name) {
			return {
				response: {
					statusCode: 2,
					desc: 'Get Customer'
				},
				customer: customerList[i]
			}
		}
	}
}

function addCustomer(customer) {
	customer.id = id++
	customerList.push(customer)
	return {
		response: {
			statusCode: 1,
			desc: 'Add Customer'
		},
		customer: customer
	}
}

function listCustomer() {
	return {
		response: {
			statusCode: 3,
			desc: 'List Customer'
		},
		customers: customerList
	}
}

export default {
	findCustomer,
	addCustomer,
	listCustomer
}
