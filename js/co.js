function goToMain() {
  window.location.href = "../index.html";
  }

  document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault(); // 폼 제출 동작 취소

  var searchInput = document.getElementById("searchInput").value.toLowerCase();
  var rows = document.getElementsByClassName("tbody")[0].rows;

  for (var i = 0; i < rows.length; i++) {
      var title = rows[i].getElementsByTagName("td")[1].textContent.toLowerCase();

      if (title.includes(searchInput)) {
      rows[i].style.display = ""; // 검색어가 포함된 게시글은 표시
      } else {
      rows[i].style.display = "none"; // 검색어가 포함되지 않은 게시글은 숨김
      }
  }
});

// JavaScript 코드
const tableBody = document.getElementById('tableBody');
const pagination = document.getElementById('pagination');

const rowsPerPage = 10; 
let currentPage = 1; 


function showPostForm() {
  // showForm 함수를 호출하기 전에 formContainer를 숨깁니다.
  document.getElementById('postForm').style.display = 'none';

  var postForm = document.getElementById('postForm');
  postForm.style.display = 'block';

  var allContainer = document.getElementById('all-container');
  allContainer.style.display = 'none';

  var titleElement = document.querySelector('h1.d-none');
  titleElement.textContent = '게시글 작성';
}

  function cancelPost() {
    var postForm = document.getElementById("postForm");
    postForm.classList.remove("show");

    var allContainer = document.getElementById("all-container");
    allContainer.style.display = "block";
  }

  const tablelist = document.querySelector('#tableBody');
  let myTitleData = JSON.parse(localStorage.getItem('titleData')) || [];

  // 제목 데이터를 초기화합니다.
  renderTitles();

  // "제출" 버튼 클릭 시 제목을 가져와서 테이블에 추가합니다.
  document.getElementById("submitButton").addEventListener("click", addTitleFromTextarea);

  function addTitleFromTextarea() {
    const title = document.getElementById('title').value.trim(); // 제목을 가져옵니다.
    const content = document.getElementById('content').value.trim(); // 제목을 가져옵니다.

    if (title !== "" || content !== "") {
      // 새로운 제목 데이터 객체 생성
      const newTitleData = {
        title: title,
        date: new Date().toISOString(),
        content: content // 내용을 저장합니다.
      };

      // 기존 제목 데이터 가져오기
      let titleData = JSON.parse(localStorage.getItem('titleData')) || [];

      // 새로운 제목 데이터 추가
      titleData.unshift(newTitleData);

      // 제목 데이터를 localStorage에 저장
      localStorage.setItem('titleData', JSON.stringify(titleData));


      // 테이블의 첫 번째 행에 제목을 추가합니다.
      const newRow = tablelist.insertRow(0); // 맨 위에 행을 추가합니다.
      const newCellNum = newRow.insertCell();
      const newCellTitle = newRow.insertCell();
      const newCellAuthor = newRow.insertCell();
      const newCellDate = newRow.insertCell();
      const newCellViews = newRow.insertCell();
      newCellNum.textContent = 1; // 번호
      newCellTitle.textContent = title; // 제목
      newCellAuthor.textContent = "작성자"; // 작성자
      newCellDate.textContent = newTitleData.date; // 작성일
      newCellViews.textContent = 0; // 조회수 초기값

      document.getElementById('title').value = "";

      // 번호 업데이트
      updateNumber();
    }
  }

  function renderTitles() {
    // 기존에 저장된 제목을 테이블에 추가합니다.
    myTitleData.forEach((title, index) => {
      const newRow = tablelist.insertRow();
      const newCellNum = newRow.insertCell();
      const newCellTitle = newRow.insertCell();
      const newCellAuthor = newRow.insertCell();
      const newCellDate = newRow.insertCell();
      const newCellViews = newRow.insertCell();
      newCellNum.textContent = index + 1; // 번호
      newCellTitle.textContent = title.title; // 제목
      newCellAuthor.textContent = "익명"; // 작성자
      newCellDate.textContent = title.date; // 작성일
      newCellViews.textContent = 0; // 조회수 초기값

      // 제목을 클릭했을 때 폼을 출력하는 이벤트 리스너를 추가합니다.
      newCellTitle.addEventListener('click', function() {
        showForm(title);
      });
    });

    // 번호 업데이트
    updateNumber();
  }

  function updateNumber() {
    const rows = tablelist.rows;
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const numCell = row.cells[0];
      numCell.textContent = rows.length - i; // 번호를 내림차순으로 표시
    }
  }

  function showForm(titleData) {
    const formContainer = document.getElementById('formContainer');
    const allContainer = document.getElementById('all-container'); // all-container 요소를 가져옵니다.
  
    // 폼 요소 가져오기
    const titleTextarea = document.getElementById('post_tit');
    const contentTextarea = document.getElementById('post_cont');
  
    // 가져온 데이터를 폼에 표시합니다.
    titleTextarea.value = titleData.title;
    contentTextarea.value = titleData.content;
  
    // 폼 제출 이벤트 처리
    formContainer.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const updatedTitle = titleTextarea.value.trim();
      const updatedContent = contentTextarea.value.trim();
  
      console.log('수정된 제목:', updatedTitle);
      console.log('수정된 내용:', updatedContent);
  
      titleData.title = updatedTitle;
      titleData.content = updatedContent;
  
      localStorage.setItem('titleData', JSON.stringify(titleData));
  
      formContainer.style.display = 'none';
      allContainer.style.display = 'block';
    });
  
    // 폼을 보여줍니다.
    formContainer.style.display = 'block';
    allContainer.style.display = 'none';


    const communityText = document.querySelector('h1.d-none');
  communityText.textContent = '';
  }


  const inputComments = document.querySelectorAll('.comment-input'); // input태그
  const submitBtn = document.querySelectorAll('.posting-box'); // button태그
  const commentList = document.querySelector('#comments-body'); // 댓글을 추가할 tbody요소

  // 댓글 데이터를 localStorage에서 가져옵니다.
  let commentsData = JSON.parse(localStorage.getItem('commentsData')) || [];

  // 댓글 데이터를 초기화합니다.
  renderComments();

  const commentSetting = (button, index) => {
    const comment = inputComments[index].value.trim();
    if (comment !== "") {
      // 댓글 데이터에 새로운 댓글을 추가합니다.
      const newComment = {
        content: comment,
        date: new Date().toISOString()
      };
      commentsData.push(newComment);

      // 댓글 데이터를 localStorage에 저장합니다.
      localStorage.setItem('commentsData', JSON.stringify(commentsData));

      // 댓글을 테이블에 추가합니다.
      const newRow = commentList.insertRow();
      const newCellContent = newRow.insertCell();
      const newCellDelete = newRow.insertCell();
      newCellContent.textContent = comment;
      newCellDelete.innerHTML = `<button class="delete-btn">삭제</button>`;

      inputComments[index].value = "";

      // 삭제 버튼에 클릭 이벤트를 추가합니다.
      const deleteBtn = newCellDelete.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => {
        deleteComment(newRow.rowIndex - 1);
      });
    }
  };

  function renderComments() {
    // 기존에 저장된 댓글을 테이블에 추가합니다.
    commentsData.forEach((comment, index) => {
      const newRow = commentList.insertRow();
      const newCellContent = newRow.insertCell();
      const newCellDelete = newRow.insertCell();
      newCellContent.textContent = comment.content;
      newCellDelete.innerHTML = `<button class="delete-btn">삭제</button>`;

      // 삭제 버튼에 클릭 이벤트를 추가합니다.
      const deleteBtn = newCellDelete.querySelector('.delete-btn');
      deleteBtn.addEventListener('click', () => {
        deleteComment(index);
      });
    });
  }

  function deleteComment(index) {
    // 댓글 데이터에서 해당 인덱스의 댓글을 삭제합니다.
    commentsData.splice(index, 1);

    // 테이블에서 해당 인덱스의 행을 삭제합니다.
    commentList.deleteRow(index);

    // 댓글 데이터를 localStorage에 저장합니다.
    localStorage.setItem('commentsData', JSON.stringify(commentsData));
  }

  // 버튼 클릭했을때 댓글 등록
  submitBtn.forEach((button, index) => {
    button.addEventListener("click", () => {
      commentSetting(button, index);
    });
  });

  // 엔터 쳤을때 댓글 등록
  inputComments.forEach((button, index) => {
    button.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        commentSetting(button, index);
      }
    });
  });

  function goToCoPage() {
    window.location.href = "co.html";
  }

  const deleteButton = document.querySelector('.deletebutton');

  // 삭제 버튼에 클릭 이벤트 리스너를 추가합니다.
  deleteButton.addEventListener('click', function() {
    // 폼 요소 가져오기
    const titleTextarea = document.getElementById('post_tit');
    const contentTextarea = document.getElementById('post_cont');
  
    // 삭제할 데이터의 제목과 내용
    const targetTitle = titleTextarea.value.trim();
    const targetContent = contentTextarea.value.trim();
  
    // 기존 데이터 가져오기
    let titleData = JSON.parse(localStorage.getItem('titleData')) || [];
  
    // 삭제할 데이터 찾기
    const updatedTitleData = titleData.filter(function(data) {
      return data.title !== targetTitle || data.content !== targetContent;
    });
  
    if (updatedTitleData.length < titleData.length) {
      // 게시글이 삭제되었을 경우
      // 수정된 데이터 다시 저장
      localStorage.setItem('titleData', JSON.stringify(updatedTitleData));
  
      // 해당 테이블 행 삭제
      // 예시로 테이블의 ID가 'table'이라고 가정하고 삭제 작업을 수행합니다.
      const table = document.getElementById('table');
      const rows = table.getElementsByTagName('tr');
  
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const rowTitle = row.cells[0].textContent.trim();
        const rowContent = row.cells[1].textContent.trim();
  
        if (rowTitle === targetTitle && rowContent === targetContent) {
          table.deleteRow(i);
          break;
        }
      }
  
      // 페이지 이동
      
    }
    window.location.href = 'co.html';
  });
  
function updateFAQPage(page) {
  faqTableBody.innerHTML = '';
  faqCurrentPage = page;

  var startIndex = (faqCurrentPage - 1) * rowsPerPage;
  var endIndex = startIndex + rowsPerPage;

  for (var i = startIndex; i < endIndex && i < faqData.length; i++) {
    var row = faqTableBody.insertRow();
    row.insertCell().textContent = faqData[i].번호;
    row.insertCell().textContent = faqData[i].제목;
    row.insertCell().textContent = faqData[i].작성자;
    row.insertCell().textContent = faqData[i].작성일;
    row.insertCell().textContent = faqData[i].조회수;
  }
}

var user_id = localStorage.getItem('user_id');
var userSection = document.getElementById('userSection');
var logoutSection = document.getElementById('logoutSection');

if (user_id) {
  var welcomeUserElement = document.getElementById('welcome-user');
  welcomeUserElement.textContent = '환영합니다, ' + user_id + '님!';
  userSection.style.display = 'block';
  logoutSection.style.display = 'none';
} else {
  logoutSection.style.display = 'block';
  userSection.style.display = 'none';
}
function logout() {
  localStorage.removeItem('user_id');
  window.location.href = 'index.html';
}

