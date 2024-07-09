$('button.navbar-toggler').click(()=>{
  $('div#navbarSupportedContent').slideToggle();
})


function openTab(evt, tabName) {
    var i, tabContent, tabButtons;
  
    // Hide all tab content
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
  
    // Remove the active class from all tab buttons
    tabButtons = document.getElementsByClassName("tab-button");
    for (i = 0; i < tabButtons.length; i++) {
      tabButtons[i].className = tabButtons[i].className.replace(" active", "");
    }
  
    // Show the current tab and add an active class to the button
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  

  function showTab(evt, sectionId) {
    var i, tabSection, tabBtns;
  
    // Hide all tab content
    tabSection = document.getElementsByClassName("tab-section");
    for (i = 0; i < tabSection.length; i++) {
      tabSection[i].style.display = "none";
    }
  
    // Remove the active class from all tab buttons
    tabBtns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabBtns.length; i++) {
      tabBtns[i].className = tabBtns[i].className.replace(" active", "");
    }
  
    // Show the current tab and add an active class to the button
    document.getElementById(sectionId).style.display = "block";
    evt.currentTarget.className += " active";
  }
  