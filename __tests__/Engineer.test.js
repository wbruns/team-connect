const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('new Engineer', () => {
        it('should create an engineer object', () => {
            const engineer = new Engineer('John', 'jsmith1', 'jsmith1@email.com', 'johnsmith');

            expect(engineer.name).toBe('John');
            expect(engineer.id).toBe('jsmith1');
            expect(engineer.email).toBe('jsmith1@email.com');
            expect(engineer.role).toBe('Engineer');
            expect(engineer.github).toBe('johnsmith');
        });
    });

    describe('getName', () => {
        it('should return a name', () => {
            const engineer = new Engineer('John', 'jsmith1', 'jsmith1@email.com', 'johnsmith');

            expect(engineer).toHaveProperty('name');
            expect(engineer.getName()).toBe('John');
        });
    });

    describe('getId', () => {
        it('should return an id', () => {
            const engineer = new Engineer('John', 'jsmith1', 'jsmith1@email.com', 'johnsmith');

            expect(engineer).toHaveProperty('id');
            expect(engineer.getId()).toBe('jsmith1');
        });
    });

    describe('getEmail', () => {
        it('should return an email', () => {
            const engineer = new Engineer('John', 'jsmith1', 'jsmith1@email.com', 'johnsmith');

            expect(engineer).toHaveProperty('email');
            expect(engineer.getEmail()).toBe('jsmith1@email.com');
        });
    });

    describe('getRole', () => {
        it('should return a role', () => {
            const engineer = new Engineer('John', 'jsmith1', 'jsmith1@email.com', 'johnsmith');

            expect(engineer).toHaveProperty('role');
            expect(engineer.getRole()).toBe('Engineer');
        });
    });

    describe('getGithub', () => {
        it('should return a github username', () => {
            const engineer = new Engineer('John', 'jsmith1', 'jsmith1@email.com', 'johnsmith');

            expect(engineer).toHaveProperty('github');
            expect(engineer.getGithub()).toBe('johnsmith');
        });
    });

});