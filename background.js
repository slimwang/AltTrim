chrome.commands.onCommand.addListener(function (command) {
    let t = document.createElement("textarea");
    document.body.appendChild(t);
    t.focus();
    document.execCommand("paste");
    let clipboardText = t.value;
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
});
