
(function( $ ){

    var DEFAULT_SETTINGS = {
        // Search settings
        loginLabelText:"Login",
        logoutLabelText:"Logout",
        signupLabelText:"Sign Up",

        loginButtonClass:"vf-custom-login",
        logoutButtonClass:"vf-custom-logout",
        signupButtonClass:"vf-custom-signup",
        userAccountClass:"vf-custom-account"
    };

    var allWidgets = [];
    var methods = {
        init : function( options ) {
            var settings = $.extend({}, DEFAULT_SETTINGS, options || {});

            return this.each(function(){
                var el = $(this);
                var widgetObject = new LoginWidget(el, settings);
                if(typeof  Viafoura == 'undefined'){
                    allWidgets.push(widgetObject);
                }else{
                    widgetObject.AddListeners();
                }
                $(this).data("widgetObject", widgetObject);
            });

        }
    };

    $.fn.ViafouraLoginWidget  = function( method ) {
        if ( methods[method] ) {
            return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
        } else {
            $.error( 'Method ' +  method + ' does not exist on jQuery.tooltip' );
        }

    };

    var LoginWidget = function (el, settings) {
        el.delegate('.'+settings.logoutButtonClass,'click',function(){
            Viafoura.publish('user.logout');
        });

        el.delegate('.'+settings.loginButtonClass,'click',function(){
            Viafoura.events.trigger("/user/login/click");
        });

        el.delegate('.'+settings.signupButtonClass,'click',function(){
            Viafoura.events.trigger("/user/signup/click");
        });

        el.delegate('.'+settings.userAccountClass,'click',function(){
            Viafoura.events.trigger("/user/account/click",Viafoura.current.user);
        });

        this.AddListeners = function(){
            Viafoura.events.on('/user/login/success',function(){
                if(Viafoura.current.user.id == 0){  //Logout
                    console.log('logout');
                    renderLoggedOutView();
                }else{
                    console.log('login');
                    renderLoggedInView();
                }
            });
        }

        var renderLoggedOutView = function(){
            var html = '<a href="#" class="'+settings.loginButtonClass+'">'+settings.loginLabelText+'</a> | \
                    <a href="#" class="'+settings.signupButtonClass+'">'+settings.signupLabelText+'</a>';
            el.html(html);
        }

        var renderLoggedInView = function(){
            var html =  '<a href="#" class="'+settings.userAccountClass+'"> \
                   '+ Viafoura.current.user.get('name') + '\
                   </a> | <a href="#" class="'+settings.logoutButtonClass+'">'+settings.logoutLabelText+'</a>';
            el.html(html);
        }

        renderLoggedOutView();
    };

    var ViafouraDependentInit = function (callableFunction){
        if(typeof Viafoura == 'undefined'){
            setTimeout(function(){
                ViafouraDependentInit(callableFunction)
            },10);
            return;
        }
        callableFunction();
    }

    var ViafouraLoaded = function(){
        if(allWidgets.length == 0){
            return;
        }
        for (var index = 0; index < allWidgets.length; index++) {
            allWidgets[index].AddListeners();
        }
    }
    ViafouraDependentInit(ViafouraLoaded);
})( jQuery );