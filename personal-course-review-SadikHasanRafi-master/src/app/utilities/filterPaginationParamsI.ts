export interface courseFilterPaginationParamsI {
    page?:number ,
    limit?: number,
    
    sortOrder?: string,
    sortBy?:any,

    title?:string,
    price?:string,
    startDate?:string,
    endDate?:string,
    language?:string,
    duration?:number,

    minPrice?:number,
    maxPrice?:number,

    tags?:string,
    provider?:string,
    durationInWeeks?:number,
    level?:string
}