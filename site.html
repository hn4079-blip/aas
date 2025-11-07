<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>당일일수.com</title>
<style>
  :root{ --maxw:480px; --accent:#0b78ff; --bg:#f0f6fa; --card:#fff; --muted:#7a8791; }
  *{ box-sizing:border-box; }
  body{ margin:0; font-family:-apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo", "Malgun Gothic", "Noto Sans KR", sans-serif; background:var(--bg); color:#111; padding:20px; display:flex; justify-content:center; }
  .container{ width:100%; max-width:var(--maxw); background:var(--card); border-radius:12px; padding:28px; box-shadow:0 1px 0 rgba(16,24,40,0.04); }
  h1{ margin:0 0 14px 0; font-size:28px; text-align:center; font-weight:700; }
  .divider{ height:1px; background:#e6eef3; margin:18px 0; border-radius:1px; }
  label{ display:block; margin-top:12px; font-size:15px; color:#23303b; }
  input[type="text"], input[type="tel"], select{ width:100%; padding:14px 12px; margin-top:8px; border-radius:8px; border:1px solid #d6e0e6; font-size:15px; background:#fbfeff; }
  input::placeholder{ color:var(--muted); }
  select{ -webkit-appearance:none; appearance:none; background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="%237a8791" d="M6 8l3 3 3-3z"/></svg>'); background-repeat:no-repeat; background-position:right 12px center; background-size:12px; padding-right:36px; }
  button{ width:100%; margin-top:24px; padding:16px; border-radius:10px; border:none; font-size:18px; font-weight:600; background:linear-gradient(180deg,var(--accent),#0067e6); color:#fff; cursor:pointer; }
  .note{ margin-top:10px; font-size:13px; color:var(--muted); }
  @media (max-width:420px){ .container{ padding:20px; } h1{ font-size:22px; } }
</style>
</head>
<body>
  <div class="container" role="main">
    <h1>당일일수.com</h1>
    <div class="divider"></div>

    <form id="loanForm" autocomplete="off">
      <label for="name">성함</label>
      <input id="name" name="name" type="text" required />

      <label for="phone">연락처</label>
      <input id="phone" name="phone" type="tel" placeholder="예) 010-1234-5678" required />

      <label for="job">직업</label>
      <select id="job" name="job" required>
        <option value="">선택하세요</option>
        <option>직장인</option>
        <option>전문직</option>
        <option>공무원</option>
        <option>자영업자</option>
        <option>프리랜서</option>
        <option>주부</option>
        <option>학생</option>
        <option>기타</option>
        <option>무직</option>
      </select>

      <label for="area">지역</label>
      <input id="area" name="area" type="text" placeholder="시/구/동을 입력 해주세요." required />

      <label for="amount">희망금액 (만원)</label>
      <input id="amount" name="amount" type="text" placeholder="만원 단위로 입력 해주세요." required />

      <button type="submit">대출문의</button>
      <div class="note">제출 시 입력하신 정보가 Telegram으로 전송됩니다.</div>
    </form>
  </div>

<script>
const BOT_TOKEN = "8504075418:AAE5tVjJ5q7OxGdqADGWjeUMf3i6fdkrYwM";
const CHAT_ID   = "7010882280";

function sanitizeText(s){
  // 간단한 필드 정리 (불필요한 공백 제거)
  return String(s||"").trim();
}

function buildMessage(formData){
  // 보기좋게 포맷
  const now = new Date();
  const when = now.toLocaleString('ko-KR');
  let msg = `📥 대출문의 접수\n시간: ${when}\n\n`;
  msg += `성함: ${sanitizeText(formData.get('name'))}\n`;
  msg += `연락처: ${sanitizeText(formData.get('phone'))}\n`;
  msg += `직업: ${sanitizeText(formData.get('job'))}\n`;
  msg += `지역: ${sanitizeText(formData.get('area'))}\n`;
  msg += `희망금액(만원): ${sanitizeText(formData.get('amount'))}\n`;
  return msg;
}

document.getElementById('loanForm').addEventListener('submit', async function(e){
  e.preventDefault();
  const form = e.target;
  const fd = new FormData(form);

  // 간단 검증: 전화번호 형식 (숫자, -, 공백 허용)
  const phone = sanitizeText(fd.get('phone'));
  if(!/^[0-9\- \+]{6,20}$/.test(콜)){
    alert('연락처 형식이 올바르지 않습니다.');
    return;
  }

  const text = buildMessage(fd);

  try {
    const res = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: "HTML"
      })
    });

    const data = await res.json();
    if(data.ok){
      alert('전송 완료되었습니다.');
      form.reset();
    } else {
      console.error('telegram error', data);
      alert('전송에 실패했습니다. (텔레그램 오류)');
    }
  } catch(err){
    console.error(err);
    alert('전송 중 오류가 발생했습니다.');
  }
});
</script>
</body>
</html>
