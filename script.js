var ccShow = false; //boolean to check if CC/BCC clicked or not

function attachment() {
    document.getElementById("file-input").click();
}

//ADDING EVENT LISTENER for EMAIL INPUTS
function autoSemiColon(id) {
    document.getElementById(id).addEventListener("keyup", function(e) {
        if (e.code == "Space" || e.code == "tab") {
            var a = document.getElementById(id).value;
            document.getElementById(id).value = a + "; ";
        }
    });
}
autoSemiColon("to");

function showCc(x) {
    document.getElementById("ccDiv").innerHTML += `<div class="inputbox">
  <label>Cc:</label>
  <input type="email" id="cc" name="cc" /><br />
  </div><div class="inputbox">

  <label>Bcc:</label>
  <input type="email" id="bcc" name="bcc" /><br />
  </div>`;

    ccShow = true; //setting boolean true as cc/bcc now visible
    autoSemiColon("cc");
    autoSemiColon("bcc");
}

function hideCc() {
    document.getElementById("ccButton").style.display = "none";
    showCc();
}

function send() {
    var sub = document.forms["myForm"]["subject"].value;
    let to = document.forms["myForm"]["to"].value;
    if (ccShow) {
        let cc = document.forms["myForm"]["cc"].value;
        let bcc = document.forms["myForm"]["bcc"].value;
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (sub == "") {
            alert("Please enter a Subject!");
            return false;
        }
        if (!to.match(mailformat) ||
            !cc.match(mailformat) ||
            !bcc.match(mailformat)
        ) {
            alert("Invalid Email!");
            return false;
        }
    }
    if (sub == "") {
        alert("Please enter a Subject!");
        return false;
    }
    if (!to.match(mailformat)) {
        alert("Invalid Email!");
        return false;
    }
    alert("Mail sent!");
}

const target = document.getElementById("TextArea");

function boldText() {
    let x = document.getElementById("bbutton");
    if (target.classList.contains("bold-active")) {
        target.classList.remove("bold-active");
        x.classList.remove("button-active");
    } else {
        target.classList.add("bold-active");
        x.classList.add("button-active");
    }
}

function italicText() {
    let x = document.getElementById("ibutton");
    if (target.classList.contains("italic-active")) {
        target.classList.remove("italic-active");
        x.classList.remove("button-active");
    } else {
        target.classList.add("italic-active");
        x.classList.add("button-active");
    }
}

function upperCase() {
    let x = document.getElementById("casebutton");
    if (target.classList.contains("uppercase-active")) {
        target.classList.remove("uppercase-active");
        x.classList.remove("button-active");
    } else {
        target.classList.add("uppercase-active");
        x.classList.add("button-active");
    }
}