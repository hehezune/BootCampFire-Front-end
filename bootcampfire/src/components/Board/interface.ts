
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
    "isWriter": true,
    "isLike": false,
}

export interface Comment {
    id: number;
    user: string;
    content: string;
    ref: number;
    refOrder: number;
    createdDate: number[];
    bootcamp: string;
}