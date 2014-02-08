Ext.define('HCI.view.EventContainer', {
	extend: 'Ext.navigation.View',
	xtype: 'eventContainer',
	
	requires: [
		'HCI.view.EventsList',
		'HCI.view.EventDetail'
	],
	
	config: {
		title: 'Events',
		iconCls: 'bookmarks',
		
		items: [		
    		{
     			xtype: 'eventsList'
    		}
		]
		
	}
	

			
});
