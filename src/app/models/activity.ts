import { SubActivity } from './sub-activity';
export interface Activity {
    name: string
    activityList: SubActivity[];
}