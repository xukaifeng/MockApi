/**
 * @description User-Service parameters
 */
export interface IGlobal {
  [key: string]: any;
}

export interface IGlobalResult {
  success: boolean;
  message: string;
  data: any[] | string;
}
