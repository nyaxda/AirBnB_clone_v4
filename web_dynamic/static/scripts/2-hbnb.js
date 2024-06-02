/* global $ */
$(document).ready(function () {
  const checkedAmenities = {};

  $('input[type="checkbox"]').on('change', function () {
    if (this.checked) {
      checkedAmenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete checkedAmenities[$(this).data('id')];
    }

    const list = Object.values(checkedAmenities);
    if (list.length > 0) {
      $('div.amenities h4').text(Object.values(checkedAmenities).join(', '));
    } else {
      $('div.amenities h4').html('&nbsp;');
    }
  });

  fetch('http://0.0.0.0:5001/api/v1/status/')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'OK') {
          $('#api_status').addClass('available');
        } else {
          $('#api_status').removeClass('available');
        }
      })
      .catch(error => console.error('Error:', error));
});
