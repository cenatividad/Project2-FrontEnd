import { Story } from 'src/app/models/story';
import { User } from 'src/app/models/user';

/**
 * Model for the project
 */
export class Project {
    projectID: number;
    stories: Array<Story> = [];
    projectName: string;
    description: string;
    projectUsers: Array<User> = [];
}
