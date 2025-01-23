function FindProxyForURL(url, host) {
    // Bypass the proxy for localhost and local network addresses
    if (host == "localhost" || shExpMatch(host, "*.local")) {
        return "DIRECT";
    }
    if (url == "https://product-details.mozilla.org/1.0/firefox_history_major_releases.json") {
        return "DIRECT";
    }
    
    // Use the proxy for all other requests
    //if (shExpMatch(url, "http://*") || shExpMatch(url, "https://*")) {
      //  return "PROXY web-proxy.example.com:8080";
    //}
    
    // If no match, return "DIRECT" (no proxy)
    return "DIRECT";
}
