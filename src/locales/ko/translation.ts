const detailsKo = {
  //Hero Section Data
  hero: {
    intro:
      '사용자 경험을 중시하며, 더 나은 UI/UX를 고민하는 프론트엔드 개발자입니다.',
    name: '한정욱',
  },

  //Project Section Data
  projects: [
    {
      title: 'Woogyeol - 우리 결혼했어요',
      description: '커스텀 모바일 청첩장 서비스',
      videoSrc:
        'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//invitationResult.webm',
      logoSrc: '/projectAssets/woogyeol/logo.png',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'React-Query', 'Zustand'],
      link: 'https://woogyeol.site/',
      github: 'https://github.com/team-wedding',
      projectURL: '/project/woogyeol',
    },
    {
      title: 'SULSUL - 올인원 면접연습',
      description: '종합적인 면접 준비 서비스',
      videoSrc:
        'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//sulsulHero.webm',
      logoSrc: '/projectAssets/sulsul/logo.png',
      tags: ['Next.js', 'Tailwind CSS', 'Shadcn', 'React-Query', 'Storybook'],
      link: 'https://www.sulsul-interview.kr/',
      github: 'https://github.com/sulsulsulsul/sulsul',
      projectURL: '/project/sulsul',
    },
    {
      title: 'SkyLogix Aviation',
      description: '항공 아카데미 웹사이트',
      videoSrc:
        'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//skyLogixHero.webm',
      logoSrc: '/projectAssets/skyLogix/logo.png',
      tags: [
        'Next.js',
        'TypeScript',
        'Node-mailer',
        'Vercel',
        'Shadcn',
        'Tailwind CSS',
      ],
      link: 'https://www.skylogixaviation.com/',
      github: 'https://github.com/nowrobin/SkyLogixAviation',
      projectURL: '/project/skylogix',
    },
  ],

  //About Section Data
  about: [
    '안녕하세요. 저는 다양한 관점으로 문제를 바라보고, 더 나은 사용자 경험을 고민하며 기능을 만드는 프론트엔드 개발자입니다.',
    '특히 사용자가 자연스럽게 몰입할 수 있는 화면과 흐름을 설계하는 데 큰 흥미를 느끼며, 반복적인 테스트와 개선을 통해 더 나은 방향을 끌어내는 과정에 가치를 둡니다.',
    '소프트웨어 전공자로서 컴퓨팅 사고력과 논리적인 문제 해결 능력을 바탕으로, 기능 구현뿐 아니라 UI 구조 설계와 인터랙션 흐름까지 세심하게 고민하는 개발자입니다.',
    '기술적 완성도와 사용자 경험을 모두 고려할 수 있는 UI/UX 중심의 프론트엔드 개발자로 성장하여, 사용자와 팀 모두에게 신뢰받는 개발자가 되는 것이 저의 목표입니다.',
  ],

  //Education Section Data
  education: [
    {
      school: '한국공학대학교 (한국산업기술대학교)',
      major: '컴퓨터공학과 소프트웨어 전공',
      period: '2022.03 ~ 2024.02',
    },
    {
      school: 'Oregon State University',
      major: 'Mechanical Engineering',
      period: '2016.08 ~ 2019.05, 2019.03 ~ 2020.12',
    },
  ],

  //Experience Section Data
  experiences: [
    {
      title: '프로그래머스 풀스택 데브코스 4기',
      period: '2024.08 ~ 2025.02',
      description:
        'KDT 타입스크립트로 함께하는 웹 풀 사이클 개발(React, Node.js)',
      type: '교육',
      result:
        'React와 Express 배우면서 Fullstack 개발 경험을 쌓았고, Woogyeol과 함께 팀 프로젝트를 진행했습니다.',
    },
    {
      title: '글또 9기',
      period: '2023.11 ~ 2024.05',
      description:
        '글을 작성하는 개발 직군분들이 모여서, 좋은 영향을 주고 서로 같이 자랄 수 있는 커뮤니티',
      type: '활동',
      result:
        ' 글쓰기 습관을 기르고, 다양한 개발자들과의 네트워킹을 통해 새로운 기술 및 인사이트를 얻으면서 성장했습니다.',
    },
    {
      title: 'Techeer 실리콘밸리 SW 동계 해커톤',
      period: '2023.01 ~ 2023.02',
      description: '한국공학대학교 동아리에서 진행한 해커톤',
      type: '활동',
      result: '교내에서 진행한 해커톤으로, End to End 개발 경험을 쌓았습니다.',
    },
  ],
  ///Contact Page
  contactInfo: {
    contactDetail: '연락처 정보',
    name: '이름',
    mobile: '전화번호',
    email: '이메일',
    location: '위치',
    locationDetail: '대한민국, 서울',
    message: '메시지',
    emailSending: '전송 중...',
    emailSuccess:
      '메시지가 성공적으로 전송되었습니다! 빠른 시일 내에 답변드리겠습니다.',
    emailFail: '메시지 전송에 실패했습니다. 다시 시도해주세요.',
    emailSend: '메시지 보내기',
    namePlaceHolder: '홍길동',
    messagePlaceHolder:
      '프로젝트에 대한 상세한 내용이나 협업 제안을 자유롭게 작성해주세요. 저에게 채용 제의를 주시거나 커피챗을 요청해 주시면 언제든지 환영입니다.',
    contactIntro: '궁금한 점이 있으시면 저에게 편하게 연락 주세요',
    responseGuarantee: '언제든지 편하게 연락 주세요!',
    responseMessage:
      '프로젝트 제안, 협업 문의는 물론, 저의 잠재력을 알아봐 주시는 채용 제안이나 편안한 커피챗 요청 등 어떤 형태의 소통이든 환영합니다.',
  },
};

export default detailsKo;
