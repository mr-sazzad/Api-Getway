# university-management-api-gateway-starter

` 💡 You Have To Add Validation On Main Service Not Into Getway Service If You Set Validation Into Getway It's Does Not Work Properly`

```css
  🧠🧠🧠 আমাদের যদি সকল সার্ভিসের end points  গুলো এক না হয়,
  এবং আমদের কয়েকটি service এ ডাটা পাঠাবার প্রয়োজন হয়
 তাহলে যে সার্ভিসে ডাটা প্রয়োজন হবে সেই সার্ভিসে আমরা একটা main file বানাবো
 এবং আমরা main service থেকে যে নামে Publish করেছি,
 সেই নামে ই প্রয়োজনিয় অন্য file এ  subscribe করে থাকবো এবং ডাটা Get করবো 
 ```

```css
1. httpService
2. getSingleData
3. updateSingleData
4. zod enumType
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

```ts
// 🧠 zod validation Enum type

    title: z.enum([...academicSemesterTitles] as [string, ...string[]], {
      required_error: "Title is required"
    })
```
