// Authentication utility functions
export const isAuthenticated = () => {
  return localStorage.getItem('resources_authenticated') === 'true';
};

export const setAuthenticated = (status) => {
  if (status) {
    localStorage.setItem('resources_authenticated', 'true');
  } else {
    localStorage.removeItem('resources_authenticated');
  }
};
