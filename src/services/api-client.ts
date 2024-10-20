import type { AxiosInstance, AxiosResponse } from 'axios';

import axios from 'axios';

type PostParams<U> = { url: string, data: U, headers?: object };
type PutParams<U> = { url: string, data: U, headers?: object };
type PatchParams<U> = { url: string, data: U, headers?: object };
type DeleteParams<T> = { url: string, data: T, headers?: object };
type GetParams = { url: string, parameters?: object, headers?: object };

type ApiClient = {
  readonly get: <T>(params: GetParams) => Promise<AxiosResponse<T>>;
  readonly post: <T, U>(params: PostParams<U>) => Promise<AxiosResponse<T>>;
  readonly put: <T, U>(params: PutParams<U>) => Promise<AxiosResponse<T>>;
  readonly patch: <T, U>(params: PatchParams<U>) => Promise<AxiosResponse<T>>;
  readonly delete: <T>(params: DeleteParams<T>) => Promise<AxiosResponse<T>>;
};

const apiLibInstance = axios.create({
  baseURL: '',
  headers: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
  },
});

function createAxiosApiInstance(axiosInstance: AxiosInstance): ApiClient {
  return {
    get: <T>({ url, parameters, headers }: GetParams): Promise<AxiosResponse<T>> =>
      axiosInstance.get<T>(url, {
        headers: { ...headers },
        params: { ...parameters },
      }),
    post: <T, U>({ url, data, headers }: PostParams<U>): Promise<AxiosResponse<T>> =>
      axiosInstance.post<T>(url, data, {
        headers: { ...headers },
      }),
    put: <T, U>({ url, data, headers }: PutParams<U>): Promise<AxiosResponse<T>> =>
      axiosInstance.put<T>(url, data, {
        headers: { ...headers },
      }),
    patch: <T, U>({ url, data, headers }: PatchParams<U>): Promise<AxiosResponse<T>> =>
      axiosInstance.patch<T>(url, data, {
        headers: { ...headers },
      }),

    delete: <T>({ url, headers  }: DeleteParams<T>): Promise<AxiosResponse<T>> =>
      axiosInstance.delete<T>(url, {
        headers: { ...headers },
      }),
  } as const;
}

export const apiClient = createAxiosApiInstance(apiLibInstance);