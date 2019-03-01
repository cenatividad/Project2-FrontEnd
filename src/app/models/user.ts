import { Project } from './project';

// Holds user information
export class User {
    id: number;
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    projects: Array<Project>;
}
