$(document).ready(function(){


  $(".submenu > a").click(function(e) {
    e.preventDefault();
    var $li = $(this).parent("li");
    var $ul = $(this).next("ul");

    if($li.hasClass("open")) {
      $ul.slideUp(350);
      $li.removeClass("open");
    } else {
      $(".nav > li > ul").slideUp(350);
      $(".nav > li").removeClass("open");
      $ul.slideDown(350);
      $li.addClass("open");
    }
  });

  $('#login').on('shown.bs.modal', function () {
    $('#login').focus()
  });

  //Seleção de cenários
  $('#cenario a').click(function(){
    $('#cenario a').removeClass("selected");
    $(this).addClass("selected");

    if ($('#cenario_1').hasClass("selected")) {
      $("#cenario_selected").attr("href", "simulacao-individual-passo-1.html");
    } else if ($('#cenario_2').hasClass("selected")) {
      $("#cenario_selected").attr("href", "simulacao-individual-cen-2-passo-1.html");
    };
  });

  $('#valor_prazo_pensao .selection_fieldset').click(function(){
    $('#valor_prazo_pensao .selection_fieldset').removeClass("selected");
    $(this).addClass("selected");
  });

  //Editar dados
  $('#edit_datas').click(function(){
    $('#edit_datas_form input').prop('disabled', false);
    $('#edit_datas_form select').prop('disabled', false);
    $(this).css("display", "none");
    $("#btns_edit").css("display", "block");
  });

  $('#cancel_edit_datas').click(function(){
    $('#edit_datas_form input').prop('disabled', true);
    $('#edit_datas_form select').prop('disabled', true);
    $("#btns_edit").css("display", "none");
    $("#edit_datas").css("display", "block");
  });

  // Tooltip
  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });
  
});

