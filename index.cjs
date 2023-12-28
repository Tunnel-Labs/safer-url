module.exports = function safeURL(url, base) {
  try {
    return new URL(url, base);
  } catch {
    return null;
  }
}
