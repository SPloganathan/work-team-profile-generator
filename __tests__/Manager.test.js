// importing Manager class for testing
const Manager = require("../lib/Manager");
// checking the manager instance
describe("Manager Tests", () => {
  describe("Instance Test", () => {
    it("Should return the instance of manager", () => {
      // Arrange
      const manager = new Manager(
        "John",
        "1",
        "john@gmail.com",
        "206.334.5567"
      );
      // Assert
      expect(manager instanceof Manager).toEqual(true);
    });
  });
  // testing the manager details
  describe("Manager Name Test", () => {
    it("Should return the correct manager name", () => {
      // Arrange
      const manager = new Manager(
        "John",
        "1",
        "john@gmail.com",
        "206.334.5567"
      );
      // Assert
      expect(manager.getName()).toEqual("John");
    });
  });
  describe("Manager ID Test", () => {
    it("Should return the correct manager ID", () => {
      // Arrange
      const manager = new Manager(
        "John",
        "1",
        "john@gmail.com",
        "206.334.5567"
      );
      // Assert
      expect(manager.getId()).toEqual("1");
    });
  });
  describe("Manager Email Test", () => {
    it("Should return the correct manager Email", () => {
      // Arrange
      const manager = new Manager(
        "John",
        "1",
        "john@gmail.com",
        "206.334.5567"
      );
      // Assert
      expect(manager.getEmail()).toEqual("john@gmail.com");
    });
  });
  describe("Manager school Test", () => {
    it("Should return the correct manager School", () => {
      // Arrange
      const manager = new Manager(
        "John",
        "1",
        "john@gmail.com",
        "206.334.5567"
      );
      // Assert
      expect(manager.getOfficeNumber()).toEqual("206.334.5567");
    });
  });
  describe("Manager Role Test", () => {
    it("Should return the correct manager Role", () => {
      // Arrange
      const manager = new Manager(
        "John",
        "1",
        "john@gmail.com",
        "206.334.5567"
      );
      // Assert
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});
