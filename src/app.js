const $ = require('jquery');
const Handlebars = require("handlebars");
// ***************************
$(document).ready(function() {
    var url = 'http://localhost:8888/php-ajax-dischi/dist/php/api/server.php';
    apiRequests(url, null, null);
    apiRequests(url, 'author-list', 'list');
    $('.select select').on('change', function (e) {
        var optionSelected = $("option:selected", this);
        var valueSelected = this.value;
        cdSwiffer();
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
                if (param == 'author-list') {
                    select(data);
                } else {
                    print(data);
                }
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
    if (value == null) {
        return;
    } else if (value.length != 0) {
        switch (param) {
            case 'author':
                return {'author' : value};
            case 'author-list':
                return {'author-list' : value};
        }
    } else {
        return;
    }
}
// ***************************
function select(data) {
    var printSelect = Handlebars.compile($('#select').html());
    if (data.success && data.data != null) {
        for (var i = 0; i < data.data.length; i++) {
            $('.select select').append(
                printSelect({author : data.data[i]})
            );
        }
        $('.select').css("display", "block");
    } else {
        $('.select').css("display", "none");
    }
}
// ***************************
function cdSwiffer() {
    $('.cds-container .cd').remove();
}
// ***************************
