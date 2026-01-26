const themeBtn = document.getElementById("themeBtn");
const langBtn = document.getElementById("langBtn");

let theme = localStorage.getItem("theme") || "dark";
let lang = localStorage.getItem("lang") || "zh";

// 套用設定
document.documentElement.setAttribute("data-theme", theme);
themeBtn.innerText = theme === "dark" ? "深色" : "淺色";
langBtn.innerText = lang === "zh" ? "中文" : "English";

// 初始化翻譯
if (lang === "zh") setLanguageZh();
else setLanguageEn();

// 主題切換
themeBtn.addEventListener("click", () => {
  theme = theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", theme);
  themeBtn.innerText = theme === "dark" ? "深色" : "淺色";
  localStorage.setItem("theme", theme);
});

// 語言切換
langBtn.addEventListener("click", () => {
  lang = lang === "zh" ? "en" : "zh";
  langBtn.innerText = lang === "zh" ? "中文" : "English";
  localStorage.setItem("lang", lang);

  if (lang === "zh") setLanguageZh();
  else setLanguageEn();
});

// 平滑滾動
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  });
});

// 安全設定文字函式
function safeSetText(id, text) {
  const el = document.getElementById(id);
  if (el) el.innerText = text;
}

function setLanguageZh() {
  document.documentElement.lang = "zh-TW";
  
  // Header
  safeSetText("nav1", "特色");
  safeSetText("nav2", "指令");
  safeSetText("nav3", "使用方式");
  safeSetText("nav4", "FAQ");

  // Hero
  safeSetText("heroTitle", "超強 Discord 機器人");
  safeSetText("heroDesc", "支援多種指令、活動系統、管理功能，打造最強社群助手。");
  safeSetText("inviteBtn1", "邀請機器人");
  safeSetText("inviteBtn2", "邀請機器人");
  safeSetText("discordBtn", "加入 Discord");
  safeSetText("docsBtn", "使用教學");

  // Stats
  safeSetText("stat1", "全天候運作");
  safeSetText("stat2", "指令功能");
  safeSetText("stat3", "快速回應");

  // Features
  safeSetText("featuresTitle", "核心功能");
  safeSetText("feature1Title", "地震報告");
  safeSetText("feature1Desc", "自動推送地震報告。");
  safeSetText("feature2Title", "娛樂系統");
  safeSetText("feature2Desc", "同性戀測試、求婚、2048小遊戲，提升社群活躍度。");
  safeSetText("feature3Title", "AI 聊天");
  safeSetText("feature3Desc", "整合 AI 回覆，讓機器人更像真人對話。");

  // Popular Commands
  safeSetText("cmdTitle", "熱門指令");
  safeSetText("cmdN1", "/娛樂系統-同性戀測試"); safeSetText("cmdD1", "測試對方是不是同性戀");
  safeSetText("cmdN2", "/娛樂系統-2048"); safeSetText("cmdD2", "遊玩2048小遊戲");
  safeSetText("cmdN3", "/娛樂系統-測量長度"); safeSetText("cmdD3", "測量自己的長度");
  safeSetText("cmdN4", "/娛樂系統-假禮物連結"); safeSetText("cmdD4", "生成一個假禮物連結");
  safeSetText("cmdN5", "/開發功能-查看延遲"); safeSetText("cmdD5", "查看機器人延遲");
  safeSetText("cmdN6", "/管理功能-指令幫助"); safeSetText("cmdD6", "顯示所有指令清單");

  // How To Use
  safeSetText("howTitle", "如何使用");
  safeSetText("how1Title", "Step 1"); safeSetText("how1Desc", "點擊 邀請機器人 按鈕");
  safeSetText("how2Title", "Step 2"); safeSetText("how2Desc", "點擊新增至伺服器");
  safeSetText("how3Title", "Step 3"); safeSetText("how3Desc", "選取要邀請的伺服器");

  // FAQ
  safeSetText("faqTitle", "常見問題");
  safeSetText("q1", "Q1: 這個機器人是免費嗎？"); safeSetText("a1", "A1: 是的，基礎功能完全免費。");
  safeSetText("q2", "Q2: 我可以自訂指令嗎？"); safeSetText("a2", "A2: 目前尚未開放自訂指令。");
  safeSetText("q3", "Q3: 機器人需要什麼權限？"); safeSetText("a3", "A3: 需要基本管理權限、發送訊息與讀取訊息權限。");

  // Footer
  safeSetText("footerText", "© 2026 六角恐龍 AxoBot. 版權所有。");
  safeSetText("footerInvite", "邀請機器人");
  safeSetText("footerDiscord", "Discord");
}

function setLanguageEn() {
  document.documentElement.lang = "en";
  
  // Header
  safeSetText("nav1", "Features");
  safeSetText("nav2", "Commands");
  safeSetText("nav3", "Guide");
  safeSetText("nav4", "FAQ");

  // Hero
  safeSetText("heroTitle", "Powerful Discord Bot");
  safeSetText("heroDesc", "Supports many commands, events, and admin tools. Perfect community assistant.");
  safeSetText("inviteBtn1", "Invite Bot");
  safeSetText("inviteBtn2", "Invite Bot");
  safeSetText("discordBtn", "Join Discord");
  safeSetText("docsBtn", "How to Use");

  // Stats
  safeSetText("stat1", "24/7 Online");
  safeSetText("stat2", "50+ Commands");
  safeSetText("stat3", "1s Response");

  // Features
  safeSetText("featuresTitle", "Core Features");
  safeSetText("feature1Title", "Earthquake Reporter");
  safeSetText("feature1Desc", "Automatic earthquake alerts.");
  safeSetText("feature2Title", "Fun System");
  safeSetText("feature2Desc", "Gay test, propose, 2048 game to boost activity.");
  safeSetText("feature3Title", "AI Chat");
  safeSetText("feature3Desc", "Integrate AI replies for more human-like talk.");

  // Popular Commands
  safeSetText("cmdTitle", "Popular Commands");
  safeSetText("cmdN1", "/娛樂系統-同性戀測試"); safeSetText("cmdD1", "Test if someone is gay.");
  safeSetText("cmdN2", "/娛樂系統-2048"); safeSetText("cmdD2", "Play the 2048 game.");
  safeSetText("cmdN3", "/娛樂系統-測量長度"); safeSetText("cmdD3", "Measure your own length.");
  safeSetText("cmdN4", "/娛樂系統-假禮物連結"); safeSetText("cmdD4", "Generate a fake gift link.");
  safeSetText("cmdN5", "/開發功能-查看延遲"); safeSetText("cmdD5", "Check bot latency.");
  safeSetText("cmdN6", "/管理功能-指令幫助"); safeSetText("cmdD6", "Show all command lists.");
  // How To Use
  safeSetText("howTitle", "How to Use");
  safeSetText("how1Title", "Step 1"); safeSetText("how1Desc", "Click the Invite Bot button");
  safeSetText("how2Title", "Step 2"); safeSetText("how2Desc", "Click Add to Server");
  safeSetText("how3Title", "Step 3"); safeSetText("how3Desc", "Select the target server.");

  // FAQ
  safeSetText("faqTitle", "FAQ");
  safeSetText("q1", "Q1: Is it free?"); safeSetText("a1", "A1: Yes, all features are free.");
  safeSetText("q2", "Q2: Custom commands?"); safeSetText("a2", "A2: Custom commands are not supported yet.");
  safeSetText("q3", "Q3: Permissions?"); safeSetText("a3", "A3: Basic admin, send, and read message permissions.");

  // Footer
  safeSetText("footerText", "© 2026 六角恐龍 AxoBot. All rights reserved.");
  safeSetText("footerInvite", "Invite Bot");
  safeSetText("footerDiscord", "Discord");
}