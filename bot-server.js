/* ============ TELEGRAM BOT SERVER ============ */
const TG_TOKEN = "123456789:ABCdefGHI...";
const TG_API = `https://api.telegram.org/bot${TG_TOKEN}`;

let lastUpdateId = 0;

async function getUpdates() {
  try {
    const res = await fetch(`${TG_API}/getUpdates?offset=${lastUpdateId + 1}&timeout=30`);
    const data = await res.json();
    
    for (const update of data.result || []) {
      lastUpdateId = update.update_id;
      await handleMessage(update.message);
    }
  } catch (err) {
    console.error("Xatolik:", err);
  }
  
  setTimeout(getUpdates, 1000);
}

async function handleMessage(msg) {
  if (!msg || !msg.text) return;
  const text = msg.text.trim();
  const chatId = msg.chat.id;

  let javob = "";

  if (text === "/start") {
    javob = `
🏥 <b>Digital Bridge Bot</b>

Buyruqlar:
/stats — Umumiy statistika
/bemorlar — Bemorlar soni
/komissiya — Komissiya hisoboti
/yordam — Yordam
    `;
  } else if (text === "/stats") {
    javob = `
📊 <b>UMUMIY STATISTIKA</b>

👥 Bemorlar: <b>45 ta</b>
💰 Jami to'lov: <b>1,350,000 so'm</b>
💼 Komissiya: <b>40,500 so'm</b>
👁️ Kuzatuvda: <b>12 ta</b>
📅 ${new Date().toLocaleString("uz-UZ")}
    `;
  } else if (text === "/bemorlar") {
    javob = `👥 Jami bemorlar: <b>45 ta</b>`;
  } else if (text === "/komissiya") {
    javob = `
💼 <b>KOMISSIYA HISOBOTI</b>

📅 Bugun: <b>2,700 so'm</b>
📆 Bu oy: <b>40,500 so'm</b>
📈 Jami: <b>40,500 so'm</b>
    `;
  } else if (text === "/yordam") {
    javob = `
❓ <b>Yordam</b>

/stats — Statistika
/bemorlar — Bemorlar
/komissiya — Komissiya

☎️ 1140
    `;
  } else {
    javob = "❓ Noma'lum buyruq. /yordam yozing.";
  }

  await fetch(`${TG_API}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text: javob,
      parse_mode: "HTML"
    })
  });
}

console.log("🤖 Bot ishga tushdi...");
getUpdates();