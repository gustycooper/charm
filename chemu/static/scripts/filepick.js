var chooseInputFilePicker;
var osOptionRadio;
var osDashOptionRadio;
var chooseOSFilePicker;

function validateForm() {
    if (chooseInputFilePicker.value == "") {
        alert("Please choose an input file");
        return false;
    }
    if (osOptionRadio.value == "user" && chooseOSFilePicker.value == "") {
        alert("Please choose an OS file");
        return false;
    }
    return true;
}

function onChooseOSDeselected() {
    chooseOSFilePicker.disabled = true;
    chooseOSFilePicker.dashm = false;
}

function onChooseOSSelected() {
    chooseOSFilePicker.disabled = false;
    chooseOSFilePicker.dashm = false;
}

function onDashMSelected() {
    chooseOSFilePicker.dashm = true;
    chooseOSFilePicker.dasho = false;
}

function onDashOSelected() {
    chooseOSFilePicker.dashm = false;
    chooseOSFilePicker.dasho = true;
}

function onLoad() {
    chooseOSFilePicker = $('#os-file-picker')[0];
    chooseInputFilePicker = $('#input-file-picker')[0];
    osOptionRadio = document.forms["files"]["os-choice"];
    osDashOptionRadio = document.forms["files"]["dash-option"];
    console.log(document.cookie);
}

$(document).ready(onLoad);

let cookie = document.cookie;
if (cookie) {
    $('html').attr('class', cookie);
}
