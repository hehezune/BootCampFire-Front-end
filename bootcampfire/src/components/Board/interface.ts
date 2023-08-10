
export interface Board {
    id: number;
    title: string;
    content: string;
    bootcamp: string;
    writer: string;
    commentCnt: number;
    likeCnt: number;
    view: number;
    createdDate: string;
    category: string;
}

export interface BoardDetail extends Board {
    isWriter: boolean,
    isLike: boolean,
}

export interface RequestComment {
    userId?: number;
    anonymous?: boolean;
    content: string;
    boardId: number;
}

export interface ResponseComment extends RequestComment{
    id: number;
    ref: number;
    refOrder: number;
    user: string;
    isWriter: boolean;
}

export interface Comment extends ResponseComment{
    createdDate?: number[];
    bootcamp: string;

}