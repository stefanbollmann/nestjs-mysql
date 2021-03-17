export interface PaginationResultDTO<T> {
    docs: Array<T>,
    totalDocs: number ,
    limit: number ,
    totalPages: number,
    page: number,
    pagingCounter: number,   // The starting sl. number of first document (mogoose paginate V2) ==1 
    hasPrevPage: boolean,
    hasNextPage: boolean,
    prevPage: number,
    nextPage: number
}