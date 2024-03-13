import Alpine from "alpinejs";

const goalOptions = [
  { value: "strength", label: "Strength" },
  { value: "hypertrophy", label: "Hypertrophy" },
  { value: "powerbuilding", label: "Power Building" },
  { value: "conditioning", label: "Conditioning" },
];

const frequencyOptions = [
  { value: "2", label: "2xWeek" },
  { value: "3", label: "3xWeek" },
  { value: "4", label: "4xWeek" },
  { value: "5", label: "5xWeek" },
];

const typeOptions = [
  { value: "type1", label: "Type 1" },
  { value: "type2", label: "Type 2" },
  { value: "type3", label: "Type 3" },
  { value: "type4", label: "Type 4" },
];

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
      {
        id: "frequency",
        label: "Frequency",
        options: frequencyOptions,
        value: "",
      },
      { id: "type", label: "Type", options: typeOptions, value: "" },
    ],
    formValues: function () {
      const inputs = this.inputs.reduce(
        (acc, input) => ({ ...acc, [input.label]: input.value }),
        {}
      );
      const selects = this.selects.reduce(
        (acc, select) => ({ ...acc, [select.label]: select.value }),
        {}
      );
      return JSON.stringify({ ...inputs, ...selects });
    },
  }));
});
