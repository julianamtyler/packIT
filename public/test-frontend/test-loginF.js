describe('myTrips', function () {

    const data = [{
            tripName: 'Paris',
            tripList: {
                clothing: ['jacket', 'pants'],
                footwear: ['sneakers', 'loafers'],
                personal: ['lotion', 'hand sanitizer', 'lysol'],
                documents: ['passport', 'boarding pass'],
                gadgets: ['luggage scale', 'plug adapter', 'pocket translator'],
                miscellaneous: ['neck pillow']
            },
        },
        {
            tripName: 'Miami',
            tripList: {
                clothing: ['shorts', 'tshirts'],
                footwear: ['boots', 'flops'],
                personal: ['lotion', 'hand sanitizer', 'lysol'],
                documents: ['passport', 'boarding pass'],
                gadgets: ['luggage scale'],
                miscellaneous: ['neck pillow']
            },
        },
    ];

    let server;

    beforeEach(function () {
        server = sinon.fakeServer.create();
    });

    afterEach(function () {
        server.restore();
    });


    it('should display list of trips when clicking myTrips', function () {
        server.respondWith('GET', '/api/trips-schema', [
            200, {
                'Content-Type': 'application/json'
            },
            JSON.stringify(data)
        ]);

        $('#showtrips').trigger('click');
        server.respond();

        expect($('#tripname').text()).to.include('Paris');
    });
    it('should display list when clicking on a category', function () {
        server.respondWith('GET', '/api/trips-schema', [
            200, {
                'Content-Type': 'application/json'
            },
            JSON.stringify(data)
        ]);

        $('#showtrips').trigger('click');
        server.respond();

        expect($('#tripname').text()).to.include('sneakers');
    });

    it('should display list when clicking on a category', function () {
        server.respondWith('GET', '/api/trips-schema', [
            200, {
                'Content-Type': 'application/json'
            },
            JSON.stringify(data)
        ]);

        $('#showtrips').trigger('click');
        server.respond();

        expect($('#clothing').text()).to.equal('jacket');
    });

    it('should display list when clicking on a category', function () {
        server.respondWith('GET', '/api/trips-schema', [
            200, {
                'Content-Type': 'application/json'
            },
            JSON.stringify(data)
        ]);

        $('#showtrips').trigger('click');
        server.respond();

        expect($('#personal').text()).to.equal('lotion');
    });
    it('should display list when clicking on a category', function () {
        server.respondWith('GET', '/api/trips-schema', [
            200, {
                'Content-Type': 'application/json'
            },
            JSON.stringify(data)
        ]);

        $('#showtrips').trigger('click');
        server.respond();

        expect($('#documents').text()).to.equal('passport');
    });

    it('should display list when clicking on a category', function () {
        server.respondWith('GET', '/api/trips-schema', [
            200, {
                'Content-Type': 'application/json'
            },
            JSON.stringify(data)
        ]);

        $('#showtrips').trigger('click');
        server.respond();

        expect($('#gadgets').text()).to.equal('luggage scale');
    });
    it('should display list when clicking on a category', function () {
        server.respondWith('GET', '/api/trips-schema', [
            200, {
                'Content-Type': 'application/json'
            },
            JSON.stringify(data)
        ]);

        $('#showtrips').trigger('click');
        server.respond();

        expect($('#miscellaneous').text()).to.equal('neck pillow');
    });
});