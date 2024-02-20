## Process-front_end
- **Create vite react typrescript project**  
  ```npm create vite@latest```  
  Choose - client -> react -> typescript

- ```cd client```  
  ```npm install```
- **extension**
  - *vscode*
    - ES7 React/Redux/GraphQL/React-Native snippets
    - ESlint
    - Prettier ESlint
    - vscode-styled-components
    - Turbo Console Log - ctrl + option + L (Mac)
  - *chrome*
    - Redux Dev tool
    - Pesticide for chrome
- **install dependencies** -
  ```npm i react-redux @reduxjs/toolkit react-router-dom @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-data-grid```
- *install typescript*
  ```npm i -D @types/react-dom```

- **font setting** for google font - *Inter*
  ~~~ css
  //index.css
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  ~~~

- **To check error**
  ```npm i -D eslint```
  ~~~ json
  //create file in src/: .eslintrc.json for
  {
      "extends": "react-app"
  }
  ~~~

- ~~~ javascript
  //create file in src/: .env.local
  
  VITE_BASE_URL=http://localhost:1337
  ~~~

- Setting for typescript -
  ~~~ json
  //tsconfig.json
  //add ...
  "types": ["vite/client"] //in compilerOptions
  ~~~

- Setting for using - ```import path start to @/ s```
  ~~~ ts
  //vite.config.ts
  //add in defineConfig ...
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }]
  }  

  //tsconfig.json
  "paths": {
    "@/*": ["./src/*"]
  },
  ~~~

- Material UI
  ~~~ ts
  //create theme.ts file
  //vscode extension: use "tailwind shades" to create fast
  //select #cccc + cmd k + cmd g
  ~~~
  ~~~ ts
  // create expanded-theme.ts file
  声明模块：
  declare module "@mui/material/styles/createPalette" 这行代码声明了一个模块，用于扩展 @mui/material/styles/createPalette 模块的类型定义。
  扩展接口：
  interface PaletteColor { [key: number]: string; } 这行代码扩展了 PaletteColor 接口，使其支持使用数字索引访问颜色值。
  interface Palette { tertiary: PaletteColor; } 这行代码扩展了 Palette 接口，添加了一个新的名为 tertiary 的属性，该属性的类型为 PaletteColor。
- 如果我在folder裡面放的是index.jsx，我在import時可以省略最後 "/index.jsx"
- **grid**
  - [cheat sheet](https://grid.malven.co/)
  - [about grid](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)

- *createSlice 和 configureStore 用於管理應用程式的內部狀態。* & *createApi 用於管理與 API 請求相關的狀態。*
  | 功能 | createSlice 和 configureStore | createApi |
  |:--------|:-------:|--------:|
  | 目的 | 管理通用Redux狀態   | 管理API請求狀態   |
  | 資料來源 | 內部狀態   | API請求   |
  | 特性   | 簡潔、自動生成 action creators   | 自動管理請求狀態、資料快取、取消請求、immutability   |
  | 整合   | 與 Redux Toolkit 功能整合   | 與React Query 整合 |

- 有關vite .env.local file設定 -> 這部分一直無法成功，以後回頭補  
  [docs](https://vitejs.dev/guide/env-and-mode.html#env-files)

- **Rechart** - [Link](https://recharts.org/en-US/)  
  ```npm i recharts```


- something about TS
    好的，以下是我的整理：
    - **TypeScript 中的 Array 型別**  
    在 TypeScript 中，`Array` 型別可以用來表示一組有序的值。陣列中的元素可以是任何型別。
    - **Array 型別的大小寫**  
    `Array` 型別可以是小寫也可以是大寫。
    - **小寫**
        * 這是 TypeScript 的慣例。
        * 將 `Array` 視為一個基本型別。
    - **大寫**
        * 將 `Array` 視為一個泛型型別，其中泛型參數是 `any`。
        * 意味著 `Array` 型別可以包含任何型別的值。
    - **示例**
      以下是一些使用 `Array` 型別的示例：
      ~~~ ts
      // 小寫
      let numbers: number[] = [1, 2, 3];
      // 大寫
      let numbers: Array<number> = [1, 2, 3];
      // 使用泛型
      let numbers: T[] = [1, 2, 3];
      interface T {
        id: string;
        _id: string;
        __v: number;
        price: number;
        expense: number;
        createdAt: string;
        updatedAt: string;
      }
      ~~~
    - **結論**
      哪種大小寫更適合您取決於您的個人喜好和編碼風格。
    - **額外說明**
      在您的示例中，您使用的是小寫的 `Array` 型別。這是一種常見的用法，符合 TypeScript 的慣例。
      ~~~ ts
      export interface GetProductsResponse {
        id: string;
        _id: string;
        __v: number;
        price: number;
        expense: number;
        transactions: Array<string>;
        createdAt: string;
        updatedAt: string;
      }
      ~~~
      此定義表示 `transactions` 屬性可以包含一個字串陣列。
- RTK query
  在 endpoints 參數中，您定義了三個端點：  
  getKpis  
  getProducts  
  getTransactions  
  每個端點都使用 build.query 函數建立。build.query 接受多個參數，其中 query 參數用於定義端點的查詢。  
  在 query 參數中，您指定了一個 URL。當您連線到 localhost 主頁時，RTK Query 會自動向您設定的那些不同路徑執行 GET 請求。  
  因此，您不需要在路由變化後再去 fetch 資料。RTK Query 會在您連線到 localhost 主頁時自動 fetch 資料。  
  以下是一些有關 RTK Query 如何工作的額外資訊：  
  RTK Query 使用 Redux 來管理 API 的狀態。  
  RTK Query 使用 SWR 來緩存 API 的響應。  
  RTK Query 提供 自動重新驗證 和 錯誤處理。
- [Data grid](https://mui.com/x/react-data-grid/)
- *Object.entries()* vs *Map|Set|String.entries()*
  ~~~ javascript
  // 使用 Object.entries() 方法，返回一个包含键值对的数组，適用任何對象
  const data = {
    name: "John Doe",
    age: 30,
  };
  const entries = Object.entries(data);
  console.log(entries); // [["name", "John Doe"], ["age", 30]]

  // 使用一个对象使用 .entries 方法
  const map = new Map([
    ["name", "John Doe"],
    ["age", 30],
  ]);
  const iterator = map.entries();
  console.log(iterator.next().value); // ["name", "John Doe"]
  console.log(iterator.next().value); // ["age", 30]
  ~~~
