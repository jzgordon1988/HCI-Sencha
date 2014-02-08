Ext.define('HCI.store.Projects', {
	extend: 'Ext.data.Store',
	xtype: 'events',
	
	config: {
		model: 'HCI.model.Project',
		data: [
			{ pTitle: "Introduction to Html", pDue: "January 20, 2014" },
            { pTitle: "Introduction to JavaScript", pDue: "February 5, 2014" },
            { pTitle: "Introduction to JQuery", pDue: "February 10, 2014" },
            { pTitle: "Introduction to Sencha Touch", pDue: "February 15, 2014" }
		]
	}
});
