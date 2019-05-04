chrome.runtime.onInstalled.addListener(function () {
    let t = document.createElement("textarea");
    document.body.appendChild(t);
    t.focus();
    document.execCommand("paste");
    let clipboardText = t.value; //this is your clipboard data
    trimedText = clipboardText.replace(/[\n\r]+/g, '');
    t.innerHTML = trimedText;
    document.body.removeChild(t);

    let copyDiv = document.createElement('textarea');
    document.body.appendChild(copyDiv);
    copyDiv.innerHTML = trimedText;
    copyDiv.focus();
    document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
    document.body.removeChild(copyDiv);

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
            conditions: [new chrome.declarativeContent.PageStateMatcher({
                pageUrl: { hostEquals: 'developer.chrome.com' },
            })
            ],
            actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
    });
});