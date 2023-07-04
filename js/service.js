document.addEventListener('DOMContentLoaded', () => {
  const contactButton = document.querySelector('a[href="#contact"]');
  const contactSection = document.querySelector('#contact');

  const faqButton = document.querySelector('a[href="#faq"]');
  const faqSection = document.querySelector('.faq');

  const noticeButton = document.querySelector('a[href="#notice"]');
  const noticeSection = document.querySelector('.notice');

  faqSection.style.display = 'none';
  noticeSection.style.display = 'none';

  faqButton.addEventListener('click', (event) => {
    event.preventDefault();
    contactSection.style.display = 'none';
    faqSection.style.display = 'block';
    noticeSection.style.display = 'none';
  });

  noticeButton.addEventListener('click', (event) => {
    event.preventDefault();
    contactSection.style.display = 'none';
    faqSection.style.display = 'none';
    noticeSection.style.display = 'block';
  });

  contactButton.addEventListener('click', (event) => {
    event.preventDefault();
    contactSection.style.display = 'block';
    faqSection.style.display = 'none';
    noticeSection.style.display = 'none';
  });

  const submitForm = () => {
    evert.preventDefault();
    alert("문의가 완료되었습니다 ^_^");
    window.location.href = "service.html";
  };

  const contactForm = document.getElementById("contact-form");
  contactForm.addEventListener("submit", submitForm);
});

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

function goToMain() {
  window.location.href = '../index.html';
}

function logout() {
  localStorage.removeItem('user_id');
  window.location.href = '../index.html';
}


function checkCategory() {
  var selectElement = document.getElementById('select');
  selectElement.selectedIndex = 0; // 항상 첫 번째 옵션 선택
}

const faqTableBody = document.getElementById('faq-tableBody');
const faqPagination = document.getElementById('faq-pagination');

const noticeTableBody = document.getElementById('notice-tableBody');
const noticePagination = document.getElementById('notice-pagination');


const rowsPerPage = 7; // 한 페이지에 표시될 행 수
let faqCurrentPage = 1; // FAQ 현재 페이지
let noticeCurrentPage = 1; // 공지사항 현재 페이지

const faqData = [
  { 번호: 7, 제목: '이 사이트 내부에서의욕설의 기준이 뭔가요?', 작성자: '운영자', 작성일: '2023-06-06', 조회수: 15 },
  { 번호: 6, 제목: '추천 영화는 어떤 기준으로 선정되나요?', 작성자: '운영자', 작성일: '2023-05-02', 조회수: 130 },
  { 번호: 5, 제목: '회원가입을 굳이 해야하나요?', 작성자: '운영자', 작성일: '2023-04-30', 조회수: 123 },
  { 번호: 4, 제목: '영화 추천 사이트는 어떠한 목적으로 만들어졌나요?', 작성자: '운영자', 작성일: '2023-03-01', 조회수: 110 },
  { 번호: 3, 제목: '영화 추천 사이트는 어떤 장르의 영화를 다루나요?', 작성자: '운영자', 작성일: '2022-10-29', 조회수: 100 },
  { 번호: 2, 제목: '추천 영화 외에 다른 기능이 있나요?', 작성자: '운영자', 작성일: '2020-10-10', 조회수: 98 },
  { 번호: 1, 제목: '영화 추천 사이트의 이용은 무료인가요?', 작성자: '운영자', 작성일: '2023-08-02', 조회수: 58 }
];

const noticeData = [
  { 번호: 8, 제목: '필독!!(처음 오신 분들 무조건 읽어주세요)', 작성자: '운영자', 작성일: '2023-06-02', 조회수: 144 },
  { 번호: 7, 제목: '욕설 퇴출입니다.', 작성자: '운영자', 작성일: '2023-05-20', 조회수: 134},
  { 번호: 6, 제목: '이벤트 결과', 작성자: '운영자', 작성일: '2023-05-11', 조회수: 125 },
  { 번호: 5, 제목: '2023년 6월 업데이트 내용', 작성자: '운영자', 작성일: '2023-04-25', 조회수: 167 },
  { 번호: 4, 제목: '2022년 4월 6일 서비스 점검', 작성자: '운영자', 작성일: '2023-04-01', 조회수: 100 },
  { 번호: 3, 제목: '사이트 이용시 주의사항', 작성자: '운영자', 작성일: '2023-2-10', 조회수: 87 },
  { 번호: 2, 제목: 'SoSu 사이트를 좀 더 잘 활용하려면!?', 작성자: '운영자', 작성일: '2022-10-14', 조회수: 98 },
  { 번호: 1, 제목: '이벤트(문상5000원)', 작성자: '운영자', 작성일: '2022-10-01', 조회수: 105 }
];

function showPostForm(title, id) {
  if (title === '이 사이트 내부에서의욕설의 기준이 뭔가요?') {
    window.location.href = '../HTML/post.html?title=' + encodeURIComponent(title);
  }
}

// FAQ 페이지 업데이트
function updateFAQPage(page) {

  faqCurrentPage = page;

  var startIndex = (faqCurrentPage - 1) * rowsPerPage;
  var endIndex = startIndex + rowsPerPage;

  for (var i = startIndex; i < endIndex && i < faqData.length; i++) {
    var row = faqTableBody.insertRow();
    row.insertCell().textContent = faqData[i].번호;
    var titleCell = row.insertCell();
    titleCell.innerHTML = `<a href="#" onclick="showPostForm('${faqData[i].제목}', ${faqData[i].번호})">${faqData[i].제목}</a>`;


    row.insertCell().textContent = faqData[i].작성자;
    row.insertCell().textContent = faqData[i].작성일;
    row.insertCell().textContent = faqData[i].조회수;
  }

  // 페이지네이션 업데이트
  var totalPages = Math.ceil(faqData.length / rowsPerPage);
  faqPagination.innerHTML = '';

  for (var i = 1; i <= totalPages; i++) {
    var pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.addEventListener('click', function () {
      updateFAQPage(parseInt(this.textContent));
    });
    faqPagination.appendChild(pageButton);
  }
}

// 공지사항 페이지 업데이트
function updateNoticePage(page) {
  noticeTableBody.innerHTML = '';
  noticeCurrentPage = page;

  var startIndex = (noticeCurrentPage - 1) * rowsPerPage;
  var endIndex = startIndex + rowsPerPage;

  for (var i = startIndex; i < endIndex && i < noticeData.length; i++) {
    var row = noticeTableBody.insertRow();
    row.insertCell().textContent = noticeData[i].번호;
    row.insertCell().textContent = noticeData[i].제목;
    row.insertCell().textContent = noticeData[i].작성자;
    row.insertCell().textContent = noticeData[i].작성일;
    row.insertCell().textContent = noticeData[i].조회수;
  }

  // 페이지네이션 업데이트
  var totalPages = Math.ceil(noticeData.length / rowsPerPage);
  noticePagination.innerHTML = '';

  for (var i = 1; i <= totalPages; i++) {
    var pageButton = document.createElement('button');
    pageButton.textContent = i;
    pageButton.addEventListener('click', function () {
      updateNoticePage(parseInt(this.textContent));
    });
    noticePagination.appendChild(pageButton);
  }
}

// service.js

function goToServicePage() {
  window.location.href = "service.html";
}

// 초기 페이지 업데이트
updateFAQPage(1);
updateNoticePage(1);

