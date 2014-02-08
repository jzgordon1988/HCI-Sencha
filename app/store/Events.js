Ext.define('HCI.store.Events', {
	extend: 'Ext.data.Store',
	xtype: 'events',
	
	config: {
		model: 'HCI.model.Event',
		data: [
			{ title: "Volunteer Hours Due", date: "January 31, 2014" },
            { title: "Career Fair", date: "February 10, 2014" },
            { title: "I.T. Seminar 1", date: "February 14, 2014" },
            { title: "I.T. Seminar 2", date: "February 15, 2014" }
		]
	}
});
