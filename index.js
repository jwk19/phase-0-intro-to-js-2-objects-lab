// Write your solution in this file!
// Initializing an employee object with literal syntax
let employee = {
    name: "John Doe",
    streetAddress: "1234 Elm Street"
  };
  
  // Function to update an employee object non-destructively
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Return a new object with the updated key-value pair using the spread operator
    return {
      ...employee,
      [key]: value
    };
  }
  
  // Function to update an employee object destructively
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    // Update the employee object directly and return it
    employee[key] = value;
    return employee;
  }
  
  // Function to delete a key from an employee object non-destructively
  function deleteFromEmployeeByKey(employee, key) {
    // Create a new object with the spread operator to copy all properties
    let newEmployee = { ...employee };
    // Delete the specified key from the new object
    delete newEmployee[key];
    // Return the new object without the deleted key
    return newEmployee;
  }
  
  // Function to delete a key from an employee object destructively
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // Delete the specified key directly from the original object
    delete employee[key];
    // Return the mutated original object
    return employee;
  }
  
  // Testing the functions
  console.log("Initial employee:", employee);
  
  // Non-destructive update
  let updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Smith");
  console.log("Updated employee (non-destructive):", updatedEmployee);
  console.log("Original employee after non-destructive update:", employee);
  
  // Destructive update
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "5678 Oak Street");
  console.log("Updated employee (destructive):", employee);
  
  // Non-destructive delete
  let employeeAfterDelete = deleteFromEmployeeByKey(employee, "name");
  console.log("Employee after non-destructive delete:", employeeAfterDelete);
  console.log("Original employee after non-destructive delete:", employee);
  
  // Destructive delete
  destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee after destructive delete:", employee);
  