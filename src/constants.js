const BACKEND_BASE_URL = import.meta.env.REACT_APP_BACKEND_BASE_URL; 

const BASE_URL = BACKEND_BASE_URL || 'http://localhost:3000';

export { BASE_URL };