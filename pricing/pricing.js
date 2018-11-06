$('#paymentDetails').submit((evt) => {
  evt.preventDefault();
  // Add code to process submitted input


})



function ShowStep2() {

        document.getElementById('step2').style.color = "#def2f1";
        document.getElementById('step22').style.color = "#def2f1";

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
