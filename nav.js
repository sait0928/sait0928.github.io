$(function() {
  var w = $(window).width(); //ウィンドウ幅の値を取得して代入
  var sp = 768; //ブレイクポイントの値を代入
  if(w < sp) { //spの場合のみ以下の処理を行う
    $('#navToggle').click(function() { //classのつけ外し
      $('header').toggleClass('openNav');
    });
    $("header a").click(function() { //classを外す
      $("header").removeClass("openNav");
    });
  }
})
