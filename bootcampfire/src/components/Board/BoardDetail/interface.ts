export interface Board {
    title: string;
    content: string;
    date: string;
    likes: number;
    views: number;
    writer: string;
    camp: string;
    isAnonymous: boolean;
    comments: number;
}



export interface Comment {
    title: string;
    content: string;
    date: string;
    writer: string;
    camp: string;
    isReply: boolean;
    isAnonymous: boolean;
}