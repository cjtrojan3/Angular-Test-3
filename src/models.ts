export interface Recipe {
    id?: number;
    title: string;
    shortDescription: string; 
    numServings: number;
    tags: string[];
    img: string;
}