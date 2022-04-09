$(function () {
    var backup;
    $("#change").click(function () {
        backup=$('#tekst').html();
        $('#tekst').summernote({ focus: true });
        $('#change').hide();
        $('#save').show();
        $('#quit').show();
    });

    $("#save").click(function () {
        bootbox.confirm({
            message: "Da li želite da sačuvate izmene?",
            buttons: {
                confirm: {
                    label: 'Da',
                    className: 'btn-success'
                },
                cancel: {
                    label: 'Ne',
                    className: 'btn-danger'
                }
            },
            callback: function(odgovor) {
                if (odgovor) {
                    $('#tekst').summernote('destroy');
                    $('#save').hide();
                    $('#quit').hide();
                    $('#change').show();
                }
            }
        })
    });

    $('#quit').click(function () {
        $('#tekst').summernote('destroy');
        $('#tekst').html(backup);

        $('#save').hide();
        $('#quit').hide();
        $('#change').show();
    })


})