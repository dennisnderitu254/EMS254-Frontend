class ApiService {
  constructor() {
    this.baseUrl = 'https://18bc-41-206-44-182.ngrok-free.app/api/v1/views';
  }

  async sendAuthorizedRequest(endpoint, method = 'GET', data = null) {
    const token = localStorage.getItem('access-token');

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    };

    const requestOptions = {
      method: method,
      headers: headers,
      body: data ? JSON.stringify(data) : null,
    };


    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`, requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw error;
    }
  };

  async sendUnAuthorizedRequest(endpoint, method = 'GET', data = null) {
    const headers = {
      'Content-Type': 'application/json',
    };

    const requestOptions = {
      method: method,
      headers: headers,
      body: data ? JSON.stringify(data) : null,
    };


    try {
      const response = await fetch(`${this.baseUrl}/${endpoint}`, requestOptions);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      return responseData;
    } catch (error) {
      throw error;
    }
    }
}

export default new ApiService();
