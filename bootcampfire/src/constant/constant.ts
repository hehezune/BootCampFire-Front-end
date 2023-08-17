export const colors = {
  PRIMARY: '#FF603D',
  SECONDARY: '#F5A368',
  WHITE: '#FFFFFF',
  BACKGROUND_DEEP: '#FFD0C1',
  BACKGROUND_MID: '#FEE9E6',
  BACKGROUND_LIGHT: '#FFFAF9',
  BACKGROUND_HOVER: '#f7f6f6',
  TEXT_NORMAL: '#0E0301',
  TEXT_LIGHT: '#94969B',
  BORDER_LIGHT: '#D4D2E3',
};

export const categories = [
  '카테고리',
  '자유',
  '썸/연애',
  '헬스/스포츠',
  '스터디',
  '프로젝트',
  'IT',
  '고민',
  '질문',
  '부트캠프',
];

const catergoryMapOrigin = new Map();
categories.forEach((element, idx) => {
  if (idx === 0) return;
  catergoryMapOrigin.set(element, idx);
});

export const categoryMap = catergoryMapOrigin;

export const bootcamp = ['SSAFY'];

const onOff = new Map();
onOff.set('온라인', 0);
onOff.set('오프라인', 1);
onOff.set('온/오프라인', 2);

export const onOffMap = onOff;

export const onOffList = ['온라인', '오프라인', '온/오프라인'];
export const supportSelectList = ['지원금 O', '지원금 X'];
export const cardSelectList = ['카드 등록 필수 O', '카드 등록 필수 X'];
export const codingTestSelectList = ['코딩테스트 O', '코딩테스트 X'];
