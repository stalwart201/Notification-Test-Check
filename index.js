console.log("Hello world in INDEX!!!");

let ask = document.getElementById("permission");

ask.addEventListener("click", (evt) => {
  this.askNotificationPermission();
});

function askNotificationPermission() {
  // function to actually ask the permissions
  // Let's check if the browser supports notifications
  if (!("Notification" in window)) {
    console.log("This browser does not support notifications.");
  } else {
    Notification.requestPermission().then((permission) => {
      // To add requirement checks after this POC
      console.log("value got :: ", permission);
    });
  }
}

let button = document.getElementById("trigger");

// Dummy delay for testing some required unforeseen scenarios
button.addEventListener("click", (evt) => {
  this.wait(7000);
});

function wait(time) {
  console.log("called wait Now!");
  setTimeout(() => {
    this.showData();
    console.log("Called Notification");
  }, time);
}

function showData() {
  if (document.visibilityState === "visible") {
    return;
  }
  console.log("called show data");
  const title = "Notification call test";
  const icon =
    "https://sk1-dashboard-staging-21.dashboard.clevertap.com/images/ct-favicon.png";
  const body = "Customer Took Action!";
  let notification = new Notification(title, { body, icon });
  notification.onclick = () => {
    notification.close();
    window.parent.focus();
  };
  console.log("Notify data", notification);
}
