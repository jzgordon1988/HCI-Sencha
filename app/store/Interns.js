Ext.define('HCI.store.Interns', {
	extend: 'Ext.data.Store',
	xtype: 'events',
	
	config: {
		model: 'HCI.model.Intern',
		data: [
			{ iName: "James Johnson", iAge: "19" },
            { iName: "Sarah Dorthy", iAge: "19" },
            { iName: "Derek Carter", iAge: "21" },
            { iName: "Thomas Cain", iAge: "20" }
		]
	}
});
