Ext.define('HCI.view.Home', {
	extend: 'Ext.Panel',
	xtype: 'homepanel',
	
	config: {
		title: 'Home',
		iconCls: 'home',
		cls: 'home',
		scrollable: true,
		styleHtmlContent: true,
		
		html: [
        	'<img src="Images/HCI-Image.gif" alt="Howard Consulting Logo" height="290px" width="290px" />',
            '<h1>Welcome to Howard Consulting and Investments</h1>',
            "<p>Welcome to the Howard Consulting and Investments Homepage. ",
            "Click any of the tabs below to navigate to other pages.</p>",
            '<h2>Sencha Touch</h2>'
        ].join("")

	}
});
