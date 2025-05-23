import { FastifyRequest, FastifyReply } from "fastify"
import{ ListCustomerService } from '../services/ListCustomersService'

class ListCustomersController{
  async handle(request: FastifyRequest, reply: FastifyReply){
    const listCustomerService = new ListCustomerService();

    const customer = await listCustomerService.execute();

    reply.send(customer);

 }
}

export { ListCustomersController}