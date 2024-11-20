import axios from "axios";

const REST_API_BASE_URL = (cnpj: string) =>
  `http://localhost:8080/employees/${cnpj}`;

export interface Employee {
  cpf: string;
  name: string;
  salary: number;
  position: string;
  cnpj: string;
  supervisorCpf: string;
}

export const createEmployee = (employee: Employee) =>
  axios
    //.post(`${REST_API_BASE_URL}/${employee.cnpj}/add`, employee)
    .post(`${REST_API_BASE_URL(employee.cnpj)}/add`, employee)
    .catch((error) =>
      console.error(
        "Error creating employee:",
        error.response?.data || error.message
      )
    );

export const getEmployees = (cnpj: string) =>
  axios
    .get(REST_API_BASE_URL(cnpj))
    //.get(`${REST_API_BASE_URL}/${cnpj}`)
    .catch((error) =>
      console.error(
        "Error fetching employees:",
        error.response?.data || error.message
      )
    );

export const getEmployee = (cpf: string) =>
  axios
    .get(REST_API_BASE_URL(cpf))
    //.get(`${REST_API_BASE_URL}/${cpf}`)
    .catch((error) =>
      console.error(
        "Error fetching employee:",
        error.response?.data || error.message
      )
    );

export const deleteEmployee = (cnpj: string, cpf: string) =>
//export const deleteEmployee = (cpf: string) =>
  axios
    //.delete(REST_API_BASE_URL(cpf)) //NAO USAR ` $ {}
    .delete(`${REST_API_BASE_URL(cnpj)}/${cpf}`) // Usa o CNPJ na base
    //.delete(`${REST_API_BASE_URL}/${cpf}`)
    .catch((error) =>
      console.error(
            "Error deleting employee:",
            error.response?.data || error.message
          )
        );

    export const updateEmployee = (cnpj: string, cpf: string, updatedData: Partial<Employee>) =>
      axios
        .put(`${REST_API_BASE_URL}/${cnpj}/${cpf}`, updatedData) // Inclui CNPJ e CPF na URL
        .catch((error) =>
          console.error(
            "Error updating employee:",
            error.response?.data || error.message
          )
        );

// export const updateEmployee = (
//   cpf: string
//   //updatedData: { goalDate: string; carQuantity: number }
// ) =>
//   axios
//     .put(`${REST_API_BASE_URL}/${cpf}`)
//     //.put(`${REST_API_BASE_URL}/${cpf}`, updatedData)
//     .catch((error) =>
//       console.error(
//         "Error updating eemploye:",
//         error.response?.data || error.message
//       )
//     );

// export const deleteEmployee = (cpf: string) =>
//   axios
//     .delete(`${REST_API_BASE_URL}/${cpf}`)
//     .catch((error) =>
//       console.error(
//         "Error deleting goal:",
//         error.response?.data || error.message
//       )
//     );

