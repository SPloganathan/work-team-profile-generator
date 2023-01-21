// importing Employee class for testing
const Employee = require("../lib/Employee");
// checking the employee instance
describe("Employee Tests", () => {
  describe("Instance Test", () => {
    it("Should return the instance of employee", () => {
      // Arrange
      const employee = new Employee("John", "1", "john@gmail.com");
      // Assert
      expect(employee instanceof Employee).toEqual(true);
    });
  });
  // testing the employee details
  describe("Employee Name Test", () => {
    it("Should return the correct employee name", () => {
      // Arrange
      const employee = new Employee("John", "1", "john@gmail.com");
      // Assert
      expect(employee.getName()).toEqual("John");
    });
  });
  describe("Employee ID Test", () => {
    it("Should return the correct employee ID", () => {
      // Arrange
      const employee = new Employee("John", "1", "john@gmail.com");
      // Assert
      expect(employee.getId()).toEqual("1");
    });
  });
  describe("Employee Email Test", () => {
    it("Should return the correct employee Email", () => {
      // Arrange
      const employee = new Employee("John", "1", "john@gmail.com");
      // Assert
      expect(employee.getEmail()).toEqual("john@gmail.com");
    });
  });
  describe("Employee Role Test", () => {
    it("Should return the correct employee Role", () => {
      // Arrange
      const employee = new Employee("John", "1", "john@gmail.com");
      // Assert
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});
