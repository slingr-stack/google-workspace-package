/****************************************************
 Listeners
 ****************************************************/

 listeners.defaultWebhookGoogleWorkspace = {
    label: 'Catch HTTP Google Workspace events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/googleworkspace',
        }
    },
    callback: function(event) {
        sys.logs.info('[googleworkspace] Received Google Workspace webhook. Processing and triggering a package event.', event);
        sys.events.triggerEvent('googleworkspace:webhook', event.data);
    }
};