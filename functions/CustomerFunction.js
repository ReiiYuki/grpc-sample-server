
let customerList = []
let id = 0

function find(name) {
	for (let i = 0;i<customerList.length;i++) {
		if (customerList[i].name === name) {
			return {
				response: {
					statusCode: 2,
					desc: 'Get'
				},
				customer: customerList[i]
			}
		}
	}
}

function add(customer) {
	customer.id = id++
	customerList.push(customer)
	return {
		response: {
			statusCode: 1,
			desc: 'Add'
		},
		customer: customer
	}
}

function list() {
	return {
		response: {
			statusCode: 3,
			desc: 'List'
		},
		customers: customerList
	}
}

export default {
	find,
	add,
	list
}
