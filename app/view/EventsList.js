Ext.define('HCI.view.EventsList', {
	extend: 'Ext.navigation.View',
	xtype: 'eventsList',
	
	config: {
		title: 'Events',
		iconCls: 'bookmarks',
		
		items: {
			xtype: 'list',
			itemTpl: '{title}',
			title: 'Upcoming Events',
			store: 'Events',
       		
			onItemDisclosure: true

       		
		}
	}
	

			
});
