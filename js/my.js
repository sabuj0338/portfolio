
      // button tooltip
      $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
      });

      // portfolio tabs
      function openTab(evt, tabName) {
        var i, x, tablinks;
        x = document.getElementsByClassName("tab");
        for (i = 0; i < x.length; i++) {
          x[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablink");
        for (i = 0; i < x.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" w3-red w3-text-white", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " w3-red w3-text-white";
      }

      // scrolling effects for button click
      $(function(){
        $('a[href^="#"]').on('click', function (e) {
          e.preventDefault();

          var target = this.hash;
          var  $target = $(target);

          // scroll and show hash
          $('html, body').animate({
            'scrollTop': $target.offset().top}, 1000, 'swing', function () {
              window.location.hash = target;
            });

            // scroll and don't show hash
            // $('html, body').animate({
            //   'scrollTop': $target.offset().top}, 1000, 'swing'
            // );
        });
      });

      // $(document).on('click', 'a', function(){
      //   $('nav a').removeClass('baton-active');
      //   $(this).addClass('baton-active');
      // });

      // active button for button click
      $(function(){

        var navlinks = $('nav div a'),
            // navh = $('nav').height(),
            section = $('section'),
            documentEl = $(document);

            documentEl.on('scroll', function(){
              var currentScrollPosition = documentEl.scrollTop();

              section.each(function(){
                var self = $(this);
                if( self.offset().top < (currentScrollPosition + 50) && (currentScrollPosition + 50) < (self.offset().top + self.outerHeight())){
                  var targetClass = '.' + self.attr('class') + '-marker';
                  navlinks.removeClass('active');
                  $(targetClass).addClass('active');
                }
              });
            });

      });
