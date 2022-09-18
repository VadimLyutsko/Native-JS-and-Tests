type addressType = {
    country: 'Russia' | 'Belarus';
    city: string;
    number?: number
}

type workType = {
    title: string;
    address: addressType;
    salary: number
}

export type manType = {
    name: string;
    age: number;
    address: addressType;
    work: workType;
}

export type menType = Array<manType>;