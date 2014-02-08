Ext.define('HCI.view.Contact', {
	extend: 'Ext.form.Panel',
	xtype: 'contactform',
	
	requires: [
		'Ext.form.FieldSet',
		'Ext.field.Email'
	],
	
	config: {
		title: 'Contact',
		iconCls: 'user',
		url: 'contact.php',
		
		items: [
			{
				xtype: 'fieldset',
				title: 'Contact Us',
				instructions: 'All fields are required.',
			
				items: [
					{
						xtype: 'textfield',
						name: 'name',
						label: 'Name'
					},
					{
						xtype: 'emailfield',
						name: 'email',
						label: 'Email'
					},
					{
						xtype: 'textareafield',
						name: 'message',
						label: 'Message'
					}
				]
			},
			{
				xtype: 'button',
				text: 'Send',
				ui: 'confirm',
				handle: function() {
					this.up('contactform').submit();
				}
			}
		]
	}
});
