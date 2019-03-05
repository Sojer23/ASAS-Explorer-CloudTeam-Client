import { Entity } from './entity.model';

export class Actor extends Entity {

    name: string;
    surname: string;
    phone: string;
    role: string;
    email: string;
    password: string;
    address: string;
    banned: boolean;
    preferredLanguage = 'en';
    flatRatePaid: boolean;
    //finderID
    created: Date;
    customToken: string;
    idToken: string;
}
