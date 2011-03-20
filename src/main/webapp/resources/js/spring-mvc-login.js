Ext.onReady(function(){
	Ext.QuickTips.init();
	
	var loginForm = new Ext.FormPanel({
			url: defLoginUrl,
			title: 'Login',
			renderTo: Ext.getBody(),
			frame: true,
			cls: 'my-form-class',
			width: 350,
			items: [{
					xtype: 'textfield',
					fieldLabel: 'Login',
					name: 'j_username'
			},{
					xtype: 'textfield',
					inputType: 'password',
					fieldLabel: 'Password',
					name: 'j_password'
			}, {
				xtype: 'checkbox',
				fieldLabel: 'Remember Me?',
				name: '_spring_security_remember_me',
				checked: false
			}],
			buttons: [{
					id: 'lf.btn.login',
					text: 'Login',
					handler: function() {
						fnLoginForm(loginForm);
					}
				},{
					id: 'lf.btn.reset',
					text: 'Reset',
					handler: function() {
						fnResetForm(loginForm);
					}
			}]
	});

});

function fnLoginForm(theForm) 
{
	theForm.getForm().submit({
		success: function(form, action) {
			Ext.Msg.alert('Success', 'Login Successful!', function(btn, text) {
				if (btn == 'ok') {
					window.location = homeUrl;
				}
			});
		},
		failure: function(form, action) {
			Ext.Msg.alert('Warning', action.result.errorMessage); 
		}
	});
} //end fnLoginForm

function fnResetForm(theForm)
{
	theForm.getForm().reset();
} //end fnResetForm