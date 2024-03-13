import Alpine from "alpinejs";

const goalOptions = [
  { value: "hypertrophy", label: "Hypertrophy" },
  { value: "strength", label: "Strength" },
];

const programOptions = [{ value: "type1", label: "Type 1" }];

document.addEventListener("alpine:init", () => {
  Alpine.data("form", () => ({
    inputs: [
      { id: "deadlift", label: "Deadlift", value: "" },
      { id: "squat", label: "Squat", value: "" },
      { id: "benchpress", label: "Bench Press", value: "" },
      { id: "press", label: "Press", value: "" },
    ],
    selects: [
      { id: "goal", label: "Goal", options: goalOptions, value: "" },
      { id: "program", label: "Program", options: programOptions, value: "" },
    ],
    disableSelect: function (id: string) {
      if (id === "program" && this.selects[0].value === "") {
        const programSelect = this.selects.find(
          (select: any) => select.id === "program"
        );
        if (programSelect) programSelect.value = "";
        return true;
      } else {
        return false;
      }
    },
    disableSubmit: function () {
      const inputsValid = this.inputs.every((input) => input.value !== "");
      const selectsValid = this.selects.every((select) => select.value !== "");
      return inputsValid && selectsValid ? false : true;
    },
  }));
});
