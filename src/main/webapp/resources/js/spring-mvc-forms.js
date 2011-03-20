Ext.onReady(function(){
	Ext.QuickTips.init();
	
	var mf = new Ext.FormPanel({
			url: addUrl,
			renderTo: Ext.getBody(),
			frame: true,
			cls: 'my-form-class',
			width: 350,
			items: [{
					xtype: 'textfield',
					fieldLabel: 'Name',
					name: 'name'
			},{
					xtype: 'textfield',
					fieldLabel: 'Phone No.',
					name: 'phone'
			},{
					xtype: 'textfield',
					fieldLabel: 'EMail',
					name: 'email'
			}],
			buttons: [{
					id: 'mf.btn.load',
					text: 'Load',
					handler: function() {
						fnLoadForm(mf);
					}
				},{
					id: 'mf.btn.add',
					text: 'Add',
					disabled: true,
					handler: function() {
						fnUpdateForm(mf);
					}
			},{
					id: 'mf.btn.reset',
					text: 'Reset',
					disabled: true,
					handler: function() {
						fnResetForm(mf);
					}
			}]
	});

});

function fnLoadForm(theForm) 
{
	//for the purpose of this tutorial, load 1 record.
	theForm.getForm().load({
		url: loadUrl,
		headers: {Accept: 'application/json, text/javascript, */*; q=0.01'},
        waitMsg: 'loading...',
		params : {
			id: 1
		},
		success: function(form, action) {
			Ext.getCmp('mf.btn.add').setDisabled(false);		
			Ext.getCmp('mf.btn.reset').setDisabled(false);		
			Ext.getCmp('mf.btn.load').setDisabled(true);		
		},
		failure: function(form, action) {
			Ext.Msg.alert('Warning', 'Error Unable to Load Form Data.'); //action.result.errorMessage
		}
	});
} //end fnLoadForm
function fnUpdateForm(theForm)
{
	theForm.getForm().submit({
		success: function(form, action) {
			Ext.Msg.alert('Success', 'Data is stored in session.');
			form.reset();
		},
		failure: function(form, action) {
			Ext.Msg.alert('Warning', action.result.errorMessage); 
		}
	});
} //end fnUpdateForm
function fnResetForm(theForm)
{
	theForm.getForm().reset();
	Ext.getCmp('mf.btn.add').setDisabled(true);		
	Ext.getCmp('mf.btn.reset').setDisabled(true);		
} //end fnResetForm