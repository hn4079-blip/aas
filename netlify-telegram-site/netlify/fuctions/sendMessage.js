export async function handler(event, context) {
  const token = "8504075418:AAE5tVjJ5q7OxGdqADGWjeUMf3i6fdkrYwM";
  const chatId = "7010882280";

  const data = JSON.parse(event.body);
  const { name, phone, job, region, amount } = data;

  const message =
    `📩 새 대출 문의 도착!\n\n` +
    `👤 성함: ${name}\n` +
    `📞 연락처: ${phone}\n` +
    `💼 직업: ${job}\n` +
    `📍 지역: ${region}\n` +
    `💰 희망금액: ${amount}만원`;

  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message })
    });

    if (!response.ok) throw new Error('Telegram API Error');

    return { statusCode: 200, body: 'Message sent successfully' };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, body: 'Error: ' + err.message };
  }
}
