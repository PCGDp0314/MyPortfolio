/*読み込んだらロード画面を表示*/
window.onload = ()=>{
  const loader = document.getElementById('loader');
  loader.classList.add('loaded');
}

/*ハンバーガーメニューをスクロールに合わせて背景色変更*/
window.addEventListener( "scroll" ,function(){

    let scroll = window.pageYOffset;
    let element = document.getElementById("menu-btn");
    
    if (scroll >= 827.5) {
        element.style.backgroundColor = '#000000';
      } else {
        element.style.backgroundColor = 'rgba(0, 0, 0, 0)';
      }
  });

/*スキルバーをスクロールに合わせて表示*/
window.addEventListener('DOMContentLoaded', () => {

    const skillDom = document.querySelectorAll('.skill');
  
    const frameDuration = 1000 / 60;
    const totalFrames = Math.round(2000 / frameDuration);
    const easeOut = t => t * (2 - t);
    const animateCountUp = count => {
      let frame = 0;
      const countTo = parseInt(count.innerHTML);
      const counter = setInterval( () => {
        frame++;
        const progress = easeOut(frame / totalFrames);
        const currentCount = Math.round(countTo * progress);
        if (parseInt(count.innerHTML) !== currentCount)count.innerHTML = currentCount;
        if (frame === totalFrames)clearInterval(counter);
      }, frameDuration);
    };
  
    const fire = function(entries, observer) {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          const year = entry.target.dataset.proficiency;
          const bar = entry.target.querySelector('.skill-bar');
          const countMax = entry.target.querySelector('.skill-countMax');
          const countup = entry.target.querySelector('.countup');
          bar.style.width = year * 20 + '%';
          countMax.style.opacity = 1;
          countup.textContent = year;
          animateCountUp(countup);
          observer.unobserve(entry.target);
        }
      });
    };

    const options = {
      rootMargin: "-50px 0px"
    };

    const io = new IntersectionObserver(fire, options);
    io.POLL_INTERVAL = 100;
    skillDom.forEach(el => {
      io.observe(el);
    });
  });

  /*作品をジャンル別で表示させるタブメニュー*/
  //任意のタブにURLからリンクするための設定
function GethashID (hashIDName){
    if(hashIDName){
      //タブ設定
      $('.tab li').find('a').each(function() { //タブ内のaタグ全てを取得
        var idName = $(this).attr('href'); //タブ内のaタグのリンク名（例）#lunchの値を取得 
        if(idName == hashIDName){ //リンク元の指定されたURLのハッシュタグ（例）http://example.com/#lunch←この#の値とタブ内のリンク名（例）#lunchが同じかをチェック
          var parentElm = $(this).parent(); //タブ内のaタグの親要素（li）を取得
          $('.tab li').removeClass("active"); //タブ内のliについているactiveクラスを取り除き
          $(parentElm).addClass("active"); //リンク元の指定されたURLのハッシュタグとタブ内のリンク名が同じであれば、liにactiveクラスを追加
          //表示させるエリア設定
          $(".area").removeClass("is-active"); //もともとついているis-activeクラスを取り除き
          $(hashIDName).addClass("is-active"); //表示させたいエリアのタブリンク名をクリックしたら、表示エリアにis-activeクラスを追加 
        }
      });
    }
  }
  
  //タブをクリックしたら
  $('.tab a').on('click', function() {
    var idName = $(this).attr('href'); //タブ内のリンク名を取得  
    GethashID (idName);//設定したタブの読み込みと
    return false;//aタグを無効にする
  });
  
  
  // 上記の動きをページが読み込まれたらすぐに動かす
  $(window).on('load', function () {
      $('.tab li:first-of-type').addClass("active"); //最初のliにactiveクラスを追加
      $('.area:first-of-type').addClass("is-active"); //最初の.areaにis-activeクラスを追加
    var hashName = location.hash; //リンク元の指定されたURLのハッシュタグを取得
    GethashID (hashName);//設定したタブの読み込み
  });