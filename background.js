chrome.runtime.onInstalled.addListener(function () {
    let t = document.createElement("textarea");
    document.body.appendChild(t);
    t.focus();
    document.execCommand("paste");
    let clipboardText = t.value; //this is your clipboard data
    trimedText = clipboardText.replace(/[\n\r]+/g, '');
    t.innerHTML = trimedText;
    t.focus();
    document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
    document.body.removeChild(t);

    let copyDiv = document.createElement('div');
    copyDiv.contentEditable = true;
    document.body.appendChild(copyDiv);
    copyDiv.innerHTML = trimedText;
    copyDiv.unselectable = "off";
    copyDiv.focus();
    document.execCommand('SelectAll');
    document.execCommand("Copy", false, null);
    // document.body.removeChild(copyDiv);

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