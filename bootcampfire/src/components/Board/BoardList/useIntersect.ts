// import {useState, useEffect, useCallback} from 'react';

// const defualtOption = {
//     root: null, // 타겟 요소와 교차 영역을 정의하기 위해 사용하는 상위 요소 프러퍼티, 기본은 viewport
//     threshold: 0.5,
//     rootMargin: '0px'
// };

// const useIntersect = (onIntersect, option) => {
//     const [ref, setRef] = useState(null);
//     const checkIntersect = useCallback(([entry], observer) => {
//         if (entry.isIntersecting) {
//             onIntersect(entry, observer);
//         }
//     }, []);

//     useEffect(() => {
//         let observer;
//         if (ref) {
//             observer = new IntersectionObserver(checkIntersect, {
//                 ...defualtOption,
//                 ...option
//             });
//             observer.observe(ref);
//         }
//         return () => observer && observer.disconnect();
//     }, [ref, option.root, option.threshold, option.rootMargin, checkIntersect]);
//     return [ref, setRef];
// }

// export default useIntersect;

import { useState, useEffect, useCallback } from 'react';

// IntersectionObserverEntry 타입을 임포트합니다.
// interface IntersectionObserverEntry {
//   isIntersecting: boolean;
//   intersectionRatio: number;
//   // 필요에 따라 더 많은 프로퍼티들을 추가할 수 있습니다.
// }

// IntersectionObserverInit 타입을 정의합니다.
interface IntersectionObserverInit {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  // 필요에 따라 더 많은 프로퍼티들을 추가할 수 있습니다.
}

const defaultOptions: IntersectionObserverInit = {
  root: null,
  threshold: 0.5,
  rootMargin: '0px',
};

// onIntersect 콜백 함수의 타입을 정의합니다.
type OnIntersectCallback = (
  entry: IntersectionObserverEntry,
  observer: IntersectionObserver
) => void;

const useIntersect = (onIntersect: OnIntersectCallback, options: IntersectionObserverInit) => {
  const [ref, setRef] = useState<Element | null>(null);

  const checkIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      if (entry.isIntersecting) {
        onIntersect(entry, observer);
      }
    },
    [onIntersect]
  );

  useEffect(() => {
    let observer: IntersectionObserver | undefined;
    if (ref) {
      observer = new IntersectionObserver(checkIntersect, {
        ...defaultOptions,
        ...options,
      });
      observer.observe(ref);
    }
    return () => observer && observer.disconnect();
  }, [ref, options.root, options.threshold, options.rootMargin, checkIntersect]);

  return [ref, setRef] as const;
};

export default useIntersect;
