$(document).ready(function () {
  let cpt = 0;

  $("form").append("<div id=" + cpt + "></div>");
  $("form")
    .children("div")
    .last()
    .append('<input type="number" id="product' + cpt + '" value="2000" />');
  $("form")
    .children("div")
    .last()
    .append('<input type="number" id="qty' + cpt + '" value="0"class="qty" />');

  $("form")
    .children("div")
    .last()
    .append('<input type="number" id="total' + cpt + '" value="0" />');

  $("form")
    .children("div")
    .last()
    .append('<button id="minus' + cpt + '" class="remove">-</button>');

  $("#add").click(function () {
    cpt++;
    $("form").append("<div id=" + cpt + "></div>");
    $("form")
      .children("div")
      .last()
      .append('<input type="number" id="product' + cpt + '" value="2000" />');
    $("form")
      .children("div")
      .last()
      .append(
        '<input type="number" id="qty' +
          cpt +
          '" value="0" class="qty"      /> '
      );

    $("form")
      .children("div")
      .last()
      .append('<input type="number" id="total' + cpt + '" value="0" />');

    $("form")
      .children("div")
      .last()
      .append('<button id="minus' + cpt + '" class="remove">-</button>');
  });
  $(".form").on("click", ".remove", function (e) {
    e.preventDefault();
    let myDivId = $(this).parent().attr("id");
    if (myDivId !== "0") $(this).parent().remove();
    else {
      $(this).attr("disabled", "true");
    }
  });
  $(".form").on("keyup change", ".qty", function () {
    let id = $(this).parent().attr("id");

    $("#total" + id).val($("#qty" + id).val() * $("#product" + id).val());
  });
});
