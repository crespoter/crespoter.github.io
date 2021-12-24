window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        this.contact_number.value = Math.random() * 100000 | 0;
        $("#contact-form-submit-button").attr('disabled', 'disabled');
        emailjs.sendForm('gmail', 'contact-email-main', this)
            .then(function() {
                var toastHTML = '<span >Message Sent Successfully</span>';
                M.toast({html: toastHTML, classes: "green lighten-1"});
                $("#contact-form-submit-button").removeAttr('disabled');
                $("input").val('');
                $('textarea').val('');
            }, function(error) {
                var toastHTML = '<span >Failed to sent mail. If error repeats please sent any queries directly</span>';
                M.toast({html: toastHTML, classes: "red lighten-1", displayLength: 10000});
            });
    });
}


$(document).ready(function(){
    $('.collapsible').collapsible();
    $('.modal').modal();
    $('.tooltipped').tooltip({
        options: {
            exitDelay: 0
        }
    });

    $('.scrollspy').scrollSpy();
});

