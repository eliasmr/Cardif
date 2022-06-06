(function () {
  "use strict";
  window.addEventListener(
    "load",
    function () {
      // Code
      let forms = document.getElementsByTagName("form");
      var validation = Array.prototype.filter.call(
        forms,
        function (form) {
          form.addEventListener(
            "submit",
            function (event) {
              if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
              }
              form.classList.add("was-validated");
            },
            false
          );
        }
      );
    },
    false
  );
})();