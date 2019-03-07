import { Project } from './project';

/**
 * Model for users
 */
export class User {
    id: number;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    projects: Array<Project>;
}
