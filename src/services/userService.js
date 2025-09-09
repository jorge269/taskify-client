import { http } from "../api/http.js";

/**
 * Register a new user in the system.
 *
 * @async
 * @function registerUser
 * @param {Object} params - User registration data.
 * @param {string} params.firstName - The first name of the user.
 * @param {string} params.lastName - The last name of the user.
 * @param {number} params.age - The age of the user.
 * @param {string} params.email - The email of the user.
 * @param {string} params.password - The password of the user.
 * @returns {Promise<Object>} The created user object returned by the API.
 * @throws {Error} If the API responds with an error.
 */
export async function registerUser({ firstName, lastName, age, email, password }) {
  return http.post("/api/v1/users/register", { firstName, lastName, age, email, password });
}

/**
 * Login a user into the system.
 *
 * @async
 * @function loginUser
 * @param {Object} params - User login data.
 * @param {string} params.email - The email of the user.
 * @param {string} params.password - The password of the user.
 * @returns {Promise<Object>} The auth token and user info returned by the API.
 * @throws {Error} If the API responds with an error.
 */
export async function loginUser({ email, password }) {
  return http.post("/api/v1/users/login", { email, password });
}

/**
 * Send a password recovery request.
 *
 * @async
 * @function recoverPassword
 * @param {Object} params - Recovery data.
 * @param {string} params.email - The email of the user to recover.
 * @returns {Promise<Object>} Response from the API.
 * @throws {Error} If the API responds with an error.
 */
export async function recoverPassword({ email }) {
  return http.post("/api/v1/users/recover", { email });
}
