'use strict';

provider_states_for('service_provider', 'service_consumer', './pact-test/service_consumer-service_provider.json', 'http://localhost:9001', (done) => {

    providerState('there is a valid username and password', () => {
        it('login', () => {
        });
    });
});