import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
  AxiosResponse
} from 'axios';
import { ErrorResponse, StatusCode } from 'src/types';

const headers: Readonly<Record<string, string | boolean>> = {
  Accept: 'application/json',
  'Content-Type': 'application/json; charset=utf-8',
  'Access-Control-Allow-Credentials': true,
  'X-Requested-With': 'XMLHttpRequest'
};

// inject the JWT token through an interceptor
// get the `accessToken` from the localStorage
const injectToken = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
  try {
    if (typeof localStorage === 'undefined') {
      return config;
    }

    const token = localStorage.getItem('accessToken');

    if (token != null && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    throw new Error(error as string);
  }
};

class HttpClient {
  private instance: AxiosInstance | null = null;

  public config: AxiosRequestConfig;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  constructor(public baseUrl: string, config?: AxiosRequestConfig) {
    this.baseUrl = baseUrl;
    this.config = config || {};
  }

  initHttp() {
    const http = axios.create({
      baseURL: this.baseUrl,
      headers,
      withCredentials: true,
      ...this.config
    });

    http.interceptors.request.use(injectToken, (error) => Promise.reject(error));

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        return this.handleError(error);
      }
    );

    this.instance = http;
    return http;
  }

  request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(url: string, config?: AxiosRequestConfig): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }

  private handleError(error: ErrorResponse) {
    const { status } = error;

    switch (status) {
      case StatusCode.InternalServerError: {
        // Handle InternalServerError
        break;
      }
      case StatusCode.Forbidden: {
        // Handle Forbidden
        break;
      }
      case StatusCode.Unauthorized: {
        // Handle Unauthorized
        break;
      }
      case StatusCode.TooManyRequests: {
        // Handle TooManyRequests
        break;
      }
    }

    return Promise.reject(error);
  }
}

export default HttpClient;
