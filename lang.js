(function(){
  var KEY = 'tcb_lang';

  function apply(lang){
    document.documentElement.setAttribute('lang', lang);
    var nodes = document.querySelectorAll('[data-lang]');
    for (var i = 0; i < nodes.length; i++){
      var el = nodes[i];
      if (el.getAttribute('data-lang') === lang) el.removeAttribute('hidden');
      else el.setAttribute('hidden', '');
    }
    var btns = document.querySelectorAll('.lang-switch [data-set-lang]');
    for (var j = 0; j < btns.length; j++){
      var b = btns[j];
      if (b.getAttribute('data-set-lang') === lang) b.classList.add('active');
      else b.classList.remove('active');
    }
    try { localStorage.setItem(KEY, lang); } catch(e){}
  }

  document.addEventListener('DOMContentLoaded', function(){
    var saved = 'vi';
    try { saved = localStorage.getItem(KEY) || 'vi'; } catch(e){}
    apply(saved);
    var btns = document.querySelectorAll('.lang-switch [data-set-lang]');
    for (var j = 0; j < btns.length; j++){
      btns[j].addEventListener('click', function(){
        apply(this.getAttribute('data-set-lang'));
      });
    }
  });
})();
