const ProjectTransKo = {
  woogyeol: {
    title: 'Woogyeol - 우리 결혼해요',
    shortDescription: '커스텀 모바일 청첩장',
    team: '총 7명',
    members: '프론트엔드 4명, 백엔드 3명',
    detailedDescription:
      'Woogyeol은 사용자가 직접 청첩장을 제작하고 공유할 수 있는 모바일 청첩장 서비스입니다. 참석 여부 조사, 축하 메시지, 실시간 포토월 기능을 통해 결혼 준비부터 당일까지 완전한 디지털 웨딩 솔루션을 제공합니다.',
    mainFeature: ['AI 면접 연습', '자소서 기반 질문 생성 및 피드백'],
    mainRole: 'API 연동, 상태관리, 성능 최적화',
    projectImages: [
      {
        src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//invitationCreate.webm',
        alt: 'Woogyeol 메인 페이지',
        description: '사용자가 직접 청첩장을 제작할 수 있는 메인 인터페이스',
      },
      {
        src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//invitationResult.webm',
        alt: '청첩장 완성본',
        description: '완성본을 확인하고 공유할 수 있는 청첩장 에디터',
      },
      {
        src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//rsvpStat.webm',
        alt: '참석 여부 관리',
        description: '실시간 참석 여부 조사 및 관리 시스템',
      },
      {
        src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//photoTalk.webm',
        alt: '실시간 포토월',
        description: '결혼식 당일 실시간으로 사진을 공유할 수 있는 포토월',
      },
    ],
    challenges: [
      {
        title: '과도한 Zustand 오버렌더링 문제',
        problem:
          '사용자 입력 내용을 완성본에 즉각 반영하기 위해 Zustand를 사용했지만, 입력값이 바뀔 때마다 불필요한 렌더링이 발생하여 성능 저하와 화면 깜빡임 현상이 발생했습니다.',
        solution:
          'Zustand Store 내부에서 useCallback을 활용한 최적화 작업을 진행하고, 디바운싱을 도입하여 입력 후 일정 시간 후에 렌더링을 트리거하도록 개선했습니다. 이를 통해 렌더링 횟수를 대폭 감소시켰습니다.',
      },
      {
        title: 'POST 요청 시 과도한 데이터 전송 문제',
        problem:
          '청첩장 생성 시 모든 값을 한 번에 전송하여 에러 트래킹과 디버깅이 어려웠고, 검증되지 않은 상태에서 요청을 보내는 문제가 있었습니다.',
        solution:
          '생성 단계를 나누어 필요한 데이터만 단계별로 전송하도록 개선했습니다. 이를 통해 에러 발생 시 특정 단계에서 확인이 가능해져 디버깅 시간이 단축되었고, 사용자 플로우에도 더 적합한 방식이 되었습니다.',
      },
    ],
    techStack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'React-Query',
      'Zustand',
      'Playwright',
    ],
  },
  sulsul: {
    title: 'SULSUL - 올인원 면접연습 서비스',
    shortDescription: 'AI 기반 맞춤형 면접 준비 플랫폼',
    team: '총 7명',
    members: '프론트엔드 4명, 백엔드 2명 PM/디자이너 1명',
    detailedDescription:
      'SULSUL은 자소서 기반으로 생성된 맞춤형 질문으로 면접 연습을 할 수 있는 올인원 면접 준비 서비스입니다. AI 피드백, 기출문제 챌린지, 실전 면접 시뮬레이션을 통해 체계적인 면접 준비를 지원합니다.',
    mainFeature: ['AI 면접 연습', '자소서 기반 질문 생성 및 피드백'],
    mainRole: 'UI 구현, API 연동, Storybook 배포',
    projectImages: [
      {
        src: '/projectAssets/sulsul/hero.png',
        alt: 'SULSUL 랜딩 페이지',
        description: '직관적이고 모던한 디자인의 서비스 소개 페이지',
      },
      {
        src: '/projectAssets/sulsul/practiceMainPage.png',
        alt: '면접 연습 페이지',
        description: '실제 면접과 유사한 환경에서 연습할 수 있는 인터페이스',
      },
      {
        src: '/projectAssets/sulsul/practiceModal.png',
        alt: '질문 선택 모달',
        description: '자소서 기반으로 생성된 맞춤형 면접 질문 선택',
      },
      {
        src: '/projectAssets/sulsul/feedBackPage.png',
        alt: '피드백 시스템',
        description: 'AI 기반 답변 분석 및 개선점 제안',
      },
    ],
    challenges: [
      {
        title: '무료 서버 이전으로 인한 API 속도 문제 (12초 → 5초)',
        problem:
          '개인 서버에서 Koyeb로 이전하면서 API 호출 시 데이터를 받아와 렌더링하는 컴포넌트에서 빈 화면이 12초간 지속되는 문제가 발생했습니다. 단순 로딩 처리로는 UX적으로 좋지 않은 경험을 제공했습니다.',
        solution:
          'usePrefetch를 활용하여 데이터를 미리 받아온 후 렌더링을 진행하도록 개선했습니다. 전체 데이터를 한 번에 불러오는 대신 자소서 질문 단위로 요청하여 빈 화면을 최소화하고, 오토포커스를 통해 미리 호출된 질문을 즉시 표시하여 UX를 개선했습니다.',
      },
      {
        title: '디자인 검증을 위한 Storybook 배포로 개발단계 최소화',
        problem:
          '기능 검증이 완료되지 않은 작업을 디자이너와 공유할 때 배포된 사이트를 통해서만 확인이 가능했습니다. 불안정한 상태에서 배포를 진행해야 했으며, 디자인 수정만을 위해서 배포를 하고 검증 받는 단계까지.',
        solution:
          '디자이너 확인이 필요한 컴포넌트는 Storybook과 Chromatic을 활용하여 별도 배포하고, 이를 통해 디자인 피드백을 받는 방식으로 개선했습니다. 디자인 검증 속도가 빨라지고 개발 일정 조율이 원활해졌으며, 실시간 피드백으로 개발 속도가 향상되었습니다.',
      },
    ],
    techStack: [
      'Next.js',
      'Tailwind CSS',
      'Shadcn',
      'React-Query',
      'Storybook',
      'Zustand',
      'NextAuth',
    ],
  },
  skyLogix: {
    title: 'SkyLogix Aviation',
    shortDescription: '항공 아카데미 웹사이트',
    team: '개인 프로젝트',
    members: '솔로',
    detailedDescription:
      'SkyLogix Aviation은 항공기 대여 및 조종사 교육을 전문으로 하는 항공 아카데미의 공식 웹사이트입니다. 전체 프로젝트 기획부터 디자인, 개발까지 End-to-End로 구현하여 완성도 높은 비즈니스 웹사이트를 제작했습니다.',
    mainFeature: ['AI 면접 연습', '자소서 기반 질문 생성 및 피드백'],
    mainRole: 'UI 구현, API 연동, Storybook 배포',
    points: [
      {
        point: 'End-to-End 개발',
        detail:
          '프로젝트 기획부터 디자인, 개발, 배포까지 전 과정을 단독으로 진행',
      },
      {
        point: '이메일 시스템',
        detail: 'Node-mailer를 활용한 실시간 문의 및 예약 시스템 구현',
      },
      {
        point: '반응형 디자인',
        detail: '모든 디바이스에서 최적화된 사용자 경험 제공',
      },
    ],
    results: ['비즈니스 웹사이트', '실제 운영 중인 상업적 웹사이트'],
    format: ['개인 프로젝트', '풀스택 개발'],
    projectImages: [
      {
        src: '/projectAssets/skyLogix/skyLogixPlanes.png',
        alt: '항공기 대여 페이지',
        description: '다양한 항공기 모델과 대여 옵션을 제공하는 페이지',
      },
      {
        src: '/projectAssets/skyLogix/skyLogixSteps.png',
        alt: '조종사 교육 서비스',
        description: '전문 조종사 교육 프로그램 소개',
      },
      {
        src: '/projectAssets/skyLogix/skyLogixContact.png',
        alt: '문의 양식',
        description: 'Node-mailer를 활용한 실시간 이메일 문의 시스템',
      },
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Node-mailer',
      'Vercel',
      'Shadcn',
      'Tailwind CSS',
    ],
  },
  hmh: {
    title: 'HMH - 광고 윈스탑 솔루션',
    shortDescription: '플랫브레드 기업과제',
    team: '총 3명',
    members: '프론트엔드 1명, 백엔드 1명, 디자이너 1명',
    detailedDescription:
      'AI 영상 생성 기술을 활용하여 자영업자도 전문적인 광고 영상을 손쉽게 제작할 수 있는 원스톱 솔루션입니다. 사용자는 예산, 기간, 위치만 간단히 선택하면 업종 특성에 맞는 송출 기기를 자동으로 추천받고, 예산도 효율적으로 분배됩니다. 이를 통해 광고 기획부터 집행, 그리고 청약까지의 전 과정을 한 번에 빠르고 간편하게 진행할 수 있습니다.',
    mainFeature: [
      'AI 광고 소재 제작',
      'AI 기기 매체 추천',
      '예산 자동 배분',
      '광고 소재 검사',
    ],
    mainRole: 'UI, 예산 자동분배, 기기 매체 추천',
    projectImages: [
      {
        src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos/HMH_businessUpload.mov',
        alt: '사업자 등록',
        description: '사업자 등록증으로 사업자 확인',
      },
      {
        src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos/HMH_deviceSelection.mov',
        alt: '광고 기기 추천',
        description: '업종에 맞는 광고기기 추천 ',
      },
      {
        src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos/HMH_AutoBudgetDistribution.mov',
        alt: '자동 예산 분배',
        description: '자동 예산 분배',
      },
      {
        src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos/HMH_VideoGen.mov',
        alt: '광고 탬플릿 및 소재 선택',
        description: '원하는 광고 이미지 업로드 및 광고 템플릿 선택',
      },
      {
        src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos/HMH_Regerate.mov',
        alt: '소재 가이드라인 검사',
        description: '광고 소재 규격 및 가이드라인 검사',
      },
      {
        src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos/HMH_Mypage.mov',
        alt: '마이페이지',
        description: '마이페이지를 통해 광고 노출 횟수 및 실시간 데이터 확인',
      },
      {
        src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos/HMH_ANALYZE.mov',
        alt: '광고 소재 분석 리포트',
        description: '광고 영상 분석 데이터 리포트',
      },
    ],
    challenges: [
      {
        title: '소재 가이드 및 업종 제약사항을 어떻게 단축시켜야되는지',
        problem:
          'PDF로만 제공되는 가이드라인과 제약사항들을 소상공인들도 쉽게 검증할 수 있도록 소재 검증을 합니다.',
        solution:
          'ffmpeg를 활용해 소재의 대한 규격 용량검증, Google Cloud Video를 사용해서 객체 인식 및 유해성/텍스트 검사',
      },
      {
        title: '영상 생성 AI의 한계점 ',
        problem:
          '기존에 영상 생상 AI의 부족한 퀄리티와 요금문제, 한국어 문구를 다른언어로 인식',
        solution:
          '문구를 제외한 하나의 이미지를 영상화한뒤, 영상을 문구와 편집을 서버단에서 진행하여 퀄리티를 높였습니다.',
      },
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand'],
  },
};

export default ProjectTransKo;
