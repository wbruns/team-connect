const Manager = require('../lib/Manager');

describe('Manager', () => {
    describe('new Manager', () => {
        it('should create an manager object', () => {
            const manager = new Manager('John', 'jsmith1', 'jsmith1@email.com', 1);

            expect(manager.name).toBe('John');
            expect(manager.id).toBe('jsmith1');
            expect(manager.email).toBe('jsmith1@email.com');
            expect(manager.role).toBe('Manager');
        });
    });

    describe('getName', () => {
        it('should return a name', () => {
            const manager = new Manager('John', 'jsmith1', 'jsmith1@email.com', 1);

            expect(manager).toHaveProperty('name');
            expect(manager.getName()).toBe('John');
        });
    });

    describe('getId', () => {
        it('should return an id', () => {
            const manager = new Manager('John', 'jsmith1', 'jsmith1@email.com', 1);

            expect(manager).toHaveProperty('id');
            expect(manager.getId()).toBe('jsmith1');
        });
    });

    describe('getEmail', () => {
        it('should return an email', () => {
            const manager = new Manager('John', 'jsmith1', 'jsmith1@email.com', 1);

            expect(manager).toHaveProperty('email');
            expect(manager.getEmail()).toBe('jsmith1@email.com');
        });
    });

    describe('getRole', () => {
        it('should return a role', () => {
            const manager = new Manager('John', 'jsmith1', 'jsmith1@email.com', 1);

            expect(manager).toHaveProperty('role');
            expect(manager.getRole()).toBe('Employee');
        });
    });

    describe('getOfficeNum', () => {
        it('should return an office number', () => {
            const manager = new Manager('John', 'jsmith1', 'jsmith1@email.com', 1);

            expect(manager).toHaveProperty('officeNumber');
            expect(manager.getOfficeNum()).toBe(1);
        });
    });

});