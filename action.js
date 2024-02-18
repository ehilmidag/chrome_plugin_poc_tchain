document.getElementById('fillCredentials').addEventListener('click',function () {

    chrome.tabs.executeScript({
    },function () {
        chrome.tabs.executeScript({
            file: 'injector.js'
        });
    });
});