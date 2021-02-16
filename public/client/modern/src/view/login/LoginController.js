Ext.define('MyApp.view.login.LoginController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.login-login',

    onButtonLoginClick: function() {
        var me = this;
        var form = this.lookup('loginform');
        form.submit({
            url: '/auth',
            success: function(form, action) {
                Ext.create({
                    xtype: 'app-main'
                });

                me.getView().destroy();
            },
            failure: function(form, action) {

                if(action.responseText!=null) {
                    var data = JSON.parse(action.responseText);
                    Ext.Msg.alert('Error', data.data.message);
                } else {
                    Ext.Msg.alert('Error', action.statusText);
                }
            }
        });

    }

});
