import { User } from './user';
import { Project } from './project';

export class Invitation {
    uPID: number;
    role: string;
    inviteStatus: string;
    contributionScore: number;
    user: User;
    project: Project;
}
