import axios from 'axios';
import type {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  CreateAxiosDefaults,
  InternalAxiosRequestConfig,
} from 'axios';
import type { ResponseResult } from './typing';
import { getBearerToken } from './helpers';
import type { AxiosRequestConfig } from 'axios';

interface RequestInterceptor {
  onFulfilled: (
    config: InternalAxiosRequestConfig<ResponseResult>,
  ) =>
    | InternalAxiosRequestConfig<ResponseResult>
    | Promise<InternalAxiosRequestConfig<ResponseResult>>;
  onRejected: (error: any) => any;
}

interface ResponseInterceptor {
  onFulfilled: (
    response: AxiosResponse<ResponseResult>,
  ) => AxiosResponse<ResponseResult> | Promise<AxiosResponse<ResponseResult>>;
  onRejected: (error: any) => any;
}

export class HttpClient {
  private instance: AxiosInstance;

  private readonly DEFAULT_CONFIG: CreateAxiosDefaults<ResponseResult> = {
    baseURL: `${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_PATH_PREFIX}`,
    timeout: 30 * 1000,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  private currentConfig: CreateAxiosDefaults<ResponseResult> = {};

  constructor(config: CreateAxiosDefaults<ResponseResult> = {}) {
    this.currentConfig = { ...this.DEFAULT_CONFIG, ...config };
    this.instance = axios.create(this.currentConfig);
    this.setupDefaultInterceptors();
  }

  private setupDefaultInterceptors() {
    // 请求拦截器
    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig<ResponseResult>) => {
        const { accessToken } = useUserStore();

        if (accessToken) {
          config.headers.Authorization = getBearerToken(accessToken);
        }
        return config;
      },
      (error: AxiosError) => Promise.reject(error),
    );

    // 响应拦截器
    this.instance.interceptors.response.use(
      (response: AxiosResponse) => {
        const data = response.data as ResponseResult;
        console.log(data, 'data');
        return response.data;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      },
    );
  }

  /**
   * 注册自定义请求拦截器
   */
  useRequestInterceptor(
    onFulfilled: RequestInterceptor['onFulfilled'],
    onRejected?: RequestInterceptor['onRejected'],
  ) {
    return this.instance.interceptors.request.use(onFulfilled, onRejected);
  }

  /**
   * 注册自定义响应拦截器
   */
  useResponseInterceptor(
    onFulfilled: ResponseInterceptor['onFulfilled'],
    onRejected?: ResponseInterceptor['onRejected'],
  ) {
    return this.instance.interceptors.response.use(onFulfilled, onRejected);
  }

  async get<T = any>(config?: AxiosRequestConfig) {
    const mergedConfig = { ...(config || {}), method: 'GET' };

    const res = await this.instance.request<T>(mergedConfig);
    return res.data;
  }

  async post<T = any>(config?: AxiosRequestConfig) {
    const mergedConfig = { ...(config || {}), method: 'POST' };
    const res = await this.instance.request<T>(mergedConfig);
    console.log(res, 'res');

    return res.data;
  }

  async put<T = any>(config?: AxiosRequestConfig) {
    const mergedConfig = { ...(config || {}), method: 'PUT' };
    const res = await this.instance.request<T>(mergedConfig);
    return res.data;
  }

  async delete<T = any>(config?: AxiosRequestConfig) {
    const mergedConfig = { ...(config || {}), method: 'DELETE' };
    const res = await this.instance.request<T>(mergedConfig);
    return res.data;
  }
}
