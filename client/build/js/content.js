chrome.runtime.onMessage.addListener(function(msg, sender) {
  if (msg == "toggle") {
    toggle();
  }
});

var iframe = document.createElement("iframe");
iframe.style.background = "white";
iframe.style.transition = "0.2s";
iframe.style.height = "100%";
iframe.style.width = "0px";
iframe.style.position = "fixed";
iframe.style.top = "0px";
iframe.style.right = "0px";
iframe.style.zIndex = "9999999";
iframe.frameBorder = "none";
iframe.src = chrome.extension.getURL("index.html");

document.body.appendChild(iframe);

function toggle() {
  if (iframe.style.width == "0px") {
    iframe.style.width = "400px";
  } else {
    iframe.style.width = "0px";
  }
}
