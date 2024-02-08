var hours_err = false;
var knees_err = false;

function calculatePrice() {
    $("#form").on("submit", function (event) {
        event.preventDefault();
    })
    let hours = parseInt($("#hours").val());
    let rate = parseInt($("#rate").val());
    let knees = parseInt($("#knees").val());
    let bills = parseInt($("#bills").val());
    let tutoring = hours * rate;
    let medical = bills * knees;
    let output = "Tutoring Cost: " + tutoring + " Medical Bills: " + medical + " Total Cost: " + (tutoring + medical);
    $("#output").html(output);
}

function validateHours() {
    let hours = parseInt($("#hours").val());
    if (hours < 0) {
        $("#hours_err").html("Hours Must be Positive!");
        hours_err = true;
        $("#calculate").prop("disabled", hours_err);
    } else {
        $("#hours_err").html("");
        $("#calculate").prop("disabled", knees_err);
    }
}

function validateKnees() {
    let knees = parseInt($("#knees").val());
    if (knees < 0) {
        $("#knees_err").html("Knees must be Positive!");
        knees_err = true;
        $("#calculate").prop("disabled", knees_err);
    } else if (knees > 2) {
        $("#knees_err").html("More than 2 knees? Interesting...");
    } else {
        $("#knees_err").html("");
        $("#calculate").prop("disabled", hours_err);
    }
}