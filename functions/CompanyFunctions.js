
let companyList = []
let id = 0

function findCompany(id) {
	for (let i = 0;i<companyList.length;i++) {
		if (companyList[i].id === id) {
			return {
				response: {
					statusCode: 5,
					desc: 'Get Company'
				},
				customer: companyList[i]
			}
		}
	}
}

function addCompany(company) {
	company.id = id++
	companyList.push(company)
	return {
		response: {
			statusCode: 4,
			desc: 'Add Company'
		},
		customer: company
	}
}

function listCompany() {
	return {
		response: {
			statusCode: 6,
			desc: 'List Company'
		},
		company: companyList
	}
}

export default {
	findCompany,
	addCompany,
	listCompany
}
