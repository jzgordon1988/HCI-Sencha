Ext.define('HCI.controller.Main', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
            main: 'mainpanel'
        },
        control: {
            'eventsList': {
            	disclose: function() { console.log('disclose details')}
            }
        }
    },
    
    showDetail : function(list, record) {
        this.getMain().push({
            xtype: 'eventDetails'
        });
    }
});
