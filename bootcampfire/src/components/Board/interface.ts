
export interface Board {
    id: number;
    title: string;
    content: string;
    bootcamp: string;
    writer: string;
    category: string;
    commentCnt: number;
    likeCnt: number;
    view: number;
    createdDate: number[];
}

export interface BoardDetail extends Board {
    isWriter: boolean,
    isLike: boolean,
}

export interface RequestComment {
    user: string;
    anonymous?: boolean;
    content: string;
    boardId?: number;
}

export interface ResponseComment extends RequestComment{
    id: number;
    ref: number;
    refOrder: number;
}

export interface Comment extends ResponseComment{
    createdDate: number[];
    bootcamp: string;
}