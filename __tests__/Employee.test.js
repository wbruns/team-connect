const Employee = require('../lib/Employee');

describe('Employee', () => {
    describe('new Employee', () => {
        it('should create an employee object', () => {
            const employee = new Employee('John', 'jsmith1', 'jsmith1@email.com');

            expect(employee.name).toBe('John');
            expect(employee.id).toBe('jsmith1');
            expect(employee.email).toBe('jsmith1@email.com');
        });
    });

    describe('getName', () => {
        it('should return a name', () => {
            const employee = new Employee('John', 'jsmith1', 'jsmith1@email.com');

            expect(employee.getName()).toHaveProperty('name');
            expect(employee.getName()).toBe('John');
        });
    });

    describe('getId', () => {
        it('should return an id', () => {
            const employee = new Employee('John', 'jsmith1', 'jsmith1@email.com');

            expect(employee.getId()).toHaveProperty('id');
            expect(employee.getId()).toBe('jsmith1');
        });
    });

    describe('getEmail', () => {
        it('should return an email', () => {
            const employee = new Employee('John', 'jsmith1', 'jsmith1@email.com');

            expect(employee.getEmail()).toHaveProperty('email');
            expect(employee.getEmail()).toBe('jsmith1@email.com');
        });
    });

    describe('getRole', () => {
        it('should return a role', () => {
            const employee = new Employee('John', 'jsmith1', 'jsmith1@email.com');

            expect(employee.getRole()).toHaveProperty('role');
            expect(employee.getRole()).toBe('Employee');
        });
    });

});