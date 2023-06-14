import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Member from 'App/Models/Member'


export default class MembersController {
    public async store({request, response}: HttpContextContract) {

        const body = request.body()

        const member = await Member.create(body)

        response.status(201)

        return{
            message:'member create successfully',
            data: member,
        }
    }

    public async index(){
        const members = await Member.all()
        
        return{
            data:members
        }

    }

    public async show({params}: HttpContextContract){
        const member = await Member.findOrFail(params.id)

        return{
            data:member,
        }
    }
    
    public async destroy({params}:HttpContextContract){
        const member = await Member.findOrFail(params.id)
        await member.delete()

        return{
            message:"Member successfully delete"
        }
    }

    public async update({params, request}:HttpContextContract){
        const body = request.body()
        const member = await Member.findOrFail(params.id)

        member.society = body.society
        member.name = body.name
        member.birthday = body.birthday

        await member.save()

        return{
            message:"Member succesfully updated",
            data:member,
        }


    }
}
 