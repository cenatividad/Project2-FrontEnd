import { User } from './user';
import { Project } from './project';

/**
 * Model for an invitation. It represents the relationship between a user and a project
 */
export class Invitation {
    uPID: number;
    role: string;
    inviteStatus: string;
    contributionScore: number;
    user: User;
    project: Project;
}
