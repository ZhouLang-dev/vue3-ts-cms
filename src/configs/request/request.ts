import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElLoading } from 'element-plus/lib/components/loading/index'

// 定义拦截器的四个函数
interface HYRequestInterceptors {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse
  responseInterceptorCatch?: (error: any) => any
}
// 扩展AxiosRequestConfig接口
interface HYRequestConfig extends AxiosRequestConfig {
  instanceptors?: HYRequestInterceptors
}

class HYRequest {
  instance: AxiosInstance
  instanceptors?: HYRequestInterceptors
  loading: any
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.instanceptors = config.instanceptors
    // 单个实例拦截器
    this.instance.interceptors.request.use(
      this.instanceptors?.requestInterceptor,
      this.instanceptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.instanceptors?.responseInterceptor,
      this.instanceptors?.responseInterceptorCatch
    )

    // 所有实例拦截器
    this.instance.interceptors.request.use(
      (config) => {
        this.loading = ElLoading.service({
          text: '数据加载中...',
          lock: true
        })
        return config
      },
      (error) => {
        return error
      }
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        return res.data
      },
      (error) => {
        this.loading?.close()
        return error
      }
    )
  }
  request<T>(config: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          resolve(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }
  get<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }
  post<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T>(config: AxiosRequestConfig): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
}

export default HYRequest
