const blockedBotNames = [
  // Add user-agent names or fragments here, for example: "ExampleBot"
];

const blockedIps = [
  // Add exact client IP addresses here, for example: "203.0.113.42"
];

const requiredHeaders = ["user-agent"];
const requiredCookies = [
  // Add cookie names required on every protected request, for example: "session"
];

const maxCookieHeaderBytes = 8192;
const maxCookies = 50;
const cookieNamePattern = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/;

function botBlocker(req, res, next) {
  const userAgent = req.get("user-agent") || "";
  const clientIp = req.ip || req.socket.remoteAddress || "";

  const blockedBot = blockedBotNames.some(
    (name) => name && userAgent.toLowerCase().includes(name.toLowerCase()),
  );
  const blockedIp = blockedIps.includes(clientIp);
  const missingHeader = requiredHeaders.some((name) => {
    const value = req.get(name);
    return typeof value !== "string" || value.trim() === "";
  });

  const rawCookieHeader = req.headers.cookie;
  const cookieHeader = Array.isArray(rawCookieHeader)
    ? rawCookieHeader.join("; ")
    : rawCookieHeader || "";
  const cookieNames = [];
  let malformedCookie = false;

  if (Buffer.byteLength(cookieHeader, "utf8") > maxCookieHeaderBytes) {
    return deny(res);
  }

  if (cookieHeader) {
    for (const part of cookieHeader.split(";")) {
      const equalsAt = part.indexOf("=");
      const name = equalsAt < 0 ? "" : part.slice(0, equalsAt).trim();
      if (!name || !cookieNamePattern.test(name)) {
        malformedCookie = true;
        break;
      }
      cookieNames.push(name.toLowerCase());
    }
  }

  const duplicateCookie = new Set(cookieNames).size !== cookieNames.length;
  const missingCookie = requiredCookies.some(
    (name) => !cookieNames.includes(name.toLowerCase()),
  );

  if (
    blockedBot ||
    blockedIp ||
    missingHeader ||
    malformedCookie ||
    duplicateCookie ||
    missingCookie ||
    cookieNames.length > maxCookies
  ) {
    return deny(res);
  }

  return next();
}

function deny(res) {
  return res.status(403).json({ error: "Request blocked." });
}

module.exports = { botBlocker };