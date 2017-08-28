
let customerList = []
let id = 0

function findCustomer(call,callback) {
	console.log('findCustomer/'+call.request.name)
	for (let i = 0;i<customerList.length;i++) {
		if (customerList[i].name === call.request.name) {
			callback(null,{
				response: {
					statusCode: 2,
					desc: 'Get Customer'
				},
				customer: customerList[i]
			})
			break
		}
	}
}

function addCustomer(call,callback) {
	console.log('addCustomer/'+id)
	let customer = call.request
	customer.id = id++
	customerList.push(customer)
	callback(null,{
		response: {
			statusCode: 1,
			desc: 'Add Customer'
		},
		customer: customer
	})
}

function listCustomer(call,callback) {
	console.log('listCustomer')
	callback(null,{
		response: {
			statusCode: 3,
			desc: 'List Customer'
		},
		customers: customerList
	})
}

export default {
	findCustomer,
	addCustomer,
	listCustomer
}
