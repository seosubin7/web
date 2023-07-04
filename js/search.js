function showContent(contentId) {
    var contentDivs = document.getElementsByClassName("content");
    for (var i = 0; i < contentDivs.length; i++) {
      var content = contentDivs[i];
      content.style.display = "none";
    }
  
    // movieInfo 숨기기
    var movieInfo = document.getElementsByClassName("movie-info");
if (movieInfo.length > 0) {
  movieInfo[0].style.display = "none";
}

  
    var selectedContent = document.getElementById(contentId);
    selectedContent.style.display = "block";
  }
  
  
  function showMovie(genreId, genreName) {
    hideAllMovieContent();
    document.getElementById(genreId).style.display = "block";
  
    
  
    if (genreId == 'korea' || genreId == 'unkorea') {
      var koreaTitle = document.getElementById('korea-title');
      koreaTitle.innerHTML = `<h2>${genreName}</h2>`;
      
    }
    else {
      var genreTitle = document.getElementById('genre-title');
    genreTitle.innerHTML = `<h2>${genreName}</h2>`;
    }
  
    // movieInfo 숨기기
    var movieInfo = document.getElementById("movieInfo");
    movieInfo.style.display = "none";
  }
  
  
  function hideAllMovieContent() {
  var contentDivs = document.getElementsByClassName("movie-content");
  for (var i = 0; i < contentDivs.length; i++) {
    contentDivs[i].style.display = "none";
  }
  
  // movieInfo 숨기기
  var movieInfo = document.getElementsByClassName("movie-info");
if (movieInfo.length > 0) {
  movieInfo[0].style.display = "none";
}
}
  
  var comedyButton = document.getElementById('comedy-button');
  comedyButton.addEventListener('click', function() {
    showMovie('comedy', '코미디');
  });
  var actionButton = document.getElementById('action-button');
  actionButton.addEventListener('click', function() {
    showMovie('action', '액션');
  });
  
  var romanceButton = document.getElementById('romance-button');
  romanceButton.addEventListener('click', function() {
    showMovie('romance', '로맨스');
  });
  
  var thrillerButton = document.getElementById('thriller-button');
  thrillerButton.addEventListener('click', function() {
    showMovie('thriller', '스릴러');
  });
  
  var animationButton = document.getElementById('animation-button');
  animationButton.addEventListener('click', function() {
    showMovie('animation', '애니메이션');
  });
  
  var musicalButton = document.getElementById('musical-button');
  musicalButton.addEventListener('click', function() {
    showMovie('musical', '뮤지컬');
  });
  
  
  var koreaButton = document.getElementById('korean-button');
  koreaButton.addEventListener('click', function() {
    showMovie('korea', '국내');
  });
  
  var unkoreaButton = document.getElementById('unkorean-button');
  unkoreaButton.addEventListener('click', function() {
    showMovie('unkorea', '국외');
  });
  
  function resetgenreTitle() {
      var genreTitle = document.getElementById('genre-title');
      genreTitle.innerHTML = "<h2>장르별</h2>";
      // Hide the comedy div and its contents
      var genres = ['comedy', 'action', 'romance', 'thriller', 'animation', 'musical'];
  
  for (var i = 0; i < genres.length; i++) {
    var genreDiv = document.getElementById(genres[i]);
    if (genreDiv) {
      genreDiv.style.display = "none";
    }
  }
    }
  
    function resetkoreaTitle() {
      var koreaTitle = document.getElementById('korea-title');
      koreaTitle.innerHTML = "<h2>국가별</h2>";
          // Hide the comedy div and its contents
          var genres = ['korea', 'unkorea'];
  
  for (var i = 0; i < genres.length; i++) {
    var genreDiv = document.getElementById(genres[i]);
    if (genreDiv) {
      genreDiv.style.display = "none";
    }
  }
    }
  
  //이미지 넣기
  var comedyTable = document.getElementById("comedyTable");
  var comedyImages = [
    { src: "../images/comedy/1.jpg", alt: "Image 1", title: "극한직업",
    good: "★★★★★",
    summary: "대한민국 111분",
    rating: "9.20",
    audience: "1,626만명",
    expandedText: "불철주야 달리고 구르지만 실적은 바닥, 급기야 해체 위기를 맞는 마약반! 더 이상 물러설 곳이 없는 팀의 맏형 고반장은 국제 범죄조직의 국내 마약 밀반입 정황을 포착하고 장형사, 마형사, 영호, 재훈까지 4명의 팀원들과 함께 잠복 수사에 나선다. 마약반은 24시간 감시를 위해 범죄조직의 아지트 앞 치킨집을 인수해 위장 창업을 하게 되고, 뜻밖의 절대미각을 지닌 마형사의 숨은 재능으로 치킨집은 일약 맛집으로 입소문이 나기 시작한다. 수사는 뒷전, 치킨장사로 눈코 뜰 새 없이 바빠진 마약반에게 어느 날 절호의 기회가 찾아오는데… 범인을 잡을 것인가, 닭을 잡을 것인가!"  },
    { src: "../images/comedy/2.jpg", alt: "Image 2", title: "수상한그녀",
    good: "★★★★",
    summary: "대한민국 124분",
    rating: "9.09",
    audience: "866만명",
    expandedText: "아들 자랑이 유일한 낙인 욕쟁이 칠순 할매 오말순(나문희分)은 어느 날, 가족들이 자신을 요양원으로 독립(?)시키려 한다는 청천벽력 같은 사실을 알게 된다. 뒤숭숭한 마음을 안고 밤길을 방황하던 할매 말순은 오묘한 불빛에 이끌려 ‘청춘 사진관’으로 들어간다. 난생 처음 곱게 꽃단장을 하고 영정사진을 찍고 나오는 길, 그녀는 버스 차창 밖에 비친 자신의 얼굴을 보고 경악을 금치 못한다. 오드리 헵번처럼 뽀얀 피부, 날렵한 몸매... 주름진 할매에서 탱탱한 꽃처녀의 몸으로 돌아간 것! 아무도 알아보지 못하는 자신의 젊은 모습에 그녀는 스무살 ‘오두리’가 되어 빛나는 전성기를 즐겨 보기로 마음 먹는데... 2014년 새해, 대한민국에 웃음 보따리를 안겨줄 <수상한 그녀>가 온다!"},
    { src: "../images/comedy/3.jpg", alt: "Image 3", title: "인턴",
    good: "★★★★★",
    summary: "미국 121분",
    rating: "9.04",
    audience: "361만명",
    expandedText: "창업 1년 반 만에 직원 220명의 성공신화를 이룬 줄스(앤 해서웨이). TPO에 맞는 패션센스, 업무를 위해 사무실에서도 끊임 없는 체력관리, 야근하는 직원 챙겨주고, 고객을 위해 박스포장까지 직접 하는 열정적인 30세 여성 CEO! 한편, 수십 년 직장생활에서 비롯된 노하우와 나이만큼 풍부한 인생경험이 무기인 만능 70세의 벤(로버트 드 니로)을 인턴으로 채용하게 되는데.."  },
    { src: "../images/comedy/4.jpg", alt: "Image 4", title: "내안의 그놈",
    good: "★★★★★",
    summary: "대한민국 122분",
    rating: "8.76",
    audience: "191만명",
    expandedText: "엘리트 아재 판수(박성웅)를 우연히 옥상에서 떨어진 고등학생 동현(진영)이 덮치면서 제대로 바뀐다. 게다가 판수는 동현의 몸으로 첫사랑 미선(라미란)과 존재도 몰랐던 딸 현정(이수민)을 만나게 되는데… 대유잼의 향연, 넌 이미 웃고 있다!"  },
    { src: "../images/comedy/5.jpg", alt: "Image 5", title: "청년경찰",
    good: "★★★★",
    summary: "대한민국 109분",
    rating: "9.03",
    audience: "565만명",
    expandedText: "의욕충만 경찰대생 기준(박서준) X 이론백단 경찰대생 희열(강하늘) 둘도 없는 친구인 두 사람은 외출을 나왔다 우연히 납치 사건을 목격하게 된다. 목격자는 오직 두 사람 뿐! 기준과 희열은 학교에서 배운 대로 지체 없이 경찰에 신고한다. 하지만 복잡한 절차와 부족한 증거로 수사는 전혀 진행될 기미가 보이지 않는 상황! 1분 1초가 급박한 상황에서 아까운 시간만 흘러가자, 기준과 희열은 직접 발로 뛰는 수사에 나서기로 하고 예측 불가능한 상황을 마주하게 되는데… 전공지식 총동원! 파릇파릇한 놈들의 혈기왕성 실전수사가 시작된다!"  },
    { src: "../images/comedy/6.jpg", alt: "Image 6", title: "히트맨",
    good: "★★★★",
    summary: "대한민국 109분",
    rating: "7.97",
    audience: "240만명",
    expandedText: "웹툰 작가가 되고 싶어 국정원을 탈출한 비밀 프로젝트 방패연 출신 전설의 암살요원 '준'. 그러나 현실은 연재하는 작품마다 역대급 악플만 받을 뿐이다. 술김에 그리지 말아야 할 1급 기밀을 그려버리고 예상치 않게 웹툰은 하루아침에 초대박이 나지만, 그로 인해 '준'은 국정원과 테러리스트의 더블 타깃이 되는데... 웹툰 작가가 된 전설의 암살요원, 그의 히트 본능이 깨어난다!"  },
    { src: "../images/comedy/7.jpg", alt: "Image 7", title: "센트럴 인텔리전스",
    good: "★★★",
    summary: "미국 107분",
    rating: "7.75",
    audience: "240만명",
    expandedText: "고등학교 시절 잘 나가던 운동선수였던 칼빈은 20년 후 평범한 회계사로 살아가고 있다. 인생이 생각만큼 잘 풀리지 않아 우울한 나날을 보내던 칼빈 앞에 학창 시절의 뚱뚱보 왕따 로디가 고등학교 때와는 완전히 상반된 모습으로 나타난다. 알고 보니 로디는 현재 밥 스톤이라는 이름의 CIA 요원이었던 것. 얼떨결에 밥의 일에 휘말리게 된 칼빈은 일생일대의 생고생을 겪게 되는데..."  },
    { src: "../images/comedy/8.jpg", alt: "Image 8", title: "걸캅스",
    good: "★★★★",
    summary: "대한민국 107분",
    rating: "9.01",
    audience: "162만명",
    expandedText: "민원실 퇴출 0순위 전직 전설의 형사 '미영'과 민원실로 밀려난 현직 꼴통 형사 '지혜' 집에서는 눈만 마주쳐도 으르렁 대는 시누이 올케 사이인 두 사람은 민원실에 신고접수를 하기 위해 왔다가 차도에 뛰어든 한 여성을 목격하고 그녀가 48시간 후 업로드가 예고된 디지털 성범죄 사건의 피해자란 사실을 알게 된다. 강력반, 사이버 범죄 수사대, 여성청소년계까지 경찰 내 모든 부서들에서 복잡한 절차와 인력 부족을 이유로 사건이 밀려나자 ‘미영’과 ‘지혜’는 비공식 수사에 나서기로 결심한다. 수사가 진전될수록 형사의 본능이 꿈틀대는 ‘미영’과 정의감에 활활 불타는 ‘지혜’는 드디어 용의자들과 마주할 기회를 잡게 되는데… 걸크러시 콤비의 비공식 합동 수사가 펼쳐진다!"  },
    { src: "../images/comedy/9.jpg", alt: "Image 9", title: "웅남이",
    good: "★★★",
    summary: "대한민국 97분",
    rating: "7.77",
    audience: "31만명",
    expandedText: "인간을 초월하는 짐승 같은 능력으로 국제 범죄 조직에 맞서는 웅남이의 좌충우돌 코미디 <웅남이>"},
    { src: "../images/comedy/10.jpg", alt: "Image 10", title: "완벽한 타인",
    good: "★★★★",
    summary: "대한민국 115분",
    rating: "9.08",
    audience: "529만명",
    expandedText: "우리 게임 한 번 해볼까? 다들 핸드폰 올려봐 저녁 먹는 동안 오는 모든 걸 공유하는 거야 전화, 문자, 카톡, 이메일 할 것 없이 싹! 오랜만의 커플 모임에서 한 명이 게임을 제안한다. 바로 각자의 핸드폰을 테이블 위에 올려두고 통화 내용부터 문자와 이메일까지 모두 공유하자고 한 것. 흔쾌히 게임을 시작하게 된 이들의 비밀이 핸드폰을 통해 들통나면서 처음 게임을 제안했던 것과는 전혀 다른 상상치 못한 결말로 흘러가는데…. 상상한 모든 예측이 빗나간다!"},
    { src: "../images/comedy/11.jpg", alt: "Image 11", title: "돈 룩 업",
    good: "★★★★★",
    summary: "미국 139분",
    rating: "8.23",
    audience: "7.2만명",
    expandedText: "천문학과 대학원생 케이트 디비아스키(제니퍼 로렌스)와 담당 교수 랜들 민디 박사(레오나르도 디카프리오)는 태양계 내의 궤도를 돌고 있는 혜성이 지구와 직접 충돌하는 궤도에 들어섰다는 엄청난 사실을 발견한다. 하지만 지구를 파괴할 에베레스트 크기의 혜성이 다가온다는 불편한 소식에 아무도 신경 쓰지 않는다. 지구를 멸망으로 이끌지도 모르는 소식을 사람들에게 알리기 위해 언론 투어에 나선 두 사람, 혜성 충돌에 무관심한 대통령 올리언(메릴 스트립)과 그녀의 아들이자 비서실장 제이슨(조나 힐)의 집무실을 시작으로 브리(케이트 블란쳇)와 잭(타일러 페리)이 진행하는 인기 프로그램 ‘더 데일리 립’ 출연까지 이어가지만 성과가 없다. 혜성 충돌까지 남은 시간은 단 6개월, 24시간 내내 뉴스와 정보는 쏟아지고 사람들은 소셜미디어에 푹 빠져있는 시대이지만 정작 이 중요한 뉴스는 대중의 주의를 끌지 못한다. 도대체 어떻게 해야 세상 사람들이 하늘을 좀 올려다볼 수 있을까?!"},
    { src: "../images/comedy/12.jpg", alt: "Image 12", title: "세 얼간이",
    good: "★★★★★",  
    summary: "인도 141분",
    rating: "9.35",
    audience: "45만명",
    expandedText: "천재들만 간다는 일류 명문대 ICE, 성적과 취업만을 강요하는 학교를 발칵 뒤집어 놓은 대단한 녀석 란초! 아버지가 정해준 꿈, `공학자`가 되기 위해 정작 본인이 좋아하는 일은 포기하고 공부만하는 파파보이 파르한! 찢어지게 가난한 집, 병든 아버지와 식구들을 책임지기 위해 무조건 대기업에 취직해야만 하는 라주! 친구의 이름으로 뭉친 `세 얼간이`! 삐딱한 천재들의 진정한 꿈을 찾기 위한 세상 뒤집기 한판이 시작된다!"  },
    ];
  var actionTable = document.getElementById("actionTable");
  var actionImages = [
    { src: "../images/action/1.jpg", alt: "Image 1", title: "노트북" },
    { src: "../images/action/2.jpg", alt: "Image 2", title: "비긴어게인" },
    { src: "../images/action/3.jpg", alt: "Image 3", title: "20세기소녀" },
    { src: "../images/action/4.jpg", alt: "Image 4", title: "타이타닉" },
    { src: "../images/action/5.jpg", alt: "Image 5", title: "라라랜드" },
    { src: "../images/action/6.jpg", alt: "Image 6", title: "이미지" },
    { src: "../images/action/7.jpg", alt: "Image 7", title: "이미지" },
    { src: "../images/action/8.jpg", alt: "Image 8", title: "이미지" },
    { src: "../images/action/9.jpg", alt: "Image 9", title: "이미지" },
    { src: "../images/action/10.jpg", alt: "Image 10", title: "이미지" },
    { src: "../images/action/11.jpg", alt: "Image 11", title: "이미지" },
    { src: "../images/action/12.jpg", alt: "Image 12", title: "이미지" }
  ];
  var romanceTable = document.getElementById("romanceTable");
  var romanceImages = [
    { src: "../images/romance/1.jpg", alt: "Image 1", title: "노트북" },
    { src: "../images/romance/2.jpg", alt: "Image 2", title: "비긴어게인" },
    { src: "../images/romance/3.jpg", alt: "Image 3", title: "20세기소녀" },
    { src: "../images/romance/4.jpg", alt: "Image 4", title: "타이타닉" },
    { src: "../images/romance/5.jpg", alt: "Image 5", title: "라라랜드" },
    { src: "../images/romance/6.jpg", alt: "Image 6", title: "이미지" },
    { src: "../images/romance/7.jpg", alt: "Image 7", title: "이미지" },
    { src: "../images/romance/8.jpg", alt: "Image 8", title: "이미지" },
    { src: "../images/romance/9.jpg", alt: "Image 9", title: "이미지" },
    { src: "../images/romance/10.jpg", alt: "Image 10", title: "이미지" },
    { src: "../images/romance/11.jpg", alt: "Image 11", title: "이미지" },
    { src: "../images/romance/12.jpg", alt: "Image 12", title: "이미지" }
  ];
  var thrillerTable = document.getElementById("thrillerTable");
  var thrillerImages = [
    { src: "../images/thriller/1.jpg", alt: "Image 1", title: "노트북" },
    { src: "../images/thriller/2.jpg", alt: "Image 2", title: "비긴어게인" },
    { src: "../images/thriller/3.jpg", alt: "Image 3", title: "20세기소녀" },
    { src: "../images/thriller/4.jpg", alt: "Image 4", title: "타이타닉" },
    { src: "../images/thriller/5.jpg", alt: "Image 5", title: "라라랜드" },
    { src: "../images/thriller/6.jpg", alt: "Image 6", title: "이미지" },
    { src: "../images/thriller/7.jpg", alt: "Image 7", title: "이미지" },
    { src: "../images/thriller/8.jpg", alt: "Image 8", title: "이미지" },
    { src: "../images/thriller/9.jpg", alt: "Image 9", title: "이미지" },
    { src: "../images/thriller/10.jpg", alt: "Image 10", title: "이미지" },
    { src: "../images/thriller/11.jpg", alt: "Image 11", title: "이미지" },
    { src: "../images/thriller/12.jpg", alt: "Image 12", title: "이미지" }
  ];
  var animationTable = document.getElementById("animationTable");
  var animationImages = [
    { src: "../images/animation/1.jpg", alt: "Image 1", title: "노트북" },
    { src: "../images/animation/2.jpg", alt: "Image 2", title: "비긴어게인" },
    { src: "../images/animation/3.jpg", alt: "Image 3", title: "20세기소녀" },
    { src: "../images/animation/4.jpg", alt: "Image 4", title: "타이타닉" },
    { src: "../images/animation/5.jpg", alt: "Image 5", title: "라라랜드" },
    { src: "../images/animation/6.jpg", alt: "Image 6", title: "이미지" },
    { src: "../images/animation/7.jpg", alt: "Image 7", title: "이미지" },
    { src: "../images/animation/8.jpg", alt: "Image 8", title: "이미지" },
    { src: "../images/animation/9.jpg", alt: "Image 9", title: "이미지" },
    { src: "../images/animation/10.jpg", alt: "Image 10", title: "이미지" },
    { src: "../images/animation/11.jpg", alt: "Image 11", title: "이미지" },
    { src: "../images/animation/12.jpg", alt: "Image 12", title: "이미지" }
  ];
  var musicalTable = document.getElementById("musicalTable");
  var musicalImages = [
    { src: "../images/musical/1.jpg", alt: "Image 1", title: "노트북" },
    { src: "../images/musical/2.jpg", alt: "Image 2", title: "비긴어게인" },
    { src: "../images/musical/3.jpg", alt: "Image 3", title: "20세기소녀" },
    { src: "../images/musical/4.jpg", alt: "Image 4", title: "타이타닉" },
    { src: "../images/musical/5.jpg", alt: "Image 5", title: "라라랜드" },
    { src: "../images/musical/6.jpg", alt: "Image 6", title: "이미지" },
    { src: "../images/musical/7.jpg", alt: "Image 7", title: "이미지" },
    { src: "../images/musical/8.jpg", alt: "Image 8", title: "이미지" },
    { src: "../images/musical/9.jpg", alt: "Image 9", title: "이미지" },
    { src: "../images/musical/10.jpg", alt: "Image 10", title: "이미지" },
    { src: "../images/musical/11.jpg", alt: "Image 11", title: "이미지" },
    { src: "../images/musical/12.jpg", alt: "Image 12", title: "이미지" }
  ];
  var koreaTable = document.getElementById("koreaTable");
  var koreaImages = [
    { src: "../images/korea/1.jpg", alt: "Image 1", title: "노트북" },
    { src: "../images/korea/2.jpg", alt: "Image 2", title: "비긴어게인" },
    { src: "../images/korea/3.jpg", alt: "Image 3", title: "20세기소녀" },
    { src: "../images/korea/4.jpg", alt: "Image 4", title: "타이타닉" },
    { src: "../images/korea/5.jpg", alt: "Image 5", title: "라라랜드" },
    { src: "../images/korea/6.jpg", alt: "Image 6", title: "이미지" },
    { src: "../images/korea/7.jpg", alt: "Image 7", title: "이미지" },
    { src: "../images/korea/8.jpg", alt: "Image 8", title: "이미지" },
    { src: "../images/korea/9.jpg", alt: "Image 9", title: "이미지" },
    { src: "../images/korea/10.jpg", alt: "Image 10", title: "이미지" },
    { src: "../images/korea/11.jpg", alt: "Image 11", title: "이미지" },
    { src: "../images/korea/12.jpg", alt: "Image 12", title: "이미지" }
  ];
  var unkoreaTable = document.getElementById("unkoreaTable");
  var unkoreaImages = [
    { src: "../images/unkorea/1.jpg", alt: "Image 1", title: "노트북" },
    { src: "../images/unkorea/2.jpg", alt: "Image 2", title: "비긴어게인" },
    { src: "../images/unkorea/3.jpg", alt: "Image 3", title: "20세기소녀" },
    { src: "../images/unkorea/4.jpg", alt: "Image 4", title: "타이타닉" },
    { src: "../images/unkorea/5.jpg", alt: "Image 5", title: "라라랜드" },
    { src: "../images/unkorea/6.jpg", alt: "Image 6", title: "이미지" },
    { src: "../images/unkorea/7.jpg", alt: "Image 7", title: "이미지" },
    { src: "../images/unkorea/8.jpg", alt: "Image 8", title: "이미지" },
    { src: "../images/unkorea/9.jpg", alt: "Image 9", title: "이미지" },
    { src: "../images/unkorea/10.jpg", alt: "Image 10", title: "이미지" },
    { src: "../images/unkorea/11.jpg", alt: "Image 11", title: "이미지" },
    { src: "../images/unkorea/12.jpg", alt: "Image 12", title: "이미지" }
  ];
  
  // 이미지를 테이블에 추가하는 함수
  function addImagesToTable(images, table) {
    var numRows = 3; // 테이블의 행 수
    var numCols = 4; // 테이블의 열 수
  
    var imageIndex = 0;
    for (var i = 0; i < numRows; i++) {
      var row = document.createElement("tr");
  
      for (var j = 0; j < numCols; j++) {
        if (imageIndex >= images.length) {
          break; // 이미지 개수가 모자라면 종료
        }
  
        var image = images[imageIndex];
  
        var cell = document.createElement("td");
  
        var img = document.createElement("img");
        img.src = image.src;
        img.alt = image.alt;
  
        // 클릭 이벤트 리스너 추가
        img.addEventListener("click", function (index) {
          return function () {
            showMovieInfo(index); // 이미지 인덱스 전달
          };
        }(imageIndex));
  
        var h4 = document.createElement("h4");
        h4.textContent = image.title;
  
        cell.appendChild(img);
        cell.appendChild(h4);
        row.appendChild(cell);
  
        imageIndex++;
      }
  
      table.appendChild(row);
    }
  }


  //이미지 테이블에 추가
  addImagesToTable(comedyImages, comedyTable);
  addImagesToTable(actionImages, actionTable);
  addImagesToTable(romanceImages, romanceTable);
  addImagesToTable(thrillerImages, thrillerTable);
  addImagesToTable(animationImages, animationTable);
  addImagesToTable(musicalImages, musicalTable);
  addImagesToTable(koreaImages, koreaTable);
  addImagesToTable(unkoreaImages, unkoreaTable);
  
  function showMovieInfo(imageIndex) {
    var movieTitle = document.getElementById("movieTitle");
    var movieImage = document.getElementById("movieImage");
    var moviegood = document.getElementById("moviegood");
    var movieSummary = document.getElementById("movieSummary");
    var movieRating = document.getElementById("movieRating");
    var movieAudience = document.getElementById("movieAudience");
    var expandedText = document.getElementById("expandedText");
    var movieInfo = document.getElementById("movieInfo");
  
    // Set movie information based on imageIndex
    var image = comedyImages[imageIndex];
  
    movieTitle.textContent = image.title;
    movieImage.src = image.src;
    moviegood.textContent = image.good;
    movieSummary.textContent = image.summary;
    movieRating.textContent = image.rating;
    movieAudience.textContent = image.audience;
    expandedText.textContent = image.expandedText;
  
    // Hide the genre div and its contents
    var genreIds = ['comedy', 'action', 'romance', 'thriller', 'animation', 'musical', 'korea', 'unkorea'];
  
    for (var i = 0; i < genreIds.length; i++) {
      var genreDiv = document.getElementById(genreIds[i]);
      if (genreDiv) {
        genreDiv.style.display = "none";
      }
    }
  
    // Show the movie info div
    movieInfo.style.display = "block";
  }

  
  
  function filterMovies(genre) {
    let searchInput = document.getElementById(genre + "search").value.toLowerCase();
    let movieTitles = document.querySelectorAll("#" + genre + " h4");
  
    for (let i = 0; i < movieTitles.length; i++) {
      let title = movieTitles[i].textContent.toLowerCase();
      let tableRow = movieTitles[i].parentNode;
  
      if (title.includes(searchInput)) {
        tableRow.style.display = ""; // 검색어가 포함된 행은 표시
      } else {
        tableRow.style.display = "none"; // 검색어가 포함되지 않은 행은 숨김
      }
    }
  }


  document.getElementById("comedy").addEventListener("click", function() {
    filterMovies("comedy");
  });
  
  document.getElementById("action").addEventListener("click", function() {
    filterMovies("action");
  });
  
  document.getElementById("romance").addEventListener("click", function() {
    filterMovies("romance");
  });
  
  document.getElementById("thriller").addEventListener("click", function() {
    filterMovies("thriller");
  
  });document.getElementById("animation").addEventListener("click", function() {
    filterMovies("animation");
  
  });document.getElementById("musical").addEventListener("click", function() {
    filterMovies("musical");
  });
  
  var slides = {
    'comedy': [
      "../images/comedy/2.jpg",
      "../images/comedy/3.jpg",
      "../images/comedy/4.jpg"
    ],
    'action': [
      "../images/action/1.jpg",
      "../images/action/2.jpg",
      "../images/action/3.jpg"
    ],
    'romance': [
      "../images/romance/1.jpg",
      "../images/romance/2.jpg",
      "../images/romance/3.jpg"
    ],
    'thriller': [
      "../images/thriller/1.jpg",
      "../images/thriller/2.jpg",
      "../images/thriller/3.jpg"
    ],
    'animation': [
      "../images/animation/1.jpg",
      "../images/animation/2.jpg",
      "../images/animation/3.jpg"
    ],
    'musical': [
      "../images/musical/1.jpg",
      "../images/musical/2.jpg",
      "../images/musical/3.jpg"
    ],
    'korea': [
      "../images/korea/1.jpg",
      "../images/korea/2.jpg",
      "../images/korea/3.jpg"
    ],
    'unkorea': [
      "../images/unkorea/1.jpg",
      "../images/unkorea/2.jpg",
      "../images/unkorea/3.jpg"
    ]
  };
  
  var slideIndexes = {
    'comedy': 0,
    'action': 0,
    'romance': 0,
    'thriller': 0,
    'animation': 0,
    'musical': 0,
    'korea': 0,
    'unkorea': 0
  };
  
  function showNextSlide(genre) {
    var slideIndex = slideIndexes[genre];
    var slideImage = document.getElementById(genre + "SlideImage");
    slideIndex = (slideIndex + 1) % slides[genre].length;
    slideImage.src = slides[genre][slideIndex];
    slideIndexes[genre] = slideIndex;
  }
  
  // 장르별로 일정 시간마다 이미지를 자동으로 변경
  var genres = ['comedy', 'action', 'romance', 'thriller', 'animation' ,'musical', 'korea', 'unkorea'];
  
  for (var i = 0; i < genres.length; i++) {
    var genre = genres[i];
    showNextSlide(genre); // 첫 번째 이미지 표시
    setInterval(showNextSlide.bind(null, genre), 3000);
  }
  

  function goToMain() {
    window.location.href = "../index.html";
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

