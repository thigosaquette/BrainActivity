import {Request, Response} from 'express';
import db from '../database/connection';

export default class ActivitiesController {
    async index(request: Request, response: Response) {
        const list = request.query;

        const type = list.type as string;

        const activities = await db('activities')
        .join('users', 'users.id', '=', 'activities.user_id')
        .where('activities.type', '=', type)
        .select([
            'activities.title',
            'activities.description',
            'activities.type'
        ]);

        return response.json(activities);
    }



    async create(request: Request, response: Response) {

        try {

            const {
                title,
                description,
                type,
            } = request.body;
    
            const user_id = request.headers.authorization;
    
            await db('activities').insert({
                title,
                description,
                type,
                user_id
            });

            return response.status(201).send();
            
        } catch (error) {

            return response.status(400).json({
                error : 'Unexpected error while creating new activity'
            });
        }
    }
    
    async delete(request: Request, response: Response) {

        try {
            const {id} = request.params;

            await db('activities')
            .where('id', id)
            .select('user_id')
            .first();
    
            await db('activities').where('id', id).delete();
    
            return response.status(204).send();

        } catch (error) {
            return response.status(400).json({
                error : 'Unexpected error while deleting activity'
            });
        }
    }

    async update(request: Request, response: Response) {

        try {
            const {id} = request.params;
            const user_id = request.headers.authorization;

            const {
                title,
                description,
                type,
            } = request.body;

            const activityVerify = await db('activities')
            .where('id', id)
            .select('type')
            .first();

            if (activityVerify.type === type) {
                await db('activities') 
                .where('id', id)
                .update({
                    title,
                    description,
                    type
                });

                return response.status(204).send();
            } else {

                await db('activities').insert({
                    title,
                    description,
                    type,
                    user_id
                })

                await db('activities')
                .where('id', id)
                .select('user_id')
                .first();
        
                await db('activities').where('id', id).delete();

                return response.status(204).send();
            }
            
        } catch (error) {

            return response.status(400).json({
                error : 'Unexpected error while creating or deleting activity'
            });
        }

    }
}