Ext.define('HCI.view.InternsList', {
	extend: 'Ext.navigation.View',
	xtype: 'internsList',
	
	config: {
		title: 'Interns',
		iconCls: 'bookmarks',
		
		items: {
			xtype: 'list',
			itemTpl: '{iName}',
			title: 'Interns',
			store: 'Interns',
       		
			onItemDisclosure: true

       		
		}
	}
	

			
});
