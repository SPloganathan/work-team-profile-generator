// importing Intern class for testing
const Intern = require("../lib/Intern");
// checking the intern instance
describe("Intern Tests", () => {
  describe("Instance Test", () => {
    it("Should return the instance of intern", () => {
      // Arrange
      const intern = new Intern(
        "John",
        "1",
        "john@gmail.com",
        "washington university"
      );
      // Assert
      expect(intern instanceof Intern).toEqual(true);
    });
  });
  // testing the intern details
  describe("Intern Name Test", () => {
    it("Should return the correct intern name", () => {
      // Arrange
      const intern = new Intern(
        "John",
        "1",
        "john@gmail.com",
        "washington university"
      );
      // Assert
      expect(intern.getName()).toEqual("John");
    });
  });
  describe("Intern ID Test", () => {
    it("Should return the correct intern ID", () => {
      // Arrange
      const intern = new Intern(
        "John",
        "1",
        "john@gmail.com",
        "washington university"
      );
      // Assert
      expect(intern.getId()).toEqual("1");
    });
  });
  describe("Intern Email Test", () => {
    it("Should return the correct intern Email", () => {
      // Arrange
      const intern = new Intern(
        "John",
        "1",
        "john@gmail.com",
        "washington university"
      );
      // Assert
      expect(intern.getEmail()).toEqual("john@gmail.com");
    });
  });
  describe("Intern school Test", () => {
    it("Should return the correct intern School", () => {
      // Arrange
      const intern = new Intern(
        "John",
        "1",
        "john@gmail.com",
        "washington university"
      );
      // Assert
      expect(intern.getSchool()).toEqual("washington university");
    });
  });
  describe("Intern Role Test", () => {
    it("Should return the correct intern Role", () => {
      // Arrange
      const intern = new Intern(
        "John",
        "1",
        "john@gmail.com",
        "washington university"
      );
      // Assert
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
