Ext.define('HCI.view.ProjectsList', {
	extend: 'Ext.navigation.View',
	xtype: 'projectsList',
	
	config: {
		title: 'Projects',
		iconCls: 'bookmarks',
		
		items: {
			xtype: 'list',
			itemTpl: '{pTitle}',
			title: 'Upcoming Projects',
			store: 'Projects',
       		
			onItemDisclosure: true

       		
		}
	}
	

			
});
