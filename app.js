/* ============ KONFIGURATSIYA ============ */
/* ============ XIZMATLAR ============ */
const XIZMATLAR = [
  { id: "patronaj", nom: "Patronaj tashrif", narx: 15000 },
  { id: "qon_bosimi", nom: "Qon bosimini o‘lchash", narx: 5000 },
  { id: "qand", nom: "Qandni tekshirish", narx: 8000 },
  { id: "ukol", nom: "Ukol qilish", narx: 10000 },
  { id: "bint", nom: "Bint qo‘yish", narx: 12000 },
  { id: "konsultatsiya", nom: "Hamshira konsultatsiyasi", narx: 7000 },
  { id: "dori", nom: "Dori berish", narx: 3000 },
  { id: "emlash", nom: "Emlash", narx: 9000 },
  { id: "kardiogramma", nom: "Kardiogramma", narx: 25000 },
  { id: "tomchi", nom: "Tomchi (kapelnitsa)", narx: 20000 },
];

/* ============ IMTIYOZ TOIFALARI ============ */
const IMTIYOZ_TURLARI = {
  "": { nom: "Imtiyoz yo‘q", foiz: 0, belgi: "" },
  "nafaqaxor": { nom: "Nafaqaxor", foiz: 30, belgi: "👴" },
  "veteran": { nom: "Urush/mehnat veterani", foiz: 50, belgi: "🎖️" },
  "nogiron1": { nom: "I guruh nogironi", foiz: 100, belgi: "♿" },
  "nogiron2": { nom: "II guruh nogironi", foiz: 70, belgi: "♿" },
  "nogiron3": { nom: "III guruh nogironi", foiz: 50, belgi: "♿" },
  "bolaI": { nom: "Nogiron bola", foiz: 100, belgi: "👶" },
  "kopBolali": { nom: "Ko‘p bolali oila (4+)", foiz: 30, belgi: "👨‍👩‍👧‍👦" },
  "chernobil": { nom: "Chernobil qurboni", foiz: 100, belgi: "☢️" },
  "kamTa": { nom: "Kam ta’minlangan", foiz: 50, belgi: "💚" },
  "boshqa": { nom: "Boshqa imtiyoz", foiz: 20, belgi: "📋" }
};

/* ============ HUDUDLAR ============ */
const HUDUDLAR = [
  { nom: "Qoraqalpogʻiston Respublikasi", shaharlar: ["Nukus shahri"], tumanlar: {
    "Amudaryo tumani": ["Mangʻit","Qipchoq"], "Beruniy tumani": ["Beruniy","Buston"],
    "Chimboy tumani": ["Chimboy","Qazoqdaryo"], "Ellikqalʼa tumani": ["Boʻston","Guliston"],
    "Kegeyli tumani": ["Kegeyli","Xalqobod"], "Moʻynoq tumani": ["Moʻynoq","Uchsay"],
    "Nukus tumani": ["Oqmangʻit","Krantau"], "Qanlikoʻl tumani": ["Qanlikoʻl","Navoiy"],
    "Qoʻngʻirot tumani": ["Qoʻngʻirot","Jasliq"], "Qoraoʻzak tumani": ["Qoraoʻzak","Qangli"],
    "Shumanay tumani": ["Shumanay","Birleshik"], "Taxiatosh tumani": ["Taxiatosh","Samanbay"],
    "Taxtakoʻpir tumani": ["Taxtakoʻpir","Mulk"], "Toʻrtkoʻl tumani": ["Toʻrtkoʻl","Miskin"],
    "Xoʻjayli tumani": ["Xoʻjayli","Vodanil"]
  }},
  { nom: "Andijon viloyati", shaharlar: ["Andijon shahri","Xonobod shahri"], tumanlar: {
    "Andijon tumani": ["Kuyganyor","Ogʻullik"], "Asaka tumani": ["Asaka","Nishob"],
    "Baliqchi tumani": ["Baliqchi","Xoʻjaariq"], "Boʻston tumani": ["Boʻz","Xoldevonbek"],
    "Buloqboshi tumani": ["Buloqboshi","Shirmonbuloq"], "Izboskan tumani": ["Poytugʻ","Toʻqqizbogʻ"],
    "Jalaquduq tumani": ["Jalaquduq","Yorqishloq"], "Marhamat tumani": ["Marhamat","Polvontosh"],
    "Oltinkoʻl tumani": ["Oltinkoʻl","Jalabek"], "Paxtaobod tumani": ["Paxtaobod","Ittifoq"],
    "Qoʻrgʻontepa tumani": ["Qoʻrgʻontepa","Qorasuv"], "Shahrixon tumani": ["Shahrixon","Segaza"],
    "Ulugʻnor tumani": ["Oqoltin","Mingbuloq"], "Xoʻjaobod tumani": ["Xoʻjaobod","Dilkushod"]
  }},
  { nom: "Buxoro viloyati", shaharlar: ["Buxoro shahri","Kogon shahri"], tumanlar: {
    "Buxoro tumani": ["Galaosiyo","Rabotak"], "Gʻijduvon tumani": ["Gʻijduvon","Zandane"],
    "Jondor tumani": ["Jondor","Paxlavon"], "Kogon tumani": ["Beklar","Niyozhoji"],
    "Olot tumani": ["Olot","Jumabozor"], "Peshku tumani": ["Yangibozor","Ibn Sino"],
    "Qorakoʻl tumani": ["Qorakoʻl","Dargʻom"], "Romitan tumani": ["Romitan","Gazli"],
    "Shofirkon tumani": ["Shofirkon","Iskogare"], "Vobkent tumani": ["Vobkent","Shirin"]
  }},
  { nom: "Fargʻona viloyati", shaharlar: ["Fargʻona shahri","Qoʻqon shahri","Margʻilon shahri"], tumanlar: {
    "Bagʻdod tumani": ["Bagʻdod","Amirobod"], "Beshariq tumani": ["Beshariq","Rapqon"],
    "Buvayda tumani": ["Ibrat","Yangikishlok"], "Dangʻara tumani": ["Dangʻara","Yuqori Vodil"],
    "Fargʻona tumani": ["Chimyon","Vodil"], "Furqat tumani": ["Navbahor","Suvli"],
    "Oltiariq tumani": ["Oltiariq","Avval"], "Qoʻshtepa tumani": ["Langar","Qatagon"],
    "Quva tumani": ["Quva","Tolmozor"], "Rishton tumani": ["Rishton"],
    "Soʻx tumani": ["Ravon","Soʻx"], "Toshloq tumani": ["Toshloq","Arabmozor"],
    "Uchkoʻprik tumani": ["Uchkoʻprik"], "Oʻzbekiston tumani": ["Yaypan"],
    "Yozyovon tumani": ["Yozyovon","Qoratepa"]
  }},
  { nom: "Jizzax viloyati", shaharlar: ["Jizzax shahri"], tumanlar: {
    "Arnasoy tumani": ["Gʻoliblar"], "Baxmal tumani": ["Oʻsmat"], "Doʻstlik tumani": ["Doʻstlik"],
    "Forish tumani": ["Bogʻdon"], "Gʻallaorol tumani": ["Gʻallaorol"], "Mirzachoʻl tumani": ["Gagarin"],
    "Paxtakor tumani": ["Paxtakor"], "Sharof Rashidov tumani": ["Uchtepa"],
    "Yangiobod tumani": ["Balandchaqir"], "Zafarobod tumani": ["Zafarobod"],
    "Zarbdor tumani": ["Zarbdor"], "Zomin tumani": ["Zomin"]
  }},
  { nom: "Namangan viloyati", shaharlar: ["Namangan shahri"], tumanlar: {
    "Chortoq tumani": ["Chortoq"], "Chust tumani": ["Chust","Axsi"], "Kosonsoy tumani": ["Kosonsoy"],
    "Mingbuloq tumani": ["Joʻmashoʻy"], "Namangan tumani": ["Toshbuloq"],
    "Norin tumani": ["Haqqulobod"], "Pop tumani": ["Pop"], "Toʻraqoʻrgʻon tumani": ["Toʻraqoʻrgʻon"],
    "Uchqoʻrgʻon tumani": ["Uchqoʻrgʻon"], "Uychi tumani": ["Uychi"], "Yangiqoʻrgʻon tumani": ["Yangiqoʻrgʻon"]
  }},
  { nom: "Navoiy viloyati", shaharlar: ["Navoiy shahri","Zarafshon shahri"], tumanlar: {
    "Karmana tumani": ["Karmana"], "Konimex tumani": ["Konimex"], "Navbahor tumani": ["Beshrabot"],
    "Nurota tumani": ["Nurota"], "Qiziltepa tumani": ["Qiziltepa"], "Tomdi tumani": ["Tomdibuloq"],
    "Uchquduq tumani": ["Uchquduq"], "Xatirchi tumani": ["Yangirabod"]
  }},
  { nom: "Qashqadaryo viloyati", shaharlar: ["Qarshi shahri","Shahrisabz shahri"], tumanlar: {
    "Chiroqchi tumani": ["Chiroqchi"], "Dehqonobod tumani": ["Qorashina"], "Gʻuzor tumani": ["Gʻuzor"],
    "Kasbi tumani": ["Mugʻlon"], "Kitob tumani": ["Kitob"], "Koson tumani": ["Koson"],
    "Koʻkdala tumani": ["Koʻkdala"], "Mirishkor tumani": ["Yangi Mirishkor"], "Muborak tumani": ["Muborak"],
    "Nishon tumani": ["Yangi Nishon"], "Qamashi tumani": ["Qamashi"], "Qarshi tumani": ["Beshkent"],
    "Shahrisabz tumani": ["Amir Temur"], "Yakkabogʻ tumani": ["Yakkabogʻ"]
  }},
  { nom: "Samarqand viloyati", shaharlar: ["Samarqand shahri","Kattaqoʻrgʻon shahri"], tumanlar: {
    "Bulungʻur tumani": ["Bulungʻur"], "Ishtixon tumani": ["Ishtixon"], "Jomboy tumani": ["Jomboy"],
    "Kattaqoʻrgʻon tumani": ["Payshanba"], "Narpay tumani": ["Oqtosh"], "Nurobod tumani": ["Nurobod"],
    "Oqdaryo tumani": ["Loyish"], "Pastdargʻom tumani": ["Juma"], "Paxtachi tumani": ["Ziyovuddin"],
    "Payariq tumani": ["Payariq"], "Qoʻshrabot tumani": ["Qoʻshrabot"], "Samarqand tumani": ["Gulobod"],
    "Toyloq tumani": ["Toyloq"], "Urgut tumani": ["Urgut"]
  }},
  { nom: "Sirdaryo viloyati", shaharlar: ["Guliston shahri","Yangiyer shahri"], tumanlar: {
    "Boyovut tumani": ["Boyovut"], "Guliston tumani": ["Dehqonobod"], "Mirzaobod tumani": ["Navroʻz"],
    "Oqoltin tumani": ["Sardoba"], "Sardoba tumani": ["Paxtaobod"], "Sayxunobod tumani": ["Sayxun"],
    "Sirdaryo tumani": ["Sirdaryo"], "Xovos tumani": ["Xovos"]
  }},
  { nom: "Surxondaryo viloyati", shaharlar: ["Termiz shahri"], tumanlar: {
    "Angor tumani": ["Angor"], "Bandixon tumani": ["Bandixon"], "Boysun tumani": ["Boysun"],
    "Denov tumani": ["Denov"], "Jarqoʻrgʻon tumani": ["Jarqoʻrgʻon"], "Muzrabot tumani": ["Xalqobod"],
    "Oltinsoy tumani": ["Qarluq"], "Qiziriq tumani": ["Sariq"], "Qumqoʻrgʻon tumani": ["Qumqoʻrgʻon"],
    "Sariosiyo tumani": ["Sariosiyo"], "Sherobod tumani": ["Sherobod"], "Shoʻrchi tumani": ["Shoʻrchi"],
    "Termiz tumani": ["Uchqizil"], "Uzun tumani": ["Uzun"]
  }},
  { nom: "Toshkent viloyati", shaharlar: ["Nurafshon shahri","Angren shahri","Bekobod shahri","Chirchiq shahri","Yangiyoʻl shahri"], tumanlar: {
    "Bekobod tumani": ["Zafar"], "Boʻka tumani": ["Boʻka"], "Boʻstonliq tumani": ["Gʻazalkent"],
    "Chinoz tumani": ["Chinoz"], "Ohangaron tumani": ["Telov"], "Oqqoʻrgʻon tumani": ["Oqqoʻrgʻon"],
    "Oʻrtachirchiq tumani": ["Toytepa"], "Parkent tumani": ["Parkent"], "Piskent tumani": ["Piskent"],
    "Qibray tumani": ["Qibray"], "Quyichirchiq tumani": ["Doʻstobod"], "Toshkent tumani": ["Keles"],
    "Yangiyoʻl tumani": ["Gulbahor"], "Yuqorichirchiq tumani": ["Yangibozor"], "Zangiota tumani": ["Eshonguzar"]
  }},
  { nom: "Xorazm viloyati", shaharlar: ["Urganch shahri","Xiva shahri"], tumanlar: {
    "Bogʻot tumani": ["Bogʻot"], "Gurlan tumani": ["Gurlan"], "Hazorasp tumani": ["Hazorasp"],
    "Qoʻshkoʻpir tumani": ["Qoʻshkoʻpir"], "Shovot tumani": ["Shovot"], "Tuproqqalʼa tumani": ["Pitnak"],
    "Urganch tumani": ["Qorovul"], "Xiva tumani": ["Gandimyon"], "Xonqa tumani": ["Xonqa"],
    "Yangiariq tumani": ["Yangiariq"], "Yangibozor tumani": ["Yangibozor"]
  }},
  { nom: "Toshkent shahri", shaharlar: [], tumanlar: {
    "Bektemir tumani": ["Bektemir"], "Chilonzor tumani": ["Chilonzor"], "Mirobod tumani": ["Mirobod"],
    "Mirzo Ulugʻbek tumani": ["Mirzo Ulugʻbek"], "Olmazor tumani": ["Olmazor"], "Sergeli tumani": ["Sergeli"],
    "Shayxontohur tumani": ["Shayxontohur"], "Uchtepa tumani": ["Uchtepa"], "Yakkasaroy tumani": ["Yakkasaroy"],
    "Yangihayot tumani": ["Yangihayot"], "Yashnobod tumani": ["Yashnobod"], "Yunusobod tumani": ["Yunusobod"]
  }}
];

/* ============ UTIL ============ */
const $ = (id) => document.getElementById(id);
const KEY_BEMOR = "db_bemorlar";
const KEY_USERS = "db_hamshiralar";
const KEY_SESSION = "db_session";
const KEY_AUDIT = "db_audit";
const KEY_THEME = "db_theme";
const KEY_KUZATUV = "db_kuzatuv";
const KEY_TOLOV = "db_tolovlar";
let joriyChek = null;
let tanlanganXizmatlar = new Set();
let imtiyozFaylBase64 = null;
let imtiyozFaylNomi = "";

function toast(msg, type = "") {
  const t = $("toast");
  t.textContent = msg;
  t.className = "toast show " + type;
  clearTimeout(t._tid);
  t._tid = setTimeout(() => t.className = "toast " + type, 3000);
}
function progress() {
  const p = $("progressBar");
  p.classList.remove("active"); void p.offsetWidth; p.classList.add("active");
  setTimeout(() => p.classList.remove("active"), 1300);
}
function audit(action, detail) {
  const list = JSON.parse(localStorage.getItem(KEY_AUDIT) || "[]");
  const s = getSession();
  list.push({ vaqt: new Date().toISOString(), action, detail, kim: s?.fish || "—" });
  if (list.length > 500) list.shift();
  localStorage.setItem(KEY_AUDIT, JSON.stringify(list));
}
function formatSum(n) {
  return (n || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so‘m";
}
function kvitansiyaRaqam() {
  const d = new Date();
  const yil = d.getFullYear();
  const oy = String(d.getMonth() + 1).padStart(2, "0");
  const kun = String(d.getDate()).padStart(2, "0");
  const random = Math.floor(Math.random() * 9000) + 1000;
  return `DB-${yil}${oy}${kun}-${random}`;
}
function faylHajmFormat(bytes) {
  if (bytes < 1024) return bytes + " B";
  if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
  return (bytes / (1024 * 1024)).toFixed(2) + " MB";
}

/* ============ PIN HASH (XAVFSIZLIK) ============ */
async function pinHash(pin, salt = "") {
  const data = new TextEncoder().encode(pin + "::" + salt + "::db2026");
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map(b => b.toString(16).padStart(2, "0")).join("");
}
async function pinTekshir(pin, hash) {
  return (await pinHash(pin)) === hash;
}

/* ============ PWA ============ */
let deferredPrompt = null;

function pwaRoyxatdanOtish() {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("service-worker.js")
        .then(reg => console.log("✅ SW:", reg.scope))
        .catch(err => console.warn("⚠️ SW:", err));
    });
  }
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;
    const btn = document.getElementById("pwaInstallBtn");
    if (btn) btn.classList.add("show");
  });
  window.addEventListener("appinstalled", () => {
    const btn = document.getElementById("pwaInstallBtn");
    if (btn) btn.classList.remove("show");
    deferredPrompt = null;
    toast("✅ Ilova o'rnatildi!", "ok");
  });
}

async function pwaOrnat() {
  if (!deferredPrompt) {
    toast("Brauzer orqali o'rnatib bo'lmaydi", "err");
    return;
  }
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  if (outcome === "accepted") toast("✅ O'rnatilmoqda...", "ok");
  deferredPrompt = null;
}
window.pwaOrnat = pwaOrnat;

/* ============ ONLINE/OFFLINE ============ */
function netIndicatorYarat() {
  if (document.getElementById("netStatus")) return;
  const el = document.createElement("div");
  el.id = "netStatus";
  el.className = "net-status";
  el.innerHTML = `<span class="net-dot" id="netDot2"></span><span id="netLabel2">Onlayn</span>`;
  document.body.appendChild(el);
  netIndicatorYangila();
}
function netIndicatorYangila() {
  const dot = document.getElementById("netDot2");
  const label = document.getElementById("netLabel2");
  if (!dot || !label) return;
  const online = navigator.onLine;
  dot.classList.toggle("online", online);
  label.textContent = online ? "Onlayn" : "Offline";
}
window.addEventListener("online", netIndicatorYangila);
window.addEventListener("offline", netIndicatorYangila);

/* ============ USERS ============ */
function getUsers() { try { return JSON.parse(localStorage.getItem(KEY_USERS) || "[]"); } catch { return []; } }
function saveUsers(list) { localStorage.setItem(KEY_USERS, JSON.stringify(list)); }
function findUser(tel) {
  const telClean = tel.replace(/\D/g, "");
  return getUsers().find(u => u.tel.replace(/\D/g, "") === telClean);
}
function addUser(user) { const list = getUsers(); list.push(user); saveUsers(list); }

async function initDemoUser() {
  if (!findUser("+998901234567")) {
    const hashedPin = await pinHash("1234");
    addUser({
      fish: "Demo Hamshira", viloyat: "Toshkent shahri",
      tuman: "Chilonzor tumani", tel: "+998901234567",
      pin: hashedPin, vaqt: new Date().toISOString()
    });
    console.log("✅ Demo user yaratildi (PIN: 1234)");
  }
}

/* ============ SESSION ============ */
function getSession() { try { return JSON.parse(sessionStorage.getItem(KEY_SESSION) || "null"); } catch { return null; } }
function setSession(user) { sessionStorage.setItem(KEY_SESSION, JSON.stringify(user)); }
function clearSession() { sessionStorage.removeItem(KEY_SESSION); }

/* ============ NAVIGATSIYA ============ */
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = $('page-' + name);
  if (target) target.classList.add('active');
  window.scrollTo(0, 0);
  document.querySelectorAll('.nav-menu button').forEach(b => b.classList.remove('active'));
  if (name === 'landing') $('navBosh').classList.add('active');
  else if (name === 'royxat') $('navRoyxat').classList.add('active');
  else if (name === 'kuzatuv') $('navKuzatuv').classList.add('active');
  else if (name === 'tolov') $('navTolov').classList.add('active');
  else if (name === 'komissiya') $('navKomissiya').classList.add('active');
}
function goToRoyxat() {
  if (!getSession()) { toast("Avval tizimga kiring", "err"); openLogin(); return; }
  showPage('royxat');
}
function goToKuzatuv() {
  if (!getSession()) { toast("Avval tizimga kiring", "err"); openLogin(); return; }
  showPage('kuzatuv');
  kuzatuvChiz();
}
function goToTolov() {
  if (!getSession()) { toast("Avval tizimga kiring", "err"); openLogin(); return; }
  showPage('tolov');
  tolovChiz();
  tolovStatistika();
}
function goToKomissiya() {
  if (!getSession()) { toast("Avval tizimga kiring", "err"); openLogin(); return; }
  showPage('komissiya');
  komissiyaChiz();
  komissiyaStatistika();
  setTimeout(barchaChartlarChiz, 100);
}
function scrollToSection(id) {
  const el = $(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ============ LOGIN ============ */
function openLogin() { $("loginPanel").classList.add("active"); switchLoginTab("kirish"); }
function closeLogin() {
  $("loginPanel").classList.remove("active");
  $("formKirish").reset(); $("formRoyxat").reset();
  $("msgKirish").className = "login-msg"; $("msgRoyxat").className = "login-msg";
}
function switchLoginTab(tab) {
  document.querySelectorAll('.login-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.login-form').forEach(f => f.classList.remove('active'));
  $("msgKirish").className = "login-msg"; $("msgRoyxat").className = "login-msg";
  if (tab === 'kirish') { $("tabKirish").classList.add('active'); $('formKirish').classList.add('active'); }
  else { $("tabRoyxat").classList.add('active'); $('formRoyxat').classList.add('active'); }
}
function showMsg(elId, text, type) {
  const el = $(elId);
  el.textContent = text;
  el.className = "login-msg " + type;
}

const regViloyat = $("regViloyat"), regTuman = $("regTuman");
function makeOpt(text, value) {
  const o = document.createElement("option");
  o.textContent = text; o.value = value ?? text;
  return o;
}
regViloyat.appendChild(makeOpt("Tanlang", ""));
HUDUDLAR.forEach((v, i) => regViloyat.appendChild(makeOpt(v.nom, String(i))));

function regFillTuman() {
  const v = HUDUDLAR[Number(regViloyat.value)];
  regTuman.innerHTML = "";
  if (!v) { regTuman.disabled = true; regTuman.appendChild(makeOpt("Avval viloyatni tanlang", "")); return; }
  regTuman.disabled = false;
  regTuman.appendChild(makeOpt("Tanlang", ""));
  if (v.shaharlar.length) {
    const g = document.createElement("optgroup"); g.label = "Shaharlar";
    v.shaharlar.forEach(s => g.appendChild(makeOpt(s, s))); regTuman.appendChild(g);
  }
  const g2 = document.createElement("optgroup"); g2.label = "Tumanlar";
  Object.keys(v.tumanlar).sort((a,b) => a.localeCompare(b, "uz")).forEach(t => g2.appendChild(makeOpt(t, t)));
  regTuman.appendChild(g2);
}
regViloyat.addEventListener("change", regFillTuman);

$("formKirish").addEventListener("submit", async (e) => {
  e.preventDefault();
  const tel = $("kirishTel").value.trim();
  const pin = $("kirishPin").value.trim();
  if (!tel) { showMsg("msgKirish", "❌ Telefon kiriting", "err"); return; }
  if (!pin) { showMsg("msgKirish", "❌ PIN kiriting", "err"); return; }
  const user = findUser(tel);
  if (!user) { showMsg("msgKirish", "❌ Topilmadi. Avval ro‘yxatdan o‘ting.", "err"); return; }
  const togri = await pinTekshir(pin, user.pin);
  if (!togri) { showMsg("msgKirish", "❌ PIN noto‘g‘ri", "err"); return; }
  showMsg("msgKirish", "✅ Muvaffaqiyat!", "ok");
  setTimeout(() => {
    setSession(user);
    audit("LOGIN", `Kirish: ${user.fish}`);
    toast(`✅ Xush kelibsiz!`, "ok");
    closeLogin();
    enterApp(user);
    
    // 🤖 Telegramga xabar
    tg(`
🔐 <b>TIZIMGA KIRISH</b>

👩‍⚕️ <b>${user.fish}</b>
📍 ${user.viloyat} · ${user.tuman}
📅 ${new Date().toLocaleString("uz-UZ")}
    `);
    
  }, 600);
});

$("formRoyxat").addEventListener("submit", async (e) => {
  e.preventDefault();
  const fish = $("regFish").value.trim();
  const viloyatIdx = regViloyat.value;
  const tuman = regTuman.value;
  const tel = $("regTel").value.trim();
  const pin = $("regPin").value.trim();

  if (!fish) { showMsg("msgRoyxat", "❌ F.I.Sh. kiriting", "err"); return; }
  if (fish.split(/\s+/).length < 2) { showMsg("msgRoyxat", "❌ Familiya va ism to‘liq", "err"); return; }
  if (!viloyatIdx) { showMsg("msgRoyxat", "❌ Viloyat tanlang", "err"); return; }
  if (!tuman) { showMsg("msgRoyxat", "❌ Tuman tanlang", "err"); return; }
  if (!tel) { showMsg("msgRoyxat", "❌ Telefon kiriting", "err"); return; }
  const telClean = tel.replace(/\D/g, "");
  if (telClean.length < 9) { showMsg("msgRoyxat", "❌ Telefon kamida 9 raqam", "err"); return; }
  if (!pin) { showMsg("msgRoyxat", "❌ PIN kiriting", "err"); return; }
  if (!/^\d{4}$/.test(pin)) { showMsg("msgRoyxat", "❌ PIN 4 raqam", "err"); return; }
  if (findUser(tel)) { showMsg("msgRoyxat", "❌ Bu telefon band", "err"); return; }

  const viloyat = HUDUDLAR[Number(viloyatIdx)].nom;
  const hashedPin = await pinHash(pin);
  const user = { fish, viloyat, tuman, tel, pin: hashedPin, vaqt: new Date().toISOString() };
  addUser(user);
  audit("REGISTER", `${fish} ro‘yxatdan o‘tdi`);
  showMsg("msgRoyxat", "✅ Muvaffaqiyat!", "ok");
  setTimeout(() => {
    setSession(user);
    toast(`✅ Xush kelibsiz!`, "ok");
    closeLogin();
    enterApp(user);
  }, 800);
});

function enterApp(user) {
  const setText = (id, val) => { const el = $(id); if (el) el.textContent = val; };
  const setVal = (id, val) => { const el = $(id); if (el) el.value = val; };

  setText("hamshiraIsm", user.fish);
  setText("hamshiraIsm2", user.fish);
  setText("hamshiraHudud", `${user.viloyat} · ${user.tuman}`);
  setVal("tumanDisplay", user.tuman);

  const info = $("hamshiraInfo");
  if (info) {
    info.style.display = "block";
    info.innerHTML = `👩‍⚕️ <b>${user.fish}</b> · 📍 ${user.viloyat} · ${user.tuman}`;
  }

  const loginBtn = $("loginBtnTop");
  const logoutBtn = $("logoutBtnTop");
  if (loginBtn) loginBtn.style.display = "none";
  if (logoutBtn) logoutBtn.style.display = "inline-flex";

  showPage('landing');
  punktListniYuklash(user.tuman);
  imtiyozSelectniYuklash();
  xizmatlarRender();
  statistika();
  chiz(false);
  kuzatuvChiz();
  tolovChiz();
  tolovStatistika();
  komissiyaChiz();
  komissiyaStatistika();
  cardListRender();
  setOnline(navigator.onLine);
  updatePath();
  barchaChartlarChiz();
  netIndicatorYarat();
  toast(`✅ ${user.fish}, xush kelibsiz!`, "ok");
}

function logout() {
  const s = getSession();
  if (s) audit("LOGOUT", `Chiqish: ${s.fish}`);
  clearSession();
  $("loginBtnTop").style.display = "inline-flex";
  $("logoutBtnTop").style.display = "none";
  const info = $("hamshiraInfo");
  if (info) info.style.display = "none";
  toast("Tizimdan chiqdingiz", "ok");
  showPage('landing');
}

function checkSession() {
  const s = getSession();
  if (s) enterApp(s);
  else showPage('landing');
}

/* ============ IMTIYOZ SELECT ============ */
function imtiyozSelectniYuklash() {
  const sel = $("imtiyozTuri");
  if (!sel) return;
  sel.innerHTML = "";
  Object.entries(IMTIYOZ_TURLARI).forEach(([key, val]) => {
    const o = document.createElement("option");
    o.value = key;
    o.textContent = val.belgi ? `${val.belgi} ${val.nom} (−${val.foiz}%)` : val.nom;
    sel.appendChild(o);
  });
  sel.onchange = () => {
    const tur = IMTIYOZ_TURLARI[sel.value] || IMTIYOZ_TURLARI[""];
    const foizEl = $("imtiyozFoiz");
    if (foizEl) foizEl.value = tur.foiz;
    jamiHisoblash();
  };
}

/* ============ FILE UPLOAD ============ */
function faylKorsat(fayl) {
  if (!fayl) return;
  if (fayl.size > 2 * 1024 * 1024) { toast("❌ Fayl hajmi 2 MB dan oshmasin", "err"); return; }
  const turiOk = fayl.type.startsWith("image/") || fayl.type === "application/pdf";
  if (!turiOk) { toast("❌ Faqat rasm yoki PDF", "err"); return; }
  const reader = new FileReader();
  reader.onload = (e) => {
    imtiyozFaylBase64 = e.target.result;
    imtiyozFaylNomi = fayl.name;
    const preview = $("filePreview");
    if (!preview) return;
    if (fayl.type.startsWith("image/")) {
      preview.innerHTML = `
        <div class="file-preview">
          <img src="${e.target.result}" alt="Hujjat" />
          <div class="file-info">
            <div class="file-name">${fayl.name}</div>
            <div class="file-size">${faylHajmFormat(fayl.size)}</div>
          </div>
          <button type="button" class="file-remove" onclick="faylOchir()">×</button>
        </div>`;
    } else {
      preview.innerHTML = `
        <div class="file-preview">
          <div style="width:60px;height:60px;display:grid;place-items:center;background:rgba(180,35,24,0.1);border-radius:8px;font-size:28px">📄</div>
          <div class="file-info">
            <div class="file-name">${fayl.name}</div>
            <div class="file-size">${faylHajmFormat(fayl.size)}</div>
          </div>
          <button type="button" class="file-remove" onclick="faylOchir()">×</button>
        </div>`;
    }
    const zone = $("fileUploadZone");
    if (zone) zone.classList.add("has-file");
    toast("✅ Hujjat yuklandi", "ok");
  };
  reader.readAsDataURL(fayl);
}

function faylOchir() {
  imtiyozFaylBase64 = null;
  imtiyozFaylNomi = "";
  const preview = $("filePreview");
  if (preview) preview.innerHTML = "";
  const zone = $("fileUploadZone");
  if (zone) zone.classList.remove("has-file");
  const inp = $("imtiyozFayl");
  if (inp) inp.value = "";
  toast("Hujjat o‘chirildi", "ok");
}
window.faylOchir = faylOchir;

function initFileUpload() {
  const zone = $("fileUploadZone");
  const inp = $("imtiyozFayl");
  if (!zone || !inp) return;
  zone.onclick = () => inp.click();
  inp.onchange = (e) => { if (e.target.files[0]) faylKorsat(e.target.files[0]); };
  zone.addEventListener("dragover", (e) => { e.preventDefault(); zone.classList.add("dragover"); });
  zone.addEventListener("dragleave", () => zone.classList.remove("dragover"));
  zone.addEventListener("drop", (e) => {
    e.preventDefault();
    zone.classList.remove("dragover");
    if (e.dataTransfer.files[0]) faylKorsat(e.dataTransfer.files[0]);
  });
}

/* ============ DMED MOCK ============ */
function dmedMockFetch(jshshir) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (!jshshir || jshshir.length !== 14) { resolve({ ok: false, error: "JSHSHIR 14 raqam bo‘lishi kerak" }); return; }
      resolve({
        ok: true,
        dmedId: "DMED-" + jshshir.slice(-6),
        tashxislar: [
          { kod: "I10", nom: "Gipertoniya (yuqori qon bosimi)", sana: "2024-06-15" },
          { kod: "E11", nom: "2-tur qandli diabet", sana: "2023-11-20" }
        ],
        retseptlar: [
          { dori: "Enalapril 10 mg", kunlik: "1x kun", muddat: "30 kun" },
          { dori: "Metformin 500 mg", kunlik: "2x kun", muddat: "30 kun" }
        ],
        oxirgiTashrif: "2025-09-10",
        shifokor: "Dr. Karimov A.",
        muassasa: "Toshkent shahar 1-sonli poliklinika"
      });
    }, 1200);
  });
}

async function dmedMalumotOlish() {
  const jshshir = $("jshshir").value.replace(/\D/g, "");
  const btn = $("dmedFetchBtn");
  const statusEl = $("dmedStatusText");
  const resultEl = $("dmedResult");

  if (!jshshir) { toast("❌ Avval JSHSHIR kiriting", "err"); return; }
  if (jshshir.length !== 14) { toast("❌ JSHSHIR 14 raqam bo‘lishi kerak", "err"); return; }

  btn.disabled = true;
  btn.innerHTML = "⏳ DMed’dan olinmoqda...";
  statusEl.textContent = "Serverga so‘rov yuborildi...";
  resultEl.innerHTML = "";

  try {
    const data = await dmedMockFetch(jshshir);
    if (!data.ok) {
      statusEl.innerHTML = `<span class="dmed-status err">❌ ${data.error}</span>`;
    } else {
      statusEl.innerHTML = `<span class="dmed-status ok">✅ DMed’dan ma’lumot olindi</span>`;
      let html = `<div style="background:var(--card);border:1.5px solid var(--dmed);border-radius:14px;padding:16px;margin-top:12px;animation:slideUp .4s ease">`;
      html += `<div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;flex-wrap:wrap">`;
      html += `<span class="dmed-badge">🏥 DMed</span>`;
      html += `<b style="font-size:14px">ID: ${data.dmedId}</b>`;
      html += `</div>`;
      html += `<div style="font-size:13px;color:var(--muted);margin-bottom:12px">`;
      html += `<b style="color:var(--ink)">Muassasa:</b> ${data.muassasa}<br>`;
      html += `<b style="color:var(--ink)">Shifokor:</b> ${data.shifokor}<br>`;
      html += `<b style="color:var(--ink)">Oxirgi tashrif:</b> ${data.oxirgiTashrif}`;
      html += `</div>`;
      html += `<div style="margin-top:12px"><b style="font-size:13px">📋 Tashxislar:</b>`;
      data.tashxislar.forEach(t => {
        html += `<div style="background:rgba(180,35,24,0.06);padding:8px 12px;border-radius:8px;margin-top:6px;font-size:13px;border-left:3px solid var(--err)">`;
        html += `<b>${t.kod}</b> — ${t.nom} <span style="color:var(--muted);font-size:11px">(${t.sana})</span>`;
        html += `</div>`;
      });
      html += `</div>`;
      html += `<div style="margin-top:12px"><b style="font-size:13px">💊 Retseptlar:</b>`;
      data.retseptlar.forEach(r => {
        html += `<div style="background:rgba(26,138,92,0.06);padding:8px 12px;border-radius:8px;margin-top:6px;font-size:13px;border-left:3px solid var(--ok)">`;
        html += `<b>${r.dori}</b> — ${r.kunlik}, ${r.muddat}`;
        html += `</div>`;
      });
      html += `</div>`;
      html += `<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">`;
      html += `<button type="button" class="btn sm" onclick="dmedBemorgaQosh('${data.dmedId}')">✅ Bemorga bog‘lash</button>`;
      html += `</div>`;
      html += `</div>`;
      resultEl.innerHTML = html;
      window._dmedData = data;
      audit("DMED_FETCH", `JSHSHIR: ${jshshir}`);
    }
  } catch (err) {
    statusEl.innerHTML = `<span class="dmed-status err">❌ Xatolik: ${err.message}</span>`;
  } finally {
    btn.disabled = false;
    btn.innerHTML = `<svg width="16" height="16"><use href="#icon-search"/></svg> DMed’dan ma’lumot olish`;
  }
}

function dmedBemorgaQosh(dmedId) {
  let el = $("dmedLinkedInfo");
  if (!el) {
    el = document.createElement("div");
    el.id = "dmedLinkedInfo";
    el.style.cssText = "background:rgba(0,102,204,0.08);padding:10px 14px;border-radius:10px;margin-top:10px;font-size:13px;border-left:3px solid #0066cc";
    const parent = $("dmedResult");
    if (parent) parent.appendChild(el);
  }
  el.innerHTML = `🏥 <b>DMed ID:</b> ${dmedId} · <span style="color:var(--ok)">✅ Bog‘landi</span>`;
  toast("✅ DMed bilan bog‘landi", "ok");
  audit("DMED_LINK", dmedId);
}
window.dmedBemorgaQosh = dmedBemorgaQosh;

/* ============ XIZMATLAR ============ */
function xizmatlarRender() {
  const grid = $("servicesGrid");
  if (!grid) return;
  grid.innerHTML = "";
  XIZMATLAR.forEach(x => {
    const item = document.createElement("div");
    item.className = "service-item";
    item.dataset.id = x.id;
    item.innerHTML = `
      <span class="service-name">${x.nom}</span>
      <span class="service-price">${formatSum(x.narx)}</span>
    `;
    item.onclick = () => {
      if (tanlanganXizmatlar.has(x.id)) tanlanganXizmatlar.delete(x.id);
      else tanlanganXizmatlar.add(x.id);
      item.classList.toggle("selected");
      jamiHisoblash();
    };
    grid.appendChild(item);
  });
}

function jamiHisoblash() {
  let jami = 0;
  tanlanganXizmatlar.forEach(id => {
    const x = XIZMATLAR.find(s => s.id === id);
    if (x) jami += x.narx;
  });
  const imtiyozEl = $("imtiyozTuri");
  const imtiyozFoizEl = $("imtiyozFoiz");
  const imtiyozTuri = imtiyozEl ? imtiyozEl.value : "";
  const imtiyozFoiz = imtiyozFoizEl ? (parseFloat(imtiyozFoizEl.value) || 0) : 0;
  const chegirma = Math.round(jami * imtiyozFoiz / 100);
  const yakuniy = jami - chegirma;

  const komissiya = Math.round(yakuniy * KOMISSIYA_FOIZI / 100);
  const sofSumma = yakuniy - komissiya;

  const totalEl = $("totalPrice");
  if (totalEl) {
    if (imtiyozFoiz > 0 && imtiyozTuri) {
      totalEl.innerHTML = `
        <div style="text-decoration:line-through;color:var(--muted);font-size:16px;font-weight:500">${formatSum(jami)}</div>
        <div style="color:var(--ok);font-size:14px;font-weight:600">🎖️ Imtiyoz −${imtiyozFoiz}% (−${formatSum(chegirma)})</div>
        <div>${formatSum(yakuniy)}</div>
      `;
    } else {
      totalEl.textContent = formatSum(jami);
    }
  }

  const komissiyaEl = $("commissionValue");
  const netEl = $("netValue");
  const komissiyaTotalEl = $("commissionTotal");
  if (komissiyaEl) komissiyaEl.textContent = formatSum(komissiya);
  if (netEl) netEl.textContent = formatSum(sofSumma);
  if (komissiyaTotalEl) komissiyaTotalEl.textContent = formatSum(komissiya);

  return yakuniy;
}

/* ============ PUNKTLAR ============ */
const punktInput = $("punkt"), punktList = $("punktList"), path = $("path");
function punktListniYuklash(tuman) {
  const pl = $("punktList");
  if (!pl) return;
  pl.innerHTML = "";
  let items = [];
  outer:
  for (const v of HUDUDLAR) {
    for (const [t, arr] of Object.entries(v.tumanlar)) {
      if (t === tuman) { items = arr; break outer; }
    }
  }
  items.forEach(p => {
    const o = document.createElement("option");
    o.value = p; pl.appendChild(o);
  });
}
function updatePath() {
  const s = getSession();
  if (!s || !path) return;
  const p = punktInput ? punktInput.value.trim() : "";
  path.textContent = [s.viloyat, s.tuman, p].filter(Boolean).join("  →  ") || "Hudud tanlanmagan";
}
if (punktInput) punktInput.addEventListener("input", updatePath);

/* ============ BEMORLAR ============ */
function oqiBemorlar() { try { return JSON.parse(localStorage.getItem(KEY_BEMOR) || "[]"); } catch { return []; } }
function yozBemorlar(list) { localStorage.setItem(KEY_BEMOR, JSON.stringify(list)); }
function meningBemorlar() {
  const s = getSession();
  if (!s) return [];
  const telClean = s.tel.replace(/\D/g, "");
  return oqiBemorlar().filter(b => (b.hamshiraTel || "").replace(/\D/g, "") === telClean);
}

/* ============ TO'LOVLAR ============ */
function oqiTolovlar() { try { return JSON.parse(localStorage.getItem(KEY_TOLOV) || "[]"); } catch { return []; } }
function yozTolovlar(list) { localStorage.setItem(KEY_TOLOV, JSON.stringify(list)); }
function meningTolovlar() {
  const s = getSession();
  if (!s) return [];
  const telClean = s.tel.replace(/\D/g, "");
  return oqiTolovlar().filter(t => (t.hamshiraTel || "").replace(/\D/g, "") === telClean);
}

/* ============ ONLINE / OFFLINE ============ */
const dot = $("netDot"), label = $("netLabel");
function setOnline(online) {
  if (!dot) return;
  dot.classList.toggle("online", online);
  if (label) label.textContent = online ? "Onlayn" : "Offline";
}
setOnline(navigator.onLine);
window.addEventListener("online", () => setOnline(true));
window.addEventListener("offline", () => setOnline(false));

/* ============ SYNC ============ */
function syncNow() {
  if (!navigator.onLine) { toast("Internet yo‘q", "err"); return; }
  $("syncOverlay").classList.add("show");
  progress();
  setTimeout(() => {
    const s = getSession();
    if (!s) { $("syncOverlay").classList.remove("show"); return; }
    const all = oqiBemorlar();
    let count = 0;
    const telClean = s.tel.replace(/\D/g, "");
    all.forEach(r => {
      if ((r.hamshiraTel || "").replace(/\D/g, "") === telClean && r.offline) {
        r.offline = false; count++;
      }
    });
    yozBemorlar(all);
    audit("SYNC", `${count} ta yozuv`);
    $("syncOverlay").classList.remove("show");
    toast(count + " ta yozuv sinxronlandi", "ok");
    chiz(false); statistika(); cardListRender();
  }, 1400);
}

/* ============ KARTALAR ============ */
const cardList = $("cardList");
function qisqaIsm(fish) {
  const q = fish.trim().split(/\s+/).filter(Boolean);
  if (q.length === 1) return q[0];
  return q[0] + " " + q[1].charAt(0).toUpperCase() + ".";
}
function bemorKartasi(rec) {
  const mini = document.createElement("div");
  mini.className = "mini";
  const div = document.createElement("div");
  const strong = document.createElement("strong");
  strong.textContent = qisqaIsm(rec.fish);
  const br = document.createElement("br");
  const small = document.createElement("small");
  small.textContent = rec.guruh;
  div.append(strong, br, small);
  const span = document.createElement("span");
  span.textContent = rec.offline ? "Kutilmoqda" : "Kiritildi";
  mini.append(div, span);
  return mini;
}
function cardListRender() {
  if (!cardList) return;
  cardList.innerHTML = "";
  meningBemorlar().slice(-8).forEach(b => cardList.appendChild(bemorKartasi(b)));
}

/* ============ STATISTIKA ============ */
function statistika() {
  const my = meningBemorlar();
  const a = $("stTotal"), b = $("stOnline"), c = $("stOffline");
  if (a) a.textContent = my.length;
  if (b) b.textContent = my.filter(r => !r.offline).length;
  if (c) c.textContent = my.filter(r => r.offline).length;
}

/* ============ RO'YXAT CHIZISH ============ */
const body = $("blBody"), count = $("blCount");
const qidiruv = $("qidiruv"), filterGuruh = $("filterGuruh"), filterImtiyoz = $("filterImtiyoz");

function filtrlangan() {
  if (!qidiruv) return meningBemorlar();
  const q = qidiruv.value.toLowerCase().trim();
  const g = filterGuruh ? filterGuruh.value : "";
  const im = filterImtiyoz ? filterImtiyoz.value : "";
  return meningBemorlar().filter(r => {
    const matn = [r.fish, r.hudud, r.mahalla, r.kucha, r.uy].join(" ").toLowerCase();
    if (q && !matn.includes(q)) return false;
    if (g && r.guruh !== g) return false;
    if (im === "imtiyozli" && !r.imtiyozli) return false;
    if (im === "imtiyozsiz" && r.imtiyozli) return false;
    if (im === "dmed" && !r.dmedBoglangan) return false;
    if (im === "hujjat" && !r.imtiyozFaylBase64) return false;
    return true;
  });
}

function td(text) {
  const c = document.createElement("td");
  c.textContent = text;
  return c;
}

function chiz(highlight) {
  if (!body) return;
  const my = meningBemorlar();
  const list = filtrlangan();
  body.innerHTML = "";
  if (count) count.textContent = list.length + " / " + my.length + " ta";

  if (!list.length) {
    const tr = document.createElement("tr");
    const c = document.createElement("td");
    c.colSpan = 9;
    c.className = "bl-empty";
    c.textContent = my.length ? "Filtr bo‘yicha topilmadi." : "Hozircha bemor qo‘shmagansiz.";
    tr.appendChild(c);
    body.appendChild(tr);
    return;
  }

  list.forEach((r, i) => {
    const tr = document.createElement("tr");
    if (highlight && i === list.length - 1) tr.className = "yangi";
    tr.appendChild(td(String(i + 1)));

    const fishTd = document.createElement("td");
    fishTd.innerHTML = `
      ${r.fish || ""}
      ${r.imtiyozli ? `<span class="badge-imtiyoz">🎖️ IMTIYOZLI</span>` : ""}
      ${r.dmedBoglangan ? `<span class="badge-dmed">🏥 DMed</span>` : ""}
      ${r.imtiyozFaylBase64 ? `<span style="margin-left:4px" title="Hujjat mavjud">📎</span>` : ""}
    `;
    tr.appendChild(fishTd);

    tr.appendChild(td(r.guruh || ""));
    tr.appendChild(td([r.mahalla, r.kucha, r.uy].filter(Boolean).join(", ")));

    const sumTd = document.createElement("td");
    if (r.imtiyozli && r.jamiAsl && r.jamiAsl !== r.jamiSumma) {
      sumTd.innerHTML = `
        <div style="text-decoration:line-through;color:var(--muted);font-size:11px">${formatSum(r.jamiAsl)}</div>
        <b style="color:var(--ok)">${formatSum(r.jamiSumma)}</b>
      `;
    } else {
      sumTd.innerHTML = `<b style="color:var(--gold)">${formatSum(r.jamiSumma || 0)}</b>`;
    }
    tr.appendChild(sumTd);

    const imTd = document.createElement("td");
    if (r.imtiyozli) {
      imTd.innerHTML = `<span style="color:#9a6f00;font-weight:600;font-size:12px">🎖️ ${r.imtiyozNomi}<br>−${r.imtiyozFoiz}%</span>`;
    } else {
      imTd.innerHTML = `<span style="color:var(--muted);font-size:12px">—</span>`;
    }
    tr.appendChild(imTd);

    const kmTd = document.createElement("td");
    kmTd.innerHTML = `<span class="commission-badge">💼 ${formatSum(r.komissiyaSumma || 0)}</span>`;
    tr.appendChild(kmTd);

    const h = document.createElement("td");
    const b = document.createElement("span");
    b.className = "bl-status " + (r.tolovHolati === "tolandi" ? "paid" : "kut");
    b.textContent = r.tolovHolati === "tolandi" ? "✅ To‘landi" : "⏳ Kutilmoqda";
    h.appendChild(b);
    tr.appendChild(h);

    const actions = document.createElement("td");
    actions.className = "row-actions";
    const receiptBtn = document.createElement("button");
    receiptBtn.className = "btn sm gold"; receiptBtn.textContent = "🧾";
    receiptBtn.title = "Kvitansiya";
    receiptBtn.onclick = () => kvitansiyaKorsat(r);
    const viewBtn = document.createElement("button");
    viewBtn.className = "btn sm ghost"; viewBtn.textContent = "👁️";
    viewBtn.onclick = () => openModal(r);
    const delBtn = document.createElement("button");
    delBtn.className = "btn sm danger"; delBtn.textContent = "🗑️";
    delBtn.onclick = () => deleteBemor(r);
    actions.append(receiptBtn, viewBtn, delBtn);
    tr.appendChild(actions);

    body.appendChild(tr);
  });
}

if (qidiruv) qidiruv.addEventListener("input", () => chiz(false));
if (filterGuruh) filterGuruh.addEventListener("input", () => chiz(false));
if (filterImtiyoz) filterImtiyoz.addEventListener("input", () => chiz(false));

/* ============ KVITANSIYA ============ */
function kvitansiyaKorsat(rec) {
  joriyChek = rec;
  const xizmatlar = rec.xizmatlar || [];
  const sana = rec.vaqt ? new Date(rec.vaqt).toLocaleString("uz-UZ") : new Date().toLocaleString("uz-UZ");

  let xizmatHtml = "";
  xizmatlar.forEach(x => {
    xizmatHtml += `<div class="receipt-row"><span>${x.nom}</span><span>${formatSum(x.narx)}</span></div>`;
  });

  const imtiyozHtml = rec.imtiyozli ? `
    <div class="receipt-row imtiyoz"><span>🎖️ ${rec.imtiyozNomi}</span><span>−${rec.imtiyozFoiz}%</span></div>
    ${rec.imtiyozHujjat ? `<div class="receipt-row"><span>Hujjat raqami:</span><span>${rec.imtiyozHujjat}</span></div>` : ""}
    ${rec.imtiyozFaylNomi ? `<div class="receipt-row"><span>Hujjat fayli:</span><span>📎 ${rec.imtiyozFaylNomi}</span></div>` : ""}
    <div class="receipt-row"><span>Asl summa:</span><span style="text-decoration:line-through">${formatSum(rec.jamiAsl || 0)}</span></div>
    <div class="receipt-row" style="color:#1a8a5c;font-weight:600"><span>Chegirma:</span><span>−${formatSum(rec.chegirmaSumma || 0)}</span></div>
  ` : "";

  const dmedHtml = rec.dmedBoglangan ? `
    <div class="receipt-row dmed"><span>🏥 DMed ID:</span><span><b>${rec.dmedId}</b></span></div>
  ` : "";

  const komissiyaHtml = `
    <div class="receipt-row commission"><span>💼 Tizim komissiyasi (3%):</span><span>${formatSum(rec.komissiyaSumma || 0)}</span></div>
    <div class="receipt-row"><span>Hamshira/davlat hisobiga:</span><span>${formatSum((rec.jamiSumma || 0) - (rec.komissiyaSumma || 0))}</span></div>
  `;

  const html = `
    <div class="receipt" id="printReceipt">
      <div class="receipt-head">
        <div class="receipt-logo">🏥</div>
        <h2>DIGITAL BRIDGE</h2>
        <p>Qishloq tibbiyoti · Rasmiy kvitansiya</p>
      </div>
      <div class="receipt-row"><span>Kvitansiya №:</span><span><b>${rec.kvitansiyaRaqam || "—"}</b></span></div>
      <div class="receipt-row"><span>Sana:</span><span>${sana}</span></div>
      <div class="receipt-row"><span>Bemor:</span><span><b>${rec.fish}</b></span></div>
      <div class="receipt-row"><span>JSHSHIR:</span><span>${rec.jshshir || "—"}</span></div>
      <div class="receipt-row"><span>Manzil:</span><span>${[rec.hudud, rec.mahalla, rec.kucha, rec.uy].filter(Boolean).join(", ")}</span></div>
      <div class="receipt-row"><span>Hamshira:</span><span>${rec.hamshiraFish || "—"}</span></div>
      ${dmedHtml}
      <div style="margin-top:12px;font-weight:700;font-size:13px">XIZMATLAR:</div>
      ${xizmatHtml}
      ${imtiyozHtml}
      <div class="receipt-row total">
        <span>JAMI:</span>
        <span>${formatSum(rec.jamiSumma || 0)}</span>
      </div>
      ${komissiyaHtml}
      <div class="receipt-row"><span>To‘lov turi:</span><span><b>${rec.tolovTuri === "naqd" ? "💵 Naqd" : rec.tolovTuri === "karta" ? "💳 Karta" : rec.tolovTuri === "online" ? "📱 Online" : rec.tolovTuri === "bepul" ? "🆓 Bepul" : "—"}</b></span></div>
      <div class="receipt-row"><span>Holat:</span><span><b>${rec.tolovHolati === "tolandi" ? "✅ To‘landi" : "⏳ Kutilmoqda"}</b></span></div>
      <div class="receipt-code">${rec.kvitansiyaRaqam || "—————"}</div>
      <div class="receipt-footer">
        Rahmat! Sog‘ligingiz uchun!<br>
        ☎️ 1140 · digitalbridge.uz
      </div>
    </div>
  `;
  $("receiptBody").innerHTML = html;
  $("receiptBg").classList.add("open");
}

function downloadReceipt() {
  if (!joriyChek) return;
  const rec = joriyChek;
  const xizmatlar = rec.xizmatlar || [];
  let txt = `═══════════════════════════════════════════\n`;
  txt += `         DIGITAL BRIDGE KVITANSIYASI\n`;
  txt += `═══════════════════════════════════════════\n\n`;
  txt += `Kvitansiya №: ${rec.kvitansiyaRaqam}\n`;
  txt += `Sana: ${new Date(rec.vaqt).toLocaleString("uz-UZ")}\n`;
  txt += `Bemor: ${rec.fish}\n`;
  txt += `JSHSHIR: ${rec.jshshir || "—"}\n`;
  txt += `Hamshira: ${rec.hamshiraFish || "—"}\n`;
  if (rec.dmedBoglangan) txt += `DMed ID: ${rec.dmedId}\n`;
  txt += `\n─── XIZMATLAR ─────────────────────────────\n`;
  xizmatlar.forEach(x => { txt += `${x.nom.padEnd(30)} ${formatSum(x.narx)}\n`; });
  if (rec.imtiyozli) {
    txt += `\n─── IMTIYOZ ───────────────────────────────\n`;
    txt += `Toifa: ${rec.imtiyozNomi}\n`;
    txt += `Chegirma: ${rec.imtiyozFoiz}%\n`;
    if (rec.imtiyozHujjat) txt += `Hujjat: ${rec.imtiyozHujjat}\n`;
    if (rec.imtiyozFaylNomi) txt += `Fayl: ${rec.imtiyozFaylNomi}\n`;
    txt += `Asl summa: ${formatSum(rec.jamiAsl)}\n`;
    txt += `Chegirma: −${formatSum(rec.chegirmaSumma)}\n`;
  }
  txt += `───────────────────────────────────────────\n`;
  txt += `JAMI: ${formatSum(rec.jamiSumma)}\n`;
  txt += `💼 Tizim komissiyasi (3%): ${formatSum(rec.komissiyaSumma || 0)}\n`;
  txt += `Hamshira/davlat hisobiga: ${formatSum((rec.jamiSumma || 0) - (rec.komissiyaSumma || 0))}\n`;
  txt += `To‘lov turi: ${rec.tolovTuri}\n`;
  txt += `Holat: ${rec.tolovHolati === "tolandi" ? "To‘landi" : "Kutilmoqda"}\n`;
  txt += `═══════════════════════════════════════════\n`;
  txt += `       ☎️ 1140 · digitalbridge.uz\n`;
  txt += `═══════════════════════════════════════════\n`;
  const blob = new Blob([txt], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = `kvitansiya-${rec.kvitansiyaRaqam}.txt`;
  a.click();
  URL.revokeObjectURL(url);
  toast("Kvitansiya yuklandi", "ok");
}

/* ============ TO'LOVLAR ============ */
const tlBody = $("tlBody"), tlCount = $("tlCount");
const tlQidiruv = $("tlQidiruv"), tlFilterTuri = $("tlFilterTuri"), tlFilterHolat = $("tlFilterHolat");

function tolovFiltrlangan() {
  let list = meningTolovlar();
  if (tlQidiruv) {
    const q = tlQidiruv.value.toLowerCase().trim();
    if (q) list = list.filter(t => (t.fish || "").toLowerCase().includes(q) || (t.kvitansiyaRaqam || "").toLowerCase().includes(q));
  }
  if (tlFilterTuri && tlFilterTuri.value) list = list.filter(t => t.tolovTuri === tlFilterTuri.value);
  if (tlFilterHolat && tlFilterHolat.value) list = list.filter(t => t.tolovHolati === tlFilterHolat.value);
  return list.reverse();
}

function tolovChiz() {
  if (!tlBody) return;
  const list = tolovFiltrlangan();
  tlBody.innerHTML = "";
  if (tlCount) tlCount.textContent = list.length + " ta";
  if (!list.length) {
    const tr = document.createElement("tr");
    const c = document.createElement("td");
    c.colSpan = 10;
    c.className = "bl-empty";
    c.textContent = "Hozircha to‘lov yo‘q.";
    tr.appendChild(c);
    tlBody.appendChild(tr);
    return;
  }
  list.forEach((t, i) => {
    const tr = document.createElement("tr");
    tr.appendChild(td(String(i + 1)));
    tr.appendChild(td(t.kvitansiyaRaqam || "—"));
    tr.appendChild(td(t.fish || ""));
    tr.appendChild(td(t.vaqt ? new Date(t.vaqt).toLocaleString("uz-UZ") : "—"));
    const sumTd = document.createElement("td");
    if (t.imtiyozli && t.jamiAsl) {
      sumTd.innerHTML = `
        <div style="text-decoration:line-through;color:var(--muted);font-size:11px">${formatSum(t.jamiAsl)}</div>
        <b style="color:var(--ok)">${formatSum(t.jamiSumma)}</b>
      `;
    } else {
      sumTd.innerHTML = `<b style="color:var(--gold)">${formatSum(t.jamiSumma || 0)}</b>`;
    }
    tr.appendChild(sumTd);
    const imTd = document.createElement("td");
    if (t.imtiyozli) imTd.innerHTML = `<span class="badge-imtiyoz">🎖️ ${t.imtiyozFoiz}%</span>`;
    else imTd.innerHTML = `<span style="color:var(--muted)">—</span>`;
    tr.appendChild(imTd);

    const kmTd = document.createElement("td");
    kmTd.innerHTML = `<span class="commission-badge">💼 ${formatSum(t.komissiyaSumma || 0)}</span>`;
    tr.appendChild(kmTd);

    tr.appendChild(td(t.tolovTuri === "naqd" ? "💵 Naqd" : t.tolovTuri === "karta" ? "💳 Karta" : t.tolovTuri === "online" ? "📱 Online" : t.tolovTuri === "bepul" ? "🆓 Bepul" : "—"));
    const h = document.createElement("td");
    const b = document.createElement("span");
    b.className = "bl-status " + (t.tolovHolati === "tolandi" ? "paid" : "kut");
    b.textContent = t.tolovHolati === "tolandi" ? "✅ To‘landi" : "⏳ Kutilmoqda";
    h.appendChild(b);
    tr.appendChild(h);
    const actions = document.createElement("td");
    const receiptBtn = document.createElement("button");
    receiptBtn.className = "btn sm gold"; receiptBtn.textContent = "🧾";
    receiptBtn.onclick = () => kvitansiyaKorsat(t);
    actions.appendChild(receiptBtn);
    tr.appendChild(actions);
    tlBody.appendChild(tr);
  });
}

if (tlQidiruv) tlQidiruv.addEventListener("input", tolovChiz);
if (tlFilterTuri) tlFilterTuri.addEventListener("input", tolovChiz);
if (tlFilterHolat) tlFilterHolat.addEventListener("input", tolovChiz);

function tolovStatistika() {
  const list = meningTolovlar();
  const jami = list.reduce((s, t) => s + (t.jamiSumma || 0), 0);
  const tolandi = list.filter(t => t.tolovHolati === "tolandi").reduce((s, t) => s + (t.jamiSumma || 0), 0);
  const kutil = list.filter(t => t.tolovHolati === "kutilmoqda").reduce((s, t) => s + (t.jamiSumma || 0), 0);
  const komissiya = list.reduce((s, t) => s + (t.komissiyaSumma || 0), 0);
  const imtiyozSumma = list.reduce((s, t) => s + (t.chegirmaSumma || 0), 0);
  if ($("tlJami")) $("tlJami").textContent = jami.toLocaleString("uz-UZ");
  if ($("tlTolangan")) $("tlTolangan").textContent = tolandi.toLocaleString("uz-UZ");
  if ($("tlKutilmoqda")) $("tlKutilmoqda").textContent = kutil.toLocaleString("uz-UZ");
  if ($("tlSoni")) $("tlSoni").textContent = list.length;
  if ($("tlKomissiya")) $("tlKomissiya").textContent = komissiya.toLocaleString("uz-UZ");
  if ($("tlImtiyozSumma")) $("tlImtiyozSumma").textContent = imtiyozSumma.toLocaleString("uz-UZ");
}

/* ============ KOMISSIYA ============ */
const kmBody = $("kmBody"), kmCount = $("kmCount");

function komissiyaChiz() {
  if (!kmBody) return;
  const list = meningTolovlar().reverse();
  kmBody.innerHTML = "";
  if (kmCount) kmCount.textContent = list.length + " ta";
  if (!list.length) {
    const tr = document.createElement("tr");
    const c = document.createElement("td");
    c.colSpan = 8;
    c.className = "bl-empty";
    c.textContent = "Hozircha komissiya yo‘q.";
    tr.appendChild(c);
    kmBody.appendChild(tr);
    return;
  }
  list.forEach((t, i) => {
    const tr = document.createElement("tr");
    tr.appendChild(td(String(i + 1)));
    tr.appendChild(td(t.kvitansiyaRaqam || "—"));
    tr.appendChild(td(t.fish || ""));
    tr.appendChild(td(t.vaqt ? new Date(t.vaqt).toLocaleString("uz-UZ") : "—"));
    tr.appendChild(td(formatSum(t.jamiSumma || 0)));

    const kmTd = document.createElement("td");
    kmTd.innerHTML = `<b style="color:var(--commission)">${formatSum(t.komissiyaSumma || 0)}</b>`;
    tr.appendChild(kmTd);

    const h = document.createElement("td");
    const b = document.createElement("span");
    b.className = "bl-status " + (t.tolovHolati === "tolandi" ? "paid" : "kut");
    b.textContent = t.tolovHolati === "tolandi" ? "✅ To‘landi" : "⏳ Kutilmoqda";
    h.appendChild(b);
    tr.appendChild(h);

    const actions = document.createElement("td");
    const receiptBtn = document.createElement("button");
    receiptBtn.className = "btn sm gold"; receiptBtn.textContent = "🧾";
    receiptBtn.onclick = () => kvitansiyaKorsat(t);
    actions.appendChild(receiptBtn);
    tr.appendChild(actions);

    kmBody.appendChild(tr);
  });
}

function komissiyaStatistika() {
  const list = meningTolovlar();
  const jamiKomissiya = list.reduce((s, t) => s + (t.komissiyaSumma || 0), 0);
  const bugun = new Date().toISOString().slice(0, 10);
  const buOy = new Date().toISOString().slice(0, 7);

  const bugunKomissiya = list.filter(t => (t.vaqt || "").slice(0, 10) === bugun).reduce((s, t) => s + (t.komissiyaSumma || 0), 0);
  const oyKomissiya = list.filter(t => (t.vaqt || "").slice(0, 7) === buOy).reduce((s, t) => s + (t.komissiyaSumma || 0), 0);
  const ortacha = list.length ? Math.round(jamiKomissiya / list.length) : 0;

  if ($("kmJami")) $("kmJami").textContent = jamiKomissiya.toLocaleString("uz-UZ");
  if ($("kmBugun")) $("kmBugun").textContent = bugunKomissiya.toLocaleString("uz-UZ");
  if ($("kmOy")) $("kmOy").textContent = oyKomissiya.toLocaleString("uz-UZ");
  if ($("kmOperatsiya")) $("kmOperatsiya").textContent = list.length;
  if ($("kmOrtacha")) $("kmOrtacha").textContent = ortacha.toLocaleString("uz-UZ");
  if ($("kmFoiz")) $("kmFoiz").textContent = KOMISSIYA_FOIZI + "%";
  if ($("kmBugun2")) $("kmBugun2").textContent = formatSum(bugunKomissiya);
  if ($("kmOy2")) $("kmOy2").textContent = formatSum(oyKomissiya);
  if ($("kmJami2")) $("kmJami2").textContent = formatSum(jamiKomissiya);
  if ($("kmSof")) $("kmSof").textContent = formatSum(jamiKomissiya);
}

/* ============ CHART.JS ============ */
let chartKomissiya = null, chartXizmatlar = null, chartImtiyoz = null;

function barchaChartlarChiz() {
  if (typeof Chart === "undefined") { console.warn("⚠️ Chart.js yo'q"); return; }
  Chart.defaults.font.family = "'Inter', system-ui, sans-serif";
  Chart.defaults.font.size = 12;
  Chart.defaults.color = getComputedStyle(document.body).getPropertyValue("--muted").trim() || "#4d6670";
  Chart.defaults.plugins.legend.position = "bottom";
  Chart.defaults.plugins.legend.labels.usePointStyle = true;
  Chart.defaults.plugins.legend.labels.padding = 15;

  chartKomissiyaChiz();
  chartXizmatlarChiz();
  chartImtiyozChiz();
}

function chartKomissiyaChiz() {
  const canvas = document.getElementById("chartKomissiya");
  if (!canvas) return;
  if (chartKomissiya) chartKomissiya.destroy();

  const list = meningTolovlar();
  const labels = [], data = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(); d.setDate(d.getDate() - i);
    const kun = d.toISOString().slice(0, 10);
    labels.push(d.toLocaleDateString("uz-UZ", { day: "2-digit", month: "short" }));
    data.push(list.filter(t => (t.vaqt || "").slice(0, 10) === kun)
      .reduce((s, t) => s + (t.komissiyaSumma || 0), 0));
  }
  chartKomissiya = new Chart(canvas, {
    type: "line",
    data: { labels, datasets: [{
      label: "Komissiya (so'm)", data,
      borderColor: "#7c3aed", backgroundColor: "rgba(124, 58, 237, 0.1)",
      borderWidth: 3, fill: true, tension: 0.4,
      pointBackgroundColor: "#7c3aed", pointBorderColor: "#fff",
      pointBorderWidth: 2, pointRadius: 5, pointHoverRadius: 7
    }]},
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: {
        label: (ctx) => "💼 " + ctx.parsed.y.toLocaleString("uz-UZ") + " so'm"
      }}},
      scales: { y: { beginAtZero: true, ticks: { callback: (v) => v.toLocaleString("uz-UZ") } } }
    }
  });
}

function chartXizmatlarChiz() {
  const canvas = document.getElementById("chartXizmatlar");
  if (!canvas) return;
  if (chartXizmatlar) chartXizmatlar.destroy();

  const hisob = {};
  meningTolovlar().forEach(t => (t.xizmatlar || []).forEach(x => {
    hisob[x.nom] = (hisob[x.nom] || 0) + 1;
  }));
  const sorted = Object.entries(hisob).sort((a, b) => b[1] - a[1]).slice(0, 6);

  if (!sorted.length) {
    canvas.parentElement.innerHTML = '<p style="text-align:center;color:var(--muted);padding:40px">Hozircha ma\'lumot yo\'q</p>';
    return;
  }
  chartXizmatlar = new Chart(canvas, {
    type: "doughnut",
    data: { labels: sorted.map(x => x[0]), datasets: [{
      data: sorted.map(x => x[1]),
      backgroundColor: ["#0d7a7a", "#12344a", "#d4a017", "#7c3aed", "#1a8a5c", "#0066cc"],
      borderWidth: 3, borderColor: "#fff", hoverOffset: 10
    }]},
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: "right" }, tooltip: { callbacks: {
        label: (ctx) => "💊 " + ctx.label + ": " + ctx.parsed + " ta"
      }}},
      cutout: "60%"
    }
  });
}

function chartImtiyozChiz() {
  const canvas = document.getElementById("chartImtiyoz");
  if (!canvas) return;
  if (chartImtiyoz) chartImtiyoz.destroy();

  const list = meningTolovlar();
  let imtiyozli = 0, imtiyozsiz = 0;
  list.forEach(t => t.imtiyozli ? imtiyozli++ : imtiyozsiz++);

  if (!list.length) {
    canvas.parentElement.innerHTML = '<p style="text-align:center;color:var(--muted);padding:40px">Hozircha ma\'lumot yo\'q</p>';
    return;
  }
  chartImtiyoz = new Chart(canvas, {
    type: "bar",
    data: { labels: ["Imtiyozli", "Imtiyozsiz"], datasets: [{
      label: "Bemorlar soni", data: [imtiyozli, imtiyozsiz],
      backgroundColor: ["#d4a017", "#0d7a7a"],
      borderRadius: 12, borderSkipped: false, barThickness: 60
    }]},
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false }, tooltip: { callbacks: {
        label: (ctx) => "👥 " + ctx.parsed.y + " ta bemor"
      }}},
      scales: { y: { beginAtZero: true, ticks: { stepSize: 1 } } }
    }
  });
}

/* ============ KUZATUV ============ */
function oqiKuzatuv() { try { return JSON.parse(localStorage.getItem(KEY_KUZATUV) || "[]"); } catch { return []; } }
function yozKuzatuv(list) { localStorage.setItem(KEY_KUZATUV, JSON.stringify(list)); }
function meningKuzatuv() {
  const s = getSession();
  if (!s) return [];
  const telClean = s.tel.replace(/\D/g, "");
  return oqiKuzatuv().filter(k => (k.hamshiraTel || "").replace(/\D/g, "") === telClean);
}

const kuzatuvForm = $("kuzatuvForm");
if (kuzatuvForm) {
  kuzatuvForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const s = getSession();
    if (!s) { toast("Avval kiring", "err"); return; }
    const setErr = (n, m) => { const el = document.querySelector('[data-err="'+n+'"]'); if (el) el.textContent = m; };
    ["kFish","kTashxis","kChiqish","kTashrif"].forEach(n => setErr(n, ""));
    let ok = true;
    const fish = $("kFish").value.trim();
    const tashxis = $("kTashxis").value.trim();
    const chiqish = $("kChiqish").value;
    const tashrif = $("kTashrif").value;
    const izoh = $("kIzoh").value.trim();
    if (fish.split(/\s+/).length < 2) { setErr("kFish", "F.I.Sh. to‘liq"); ok = false; }
    if (!tashxis) { setErr("kTashxis", "Tashxis kerak"); ok = false; }
    if (!chiqish) { setErr("kChiqish", "Sana kerak"); ok = false; }
    if (!tashrif) { setErr("kTashrif", "Sana kerak"); ok = false; }
    const out = $("kResult");
    if (!ok) { out.textContent = "❌ Xatolarni tuzating"; return; }
    const rec = { fish, tashxis, chiqish, tashrif, izoh, hamshiraTel: s.tel, hamshiraFish: s.fish, holat: "kuzatuvda", vaqt: new Date().toISOString() };
    const all = oqiKuzatuv(); all.push(rec); yozKuzatuv(all);
    audit("KUZATUV", `Yangi: ${fish}`);
    // 🤖 Telegramga xabar
tg(`
👁️ <b>YANGI KUZATUV</b>

👤 <b>${fish}</b>
🩺 Tashxis: ${tashxis}
📅 Chiqish: ${chiqish}
📅 Birinchi tashrif: ${tashrif}
${izoh ? `📝 ${izoh}` : ""}

👩‍⚕️ ${s.fish}
`);
    out.innerHTML = '<span class="ok">✅ Patronajga biriktirildi.</span>';
    toast("✅ Kuzatuvga qo‘shildi", "ok");
    progress();
    e.target.reset();
    kuzatuvChiz();
  });
}

function kuzatuvChiz() {
  const kBody = $("kBody");
  if (!kBody) return;
  const my = meningKuzatuv();
  const kCount = $("kCount");
  if (kCount) kCount.textContent = my.length + " ta";
  kBody.innerHTML = "";
  if (!my.length) {
    const tr = document.createElement("tr");
    const c = document.createElement("td");
    c.colSpan = 7;
    c.className = "bl-empty";
    c.textContent = "Kuzatuvda bemor yo‘q.";
    tr.appendChild(c);
    kBody.appendChild(tr);
    return;
  }
  my.forEach((r, i) => {
    const tr = document.createElement("tr");
    tr.appendChild(td(String(i + 1)));
    tr.appendChild(td(r.fish));
    tr.appendChild(td(r.tashxis));
    tr.appendChild(td(r.chiqish));
    tr.appendChild(td(r.tashrif));
    const h = document.createElement("td");
    const b = document.createElement("span");
    b.className = "bl-status ok";
    b.textContent = "Kuzatuvda";
    h.appendChild(b);
    tr.appendChild(h);
    const actions = document.createElement("td");
    const delBtn = document.createElement("button");
    delBtn.className = "btn sm danger"; delBtn.textContent = "🗑️";
    delBtn.onclick = () => {
      if (!confirm(`"${r.fish}" o‘chirilsinmi?`)) return;
      const all = oqiKuzatuv();
      const idx = all.indexOf(r);
      if (idx > -1) all.splice(idx, 1);
      yozKuzatuv(all);
      audit("KUZATUV_DELETE", r.fish);
      toast("O‘chirildi", "ok");
      kuzatuvChiz();
    };
    actions.appendChild(delBtn);
    tr.appendChild(actions);
    kBody.appendChild(tr);
  });
}

/* ============ MODAL BEMOR ============ */
function modalRow(label, val, cls = "") {
  const d = document.createElement("div");
  d.className = "modal-row" + (cls ? " " + cls : "");
  const b = document.createElement("b"); b.textContent = label;
  const s = document.createElement("span"); s.innerHTML = val || "—";
  d.append(b, s);
  return d;
}

function openModal(r) {
  $("modalTitle").textContent = r.fish;
  const mb = $("modalBody");
  mb.innerHTML = "";
  mb.append(
    modalRow("F.I.Sh.", r.fish), modalRow("Jinsi", r.jins),
    modalRow("Tug‘ilgan", r.tugilgan), modalRow("Guruh", r.guruh),
    modalRow("Hudud", r.hudud), modalRow("Mahalla", r.mahalla),
    modalRow("Ko‘cha, uy", [r.kucha, r.uy].filter(Boolean).join(", ")),
    modalRow("JSHSHIR", r.jshshir || "—"), modalRow("Telefon", r.tel || "—")
  );
  if (r.dmedBoglangan) {
    mb.append(
      modalRow("🏥 DMed ID", `<span class="dmed-badge">${r.dmedId}</span>`, "dmed"),
      modalRow("DMed holati", `<span style="color:var(--ok)">✅ Bog‘langan</span>`, "dmed")
    );
  }
  if (r.imtiyozli) {
    mb.append(
      modalRow("🎖️ Imtiyoz toifasi", `<b style="color:#9a6f00">${r.imtiyozNomi}</b>`, "gold"),
      modalRow("Chegirma", `<b style="color:#1a8a5c">−${r.imtiyozFoiz}%</b>`, "gold"),
      modalRow("Asl summa", `<span style="text-decoration:line-through">${formatSum(r.jamiAsl)}</span>`, "gold"),
      modalRow("Chegirma summasi", `<b style="color:#1a8a5c">−${formatSum(r.chegirmaSumma)}</b>`, "gold")
    );
    if (r.imtiyozHujjat) mb.append(modalRow("Hujjat raqami", r.imtiyozHujjat, "gold"));
    if (r.imtiyozFaylBase64) {
      mb.append(modalRow("📎 Hujjat fayli", `
        <div style="display:flex;gap:10px;align-items:center">
          ${r.imtiyozFaylBase64.startsWith("data:image")
            ? `<img src="${r.imtiyozFaylBase64}" style="width:80px;height:80px;object-fit:cover;border-radius:8px;cursor:pointer;border:1px solid var(--line)" onclick="window.open('${r.imtiyozFaylBase64}')" />`
            : `<span style="font-size:32px">📄</span>`}
          <div>
            <b style="font-size:13px">${r.imtiyozFaylNomi || "hujjat"}</b><br>
            <a href="${r.imtiyozFaylBase64}" download="${r.imtiyozFaylNomi}" style="color:var(--teal);font-size:12px;font-weight:600">📥 Yuklab olish</a>
          </div>
        </div>
      `, "gold"));
    }
  }
  mb.append(
    modalRow("Xizmatlar", (r.xizmatlar || []).map(x => x.nom).join(", ")),
    modalRow("Yakuniy summa", `<b style="color:var(--gold);font-size:16px">${formatSum(r.jamiSumma || 0)}</b>`)
  );
  mb.append(
    modalRow("💼 Tizim komissiyasi (3%)", `<b style="color:var(--commission)">${formatSum(r.komissiyaSumma || 0)}</b>`, "commission"),
    modalRow("Hamshira/davlat hisobiga", `<b>${formatSum((r.jamiSumma || 0) - (r.komissiyaSumma || 0))}</b>`, "commission")
  );
  mb.append(
    modalRow("To‘lov turi", r.tolovTuri || "—"),
    modalRow("To‘lov holati", r.tolovHolati === "tolandi" ? "✅ To‘landi" : "⏳ Kutilmoqda"),
    modalRow("Kvitansiya №", r.kvitansiyaRaqam || "—"),
    modalRow("Vaqt", r.vaqt ? new Date(r.vaqt).toLocaleString("uz-UZ") : "—")
  );
  $("modalBg").classList.add("open");
}
$("modalBg").onclick = (e) => { if (e.target === $("modalBg")) $("modalBg").classList.remove("open"); };

function deleteBemor(r) {
  if (!confirm(`"${r.fish}" ni o‘chirishni tasdiqlaysizmi?`)) return;
  const all = oqiBemorlar();
  const i = all.indexOf(r);
  if (i === -1) return;
  all.splice(i, 1);
  yozBemorlar(all);
  const tolovlar = oqiTolovlar();
  const ti = tolovlar.findIndex(t => t.kvitansiyaRaqam === r.kvitansiyaRaqam);
  if (ti > -1) { tolovlar.splice(ti, 1); yozTolovlar(tolovlar); }
  audit("DELETE", `Bemor: ${r.fish}`);
  toast("O‘chirildi", "ok");
  chiz(false); statistika(); cardListRender(); tolovChiz(); tolovStatistika(); komissiyaChiz(); komissiyaStatistika();
}

/* ============ AUDIT ============ */
function openAudit() {
  const list = JSON.parse(localStorage.getItem(KEY_AUDIT) || "[]").slice().reverse();
  const b = $("auditBody");
  b.innerHTML = "";
  if (!list.length) b.innerHTML = "<p style='color:var(--muted);text-align:center;padding:20px'>Yozuv yo‘q.</p>";
  else list.forEach(x => b.appendChild(modalRow(new Date(x.vaqt).toLocaleString("uz-UZ"), `${x.action} — ${x.detail}`)));
  $("auditBg").classList.add("open");
}
$("auditBg").onclick = (e) => { if (e.target === $("auditBg")) $("auditBg").classList.remove("open"); };

/* ============ FORM SUBMIT ============ */
const bemorForm = $("form");
if (bemorForm) {
  bemorForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const s = getSession();
    if (!s) { toast("Avval kiring", "err"); return; }

    const setErr = (n, m) => { const el = document.querySelector('[data-err="'+n+'"]'); if (el) el.textContent = m; };
    ["fish","jins","tugilgan","guruh","punkt","mahalla","kucha","uy","tolovTuri"].forEach(n => setErr(n, ""));

    let ok = true;
    const fish = $("fish").value.trim();
    const jins = $("jins").value;
    const tugilgan = $("tugilgan").value;
    const guruh = $("guruh").value;
    const mahalla = $("mahalla").value.trim();
    const kucha = $("kucha").value.trim();
    const uy = $("uy").value.trim();
    const tolovTuri = $("tolovTuri").value;
    const tolovHolati = $("tolovHolati").value;

    if (fish.split(/\s+/).length < 2) { setErr("fish", "Familiya va ism to‘liq"); ok = false; }
    if (!jins) { setErr("jins", "Tanlang"); ok = false; }
    if (!tugilgan) { setErr("tugilgan", "Sana kerak"); ok = false; }
    if (!guruh) { setErr("guruh", "Tanlang"); ok = false; }
    if (!punktInput.value.trim()) { setErr("punkt", "Punkt kerak"); ok = false; }
    if (!mahalla) { setErr("mahalla", "Mahalla kerak"); ok = false; }
    if (!kucha) { setErr("kucha", "Ko‘cha kerak"); ok = false; }
    if (!uy) { setErr("uy", "Uy kerak"); ok = false; }
    if (!tolovTuri) { setErr("tolovTuri", "To‘lov turini tanlang"); ok = false; }
    if (tanlanganXizmatlar.size === 0) { toast("Kamida bitta xizmat tanlang", "err"); ok = false; }

    const out = $("result");
    if (!ok) { out.textContent = "❌ Xatolarni tuzating"; return; }

    const xizmatlarTanlangan = [];
    let jamiAsl = 0;
    tanlanganXizmatlar.forEach(id => {
      const x = XIZMATLAR.find(s => s.id === id);
      if (x) { xizmatlarTanlangan.push({ id: x.id, nom: x.nom, narx: x.narx }); jamiAsl += x.narx; }
    });

    const imtiyozTuri = $("imtiyozTuri") ? $("imtiyozTuri").value : "";
    const imtiyozFoiz = $("imtiyozFoiz") ? (parseFloat($("imtiyozFoiz").value) || 0) : 0;
    const imtiyozHujjat = $("imtiyozHujjat") ? $("imtiyozHujjat").value.trim() : "";
    const imtiyozInfo = IMTIYOZ_TURLARI[imtiyozTuri] || IMTIYOZ_TURLARI[""];

    const chegirmaSumma = Math.round(jamiAsl * imtiyozFoiz / 100);
    let jamiYakuniy = jamiAsl - chegirmaSumma;
    if (tolovTuri === "bepul") jamiYakuniy = 0;

    const komissiyaSumma = Math.round(jamiYakuniy * KOMISSIYA_FOIZI / 100);
    const sofSumma = jamiYakuniy - komissiyaSumma;

    const kvRaqam = kvitansiyaRaqam();
    const rec = {
      fish, jins, tugilgan, guruh,
      hudud: path.textContent,
      mahalla, kucha, uy,
      jshshir: $("jshshir").value.replace(/\D/g, ""),
      tel: $("tel").value.trim(),
      hamshiraTel: s.tel,
      hamshiraFish: s.fish,
      xizmatlar: xizmatlarTanlangan,
      jamiAsl: jamiAsl,
      chegirmaSumma: chegirmaSumma,
      jamiSumma: jamiYakuniy,
      komissiyaSumma: komissiyaSumma,
      sofSumma: sofSumma,
      komissiyaFoiz: KOMISSIYA_FOIZI,
      imtiyozTuri: imtiyozTuri,
      imtiyozNomi: imtiyozInfo.nom,
      imtiyozFoiz: imtiyozFoiz,
      imtiyozHujjat: imtiyozHujjat,
      imtiyozli: imtiyozTuri !== "",
      imtiyozFaylBase64: imtiyozFaylBase64,
      imtiyozFaylNomi: imtiyozFaylNomi,
      dmedId: window._dmedData ? window._dmedData.dmedId : null,
      dmedData: window._dmedData || null,
      dmedBoglangan: !!window._dmedData,
      tolovTuri: tolovTuri,
      tolovHolati: tolovHolati,
      kvitansiyaRaqam: kvRaqam,
      offline: !navigator.onLine,
      vaqt: new Date().toISOString()
    };

    const all = oqiBemorlar();
    all.push(rec);
    yozBemorlar(all);

    const tolovlar = oqiTolovlar();
    tolovlar.push(rec);
    yozTolovlar(tolovlar);

    audit("CREATE", `Bemor: ${fish} — ${formatSum(jamiYakuniy)} · Komissiya: ${formatSum(komissiyaSumma)}${rec.imtiyozli ? ` (imtiyozli −${imtiyozFoiz}%)` : ""}${rec.dmedBoglangan ? ` · DMed` : ""}`);
    // 🤖 Telegramga xabar
tg(`
🏥 <b>YANGI BEMOR</b>

👤 <b>${fish}</b>
📞 ${$("tel").value || "—"}
📍 ${mahalla}, ${kucha}, ${uy}
💊 ${xizmatlarTanlangan.map(x => x.nom).join(", ")}
💰 <b>${formatSum(jamiYakuniy)}</b>
${rec.imtiyozli ? `🎖️ Imtiyoz: ${imtiyozInfo.nom} (−${imtiyozFoiz}%)` : ""}
${rec.dmedBoglangan ? `🏥 DMed: ${rec.dmedId}` : ""}
💼 Komissiya: ${formatSum(komissiyaSumma)}

👩‍⚕️ ${s.fish}
📅 ${new Date().toLocaleString("uz-UZ")}
`);
    out.innerHTML = `<span class="ok">✅ Saqlandi.</span> Kvitansiya № <b>${kvRaqam}</b> · ${formatSum(jamiYakuniy)} · 💼 Komissiya: ${formatSum(komissiyaSumma)}${rec.imtiyozli ? ` <span style="color:#9a6f00">🎖️ −${imtiyozFoiz}%</span>` : ""}${rec.dmedBoglangan ? ` <span class="dmed-badge">🏥 DMed</span>` : ""}`;
    toast("✅ Bemor saqlandi. Kvitansiya tayyor!", "ok");
    progress();

    setTimeout(() => kvitansiyaKorsat(rec), 400);

    e.target.reset();
    tanlanganXizmatlar.clear();
    document.querySelectorAll('.service-item').forEach(el => el.classList.remove('selected'));
    faylOchir();
    const dmedResult = $("dmedResult"); if (dmedResult) dmedResult.innerHTML = "";
    const dmedStatus = $("dmedStatusText"); if (dmedStatus) dmedStatus.textContent = "";
    window._dmedData = null;
    jamiHisoblash();
    updatePath();
    chiz(true); statistika(); cardListRender(); tolovChiz(); tolovStatistika(); komissiyaChiz(); komissiyaStatistika();
    setTimeout(barchaChartlarChiz, 100);
  });
}

$("resetBtn")?.addEventListener("click", () => {
  setTimeout(() => {
    updatePath();
    tanlanganXizmatlar.clear();
    document.querySelectorAll('.service-item').forEach(el => el.classList.remove('selected'));
    const imtiyoz = $("imtiyozTuri"); if (imtiyoz) imtiyoz.value = "";
    const foiz = $("imtiyozFoiz"); if (foiz) foiz.value = 0;
    faylOchir();
    const dmedResult = $("dmedResult"); if (dmedResult) dmedResult.innerHTML = "";
    const dmedStatus = $("dmedStatusText"); if (dmedStatus) dmedStatus.textContent = "";
    window._dmedData = null;
    jamiHisoblash();
    const out = $("result");
    if (out) out.textContent = "";
  }, 0);
});

/* ============ PANELS ============ */
function openPanel(name) {
  document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
  $('panel-' + name).classList.add('active');
  window.scrollTo(0, 0);
}
function closePanel() {
  document.querySelectorAll('.content-panel').forEach(p => p.classList.remove('active'));
}
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closePanel(); });

/* ============ DARK MODE ============ */
function applyTheme(t) {
  document.body.classList.toggle("dark", t === "dark");
  const btn = $("themeBtn");
  if (btn) {
    btn.innerHTML = t === "dark"
      ? '<svg width="18" height="18"><use href="#icon-sun"/></svg>'
      : '<svg width="18" height="18"><use href="#icon-moon"/></svg>';
  }
}
$("themeBtn").addEventListener("click", () => {
  const t = document.body.classList.contains("dark") ? "light" : "dark";
  localStorage.setItem(KEY_THEME, t);
  applyTheme(t);
});
applyTheme(localStorage.getItem(KEY_THEME) || "light");

/* ============ INIT ============ */
(async () => {
  await initDemoUser();
  initFileUpload();
  pwaRoyxatdanOtish();
  const dmedBtn = $("dmedFetchBtn");
  if (dmedBtn) dmedBtn.onclick = dmedMalumotOlish;
  checkSession();
})();
// 🤖 Xatoliklarni Telegramga yuborish
window.addEventListener("error", (e) => {
  tg(`
⚠️ <b>XATOLIK</b>

📝 ${e.message}
📁 ${e.filename?.split("/").pop()}:${e.lineno}

📅 ${new Date().toLocaleString("uz-UZ")}
  `);
});