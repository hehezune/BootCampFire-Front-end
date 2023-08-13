export interface bootcampInput {
  name: string;
  siteUrl: string;
  process: string;
  schedule: string;
  description: string;
  card: number;
  support: number;
  hasCodingtest: number;
  onOff: number;
  startDate: string;
  endDate: string;
  imgUrl: string,
  tracks: {id:number, name:string}[];
  languages: {id:number, name:string}[];
  regions: {id:number, name:string}[];
  cost: number;
  [key: string]: any;
};

export interface bootcampInputResponse {
    name: string;
    siteUrl: string;
    process: string;
    schedule: string;
    description: string;
    card: boolean;
    support: boolean;
    hasCodingtest: boolean;
    onOff: string;
    startDate: string;
    endDate: string;
    imgUrl: string,
    tracks: {id:number, name:string}[];
    languages: {id:number, name:string}[];
    regions: {id:number, name:string}[];
    cost: number;
    [key: string]: any;
  };

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