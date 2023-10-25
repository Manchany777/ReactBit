export default [
    { id: 1, img: './image/image01.jpg', title: '강아지01'},
    { id: 2, img: './image/image02.jpg', title: '강아지02'},
    { id: 3, img: './image/image03.jpg', title: '강아지03'},
    { id: 4, img: './image/image04.jpg', title: '강아지04'},
    { id: 5, img: './image/image05.jpg', title: '강아지05'},
    { id: 6, img: './image/image06.jpg', title: '강아지06'},
    { id: 7, img: './image/image07.jpg', title: '강아지07'},
    { id: 8, img: './image/image08.jpg', title: '강아지08'},
]

/*
- public에 있는 이미지 폴더는 index.html를 기준으로부터 상대경로를 지정해야 한다.
- index.html 안의 <div id="root"></div> 이곳으로 렌더링 되기 때문이다.
- 단, './'를 생략해서는 안 된다.

- src 안에 있는 이미지 파일 처리는 참조변수를 사용한다.
  import 참조변수 from '이미지 경로';
*/