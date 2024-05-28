let b = document.getElementById('titleBtn');
b.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let activeTab = tabs[0];
      let title = activeTab.title;
      document.getElementById('titleName').innerHTML = title;
    });
  });


  // document.getElementById('titleBtn').addEventListener('click', () => {
  //   let tab =  chrome.tabs.query({ active: true, currentWindow: true });
  //   console.log(tab);
  //  });
