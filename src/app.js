const $ = require('jquery');
const Handlebars = require("handlebars");
// ***************************
$(document).ready(function() {
    var url = 'http://localhost:8888/php-ajax-dischi/dist/php/api/server.php';
    apiRequests(url, null, null);
    $('.select select').on('change', function (e) {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
        swiffer();
        apiRequests(url, 'author', valueSelected);
    });
});
// ***************************
function apiRequests(url, param, value) {
    $.ajax(
        {
            url: url,
            data: params(param, value),
            method: "GET",
            success: function (data) {
                console.log(data);
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
    if (data.success && data.data != null) {
        select(data);
        for (var i = 0; i < data.data.length; i++) {
            $('.cds-container').append(
                printCds(data.data[i])
            );
        }
    } else if (!data.success) {
        $('.cds-container').append(
            printError({title : data.message})
        );
    } else {
        $('.cds-container').append(
            printError({title : 'Connessione al server fallita'})
        );
    }
}
// ***************************
function params(param, value) {
    if (value != null && value.length != 0) {
        switch (param) {
            case 'author':
            return {'author' : value};
        }
    }
    return;
}
// ***************************
function select(data) {
    var printSelect = Handlebars.compile($('#select').html());
    if (data.success && data.data != null) {
        for (var i = 0; i < data.data.length; i++) {
            $('.select select').append(
                printSelect(data.data[i])
            );
        }
        $('.select').css("display", "block");
    } else {
        $('.select').css("display", "none");
    }
}
// ***************************
function swiffer() {
    $('.cds-container .cd').remove();
}
// ***************************
