import type { Comment } from "./interface";


export const commentListData: Comment[] = [{
    commentId: 1,
    boardId: 1,
    content: "content of test comment 1 content of test comment 1 content of test comment 1 content of test comment 1 content of test comment 1 content of test comment 1 content of test comment 1ontent of testontent of testontent of test",
    date: "2023-07-28",
    writer: "tester1",
    camp: "SSAFY",
    reply: {
        isReply: false,
        targetId: 0,
    },
    isAnonymous: false,
}, {
    commentId: 2,
    boardId: 1,
    content: "content of test comment 2 content of test comment 2 content of test comment 2 content of test comment 2 content of test comment 2 content of test comment 2 content of test comment 2 content of test comment 2 content of test comment 2 v",
    date: "2023-07-28",
    writer: "tester1",
    camp: "SSAFY",
    reply: {
        isReply: true,
        targetId: 2,
    },
    isAnonymous: false,
}, {
    commentId: 3,
    boardId: 1,
    content: "content of test comment 3",
    date: "2023-07-28",
    writer: "tester1",
    camp: "SSAFY",
    reply: {
        isReply: false,
        targetId: 0,
    },
    isAnonymous: true,
}, {
    commentId: 4,
    boardId: 1,
    content: "content of test comment 4",
    date: "2023-07-28",
    writer: "tester2",
    camp: "SSAFY",
    reply: {
        isReply: false,
        targetId: 0,
    },
    isAnonymous: true,
}, {
    commentId: 5,
    boardId: 1,
    content: "content of test comment 5",
    date: "2023-07-28",
    writer: "tester2",
    camp: "SSAFY",
    reply: {
        isReply: true,
        targetId: 4,
    },
    isAnonymous: false,
}]