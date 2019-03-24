var currTabId;

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "youtube-started" ) {
      chrome.notifications.create("begin",{
        type: 'basic',
        iconUrl: 'icons8-delete-50.png',
        title: 'Begin!', 
        message:'10 minutes start now!'
      },function() {
        currTabId = sender.tab.id;
        chrome.alarms.create("myAlarm", {delayInMinutes: 10});  
      });
    }
  }
);

chrome.alarms.onAlarm.addListener(function(alarm) {
  chrome.notifications.create("end",{
    type: 'basic',
    iconUrl: 'icons8-delete-50.png',
    title: 'End!',
    message:'You are done!'
  },function() {
    chrome.tabs.remove(currTabId);
  });  
});
