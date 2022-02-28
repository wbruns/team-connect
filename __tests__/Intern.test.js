const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('new Intern', () => {
        it('should create an intern object', () => {
            const intern = new Intern('John', 'jsmith1', 'jsmith1@email.com', 'KU');

            expect(intern.name).toBe('John');
            expect(intern.id).toBe('jsmith1');
            expect(intern.email).toBe('jsmith1@email.com');
            expect(intern.role).toBe('Intern');
            expect(intern.school).toBe('KU');
        });
    });

    describe('getName', () => {
        it('should return a name', () => {
            const intern = new Intern('John', 'jsmith1', 'jsmith1@email.com', 'KU');

            expect(intern).toHaveProperty('name');
            expect(intern.getName()).toBe('John');
        });
    });

    describe('getId', () => {
        it('should return an id', () => {
            const intern = new Intern('John', 'jsmith1', 'jsmith1@email.com', 'KU');

            expect(intern).toHaveProperty('id');
            expect(intern.getId()).toBe('jsmith1');
        });
    });

    describe('getEmail', () => {
        it('should return an email', () => {
            const intern = new Intern('John', 'jsmith1', 'jsmith1@email.com', 'KU');

            expect(intern).toHaveProperty('email');
            expect(intern.getEmail()).toBe('jsmith1@email.com');
        });
    });

    describe('getRole', () => {
        it('should return a role', () => {
            const intern = new Intern('John', 'jsmith1', 'jsmith1@email.com', 'KU');

            expect(intern).toHaveProperty('role');
            expect(intern.getRole()).toBe('Intern');
        });
    });

    describe('getSchool', () => {
        it('should return a school', () => {
            const intern = new Intern('John', 'jsmith1', 'jsmith1@email.com', 'KU');

            expect(intern).toHaveProperty('school');
            expect(intern.getSchool()).toBe('KU');
        });
    });

});