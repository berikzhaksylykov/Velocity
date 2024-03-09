function openTab(event, tabName) {
    // Declare all variables
    let i, tabContent, tabBtn;

    // Get all elements with class="tab__content" and hide them
    tabContent = document.getElementsByClassName("tab__content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    // Get all elements with class="tab__btn" and remove the class "active"
    tabBtn = document.getElementsByClassName("tab__btn");
    for (i = 0; i < tabBtn.length; i++) {
        tabBtn[i].className = tabBtn[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();