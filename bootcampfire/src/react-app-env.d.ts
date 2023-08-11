/// <reference types="react-scripts" />

declare namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_API_URL: string;
      // 다른 환경 변수도 필요한 경우 여기에 추가할 수 있습니다.
    }
  }
  