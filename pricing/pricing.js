$('#paymentDetails').submit((evt) => {
  evt.preventDefault();
  // Add code to process submitted input


})

$(document).ready(function () {
    $("#number").keyup(function () {
                    if ($(this).val().length == 4) {
                        $(this).val($(this).val() + "-");
                    }
                    else if ($(this).val().length == 9) {
                        $(this).val($(this).val() + "-");
                    }
                    else if ($(this).val().length == 14) {
                        $(this).val($(this).val() + "-");
                    }
                });
});

$(document).ready(function () {
    $("#date").keyup(function () {
                    if ($(this).val().length == 2) {
                        $(this).val($(this).val() + "-");
                    }

                });
});

function ShowStep2() {

        document.getElementById('step2').style.color = "#def2f1";
        document.getElementById('step22').style.color = "#def2f1";
        document.getElementById('step222').style.color = "#def2f1";


        if (document.getElementById('Div1')) {

            if (document.getElementById('Div1').style.display == 'none') {
                document.getElementById('Div1').style.display = 'block';
                document.getElementById('Div2').style.display = 'none';
            }
            else {
                document.getElementById('Div1').style.display = 'none';
                document.getElementById('Div2').style.display = 'block';
            }
        }
}



function ShowStep3() {

        document.getElementById('step3').style.color = "#def2f1";
        document.getElementById('step33').style.color = "#def2f1";
        document.getElementById('step333').style.color = "#def2f1";


        if (document.getElementById('Div2')) {

            if (document.getElementById('Div2').style.display == 'none') {
                document.getElementById('Div2').style.display = 'block';
                document.getElementById('Div3').style.display = 'none';
            }
            else {
                document.getElementById('Div2').style.display = 'none';
                document.getElementById('Div3').style.display = 'block';
            }
        }
}
