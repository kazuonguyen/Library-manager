<script>
    $('document').ready(function () {
    $('input[type=file]').on('change', function () {
      var $files = $(this).get(0).files;
      if ($files.length) {
        if ($files[0].size > $(this).data('max-size') * 1024) {
          console.log('Vui lòng chọn file có dung lượng nhỏ hơn!');
          return false;
        }
        
        console.log('Đang upload hình ảnh lên imgur...');
        var apiUrl = 'https://api.imgur.com/3/image';
        var apiKey = '251c1d01c80b1d7'; // Thay bằng Client ID của ae
        var settings = {
          async: false,
          crossDomain: true,
          processData: false,
          contentType: false,
          type: 'POST',
          url: apiUrl,
          headers: {
            Authorization: 'Client-ID ' + apiKey,
            Accept: 'application/json',
          },
          mimeType: 'multipart/form-data',
        };
        var formData = new FormData();
        formData.append('image', $files[0]);
        settings.data = formData;
        $.ajax(settings).done(function (response) {
          console.log(response);
          var obj = JSON.parse(response);
document.getElementById("output").innerHTML = obj.data.link;
        });
      }
    })
  });</script>