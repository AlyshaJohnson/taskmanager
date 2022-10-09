document.addEventListener('DOMContentLoaded', function () {
  // sidenav initialisation
  var sidenav = document.querySelectorAll('.sidenav');
  M.Sidenav.init(sidenav);

  // date picker initialisation
  var datepicker = document.querySelectorAll('.datepicker');
  M.Datepicker.init(datepicker, {
    format: "dd mmm, yyyy",
    i18n: {done: "Select"}
  });

  // drop down category select
  var category_select = document.querySelectorAll('select');
  M.FormSelect.init(category_select);
});
