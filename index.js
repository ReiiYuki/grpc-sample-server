import grpc from 'grpc'
import functions from './functions'

const CUSTOMER_PROTO_PATH = __dirname+'/protos/customer.proto'
const COMPANY_PROTO_PATH = __dirname+'/protos/company.proto'

const customerProto = grpc.load(CUSTOMER_PROTO_PATH).customer
const companyProto = grpc.load(COMPANY_PROTO_PATH).company

let server = new grpc.Server()

server.addService(customerProto.CustomerService.service,{...functions.CustomerFunctions})
server.addService(companyProto.CompanyService.service,{...functions.CompanyFunctions})

server.bind('localhost:50051', grpc.ServerCredentials.createInsecure());
console.log('Server is starting at 50051 ...')
server.start()
