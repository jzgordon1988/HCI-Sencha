Ext.define('HCI.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'mainpanel',
    requires: [
    	'Ext.TitleBar',
    	'HCI.view.EventsList',
    	'HCI.view.EventDetails'
    	],
    
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
            	xtype: 'homepanel'
            },
            {
            	xtype: 'eventsList'
            },
            {
            	xtype: 'internsList'
            },
            {
            	xtype: 'projectsList'
            },
            {
            	xtype: 'contactform'
            }
        ]
    }
});
