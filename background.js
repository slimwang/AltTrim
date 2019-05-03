chrome.runtime.onInstalled.addListener(function () {
    let t = document.createElement("textarea");
    document.body.appendChild(t);
    t.focus();
    document.execCommand("paste");
    let clipboardText = t.value; //this is your clipboard data
    trimedText = clipboardText.replace(/[\n\r]+/g, '')
    document.body.removeChild(t);
    console.log(trimedText);

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'developers.chrome.com' },
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});