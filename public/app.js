const app = document.querySelector("#app");

const publicNav = [
  ["Personal", "/personal"],
  ["Small Business", "/small-business"],
  ["Wealth Management", "/wealth-management"],
  ["Businesses & Institutions", "/businesses-institutions"],
  ["About Us", "/about"],
];

const accountNav = [
  ["Accounts", "/dashboard", "▤"],
  ["Send money", "/transfers", "↗"],
  ["Withdraw", "/withdraw", "↓"],
  ["Requests", "/requests", "◷"],
  ["Bill Pay", "/bill-pay", "▧"],
  ["Credit Cards", "/credit-cards", "▱"],
  ["Investments", "/investments", "◴"],
  ["Settings", "/settings", "⚙"],
];

const routeFiles = {
  "/": "index.html",
  "/personal": "personal.html",
  "/homepage": "homepage.html",
  "/banking": "banking.html",
  "/credit-cards-public": "credit-cards-public.html",
  "/loans": "loans.html",
  "/investments-public": "investments-public.html",
  "/learning": "learning.html",
  "/contact-us": "contact-us.html",
  "/locations": "locations.html",
  "/help": "help.html",
  "/about": "about.html",
  "/small-business": "small-business.html",
  "/wealth-management": "wealth-management.html",
  "/businesses-institutions": "businesses-institutions.html",
  "/server-error": "server-error.html",
  "/login": "login.html",
  "/dashboard": "account-dashboard.html",
  "/statements": "statements.html",
  "/inbox": "inbox.html",
  "/products": "products.html",
  "/profile": "profile.html",
  "/transfers": "transfers.html",
  "/withdraw": "withdraw.html",
  "/requests": "requests.html",
  "/bill-pay": "bill-pay.html",
  "/credit-cards": "credit-cards.html",
  "/investments": "investments.html",
  "/settings": "settings.html",
  "/not-found": "not-found.html",
};

const pageContent = {
  "/banking": {
    title: "Banking that works for you",
    description: "Explore checking and savings accounts designed to help you manage your money with confidence.",
    image: "./assets/personal.png",
    topics: ["Checking accounts", "Savings accounts", "Certificates of deposit"],
    links: ["/login", "/login", "/login"],
  },
  "/credit-cards-public": {
    title: "Find a credit card that fits your life",
    description: "Explore card options, rewards, and tools to help you manage your credit.",
    image: "./assets/yyh.png",
    topics: ["Cash back rewards", "Travel benefits", "Manage your card"],
    links: ["/login", "/login", "/login"],
  },
  "/loans": {
    title: "Plan for what's next",
    description: "Learn about home loans, auto financing, and borrowing options.",
    image: "./assets/yy.png",
    topics: ["Home loans", "Auto loans", "Personal lending"],
    links: ["/contact-us", "/contact-us", "/contact-us"],
  },
  "/investments-public": {
    title: "Investing for your goals",
    description: "Explore investing choices and guidance for every stage of your financial journey.",
    image: "./assets/wealth%20management.png",
    topics: ["Merrill investing", "Guidance and advice", "Plan for retirement"],
    links: ["/wealth-management", "/wealth-management", "/learning"],
  },
  "/learning": {
    title: "Better Money Habits",
    description: "Build your financial knowledge with practical articles and resources.",
    image: "./assets/hhh.png",
    topics: ["Build a budget", "Understand credit", "Start saving"],
    links: ["/learning", "/learning", "/learning"],
  },
  "/contact-us": {
    title: "Contact us",
    description: "Find the right support for your banking questions.",
    image: "./assets/Contact%20Us.png",
    topics: ["Personal banking", "Credit cards", "Online banking support"],
    links: ["/help", "/help", "/help"],
  },
  "/locations": {
    title: "Find a financial center",
    description: "Search for nearby financial centers and ATMs or make an appointment.",
    image: "./assets/Locations.png",
    topics: ["Financial centers", "ATMs", "Schedule an appointment"],
    links: ["/contact-us", "/contact-us", "/contact-us"],
  },
  "/help": {
    title: "How can we help?",
    description: "Find answers to common questions and get help with your accounts.",
    image: "./assets/yy.png",
    topics: ["Online banking", "Cards and payments", "Account security"],
    links: ["/login", "/contact-us", "/contact-us"],
  },
  "/about": {
    title: "About us",
    description: "Learn about our company, our people, and our commitment to the communities we serve.",
    image: "./assets/About%20Us.png",
    topics: ["Our company", "Community impact", "Careers"],
    links: ["/about", "/about", "/contact-us"],
  },
  "/small-business": {
    title: "Small business banking",
    description: "Tools, accounts, and guidance to help small businesses move forward.",
    image: "./assets/small%20business.png",
    topics: ["Business checking", "Business credit cards", "Cash flow solutions"],
    links: ["/contact-us", "/contact-us", "/contact-us"],
  },
  "/wealth-management": {
    title: "Wealth management",
    description: "Personalized guidance and investment solutions to help you pursue your financial goals.",
    image: "./assets/wealth%20management.png",
    topics: ["Merrill advisory", "Financial planning", "Private Bank"],
    links: ["/contact-us", "/contact-us", "/contact-us"],
  },
  "/businesses-institutions": {
    title: "Businesses & Institutions",
    description: "Financial solutions for companies, institutions, and organizations around the world.",
    image: "./assets/Businesses%20%26%20Institutions.png",
    topics: ["Global banking", "Capital markets", "Treasury services"],
    links: ["/contact-us", "/contact-us", "/contact-us"],
  },
};

const accountData = {
  checking: { name: "Inheritances", number: "****", balance: "1,500,000.00" },
  savings: { name: "Savings Account", number: "****", balance: "106.55" },
  total: "1,500,106.55",
  beneficiary: "Alica Buckson",
};

const transactions = [
  ["12/25/2022", "Investment Dividend", 3200, "Income"],
  ["11/15/2022", "AT&T Wireless", -95, "Utilities"],
  ["10/02/2022", "Uber Rides", -42.3, "Transportation"],
  ["12/26/2021", "Starbucks", -8.75, "Dining"],
  ["10/30/2021", "Electric Bill - ConEd", -245.8, "Utilities"],
  ["09/02/2021", "Wire Transfer Received", 50000, "Transfer"],
  ["08/05/2021", "Shell Gas Station", -65.4, "Auto"],
  ["07/08/2021", "Netflix Subscription", -22.99, "Entertainment"],
  ["11/12/2020", "Transfer from Savings", 5000, "Transfer"],
  ["08/21/2020", "Whole Foods Market", -187.32, "Groceries"],
  ["05/01/2020", "Amazon.com", -234.56, "Shopping"],
  ["02/06/2020", "Direct Deposit - Employer", 12500, "Income"],
];

const distributionHistory = [
  ["November 15, 2023", "Initial Estate Allocation", 250000],
  ["March 20, 2024", "Inheritance Distribution", 175000],
  ["August 12, 2024", "Estate Proceeds Allocation", 225000],
  ["January 17, 2025", "Second Estate Distribution", 200000],
  ["June 25, 2025", "Inheritance Fund Allocation", 150000],
  ["November 10, 2025", "Trust Distribution", 175000],
  ["April 14, 2026", "Estate Settlement Allocation", 125000],
  ["October 20, 2026", "Final Estate Allocation", 200000],
];

const payees = [
  { id: "coned", name: "ConEd Electric", account: "****8832", due: "12/01/2022", amount: 245.8 },
  { id: "att", name: "AT&T Wireless", account: "****1156", due: "11/05/2022", amount: 95 },
  { id: "statefarm", name: "State Farm Insurance", account: "****4401", due: "10/10/2021", amount: 180 },
  { id: "mortgage", name: "Mortgage - Wells Fargo", account: "****9920", due: "03/01/2020", amount: 3250 },
];

const authStorageKey = "authenticated";
let authStorageError = "";
let user = null;
try {
  if (sessionStorage.getItem(authStorageKey) === "true") {
    user = { name: "Alicabuckson076@outlook.com" };
  }
} catch (error) {
  authStorageError = "Process could not complete.Refresh the page and try again.";
  console.error(authStorageError, error);
}
let balancesVisible = true;
let selectedPayee = "";
let loginTimer = null;
let accountDelayTimer = null;
let accountDelayActive = false;
const requestStorageKey = "pending-requests";
const legacyRequestStorageKey = "pending-requests";
let requestStorageError = "";
let pendingRequests = [];
let moneyRequestSubmitting = false;
let requestOverlayTrigger = null;

function parseSavedRequests(savedRequests) {
  const requests = savedRequests ? JSON.parse(savedRequests) : [];
  if (!Array.isArray(requests) || requests.some((request) =>
    !request || typeof request.id !== "string" ||
    !["Send", "Withdraw"].includes(request.type) ||
    typeof request.amount !== "number" ||
    typeof request.bank !== "string" ||
    typeof request.accountLast4 !== "string" ||
    typeof request.createdAt !== "string" ||
    !["Pending", "Pending "].includes(request.status)
  )) {
    throw new Error("requests invalid.");
  }
  return requests.map((request) => ({ ...request, status: "Pending" }));
}

try {
  let savedRequests = localStorage.getItem(requestStorageKey);
  if (savedRequests === null) {
    savedRequests = localStorage.getItem(legacyRequestStorageKey);
    if (savedRequests !== null) {
      pendingRequests = parseSavedRequests(savedRequests);
      localStorage.setItem(requestStorageKey, JSON.stringify(pendingRequests));
    } else {
      pendingRequests = [];
    }
  } else {
    pendingRequests = parseSavedRequests(savedRequests);
  }
} catch (error) {
  requestStorageError = "error requesting. ";
  console.error(requestStorageError, error);
}

function money(value) {
  const amount = typeof value === "number" ? value : Number(String(value).replace(/,/g, ""));
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(amount);
}

function maskedAccountNumber(number) {
  return `****${String(number).replace(/^\*+/, "")}`;
}

function route() {
  if (document.body.dataset.page) return document.body.dataset.page;
  return decodeURIComponent(window.location.hash.slice(1)).replace(/\/+$/, "") || "/";
}

function routeHref(path) {
  return `./${routeFiles[path] || "not-found.html"}`;
}

function link(label, href, className = "") {
  return `<a class="${className}" href="${routeHref(href)}">${label}</a>`;
}

function accountBalanceHref() {
  return `${routeHref("/dashboard")}#account-balances`;
}

function featureLink(label, feature, className = "text-link") {
  return `<a class="${className}" href="${accountBalanceHref()}" data-account-delay aria-label="${escapeHtml(feature)}">${label}</a>`;
}

function logo(href = "/") {
  return `<a class="brand" href="${routeHref(href)}" aria-label="Demo Bank">
    <img src="./assets/lgo.png" alt="Bank of America logo" width="120" height="30">
  </a>`;
}

function demoNotice() {
  return "";
}

function loginCard(compact = false) {
  return `<section class="login-card${compact ? " login-card-compact" : ""}" aria-labelledby="login-title">
    <h2 id="login-title">Sign in to Online Banking</h2>
    <form data-login-form>
      <label for="online-id">Online ID</label>
      <input id="online-id" name="onlineId" autocomplete="username" minlength="6" required>
      <label class="save-id"><input type="checkbox" name="saveId"> Save this Online ID</label>
      <label for="passcode">Passcode</label>
      <input id="passcode" name="passcode" type="password" autocomplete="current-password" required disabled>
      <p class="form-error" data-login-error aria-live="polite"></p>
      <button class="button button-blue button-block" type="submit">Sign In</button>
    </form>
    <div class="login-links">
      ${link("Forgot ID", "/help")}
      ${link("Forgot Passcode", "/help")}
      ${link("Enroll", "/login")}
    </div>
  </section>`;
}

function publicHeader(showLoginPanel = true) {
  return `${demoNotice()}
    <div class="utility-bar">
      <div class="container utility-content">
        ${logo()}
        <nav class="utility-primary" aria-label="Company">
          ${publicNav.map(([label, path]) => link(label, path)).join("")}
        </nav>
        <nav class="utility-secondary" aria-label="Support">
          ${link("Locations", "/locations")}
          ${link("Contact Us", "/contact-us")}
          ${link("Help", "/help")}
        </nav>
      </div>
    </div>
    <header class="public-header">
      <div class="container public-header-inner">
        ${showLoginPanel ? `<div class="signin-area">
          <div class="signin-form-wrap">${loginCard(true)}</div>
          <img class="signin-image" src="./assets/yy.png" alt="Online banking services">
        </div>` : ""}
      </div>
    </header>`;
}

function footer() {
  return `<footer class="site-footer">
    <div class="container footer-content">
      <nav aria-label="Footer links">
        ${link("Privacy", "/about")}
        ${link("Security", "/help")}
        ${link("Contact us", "/contact-us")}
        ${link("Locations", "/locations")}
      </nav>
      <p>Bank of America 2026</p>
      <p class="demo-note">Secure. Private. Reliable.</p>
    </div>
  </footer>`;
}

function productCard(title, description, href, icon = "✦") {
  return `<a class="product-card" href="${routeHref(href)}">
    <span class="product-icon" aria-hidden="true">${icon}</span>
    <span class="product-title">${title}</span>
    <span class="muted">${description}</span>
  </a>`;
}

function marketingPage(path) {
  if (path === "/personal" || path === "/") {
    return `<section class="personal-hero">
      <div class="container hero-grid">
        <div>
          <p class="eyebrow">PERSONAL BANKING</p>
          <h1>Banking made personal</h1>
          <p class="hero-copy">Explore a banking interface for everyday account tools, money requests, and financial education.</p>
          ${link("Get Started", "/login", "button button-red")}
        </div>
        <img class="hero-image" src="./assets/personal.png" alt="Personal banking experience">
      </div>
    </section>
    <section class="section container">
      <div class="section-heading">
        <h2>Banking Solutions</h2>
        <p>Everything you need for your financial journey</p>
      </div>
      <div class="card-grid">
        ${productCard("Checking & Savings", "Flexible accounts that work for you", "/banking", "▤")}
        ${productCard("Credit Cards", "Earn rewards on your everyday spending", "/credit-cards-public", "▱")}
        ${productCard("Loans", "Auto loans, home loans, and more", "/loans", "$")}
        ${productCard("Investments", "Grow your wealth with expert guidance", "/investments-public", "↗")}
        ${productCard("Money Transfers", "Send money fast and securely", "/transfers", "↔")}
        ${productCard("Security", "Learn about tools to help protect your accounts", "/help", "⌑")}
      </div>
    </section>
    <section class="section section-soft">
      <div class="container">
        <div class="section-heading">
          <h2>Learn & Grow</h2>
          <p>Financial education to help you succeed</p>
        </div>
        <div class="card-grid two-col">
          <article class="info-card"><h3>Financial Education</h3><p>Learn about investing, budgeting, and making smart financial decisions.</p>${link("Explore Learning Center →", "/learning", "text-link")}</article>
          <article class="info-card"><h3>Manage Your Account</h3><p>Access tools to track spending, set goals, and stay secure.</p>${link("Go to Dashboard →", "/login", "text-link")}</article>
        </div>
      </div>
    </section>
    <section class="section container hero-grid mobile-banking">
      <div><h2>Banking on the go</h2><p>Check balances, transfer money, pay bills, and more with convenient mobile banking tools.</p>${link("Explore mobile banking", "/help", "text-link")}</div>
      <img class="hero-image" src="./assets/personal2.png" alt="Mobile banking experience">
    </section>`;
  }

  if (path === "/homepage") {
    return `<section class="section section-soft">
      <div class="container open-account">
        <div><p class="eyebrow">ONLINE BANKING</p><h1>Open an account</h1><p>Checking, savings, credit cards, home loans, auto loans, and more.</p>
          <div class="link-cloud">${link("Checking", "/banking")}${link("Savings & CDs", "/banking")}${link("Credit Cards", "/credit-cards-public")}${link("Home Loans", "/loans")}${link("Auto Loans", "/loans")}${link("Investing", "/investments-public")}</div>
        </div><img class="hero-image" src="./assets/hhh.png" alt="Explore account options">
      </div>
    </section>
    <section class="section container"><div class="section-heading"><h2>Your financial goals matter</h2><p>Explore practical resources and tools to help you make informed financial decisions.</p></div>
      <div class="card-grid">${["Real Talk with Better Money Habits®","8 common bank fees—and how to avoid them","What is a certificate of deposit?","How to start an emergency fund"].map((item) => productCard(item, "Explore this financial education resource", "/learning", "→")).join("")}</div>
    </section>
    <section class="section section-soft"><div class="container"><div class="section-heading"><h2>Enroll in Online Banking</h2><p>Access account activity, pay bills, set up alerts, and make transfers.</p>${link("Enroll now", "/login", "button button-blue")}</div>
      <div class="card-grid">${productCard("Access accounts","Check activity when you want.","/login","▤")}${productCard("Pay bills","Manage payments online.","/login","▧")}${productCard("Set up alerts","Get account activity updates.","/login","♧")}${productCard("Make transfers","Move funds between accounts.","/login","↔")}</div>
    </div></section>
    <section class="section container"><div class="section-heading"><h2>Connect with us</h2></div><div class="link-cloud">${link("Schedule an appointment","/locations")}${link("Find a location","/locations")}${link("Contact us","/contact-us")}${link("Help center","/help")}</div></section>`;
  }

  const content = pageContent[path];
  if (!content) return notFound();
  return `<section class="marketing-hero">
      <div class="container hero-grid">
        <div><p class="eyebrow">BANK OF AMERICA</p><h1>${content.title}</h1><p class="hero-copy">${content.description}</p>${link("Get started", content.links[0], "button button-red")}</div>
        <img class="hero-image" src="${content.image}" alt="Bank of America">
      </div>
    </section>
    <section class="section container">
      <div class="section-heading"><h2>Explore your options</h2><p>Find services and resources to help with your next step.</p></div>
      <div class="card-grid">${content.topics.map((topic, index) => productCard(topic, `Explore ${topic.toLowerCase()} and available resources.`, content.links[index], "→")).join("")}</div>
    </section>
    <section class="section section-soft"><div class="container hero-grid"><div><h2>Here when you need us</h2><p>Explore answers, connect with a specialist, or find a location near you.</p>${link("Get help", "/contact-us", "text-link")}</div><div class="link-cloud">${link("Help center","/help")}${link("Contact us","/contact-us")}${link("Find a location","/locations")}</div></div></section>`;
}

function loginPage() {
  return `<main class="login-page">
    <div class="container login-page-grid">
      <div>${loginCard(false)}</div>
      <section class="enroll-panel">
        <p class="eyebrow">ONLINE BANKING</p><h1>Enroll in Online Banking</h1>
        <p>Access your accounts, pay bills, make transfers, and manage your profile online.</p>
        <div class="card-grid two-col">
          ${productCard("Access your accounts","Check account activity whenever you want.","/dashboard","▤")}
          ${productCard("Pay bills","Manage payments online.","/bill-pay","▧")}
          ${productCard("Make transfers","Move funds between accounts.","/transfers","↔")}
          ${productCard("Get the mobile app","Explore convenient mobile banking.","/help","▣")}
        </div>
      </section>
    </div>
  </main>`;
}

function dashboardHeader(path) {
  return `${demoNotice()}
    <header class="account-header">
      <div class="container">
        <div class="account-top">
          <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false">☰ <span>Menu</span></button>
          ${logo("/dashboard")}
          <nav class="account-actions" aria-label="Account">
            ${link("✉ Inbox", "/inbox")}${link("Products", "/products")}${link("Profile", "/profile")}
            <button type="button" class="link-button" data-logout>Log Out</button>
          </nav>
        </div>
        <nav class="account-nav" aria-label="Account navigation">
          ${accountNav.map(([label, href, icon]) => link(`<span aria-hidden="true">${icon}</span>${label}`, href, path === href ? "active" : "")).join("")}
          ${link("Inbox", "/inbox", path === "/inbox" ? "active" : "")}
          ${link("Products", "/products", path === "/products" ? "active" : "")}
          ${link("Profile", "/profile", path === "/profile" ? "active" : "")}
        </nav>
        <div class="account-search"><label class="visually-hidden" for="site-search">Search</label><input id="site-search" placeholder="How can we help?"><button type="button" data-account-search aria-label="Search">⌕</button></div>
      </div>
      <nav class="mobile-account-nav" aria-label="Mobile account navigation">
        ${accountNav.slice(0, 4).map(([label, href, icon]) => link(`<span aria-hidden="true">${icon}</span><small>${label}</small>`, href, path === href ? "active" : "")).join("")}
      </nav>
    </header>`;
}

function dashboardPage() {
  return `<div class="dashboard-stack">
    <section class="panel greeting-panel"><h1>Hello, ${user?.name.split(" ")[0] || "there"}</h1><p class="muted">Preferred Rewards Gold Member</p>
      <div class="greeting-links">${featureLink("Life Plan <span>Your next steps are ready. Let's go!</span>", "Life Plan")}${featureLink("My Rewards <span>View your rewards</span>", "My Rewards")}<a href="#distribution-schedule">View Distribution Schedule <span>Schedule analysis</span></a></div>
    </section>
    <section class="panel balance-panel"><div><span class="small-label">Net Worth¹</span><strong data-balance>${balancesVisible ? money(accountData.total) : "••••••••"}</strong></div><button type="button" class="text-button" data-toggle-balances>${balancesVisible ? "Hide balances" : "Show balances"}</button></section>
    <div class="card-grid two-col">
      <a class="panel summary-card account-delay-summary" href="${accountBalanceHref()}" data-account-delay><span class="product-icon">▱</span><div><span class="small-label">Credit Cards</span><strong data-summary-balance>${balancesVisible ? money(0) : "••••••••"}</strong></div><span class="summary-action">View details</span></a>
      <a class="panel summary-card account-delay-summary" href="${accountBalanceHref()}" data-account-delay><span class="product-icon blue-icon">◴</span><div><span class="small-label">Investments</span><strong data-summary-balance>${balancesVisible ? money(0) : "••••••••"}</strong></div><span class="summary-action">View details</span></a>
    </div>
    <section class="panel account-list" id="account-balances"><h2 class="red-heading">Accounts</h2>
      <p class="account-beneficiary">Beneficiary on file: <strong>${accountData.beneficiary}</strong></p>
      ${[accountData.checking, accountData.savings].map((account) => `<div class="account-row"><div><strong>${account.name} ${maskedAccountNumber(account.number)}</strong><span class="account-balance" data-balance>${balancesVisible ? money(account.balance) : "••••••••"}</span></div><a class="button button-light" href="${accountBalanceHref()}" data-account-delay>View</a></div>`).join("")}
    </section>
    <section class="quick-actions" aria-label="Quick actions">
      ${productCard("Send money","Create an outbound request.","/transfers","↗")}
      ${productCard("Withdraw","Create a withdrawal request.","/withdraw","↓")}
      ${productCard("Request status","Review pending requests.","/requests","◷")}
      ${productCard("Pay Bills","Schedule a payment.","/bill-pay","▧")}
      ${productCard("View Statements","Review statements and account activity.","/statements","▤")}
      ${productCard("Account Settings","Manage your preferences.","/settings","⚙")}
    </section>
    <section class="panel activity-panel" id="distribution-schedule"><div class="panel-heading"><div><h2>Inheritance Fund Distribution Schedule</h2><p class="muted">Estate Distribution Document.</p></div></div>
      <p class="account-beneficiary">Beneficiary: <strong>Alica Buckson</strong> · Distribution period: November 15, 2023 – October 20, 2026 · Receiving account: ${accountData.checking.name} · Currency: United States Dollars (USD) · Total inheritance: ${money(1500000)}</p>
      <div class="table-scroll distribution-history-scroll" tabindex="0" role="region" aria-label="Scroll to view all entries"><table><thead><tr><th>Distribution Date</th><th>Distribution Description</th><th class="align-right">Amount</th></tr></thead><tbody>
        ${distributionHistory.map(([date, description, amount]) => `<tr><td>${date}</td><td>${description}</td><td class="align-right positive">${money(amount)}</td></tr>`).join("")}
      </tbody><tfoot><tr><th colspan="2">TOTAL Estate Value</th><th class="align-right">${money(distributionHistory.reduce((total, [, , amount]) => total + amount, 0))}</th></tr></tfoot></table></div>
      <p class="account-beneficiary">Designated beneficiary: <strong>Alica Buckson</strong> · Intended destination: ${accountData.checking.name} · Distribution category: Inheritance / Estate Proceeds · Total allocation: One Million Five Hundred Thousand United States Dollars Only.</p>
    </section>
  </div>`;
}

function statementsPage() {
  const years = [...new Set(transactions.map(([date]) => date.slice(-4)))].sort((a, b) => Number(b) - Number(a));
  const sections = years.map((year) => {
    const yearTransactions = transactions.filter(([date]) => date.endsWith(year));
    return `<section class="panel activity-panel statement-year">
      <div class="panel-heading"><h2>${accountData.checking.name} activity</h2><p class="muted">${accountData.checking.name} ${maskedAccountNumber(accountData.checking.number)} · ${yearTransactions.length} transactions</p></div>
      <div class="table-scroll"><table><thead><tr><th>Date</th><th>Description</th><th>Category</th><th class="align-right">Amount</th></tr></thead><tbody>
        ${yearTransactions.map(([date, description, amount, category]) => `<tr><td>${date}</td><td>${description}</td><td>${category}</td><td class="align-right ${amount > 0 ? "positive" : ""}">${money(amount)}</td></tr>`).join("")}
      </tbody></table></div>
    </section>`;
  }).join("");
  return `<div class="form-page wide-form">
    <div class="page-title"><h1>Statements</h1><p>Review historical activity for ${accountData.checking.name}.</p></div>
    
    <section class="panel balance-panel"><div><span class="small-label">Account</span><strong>${accountData.checking.name} ${maskedAccountNumber(accountData.checking.number)}</strong></div><div><span class="small-label">Current balance</span><strong>${money(accountData.checking.balance)}</strong></div></section>
    ${sections}
    ${link("Back to accounts", "/dashboard", "button button-outline")}
  </div>`;
}

function transferRequestPage(type) {
  const isWithdrawal = type === "Withdraw";
  const title = isWithdrawal ? "Withdraw funds" : "Send money";
  return `<div class="form-page"><div class="page-title"><h1>${title}</h1><p>${isWithdrawal ? "Create a withdrawal request." : "Create a request to send money to another bank."}</p></div>

    <form class="panel form-panel" data-money-request="${type.toLowerCase()}">
      <label for="request-from">Source account</label><select id="request-from" name="sourceAccount" required><option value="checking">${accountData.checking.name} ${maskedAccountNumber(accountData.checking.number)}</option><option value="savings">${accountData.savings.name} ${maskedAccountNumber(accountData.savings.number)}</option></select>
      <label for="recipient-name">${isWithdrawal ? "Account holder name" : "Recipient name"}</label><input id="recipient-name" name="recipientName" autocomplete="off" maxlength="80" placeholder="Recipient name" required>
      <label for="bank-name">Destination bank name</label><input id="bank-name" name="bankName" autocomplete="off" maxlength="80" placeholder="Bank Name" required>
      <label for="account-number">Destination account number</label><input id="account-number" name="accountNumber" inputmode="numeric" autocomplete="off" minlength="4" maxlength="34" pattern="[0-9]{4,34}" placeholder="Number" required>
      <label for="routing-number">Routing number (demo)</label><input id="routing-number" name="routingNumber" inputmode="numeric" autocomplete="off" maxlength="9" pattern="[0-9]{9}" placeholder="9 digits" required>
      <label for="account-type">Account type</label><select id="account-type" name="accountType" required><option value="checking">Checking</option><option value="savings">Savings</option></select>
      <label for="request-amount">Amount</label><div class="currency-input"><span>$</span><input id="request-amount" name="amount" type="number" min="0.01" step="0.01" placeholder="0.00" required></div>
      <label for="request-memo">Note (optional)</label><input id="request-memo" name="memo" maxlength="120" autocomplete="off" placeholder="Optional note">
      <p class="form-error" data-request-error aria-live="polite"></p><button class="button button-red button-block" data-request-submit type="submit">Submit ${isWithdrawal ? "withdrawal" : "send"} request</button>
    </form>
    
    ${link("View request status", "/requests", "text-link")}
    <div class="request-overlay" data-request-overlay hidden>
      <section class="request-overlay-card" role="dialog" aria-modal="true" aria-labelledby="request-overlay-title" tabindex="-1">
        <button class="request-overlay-close" type="button" data-close-request-overlay aria-label="Close confirmation">×</button>
        <div class="request-overlay-icon" aria-hidden="true">✓</div>
        <p class="request-overlay-eyebrow">REQUEST SUBMITTED</p>
        <h2 id="request-overlay-title">Request received</h2>
        <p class="request-overlay-message">Please wait while we confirm your request.</p>
        <span class="status-pill">Pending</span>
        <div class="request-overlay-actions"><a class="button button-blue" href="${routeHref("/requests")}" data-request-status-link>View request status</a><button class="button button-outline" type="button" data-close-request-overlay>Close</button></div>
      </section>
    </div>
  </div>`;
}

function requestsPage() {
  const requestRows = [...pendingRequests].reverse().map((request) => `<article class="request-row">
      <div class="request-row-heading"><strong>${request.type} request</strong><span class="status-pill">${request.status}</span></div>
      <dl><div><dt>Destination bank</dt><dd>${escapeHtml(request.bank)}</dd></div><div><dt>Account ending</dt><dd>•••• ${escapeHtml(request.accountLast4)}</dd></div><div><dt>Amount</dt><dd>${money(request.amount)}</dd></div><div><dt>Submitted</dt><dd>${new Date(request.createdAt).toLocaleString()}</dd></div></dl>
      <p class="request-pending-copy">Please wait while we confirm your request.</p>
    </article>`).join("");
  return `<div class="form-page wide-form"><div class="page-title"><h1>Request status</h1><p>Review requests.</p></div>
    
    ${requestStorageError ? `<div class="notice error-notice" role="alert">${requestStorageError}</div>` : ""}
    ${pendingRequests.length ? `<div class="request-list">${requestRows}</div>` : `<section class="panel empty-requests"><h2>No requests yet</h2><p>Requests will appear here with a pending status.</p>${link("Create a send request", "/transfers", "button button-blue")} ${link("Create a withdrawal request", "/withdraw", "button button-outline")}</section>`}
  </div>`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

function billPayPage() {
  return `<div class="form-page wide-form"><div class="page-title page-title-row"><div><h1>Bill Pay</h1><p>Pay your bills quickly and securely</p></div><button class="button button-outline" type="button" data-toggle-payee>Add Payee</button></div>
    <div class="notice success-notice" data-payment-success hidden>Payment scheduled successfully!</div>
    <form class="panel add-payee-form" data-add-payee hidden><h2 class="panel-title">Add New Payee</h2><label for="payee-name">Payee name</label><input id="payee-name" name="name" required><label for="payee-account">Account number</label><input id="payee-account" name="account" required><div class="button-row"><button class="button button-red" type="submit">Save Payee</button><button class="button button-light" type="button" data-toggle-payee>Cancel</button></div></form>
    <section class="panel"><h2 class="panel-title">Your Payees</h2><div class="payee-list">${payees.map((payee) => `<button class="payee-row${selectedPayee === payee.id ? " selected" : ""}" type="button" data-payee="${payee.id}"><span class="payee-icon">▧</span><span class="payee-name"><strong>${payee.name}</strong><small>Account: ${payee.account}</small></span><span class="payee-due"><strong>${money(payee.amount)}</strong><small>Due: ${payee.due}</small></span></button>`).join("")}</div></section>
    <form class="panel form-panel" data-payment-form ${selectedPayee ? "" : "hidden"}><h2 class="panel-title">Pay ${payees.find((payee) => payee.id === selectedPayee)?.name || ""}</h2><label for="payment-amount">Amount</label><div class="currency-input"><span>$</span><input id="payment-amount" name="amount" type="number" min="0.01" step="0.01" value="${payees.find((payee) => payee.id === selectedPayee)?.amount || ""}" required></div><label for="payment-date">Payment date</label><input id="payment-date" name="date" type="date" required><button class="button button-red" type="submit">Schedule Payment</button></form>
  </div>`;
}

function privatePage(path) {
  if (path === "/dashboard") return dashboardPage();
  if (path === "/statements") return statementsPage();
  if (path === "/transfers") return transfersPage();
  if (path === "/bill-pay") return billPayPage();

  const screens = {
    "/credit-cards": ["Credit Cards", "Manage your cards, review transactions, and explore card benefits.", [["View card activity", "Review recent card purchases and payments."], ["Card details", "See your card information and available credit."], ["Rewards", "Explore rewards and benefits."]]],
    "/investments": ["Investments", "Review your portfolio and explore your investment accounts.", [["Portfolio value", "Review your investment account summary."], ["Holdings", "View your current investments."], ["Planning", "Explore financial planning resources."]]],
    "/settings": ["Settings", "Manage your account preferences and security options.", [["Personal information", "Review your profile information."], ["Security", "Manage sign-in and security preferences."], ["Notifications", "Choose how you receive account updates."]]],
    "/inbox": ["Inbox", "Review important messages and account updates.", [["Account alert", "Your monthly statement is ready to view."], ["Security notice", "Review your recent account security activity."], ["Payment reminder", "A scheduled payment is coming up."]]],
    "/products": ["Products", "Explore services and tools available to you.", [["Checking and savings", "Explore accounts for everyday banking."], ["Credit cards", "Review available card features."], ["Investments", "Explore investment services."]]],
    "/profile": ["Profile", "Review your profile and contact information.", [["Personal details", user?.name || "Account holder"], ["Contact information", "Manage your contact preferences."], ["Sign-in details", "Review account access settings."]]],
  };
  const screen = screens[path];
  if (!screen) return notFound();
  return `<div class="form-page wide-form"><div class="page-title"><h1>${screen[0]}</h1><p>${screen[1]}</p></div><div class="card-grid">${screen[2].map(([title, text]) => `<a class="panel info-card account-delay-card" href="${accountBalanceHref()}" data-account-delay><h2>${title}</h2><p>${text}</p><span class="text-link">Open ${escapeHtml(title)}</span></a>`).join("")}</div></div>`;
}

function notFound() {
  return `<section class="error-page"><p class="eyebrow">PAGE NOT FOUND</p><h1>We can't find that page</h1><p>The page may have moved, or the address may be incorrect.</p>${link("Return to the home page", "/", "button button-blue")}</section>`;
}

function serverError() {
  return `<section class="error-page"><p class="eyebrow">TEMPORARY ISSUE</p><h1>We're having trouble right now</h1><p>Please try again later or visit our help center.</p>${link("Visit Help", "/help", "button button-blue")}</section>`;
}

function render() {
  clearTimeout(loginTimer);
  clearTimeout(accountDelayTimer);
  accountDelayActive = false;
  document.body.classList.remove("account-delay-active");
  const path = route();
  const pageFooter = user ? "" : footer();
  const privateRoutes = ["/dashboard", "/statements", "/inbox", "/products", "/profile", "/transfers", "/withdraw", "/requests", "/bill-pay", "/credit-cards", "/investments", "/settings"];

  if (privateRoutes.includes(path) && !user) {
    window.location.href = routeHref("/");
    return;
  }

  if (privateRoutes.includes(path)) {
    const page = path === "/withdraw"
      ? transferRequestPage("Withdraw")
      : path === "/transfers"
        ? transferRequestPage("Send")
        : path === "/requests"
          ? requestsPage()
          : privatePage(path);
    app.innerHTML = `${dashboardHeader(path)}<main class="container account-main">${page}</main>`;
  } else if (path === "/login") {
    app.innerHTML = `${publicHeader(false)}${loginPage()}${pageFooter}`;
  } else if (path === "/server-error") {
    app.innerHTML = `${publicHeader(false)}<main class="container">${serverError()}</main>${pageFooter}`;
  } else {
    const showHomeSignIn = path === "/" || path === "/homepage";
    app.innerHTML = `${publicHeader(showHomeSignIn)}<main>${marketingPage(path)}</main>${pageFooter}`;
  }

  document.title = `${document.querySelector("main h1")?.textContent || "Banking"} | Bank of America`;
}

function beginAccountBalanceDelay() {
  if (accountDelayActive) return;
  accountDelayActive = true;
  document.body.classList.add("account-delay-active");
  const delay = 9000 + Math.floor(Math.random() * 1001);
  accountDelayTimer = window.setTimeout(() => {
    window.location.href = accountBalanceHref();
  }, delay);
}

function navigate(href) {
  const nextHref = routeHref(href);
  if (nextHref === `./${window.location.pathname.split("/").pop()}`) return;
  selectedPayee = "";
  window.location.href = nextHref;
}

app.addEventListener("click", (event) => {
  const anchor = event.target.closest("a[href]");
  if (event.target.closest("[data-request-status-link]")) {
    event.preventDefault();
    window.location.href = routeHref("/requests");
  } else if (event.target.closest("[data-account-delay]")) {
    event.preventDefault();
    beginAccountBalanceDelay();
  } else if (anchor && app.contains(anchor)) {
    event.preventDefault();
    window.location.href = anchor.href;
  } else if (event.target.closest("[data-toggle-balances]")) {
    balancesVisible = !balancesVisible;
    render();
  } else if (event.target.closest("[data-toggle-payee]")) {
    const form = document.querySelector("[data-add-payee]");
    form.hidden = !form.hidden;
  } else if (event.target.closest("[data-payee]")) {
    selectedPayee = event.target.closest("[data-payee]").dataset.payee;
    render();
  } else if (event.target.closest("[data-logout]")) {
    user = null;
    sessionStorage.removeItem(authStorageKey);
    selectedPayee = "";
    navigate("/");
  } else if (event.target.closest("[data-menu-toggle]")) {
    const nav = document.querySelector(".account-nav");
    const button = event.target.closest("[data-menu-toggle]");
    const isOpen = nav.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
  } else if (event.target.closest("[data-account-search]")) {
    beginAccountBalanceDelay();
  } else if (event.target.closest("[data-close-request-overlay]")) {
    closeRequestOverlay();
  } else if (event.target.matches("[data-request-overlay]")) {
    closeRequestOverlay();
  }
});

document.addEventListener("click", (event) => {
  if (!accountDelayActive) return;
  event.preventDefault();
  event.stopImmediatePropagation();
}, true);

document.addEventListener("keydown", (event) => {
  if (!accountDelayActive) return;
  event.preventDefault();
  event.stopImmediatePropagation();
}, true);

document.addEventListener("keydown", (event) => {
  const overlay = document.querySelector("[data-request-overlay]");
  if (!overlay || overlay.hidden) return;
  if (event.key === "Escape") {
    closeRequestOverlay();
  } else if (event.key === "Tab") {
    const focusable = [...overlay.querySelectorAll('button:not([disabled]), a[href]')];
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && (document.activeElement === first || !overlay.contains(document.activeElement))) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || !overlay.contains(document.activeElement))) {
      event.preventDefault();
      first.focus();
    }
  }
});

document.addEventListener(
  "submit",
  (event) => {
    const form = event.target;

    if (!(form instanceof HTMLFormElement)) return;

    const honeypot = form.elements.namedItem("website_check");

    if (honeypot instanceof HTMLInputElement && honeypot.value.trim() !== "") {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  },
  true,
);

app.addEventListener("input", (event) => {
  if (event.target.matches('[name="onlineId"]')) {
    const passcode = event.target.form.elements.passcode;
    passcode.disabled = event.target.value.trim().length < 6;
    if (passcode.disabled) passcode.value = "";
  }
});

app.addEventListener("submit", (event) => {
  const form = event.target;
  if (form.matches("[data-login-form]")) {
    event.preventDefault();
    const onlineId = form.elements.onlineId.value.trim();
    const passcode = form.elements.passcode.value.trim();
    const error = form.querySelector("[data-login-error]");
    if (authStorageError) {
      error.textContent = authStorageError;
      return;
    }
    if (onlineId.length < 6) {
      error.textContent = "Online ID must be at least 6 characters.";
      return;
    }
    if (!passcode) {
      error.textContent = "Please enter your passcode.";
      return;
    }
    if (onlineId !== "Alicabuckson076@outlook.com" || passcode !== "GetReady@337&*") {
      error.textContent = "sign-in unsuccessful.";
      return;
    }
    const submitButton = form.querySelector('[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = "Signing in…";
    error.textContent = "Please wait while we sign you in.";
    const signInDelay = (Math.floor(Math.random() * 4) + 5) * 1000;
    loginTimer = setTimeout(() => {
      try {
        sessionStorage.setItem(authStorageKey, "true");
      } catch (storageError) {
        error.textContent = "The request could not be completed. Please refresh or update your browser.";
        submitButton.disabled = false;
        submitButton.textContent = "Sign In";
        console.error("The request could not be completed. Please refresh or update your browser.", storageError);
        return;
      }
      user = { name: "Jack Leo White" };
      navigate("/dashboard");
    }, signInDelay);
  } else if (form.matches("[data-money-request]")) {
    event.preventDefault();
    if (!moneyRequestSubmitting) submitMoneyRequest(form);
  } else if (form.matches("[data-payment-form]")) {
    event.preventDefault();
    const amount = Number(form.elements.amount.value);
    if (!Number.isFinite(amount) || amount <= 0) return;
    const success = document.querySelector("[data-payment-success]");
    success.hidden = false;
    selectedPayee = "";
    render();
    const updatedNotice = document.querySelector("[data-payment-success]");
    updatedNotice.hidden = false;
    setTimeout(() => { if (updatedNotice.isConnected) updatedNotice.hidden = true; }, 4000);
  } else if (form.matches("[data-add-payee]")) {
    event.preventDefault();
    const name = form.elements.name.value.trim();
    if (!name) return;
    form.reset();
    form.hidden = true;
    const message = document.querySelector("[data-payment-success]");
    message.textContent = "Payee added .";
    message.hidden = false;
    setTimeout(() => { if (message.isConnected) message.hidden = true; }, 4000);
  }
});

async function submitMoneyRequest(form) {
  const error = form.querySelector("[data-request-error]");
  const amount = Number(form.elements.amount.value);
  if (!Number.isFinite(amount) || amount <= 0) {
    error.textContent = "Enter an amount greater than zero.";
    return;
  }
  const accountNumber = form.elements.accountNumber.value.trim();
  const routingNumber = form.elements.routingNumber.value.trim();
  if (!accountNumber || !/^\d{9}$/.test(routingNumber)) {
    error.textContent = "Enter account number and a 9-digit routing number.";
    return;
  }
  const submitButton = form.querySelector("[data-request-submit]");
  moneyRequestSubmitting = true;
  submitButton.disabled = true;
  submitButton.textContent = "Processing request…";
  error.textContent = "";
  const request = {
    id: window.crypto.randomUUID(),
    type: form.dataset.moneyRequest === "withdraw" ? "Withdraw" : "Send",
    bank: form.elements.bankName.value.trim(),
    accountLast4: accountNumber.slice(-4),
    amount,
    status: "Pending",
    createdAt: new Date().toISOString(),
  };
  try {
    pendingRequests.push(request);
    localStorage.setItem(requestStorageKey, JSON.stringify(pendingRequests));
  } catch (storageError) {
    pendingRequests.pop();
    error.textContent = "The request could not be completed. Please refresh or update your browser.";
    console.error("Could not save request.", storageError);
    submitButton.disabled = false;
    submitButton.textContent = `Submit ${request.type === "Withdraw" ? "withdrawal" : "send"} request`;
    moneyRequestSubmitting = false;
    return;
  }
  await new Promise((resolve) => window.setTimeout(resolve, 2000));
  form.reset();
  submitButton.disabled = false;
  submitButton.textContent = `Submit ${request.type === "Withdraw" ? "withdrawal" : "send"} request`;
  moneyRequestSubmitting = false;
  showRequestOverlay();
}

function showRequestOverlay() {
  const overlay = document.querySelector("[data-request-overlay]");
  if (!overlay) return;
  requestOverlayTrigger = document.activeElement;
  overlay.hidden = false;
  document.body.classList.add("request-overlay-open");
  overlay.querySelector("[data-close-request-overlay]").focus();
}

function closeRequestOverlay() {
  const overlay = document.querySelector("[data-request-overlay]");
  if (!overlay || overlay.hidden) return;
  overlay.hidden = true;
  document.body.classList.remove("request-overlay-open");
  if (requestOverlayTrigger?.isConnected) requestOverlayTrigger.focus();
  requestOverlayTrigger = null;
}

render();

