import {Request, Response} from 'express';
import db from '../database/connection';

export default class UsersController {
    async index(request: Request, response: Response) {
        const users = await db('users').select('*');
    
        return response.json(users);
    }

    async create(request: Request, response: Response) {
        try {
            console.log('teste 1')

            const {name, password} = request.body;
    
            await db('users').insert({
                name,
                password
            });
        
            return response.status(201).send();
            
        } catch (error) {

            return response.status(400).json({
                error : 'Unexpected error while creating new user'
            });
        }

    }
};