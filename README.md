# university-management-api-gateway-starter

```css
1. httpService
2. getSingleData
3. updateSingleData
```


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

### Get Single Data From Database

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

### Update Single Data Into Database 

```ts
// 🧠 Updata Single Academic Semester Into Database Code

const updateSingleIntoDatabase = async (req: Request): Promise<IGenericResponse> => {
  const id = req.params.id;
  const response: IGenericResponse = await CoreService.patch(  //💡spacify the method 
    `/academic-semesters/${id}`, 
    req.body,  //💡data uou want to update 
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

```
