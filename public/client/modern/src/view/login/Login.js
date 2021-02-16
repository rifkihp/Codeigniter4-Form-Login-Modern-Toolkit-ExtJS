
Ext.define('MyApp.view.login.Login',{
    extend: 'Ext.panel.Panel',
    xtype: 'login',

    requires: [
        'MyApp.view.login.LoginController',
        'MyApp.view.login.LoginModel'
    ],

    controller: 'login-login',
    viewModel: {
        type: 'login-login'
    },

    fullscreen: true,

    layout: {
        type: 'vbox',
        pack: 'center',
    },

    bodyPadding: 30,

    items: [{
        xtype: 'formpanel',
        reference: 'loginform',
        title: 'Login User',
        border: true,
        layout: {
            type: 'vbox',
            pack: 'center',
        },
        bodyPadding: 10,

        items: [{
            xtype: 'textfield',
            name: 'username',
            label: 'User ID'
        }, {
            xtype: 'passwordfield',
            name: 'password',
            label: 'Password'
        }, {
            xtype: 'button',
            text: 'Login',
            margin: '30px 0 0 0',
            listeners: {
                tap: 'onButtonLoginClick'
            }
        }]
    }]
});
