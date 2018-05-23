$(function(){
  $('a[href^="#"]').click(function(){ //#で始まるa要素をクリックすると実行
    var speed = 900; //数値が大きいほど遅く動く
    var href= $(this).attr("href"); //要素オブジェクトのhref属性の値を取得して変数hrefに代入
    var target = $(href == "#" || href == "" ? 'html' : href); //hrefの値が#か空白の時はhtmlセレクタを代入、それ以外ではhrefを代入
    var position = target.offset().top - 60; //targetの縦軸の座標を取得して、ヘッダーの高さを引く
    $("html, body").animate({scrollTop:position}, speed, "swing"); //animate関数
    return false;
  });
});
