$(function () {
    generateButton();
});

function generateButton() {
    $(".submit").click(function (e) {
        e.preventDefault();
        const input = $("input").val();
        $.ajax({
            url: "https://quickchart.io/qr",
            method: "GET",
            data: {
                text: input,
                size: 300,
                

            },
            success: function (response) {
                const qrCodeUrl = `https://quickchart.io/qr?text=${input}&caption=your qr code&captionFontFamily=mono&captionFontSize=10`;
                const qrcodediv = $('#displayqrcode');
                qrcodediv.html(`<img src="${qrCodeUrl}" alt="QR Code not found">`);
                console.log(response);
            },
            error: function (err) {
                console.log(err);
            }
        });
    });
}
