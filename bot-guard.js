(() => {
  const blockedBotNames = [
    // Add User-Agent fragments to block, for example: "ExampleBot"
  ];
  const minimumFormAgeMs = 1200;
  const duplicateSubmitWindowMs = 2000;
  const honeypotName = "website_check";
  const requireCookieSupport = false;
  const formOpenedAt = new WeakMap();
  const lastSubmitAt = new WeakMap();

  const blockedUserAgentFragments = blockedBotNames
    .map((name) => name.trim().toLowerCase())
    .filter(Boolean);

  function blockDom(message = "Access denied.") {
    const root = document.body || document.documentElement;
    if (!root) return;

    if (document.getElementById("bot-guard-blocker")) return;

    const blocker = document.createElement("div");
    blocker.id = "bot-guard-blocker";
    blocker.textContent = message;
    blocker.style.position = "fixed";
    blocker.style.inset = "0";
    blocker.style.zIndex = "2147483647";
    blocker.style.display = "flex";
    blocker.style.alignItems = "center";
    blocker.style.justifyContent = "center";
    blocker.style.background = "#0b0b0f";
    blocker.style.color = "#fff";
    blocker.style.fontSize = "20px";
    blocker.style.fontWeight = "700";
    blocker.style.letterSpacing = "0.04em";
    blocker.style.textAlign = "center";
    blocker.style.padding = "24px";
    blocker.style.boxSizing = "border-box";

    const bodyChildren = Array.from(document.body ? document.body.children : []);
    bodyChildren.forEach((child) => {
      if (child !== blocker) {
        child.style.display = "none";
      }
    });

    document.body.appendChild(blocker);
    document.documentElement.style.visibility = "visible";
    document.body.style.visibility = "visible";
    document.body.style.overflow = "hidden";
  }

  function addHoneypot(form) {
    if (!formOpenedAt.has(form)) {
      formOpenedAt.set(form, Date.now());
    }

    if (form.elements.namedItem(honeypotName)) return;

    const wrapper = document.createElement("div");
    wrapper.setAttribute("aria-hidden", "true");
    wrapper.style.position = "absolute";
    wrapper.style.left = "-10000px";
    wrapper.style.width = "1px";
    wrapper.style.height = "1px";
    wrapper.style.overflow = "hidden";

    const label = document.createElement("label");
    label.textContent = "Leave this field empty";

    const input = document.createElement("input");
    input.type = "text";
    input.name = honeypotName;
    input.tabIndex = -1;
    input.autocomplete = "off";
    label.append(input);
    wrapper.append(label);
    form.append(wrapper);
  }

  function cookieSupportAvailable() {
    const cookieName = "__bot_guard_check";
    const secure = location.protocol === "https:" ? "; Secure" : "";

    try {
      document.cookie = `${cookieName}=1; path=/; max-age=30; SameSite=Lax${secure}`;
      const available = document.cookie
        .split(";")
        .some((cookie) => cookie.trim().startsWith(`${cookieName}=`));
      document.cookie = `${cookieName}=; path=/; max-age=0; SameSite=Lax${secure}`;
      return available;
    } catch (error) {
      console.warn("Bot guard could not check cookie support.", error);
      return false;
    }
  }

  function showBlockedMessage(form) {
    let message = form.querySelector("[data-bot-guard-message]");
    if (!message) {
      message = document.createElement("p");
      message.setAttribute("data-bot-guard-message", "");
      message.setAttribute("role", "status");
      message.setAttribute("aria-live", "polite");
      form.append(message);
    }
    message.textContent =
      "This form could not be submitted. Please check it and try again.";
  }

  function inspectForm(event) {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;

    addHoneypot(form);
    const honeypot = form.elements.namedItem(honeypotName);
    const filledHoneypot =
      honeypot instanceof HTMLInputElement && honeypot.value.trim() !== "";
    const userAgent = navigator.userAgent.toLowerCase();
    const matchedBotName = blockedUserAgentFragments.some((name) =>
      userAgent.includes(name),
    );
    const now = Date.now();
    const submittedTooSoon =
      now - (formOpenedAt.get(form) || now) < minimumFormAgeMs;
    const submittedAgainTooSoon =
      now - (lastSubmitAt.get(form) || 0) < duplicateSubmitWindowMs;
    const cookiesUnavailable =
      requireCookieSupport && !cookieSupportAvailable();

    if (filledHoneypot || matchedBotName) {
      event.preventDefault();
      event.stopImmediatePropagation();
      blockDom("Bot activity detected. Access blocked.");
      return;
    }

    if (submittedTooSoon || submittedAgainTooSoon || cookiesUnavailable) {
      event.preventDefault();
      event.stopImmediatePropagation();
      showBlockedMessage(form);
      return;
    }

    lastSubmitAt.set(form, now);
  }

  document.addEventListener("submit", inspectForm, true);

  function prepareForms() {
    document.querySelectorAll("form").forEach(addHoneypot);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", prepareForms, { once: true });
  } else {
    prepareForms();
  }
})();
