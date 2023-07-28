

export interface Board {
    boardId: number;
    title: string;
    content: string;
    date: string;
    likes: number;
    views: number;
    writer: string;
    camp: string;
    comments: number;
}

export interface Comment {
    commentId: number;
    title: string;
    content: string;
    date: string;
    writer: string;
    camp: string;
    reply: {
        isReply: boolean;
        originId: number;
    }
    isAnonymous: boolean;
}