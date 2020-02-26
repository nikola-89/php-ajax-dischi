const $ = require('jquery');
const Handlebars = require("handlebars");
// ***************************
$(document).ready(function() {
    var url = 'http://localhost:8888/php-ajax-dischi/dist/php/api/server.php';
    apiRequests(url);
});
// ***************************
function apiRequests(url) {
    $.ajax(
        {
            url: url,
            method: "GET",
            success: function (data) {
                print(data);
            },
            error: function (data) {
                print(null);
            }
        }
    );
}
// ***************************
function print(data) {
    var printCds = Handlebars.compile($('#cdBuilder').html());
    var printError = Handlebars.compile($('#error').html());
    if (data.success && data.data.lenght != 0) {
        for (var i = 0; i < data.data.length; i++) {
            $('.cds-container').append(
                printCds(data.data[i])
            );
        }
    } else {
        $('.cds-container').append(
            printError({title : 'Ops! Qualcosa è andato storto!'})
        );
    }
}
// ***************************
