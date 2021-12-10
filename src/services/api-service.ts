import { API_URL } from "@env";
import { ApiEndpoints } from "./../enums/api-endpoints.enum";

interface IApiRequestOptions {
    method: "GET" | "POST" | "PUT" | "DELETE";
    queryParams?: {
        [index: string]: string;
    };
}

export default class ApiService {
    apiGet<T>(endpoint: ApiEndpoints, queryParams = {}) {
        return this._apiRequest<T>(endpoint, {
            method: "GET",
            queryParams,
        });
    }

    _apiRequest<T>(endpoint: ApiEndpoints, { method, queryParams }: IApiRequestOptions): Promise<T> {
        const formatedQueryParams =
            queryParams && Object.keys(queryParams).length
                ? "/?" + new URLSearchParams(Object.entries(queryParams).filter(([key, value]) => !!value))
                : "";

        return new Promise((resolve, reject) => {
            fetch(API_URL + endpoint + formatedQueryParams, {
                method: method ?? "GET",
            })
                .then((response) => response.json())
                .then((response) => resolve(response))
                .catch((reason) => reject(reason));
        });
    }
}
