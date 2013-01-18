viafoura-login-widget
=====================

Easy Custom Login Link Integration of Viafoura

Key Features
============
* Easy to integrate with any Application working with Viafoura
* Next to zero configuration!!


Current Active Version
======================
v 0.1 Released!


Installation
------------

### Prequisites

 * [jQuery](http://www.jquery.com) - This is required by Viafoura Service it self.


### Required files

Copy `ViafouraLoginWidget.js` to your javascript folder.

Usage
-----

If you like demos more than a boring documentation see the `example.html` file and play with it.

The plugin can be called with jQuery in different ways.

### Standard call with default theme and settings:

    $('.myElement').ViafouraLoginWidget();

#### Html content and markup

any Html container tags(`<div>`,`<span>`, `<td>` etc. can be used.

    <div class="myElement"></div>

You can also provide the text in javascript for all link elements:

    $('.myElement').ViafouraLoginWidget({
                                           loginLabelText:"Login Link",
                                           logoutLabelText:"Logout Link",
                                           signupLabelText:"Sign Up Link"
                                        });

You can change the default value for all other options as well in this way.


### Options

 * loginLabelText: Text To show as Login Link.
 * logoutLabelText: Text To show as logout link.
 * signupLabelText: Text To show as sign up lnk.
 * loginButtonClass: Class For login link.
 * logoutButtonClass: Class For logout link.
 * signupButtonClass: Class For signup link.
 * userAccountClass: Class For User name label.


Feedback
--------

Please send me an [email](mailto:roni@xiidea.net) or a tweet ‏@XiiDEA with any feedback you have.

This plugin is my first attempt at a custom widget for Viafoura Integrated System, so any ideas for improvement are welcome.


Contributing
------------

Contribute!