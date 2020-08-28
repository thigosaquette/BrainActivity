import {Request, Response} from 'express';
import db from '../database/connection';

export default class SessionController {
    
    async index(request: Request, response: Response) {
        const {name} = request.body;

        const perfil = await db('users')
            .where('name', name)
            .select('name')
            .first();

        if (!perfil) {
            return response.status(400).json({error: 'No perfil found with this username'});
        }

        return response.json(perfil);
    }
}