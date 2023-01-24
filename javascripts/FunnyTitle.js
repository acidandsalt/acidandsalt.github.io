var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/out.png");
         document.title = '别担心，在这里等你回来:)';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/back.png");
         document.title = 'Hi，欢迎回来！' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
