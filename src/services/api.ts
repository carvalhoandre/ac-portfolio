import { IResponseData } from '@/@types/services';
import axios, {
	AxiosResponse,
	AxiosError,
	InternalAxiosRequestConfig,
} from 'axios';

const API = axios.create({
	baseURL:
		import.meta.env.VITE_API_ENVIROMENT === 'dev'
			? import.meta.env.VITE_API_URL_LOCAL
			: import.meta.env.VITE_API_URL_PROD,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json, text/plain, */*',
		'X-API-Key': import.meta.env.VITE_API_KEY,
	},
	withCredentials: true,
});

const parseRequest = (
	config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
	return config;
};

const transformResponse = <Data>(
	response: AxiosResponse
): IResponseData<Data> => {
	const { ...data } = response.data;

	return {
		success: true,
		message: data.message || 'Operação realizada com sucesso',
		data: data.data as Data,
		code: data.code || 200,
		firstValidation: data.validations?.[0] || data.validation?.[0] || null,
	};
};

const parseResponse = (response: AxiosResponse): AxiosResponse => {
	response.data = transformResponse(response);
	return response;
};

const parseResponseError = (error: AxiosError): Promise<AxiosResponse> => {
	const response = error.response;

	const data = response?.data as {
		message?: string;
		data?: any;
		code?: number | string;
		validations?: any[];
		validation?: any[];
	};

	const defaultErrorMessage = 'Erro ao realizar a ação';

	const errorResponse: AxiosResponse = {
		status: response?.status ?? 500,
		statusText: response?.statusText ?? 'Internal Server Error',
		headers: response?.headers ?? {},
		config: response?.config ?? ({} as InternalAxiosRequestConfig),
		request: response?.request,
		data: {
			success: false,
			isCanceled: axios.isCancel(error),
			message: data?.message || defaultErrorMessage,
			data: data?.data,
			code: data?.code,
			firstValidation: data?.validations?.[0] || data?.validation?.[0],
		},
	};

	return Promise.resolve(errorResponse);
};

API.interceptors.request.use(parseRequest);
API.interceptors.response.use(parseResponse, parseResponseError);

export default API;
