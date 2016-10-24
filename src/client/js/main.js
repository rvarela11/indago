$(document).ready(function() {

  $('.dropdown-button').dropdown({
    hover: false
  });

  $('.back').click(function() {
    window.history.back();
  });

  // Initialize collapse button
  $('.button-collapse').sideNav();
  // Sidebar collapsible menu
  $('.collapsible').collapsible();
  //Search city selector
  $('select').material_select();

  var url;

  //validate user input, prevent empty values
  $('.textField').on('input', function () {
    $(this).addClass('invalid');
    var name = $(this).val();
    if (name) {
      $(this).removeClass('invalid');
    }
    else {
      $(this).addClass('invalid');
    }
  });

  $('#addPlace').click(function () {

    var hostname = window.location.hostname;
    var planID = $('#planID').val();
    var userID = $('#userID').val();

      //toggle including port No. on dev/deployment
    if(hostname === 'localhost' || hostname === '127.0.0.1') {
      url = 'http://'+hostname+':3000/users/'+userID+'/plans/'+planID+'/places/new';
    } else {
      url = 'http://'+hostname+'/users/'+userID+'/plans/'+planID+'/places/new';
    }

    $.ajax({
      type : 'POST',
      url : url,
      data : {
        plan_id : $('#planID').val(),
        name : $('#name').val(),
        address : $('#address').val(),
        city : $('#city').val(),
        state : $('#state').val(),
        zipcode : $('#zipcode').val(),
        google_photo_ref : $('#google_photo_ref').val() || null,
        start_time : $('#start_time').val(),
      }
    });
  });
});
