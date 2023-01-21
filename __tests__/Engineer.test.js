// importing Engineer class for testing
const Engineer = require("../lib/Engineer");
// checking the engineer instance
describe("Engineer Tests", () => {
  describe("Instance Test", () => {
    it("Should return the instance of engineer", () => {
      // Arrange
      const engineer = new Engineer("John", "1", "john@gmail.com", "john");
      // Assert
      expect(engineer instanceof Engineer).toEqual(true);
    });
  });
  // testing the engineer details
  describe("Engineer Name Test", () => {
    it("Should return the correct engineer name", () => {
      // Arrange
      const engineer = new Engineer("John", "1", "john@gmail.com", "john");
      // Assert
      expect(engineer.getName()).toEqual("John");
    });
  });
  describe("Engineer ID Test", () => {
    it("Should return the correct engineer ID", () => {
      // Arrange
      const engineer = new Engineer("John", "1", "john@gmail.com", "john");
      // Assert
      expect(engineer.getId()).toEqual("1");
    });
  });
  describe("Engineer Email Test", () => {
    it("Should return the correct engineer Email", () => {
      // Arrange
      const engineer = new Engineer("John", "1", "john@gmail.com", "john");
      // Assert
      expect(engineer.getEmail()).toEqual("john@gmail.com");
    });
  });
  describe("Engineer Github Test", () => {
    it("Should return the correct engineer github username", () => {
      // Arrange
      const engineer = new Engineer("John", "1", "john@gmail.com", "john");
      // Assert
      expect(engineer.getGithub()).toEqual("john");
    });
  });
  describe("Engineer Role Test", () => {
    it("Should return the correct engineer Role", () => {
      // Arrange
      const engineer = new Engineer("John", "1", "john@gmail.com", "john");
      // Assert
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});
