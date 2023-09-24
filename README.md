# university-management-api-gateway-starter


```js
// 🧠 this is the httpService file

import axios, { AxiosInstance } from "axios";
import config from "../config";

const HttpService = (baseUrl: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseUrl,
    timeout: 10000,
    headers: {
      "Content-Type": "application/json"
    }
  });

  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return instance;
};

const AuthService = HttpService(config.authServiceUrl);

const CoreService = HttpService(config.coreServiceUrl);

export { AuthService, CoreService, HttpService };
```

### Get Single Data From Database Code

```js
// 🧠 get single Academic Semester from postgreSql database
const getSingleFromDatabase = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await CoreService.get(`/academic-semesters/${id}`, {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};
```
