function login() {
  var user_id = document.getElementById('id').value;
  var user_pw = document.getElementById('password').value;

  if (user_id === '' || user_pw === '') {
    document.getElementById('login-warning').textContent = '아이디와 비밀번호를 입력해주세요.';
  } else if (user_id === 'apple' && user_pw === '1234') {
    alert("로그인 성공");
    localStorage.setItem('user_id', user_id);
    window.location.href = '../index.html';
  } else {
    document.getElementById('login-warning').textContent = '아이디 또는 비밀번호가 일치하지 않습니다.';
  }
}

