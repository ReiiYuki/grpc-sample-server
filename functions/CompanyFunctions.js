
let companyList = []
let id = 0

function findCompany(call,callback) {
	console.log('findCompany/'+call.request.id)
	for (let i = 0;i<companyList.length;i++) {
		if (companyList[i].id == call.request.id) {
			callback(null,{
				response: {
					statusCode: 5,
					desc: 'Get Company'
				},
				company: companyList[i]
			})
			break
		}
	}
}

function addCompany(call,callback) {
	console.log('addCompany/'+id)
	let company = call.request
	company.id = id++
	companyList.push(company)
	callback(null,{
		response: {
			statusCode: 4,
			desc: 'Add Company'
		},
		company: company
	})
}

function listCompany(call,callback) {
	console.log('listCompany/')
	callback(null,{
		response: {
			statusCode: 6,
			desc: 'List Company'
		},
		company: companyList
	})
}

function listCompanyById(call,callback) {
	console.log('listCompanyById/'+call.request.ids)
	console.log(companyList.filter((obj) => call.request.ids.indexOf(obj.id)));
	callback(null,{
		response: {
			statusCode: 7,
			desc: 'List Company By ID'
		},
		companies: companyList.filter((obj) => call.request.ids.indexOf(obj.id))
	})
}

export default {
	findCompany,
	addCompany,
	listCompany,
	listCompanyById
}
