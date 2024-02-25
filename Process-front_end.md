## Process-front_end
**[Course Link](https://www.youtube.com/watch?v=uoJ0Tv-BFcQ&t=10409s)**  
**[Github Link](https://github.com/ed-roh/finance-app)**  
**[Github Theme](https://github.com/ed-roh/finance-app/blob/master/client/src/theme.ts)**  
**[Github data](https://github.com/ed-roh/finance-app/blob/master/server/data/data.js)**
> *Resources*
 - [Hero Icons](https://heroicons.com/)
 - [Material Icons](https://mui.com/material-ui/material-icons/)
 - [Font Awesome](https://fontawesome.com/)
 - 
*[Material UI creator](https://bareynol.github.io/mui-theme-creator/#Avatar)*
> *Additional*
 - [tailwind cheatSheet](https://nerdcave.com/tailwind-cheat-sheet)
 - [Typescript cheatSheet](https://www.typescriptlang.org/cheatsheets)
 - [GeekforGeeks](https://www.geeksforgeeks.org)
 - [TutorialsPoint](https://www.tutorialspoint.com/index.htm)
 - [mixed cheatSheet](https://guide-cheatsheet.netlify.app/)
 - [ReactTypescript cheatSheet](https://react-typescript-cheatsheet.netlify.app/)
 - [Rico's cheatSheet](https://devhints.io/)
 - [Webpack cheatSheet](https://dev.to/zinox9/webpack-cheatsheet-7pj)
 - [NextJS cheatsheet(1)](https://blog.wrappixel.com/nextjs-cheat-sheet/)
 - [NextJS cheatsheet(2)](https://github.com/emanuelefavero/next-js)
 - [Next.js + MUI v5 + Typescript tutorial and starter](https://dev.to/hpouyanmehr/nextjs-mui-v5-typescript-tutorial-and-starter-3pab)
 - [React Style cheatSheet(1)](https://codepen.io/lordliquid/pen/GvzpRJ)
 - [React Style cheatSheet(2)](https://github.com/vhpoet/react-native-styling-cheat-sheet)
 - [DifferChecker](https://www.diffchecker.com/)
 - [vim cheatSheet(中文)](https://github.com/chloneda/vim-cheatsheet)
 - [Over API](https://overapi.com/?fbclid=IwAR1TId_oZopVjUGOZAoK0B3zT3AS5BwknowvkVpn31fQeyBSx7rYUkujIgc)
 - [Readme.md教學](https://blog.csdn.net/Zsk_Zane/article/details/47205403)
 - [Convert video to .gif(1)](https://www.youtube.com/watch?v=sb1dW031OAU)
 - [Convert video to .gif(2)](https://www.youtube.com/watch?v=quKgo3ChvWY)
 - [Linux command cheatSheet](https://www.hostinger.com/tutorials/linux-commands)
> *Javascript & DOM*
 - [JavaScript Tutorial](https://www.javascripttutorial.net/)
 - [JavaScript Document Object Model(DOM)](https://www.robertlgorman.com/JavaScript_Sandbox/JavaScript-Dom.html)
 - [Javascript cheatSheet](https://github.com/Pradeep-Pandey13/CheatSheets-HTML-CSS-JavaScript/blob/main/JavaScript%20DOM%20Cheatsheet.png)
> Temperary
 - [react-router-dom](https://www.codecademy.com/learn/learn-react-router/modules/learn-react-router/cheatsheet)
 - [HTML Inputs and Labels: A Love Story](https://css-tricks.com/html-inputs-and-labels-a-love-story/)
 - [Crafting a Professional-Looking Carousel with React and MUI](https://medium.com/@ltomblock/crafting-a-professional-looking-carousel-with-react-and-mui-746a86af0ab0)
 - [Design This ON/OFF Toggle in Figma (Easy)(2023)](https://www.youtube.com/watch?v=S6T6hrc8cQo)
 - [Figma Tutorial: 3D Carousel Slider (+ free files 🎁)](https://www.youtube.com/watch?v=XKSNDxp-I14)
 - [templateMonster](https://www.templatemonster.com/?utm_source=google&utm_medium=cpc&utm_campaign=(EN)-Branding-Other-Search&aff=TM&gad_source=1&gclid=Cj0KCQiAxOauBhCaARIsAEbUSQRy3vzqlboqr0Eh1gY2a0-DFmGrGkCr0BjbyJErhV9objmiuqiv0gAaAgw-EALw_wcB)
 - [react-route實作ssr專案(1)](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/server-side-rendering-ssr-in-reactjs-part1-d2a11890abfc)
 - [react-route實作ssr專案(2)](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/server-side-rendering-ssr-in-reactjs-part2-179ed654457e)
 - [redux實作ssr](https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/server-side-rendering-ssr-in-reactjs-part3-7f2097963754)
 - [react-router ssr example](https://stackblitz.com/github/remix-run/react-router/tree/main/examples/ssr?file=src%2Fentry.server.tsx)
 - [react-router quick start](https://v5.reactrouter.com/core/guides/quick-start)

 - [redux cheatSheet](https://gist.github.com/ML-Chen/f192e11189e0e01e087de60bdfc7a5f1)

 - [前端資源及題庫](https://mingjun.lu/blog/how-i-became-a-front-end-web-developer-in-2020)

 - [comibne mui and react-router](https://mui.com/material-ui/integrations/routing/#global-theme-link)
  > Chatgpt: 這段程式碼的主要用途是將 Material-UI 的 Link 和 Button 組件中的超連結行為改為使用 react-router-dom 提供的 Link 組件，這樣在點擊時將會進行客戶端路由導航而不是簡單的頁面跳轉。
    - 讓我們一步步來解釋這段程式碼的功能：
      1. 首先，定義了一個 `LinkBehavior` 組件，它是一個 forwardRef，接受 `RouterLinkProps` 作為參數。它將接收到的 `href` 屬性轉換為 `to` 屬性，並將其他屬性傳遞給 react-router-dom 的 Link 組件。
      2. 接著，定義了一個 `Router` 組件，用來根據環境判斷是使用 `StaticRouter` 還是 `MemoryRouter`，以確保在服務器端渲染時正確運作。
      3. 創建了一個主題（theme），並在其中設置了 `MuiLink` 和 `MuiButtonBase` 組件的默認屬性，將它們的 `component` 和 `LinkComponent` 分別設置為前面定義的 `LinkBehavior` 組件。
      4. 最後，渲染了一個 Stack 組件，其中包含了一個 ThemeProvider，並在其中渲染了一個 Router，內部包含了一個 Link 和一個 Button。這些組件都使用了前面定義的主題。
      至於您的問題，是的，這段程式碼中的 MuiLink（即 Material-UI 的 Link 組件）已經被轉換為使用 react-router-dom 的 Link 組件。這樣一來，當點擊這些 Link 時，將會使用 react-router-dom 進行客戶端路由導航，而不是簡單的頁面跳轉。
---
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
  ```npm i react-redux @reduxjs/toolkit react-router-dom @mui/material @emotion/react @emotion/styled @mui/icons-material @mui/x-datfa-grid```
- *install typescript*
  ```npm i -D @types/react-dom```

- **font setting** for google font - *Inter*
  ~~~ css
  //index.css
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
  ~~~

- **To check error**
  ```npm i -D eslint eslint-config-react-app```
  [Eslint Setting by PJ](https://pjchender.dev/webdev/note-eslint/)
  ~~~ ts
  //create file in src/: .eslintrc.json for
  {
      "extends": "react-app"
  }
  ~~~

- ~~~ javascript
  // setting for vite's env variable
  // create file in src/: .env.local
  
  VITE_BASE_URL=http://localhost:1337
  ~~~

- Setting for typescript -
  ~~~ ts
  //tsconfig.json
  //add in compilerOptions ...
  "types": ["vite/client"] //
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
  - [about grid(1-mdn)](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)
  - [about grid(2-cssTricks)](https://css-tricks.com/snippets/css/complete-guide-grid/#prop-display)

- *createSlice 和 configureStore 用於管理應用程式的內部狀態。*  
  *createApi 用於管理與 API 請求相關的狀態。*
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
