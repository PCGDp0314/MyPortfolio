/*ハンバーガーメニューをスクロールに合わせて背景色変更*/
window.addEventListener( "scroll" ,function(){

    let scroll = window.pageYOffset;
    let element = document.getElementById("menu-btn");
    
    if (scroll > 800) {
        element.style.backgroundColor = '#000000';
      } else {
        element.style.backgroundColor = 'rgba(0, 0, 0, 0)';
      }
  });