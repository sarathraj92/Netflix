export interface MovieDetail {
    adult: boolean;
    id: number;
    backdrop_path: string;
    title?:string;
    original_title?:string;
    name?:string
    original_name?:string;
    original_language:string;
    overview:string;
    poster_path:string;
    media_type:string;
    genre_ids:number[];
    popularity:number;
    release_date?:string;
    first_air_date?:string;
    video:boolean;
    vote_average:number;
    vote_count:number;
    origin_country?:string[];


}