import React from 'react';
import BoardCard from 'components/Board/BoardCard';
import SearchDiv from 'components/Board/SearchDiv';
// interface Board {
//     title: String;
//     content: String;
//     date: String;
//     likes: Number;
//     comments: Number;
//     views: Number;
// }

// const dummy : Board[] = 
// [{
//     title: "testTitle",
//     content: "testContent",
//     date: "20230725",
//     likes: 3,
//     comments: 3,
//     views: 3
// }];

function BoardListPage() {

    // const BoardList = dummy.map((element) => (
    //     <BoardCard data={element}/>
    // ))

    return (
        <>
            {SearchDiv()}
            {/* {BoardList}          */}
        </>
    )
}

export default BoardListPage;