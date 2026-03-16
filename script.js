// ===============================
// 꿈 키워드 숫자 데이터베이스
// ===============================

const dreamNumberDB={

돼지:[3,8,9],
뱀:[2,7],
물:[1,6],
돈:[8,4],
불:[9,2],
호랑이:[5,7],
용:[6,9],

강아지:[4,11],
개:[4,11],
고양이:[5,12],
사자:[7,21],
말:[6,18],
소:[2,20],
양:[4,24],
원숭이:[9,33],
닭:[5,17],
쥐:[1,16],
토끼:[4,19],
거북이:[8,28],
물고기:[7,27],

바다:[7,17],
강:[3,23],
호수:[4,14],
폭포:[8,18],
비:[1,11],
눈:[2,12],
번개:[9,19],
천둥:[10,20],
바람:[6,16],
구름:[5,15],
하늘:[9,29],
태양:[10,30],
달:[11,21],
별:[7,37],

꽃:[5,25],
벚꽃:[8,18],
장미:[7,27],

금:[8,18],
은:[7,17],
보석:[9,19],

자동차:[6,26],
버스:[7,27],
기차:[8,28],
비행기:[9,29],

집:[5,15],
아파트:[7,17],
학교:[6,16],
병원:[8,18],
회사:[9,19]

};


// ===============================
// 꿈 해몽 데이터
// ===============================

const dreamMeaningDB={

돼지:"돼지는 대표적인 재물운의 상징입니다.",
뱀:"뱀은 지혜와 변화를 의미합니다.",
물:"물은 감정과 인생 흐름을 의미합니다.",
돈:"재정적 기회가 다가올 가능성을 의미합니다.",
불:"강한 에너지와 변화의 신호입니다.",
호랑이:"권력과 성공을 상징합니다.",
용:"매우 강력한 행운을 의미하는 길몽입니다.",

강아지:"신뢰와 인간관계를 의미합니다.",
고양이:"직감과 독립성을 상징합니다.",

바다:"큰 변화와 가능성을 의미합니다.",
하늘:"희망과 새로운 기회를 의미합니다.",
태양:"성공운 상승을 의미합니다.",
달:"감정과 직감을 상징합니다.",
별:"소망이 이루어질 가능성을 의미합니다.",
꽃:"사랑과 인간관계를 의미합니다.",

금:"재물운 상승을 의미합니다.",
보석:"귀한 기회를 의미합니다.",

자동차:"인생의 방향성을 의미합니다.",
비행기:"큰 도약을 의미합니다.",

집:"안정과 가족운을 의미합니다.",
학교:"성장을 의미합니다.",
병원:"회복을 의미합니다.",
회사:"커리어 변화를 의미합니다."

};


// ===============================
// 꿈 키워드 분석
// ===============================

function analyzeDream(dream){

let keywords=[];

Object.keys(dreamNumberDB).forEach(word=>{
if(dream.includes(word)){
keywords.push(word);
}
});

return keywords;

}


// ===============================
// 꿈 해몽 생성
// ===============================

function generateInterpretation(keywords){

let text="";

if(keywords.length===0){

text="이 꿈은 특별한 상징이 강하지 않습니다.\n\n";

}else{

text="당신의 꿈에는 "+keywords.join(", ")+" 이 등장했습니다.\n\n";

keywords.forEach(k=>{
if(dreamMeaningDB[k]){
text+=dreamMeaningDB[k]+"\n\n";
}
});

}

text+="이 꿈은 새로운 기회나 변화가 다가올 가능성을 의미할 수 있습니다.";

return text;

}


// ===============================
// 별점 운세 생성
// ===============================

function generateFortuneStars(keywords){

let money=3;
let love=3;
let health=3;
let social=3;

// 재물운 상승
if(keywords.includes("돼지")) money+=1;
if(keywords.includes("돈")) money+=1;
if(keywords.includes("금")) money+=1;
if(keywords.includes("보석")) money+=1;
if(keywords.includes("용")) money+=1;

// 연애운 상승
if(keywords.includes("꽃")) love+=1;
if(keywords.includes("벚꽃")) love+=1;
if(keywords.includes("장미")) love+=1;
if(keywords.includes("달")) love+=1;

// 건강운 변동
if(keywords.includes("병원")) health+=1;
if(keywords.includes("물")) health+=1;
if(keywords.includes("불")) health-=1;
if(keywords.includes("번개")) health-=1;
if(keywords.includes("천둥")) health-=1;

// 대인운 상승
if(keywords.includes("강아지")) social+=1;
if(keywords.includes("개")) social+=1;
if(keywords.includes("친구")) social+=1;
if(keywords.includes("고양이")) social+=1;

// 범위 제한
money=Math.max(1,Math.min(5,money));
love=Math.max(1,Math.min(5,love));
health=Math.max(1,Math.min(5,health));
social=Math.max(1,Math.min(5,social));

let luck=Math.round((money+love+health+social)/4);
luck=Math.max(1,Math.min(5,luck));

function toStars(score){
return "★★★★★".slice(0,score) + "☆☆☆☆☆".slice(0,5-score);
}

let html="";
html+="<br><br><b>오늘의 꿈 운세</b><br>";
html+="재물운 : "+toStars(money)+"<br>";
html+="연애운 : "+toStars(love)+"<br>";
html+="건강운 : "+toStars(health)+"<br>";
html+="대인운 : "+toStars(social)+"<br>";
html+="행운지수 : "+toStars(luck);

return html;

}


// ===============================
// 해몽 출력
// ===============================

function showInterpretation(){

let dream=document.getElementById("dreamInput").value;

if(!dream){
alert("꿈 내용을 입력해주세요.");
return;
}

let keywords=analyzeDream(dream);

let interpretation=generateInterpretation(keywords);

let result=document.getElementById("dreamResult");

result.innerText=interpretation;


// 오늘의 운세

let luckBox=document.getElementById("luckResult");

let luckList=[
"오늘은 행운이 따를 가능성이 있습니다.",
"작은 기회가 찾아올 수 있습니다.",
"사람과의 인연이 중요한 날입니다.",
"재물운의 흐름이 보일 수 있습니다.",
"새로운 도전이 좋은 결과로 이어질 수 있습니다."
];

let luck=luckList[Math.floor(Math.random()*luckList.length)];

if(luckBox){
luckBox.innerHTML=luck + generateFortuneStars(keywords);
}

// 꿈 랭킹 업데이트 추가
updateDreamRanking(keywords);

}


// ===============================
// 생년월일 번호
// ===============================

function getBirthNumbers(birth){

if(!birth) return [];

let nums=[];

birth.replace(/-/g,"").split("").forEach(n=>{
nums.push(parseInt(n));
});

let sum=nums.reduce((a,b)=>a+b,0);

if(sum<=45) nums.push(sum);

return nums;

}


// ===============================
// 성별 번호
// ===============================

function getGenderNumbers(gender){

if(gender==="male") return [7,9,17,27];
if(gender==="female") return [2,6,8,18];

return [];

}


// ===============================
// 번호 풀
// ===============================

function buildNumberPool(keywords,birth,gender){

let pool=[];
let reasons={};

keywords.forEach(k=>{

if(dreamNumberDB[k]){

dreamNumberDB[k].forEach(num=>{
pool.push(num);
reasons[num]="꿈 '"+k+"' 에서 나온 숫자";
});

}

});

getBirthNumbers(birth).forEach(num=>{
pool.push(num);
reasons[num]="생년월일 기반 숫자";
});

getGenderNumbers(gender).forEach(num=>{
pool.push(num);
reasons[num]="성별 기반 행운 숫자";
});

return {pool,reasons};

}


// ===============================
// 번호 선택
// ===============================

function pickNumber(pool){

if(pool.length===0) return Math.floor(Math.random()*45)+1;

let num=pool[Math.floor(Math.random()*pool.length)];

if(num<1 || num>45){
num=Math.floor(Math.random()*45)+1;
}

return num;

}


// ===============================
// 로또 세트
// ===============================

function generateWeightedLotto(pool){

let nums=[];

while(nums.length<6){

let num=pickNumber(pool);

if(!nums.includes(num)){
nums.push(num);
}

}

nums.sort((a,b)=>a-b);

return nums;

}


// ===============================
// 공 색상
// ===============================

function getBallColor(num){

if(num<=10) return "#fbc400";
if(num<=20) return "#69c8f2";
if(num<=30) return "#ff7272";
if(num<=40) return "#aaa";
return "#b0d840";

}


// ===============================
// 로또 출력 (광고 + 생성중 유지 + 전체 순차 애니메이션)
// ===============================

function displayLottoNumbers(keywords){

let gender=document.getElementById("gender")?.value;
let birth=document.getElementById("birth")?.value;

let data=buildNumberPool(keywords,birth,gender);

let pool=data.pool;
let reasons=data.reasons;

let container=document.getElementById("lottoNumbers");

// 광고 대기 시간(밀리초)
let adDuration=5000;

// 번호 하나당 등장 속도(밀리초)
let ballDelay=350;

container.innerHTML=`
<div style="padding:16px; border:1px solid #ddd; border-radius:12px; background:#fafafa; text-align:center;">
  <p id="loadingMessage" style="font-weight:bold; margin:0 0 12px 0;">번호 생성중...</p>

  <div id="fakeAdBox" style="border:1px solid #ccc; border-radius:12px; padding:16px; background:#fff;">
    <div style="font-size:12px; color:#888; margin-bottom:8px;">ADVERTISEMENT</div>
    <div style="font-size:16px; font-weight:bold; margin-bottom:8px;">광고 영역</div>
    <div style="font-size:14px; color:#555;">여기에 애드센스 광고가 표시될 수 있습니다.</div>
    <div id="adCountdown" style="margin-top:12px; font-size:13px; color:#999;">광고 종료까지 ${Math.ceil(adDuration/1000)}초</div>
  </div>
</div>
`;

// 광고 카운트다운
let remain=Math.ceil(adDuration/1000);
let countdownEl=document.getElementById("adCountdown");

let countdownInterval=setInterval(()=>{
remain--;
if(countdownEl){
if(remain>0){
countdownEl.innerText="광고 종료까지 "+remain+"초";
}else{
countdownEl.innerText="광고가 곧 종료됩니다...";
}
}
},1000);

setTimeout(()=>{

clearInterval(countdownInterval);

container.innerHTML="";

// 5세트 미리 생성
let sets=[];
for(let i=0;i<5;i++){
sets.push(generateWeightedLotto(pool));
}

// 줄 먼저 만들어 둠
let rows=[];
for(let i=0;i<5;i++){
let row=document.createElement("div");
row.style.marginBottom="10px";
container.appendChild(row);
rows.push(row);
saveHistory(sets[i]);
}

// 첫 번째 세트 첫 번째 번호부터
// 다섯 번째 세트 마지막 번호까지 순서대로 천천히 출력
let globalIndex=0;

for(let setIndex=0; setIndex<sets.length; setIndex++){

for(let numIndex=0; numIndex<sets[setIndex].length; numIndex++){

let num=sets[setIndex][numIndex];

setTimeout(()=>{

let ball=document.createElement("span");

ball.innerText=num;
ball.style.background=getBallColor(num);
ball.style.color="#fff";
ball.style.padding="10px 12px";
ball.style.borderRadius="50%";
ball.style.margin="5px";
ball.style.display="inline-block";
ball.style.fontWeight="bold";
ball.style.fontSize="16px";

rows[setIndex].appendChild(ball);

},globalIndex*ballDelay);

globalIndex++;

}

}

showNumberReason(reasons);

},adDuration);

}


// ===============================
// 추천 번호 설명
// ===============================

function showNumberReason(reasons){

let container=document.getElementById("numberReason");

if(!container) return;

let html="<br><b>추천 번호 해석</b><br>";

Object.keys(reasons).forEach(num=>{
html+=num+" : "+reasons[num]+"<br>";
});

container.innerHTML=html;

}


// ===============================
// 추천 기록
// ===============================

function saveHistory(nums){

let history=document.getElementById("history");

if(!history) return;

let div=document.createElement("div");

div.innerText=nums.join(" ");

history.prepend(div);

}


// ===============================
// 로또 시작
// ===============================

function startLotto(){

let dream=document.getElementById("dreamInput").value;

let keywords=analyzeDream(dream);

displayLottoNumbers(keywords);

}


// ===============================
// 오늘의 행운 번호 카드
// ===============================

function updateDreamRanking(keywords){
renderDreamRanking();
}

function renderDreamRanking(){

let container=document.getElementById("todayLuckyCard");

if(!container) return;

let today=new Date();
let year=today.getFullYear();
let month=today.getMonth()+1;
let date=today.getDate();

let seed=parseInt("" + year + month + date,10);

function nextSeed(){
seed=(seed*9301+49297)%233280;
return seed;
}

let luckyNumbers=[];

while(luckyNumbers.length<3){

let num=(nextSeed()%45)+1;

if(!luckyNumbers.includes(num)){
luckyNumbers.push(num);
}

}

luckyNumbers.sort((a,b)=>a-b);

const luckyColors=["노랑","파랑","빨강","초록","보라"];
const luckyMessages=[
"작은 기회를 잘 잡으면 좋은 흐름이 생길 수 있습니다.",
"오늘은 가볍게 도전하는 마음이 잘 맞는 날입니다.",
"뜻밖의 행운이 예상보다 가까이에 있을 수 있습니다.",
"너무 서두르기보다 흐름을 보는 것이 좋은 날입니다.",
"기분 좋은 선택이 좋은 결과로 이어질 수 있습니다."
];

let color=luckyColors[today.getDate()%luckyColors.length];
let message=luckyMessages[today.getDay()%luckyMessages.length];

let html="";
html+="<b>오늘의 행운 번호</b><br>";
html+=luckyNumbers.join(" / ")+"<br><br>";
html+="오늘의 행운 색 : "+color+"<br><br>";
html+="오늘의 한마디<br>"+message;

container.innerHTML=html;

}

// 페이지 열릴 때 카드 표시
renderDreamRanking();


// ===============================
// 공유 기능
// ===============================

function shareLink(){

navigator.clipboard.writeText(window.location.href);

alert("링크가 복사되었습니다!");

}

function shareKakao(){

if(navigator.share){

navigator.share({
title:"꿈해몽 로또",
text:"내 꿈 해몽과 로또 번호 확인하기",
url:window.location.href
});

}else{

shareLink();

}
}


// ===============================
// 애드센스 승인용 안내 콘텐츠 추가
// ===============================

function renderAdSenseReadySections(){

let app=document.querySelector(".app");
if(!app) return;

// 이미 있으면 다시 만들지 않음
if(document.getElementById("adsenseReadyIntro")) return;

function createCard(id,title,html){
let card=document.createElement("div");
card.className="card";
card.id=id;

let titleEl=document.createElement("h3");
titleEl.innerText=title;

let body=document.createElement("div");
body.innerHTML=html;

card.appendChild(titleEl);
card.appendChild(body);

app.appendChild(card);
}

// 1. 서비스 소개
createCard(
"adsenseReadyIntro",
"서비스 소개",
`
<p>
이 사이트는 꿈 내용을 간단히 입력하면 꿈에 등장한 상징을 바탕으로 해몽을 보여주고,
재미 요소로 로또 추천 번호를 함께 제공하는 엔터테인먼트형 서비스입니다.
</p>
<p>
사용자는 꿈 해몽, 오늘의 꿈 운세, 오늘의 행운 번호, 추천 번호 설명을 한 번에 확인할 수 있습니다.
</p>
`
);

// 2. 이용 안내
createCard(
"adsenseReadyGuide",
"이용 안내",
`
<p>이용 방법은 매우 간단합니다.</p>
<ol>
<li>꿈 내용을 입력합니다.</li>
<li>성별과 생년월일을 선택할 수 있습니다.</li>
<li>꿈 해몽 보기를 누르면 해몽과 별점 운세를 확인할 수 있습니다.</li>
<li>로또 번호 받기를 누르면 추천 번호 5세트를 확인할 수 있습니다.</li>
</ol>
`
);

// 3. 면책 및 안내
createCard(
"adsenseReadyNotice",
"안내 및 면책",
`
<p>
이 사이트는 꿈 해몽과 번호 추천을 재미 요소로 제공하는 엔터테인먼트형 정보 서비스 입니다.
</p>
<p>
제공되는 해몽과 추천 번호는 참고용이며, 실제 결과를 보장하지 않습니다.
</p>
`
);

// 4. 개인정보 안내
createCard(
"adsenseReadyPrivacy",
"개인정보 안내",
`
<p>
이 사이트에서 입력하는 꿈 내용, 성별, 생년월일 정보는 추천 결과를 화면에 표시하기 위한 용도로만 사용됩니다.
</p>
<p>
현재 브라우저 내 일부 기능은 편의를 위해 로컬 저장소(localStorage)를 사용할 수 있습니다.
</p>
<p>
별도의 회원 가입 기능은 없으며, 민감한 개인정보 입력은 권장하지 않습니다.
</p>
`
);

// 5. 문의 안내
createCard(
"adsenseReadyContact",
"문의 안내",
`
<p>
서비스 관련 문의나 수정 요청은 추후 별도 문의 채널이 준비되면 공지될 예정입니다.
</p>
<p>
현재는 테스트 및 운영 준비 단계이며, 콘텐츠와 기능은 계속 개선될 수 있습니다.
</p>
`
);

}

// 페이지 로드시 승인용 카드 추가
renderAdSenseReadySections();