import Alpine from "alpinejs";

document.addEventListener("alpine:init", () => {
  Alpine.data("form", () => ({
    inputs: [
      { id: "deadlift", label: "Deadlift", value: "" },
      { id: "squat", label: "Squat", value: "" },
      { id: "benchpress", label: "Bench Press", value: "" },
      { id: "press", label: "Press", value: "" },
    ],
    goal: "",
    program: "",
    disableSelect: function (): boolean {
      return this.goal === "" ? ((this.program = ""), true) : false;
    },
    disableSubmit: function (): boolean {
      const inputsValid = this.inputs.every((input) => input.value !== "");
      const selectsValid = this.goal !== "" && this.program !== "";
      return inputsValid && selectsValid ? false : true;
    },
  }));
});
