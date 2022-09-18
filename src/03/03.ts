import {manType} from '../02/02';


export function addSalary(man: manType, salaryUpp: number) {

    man.work.salary += salaryUpp;
}