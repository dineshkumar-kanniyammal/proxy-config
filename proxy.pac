function FindProxyForURL(url, host) {
    
    if (host == "localhost" || shExpMatch(host, "*.local")) {
        return "DIRECT";
    }
    if (url == "https://product-details.mozilla.org/1.0/firefox_history_major_releases.json") {
        return "DIRECT";
    }

    // If no match, return "DIRECT" (no proxy)
    return "DIRECT";
}
