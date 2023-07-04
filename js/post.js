function goToFaqPage(event) {
  event.preventDefault(); // 기본 동작(폼 제출 등) 방지
  history.back(); // 뒤로가기
}

function goToMain() {
  window.location.href = "../index.html";
  }

  document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const title = urlParams.get('title');
    const titleElement = document.getElementById('post-title');
    titleElement.textContent = title;
  });

  