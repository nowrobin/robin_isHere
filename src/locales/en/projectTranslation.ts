export const ProjectTransEn = {
  woogyeol: {
    title: 'Woogyeol',
    shortDescription: 'Custom Mobile Wedding Invitation',
    team: '7 member Team',
    members: 'Frontend 4 / BackEnd 3',
    detailedDescription:
      'Woogyeol is a mobile wedding invitation service that allows users to create and share their own invitations. It provides a complete digital wedding solution from preparation to the wedding day itself, with features like attendance surveys, congratulatory messages, and a real-time photo wall.',
    mainFeature: [
      'AI Interview Practice',
      'Resume-based Question Generation & Feedback',
    ],
    mainRole: 'API Integration, State Management, Performance Optimization',
    projectImages: [
      {
        src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//invitationCreate.webm',
        alt: 'Woogyeol Main Page',
        description:
          'Main interface for users to create their own wedding invitations',
      },
      {
        src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//invitationResult.webm',
        alt: 'Completed Invitation',
        description:
          'Wedding invitation editor to review and share the final version',
      },
      {
        src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//rsvpStat.webm',
        alt: 'Attendance Management',
        description: 'Real-time attendance survey and management system',
      },
      {
        src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//photoTalk.webm',
        alt: 'Real-time Photo Wall',
        description:
          'Photo wall for real-time photo sharing on the wedding day',
      },
    ],
    challenges: [
      {
        title: 'Excessive Zustand Over-rendering Issue',
        problem:
          'Zustand was used to instantly reflect user input on the final invitation, but unnecessary re-rendering occurred with every input change, leading to performance degradation and screen flickering.',
        solution:
          'Optimized Zustand Store using `useCallback` internally and introduced debouncing to trigger rendering after a certain delay following input. This significantly reduced the number of renders.',
      },
      {
        title: 'Excessive Data Transmission on POST Requests',
        problem:
          'When creating invitations, all values were sent at once, making error tracking and debugging difficult, and requests were sent without proper validation.',
        solution:
          'Improved the process by dividing the creation into stages, sending only necessary data incrementally. This allowed for error checking at specific stages, reducing debugging time and better suiting the user flow.',
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
    relatedArticles: [],
  },
  sulsul: {
    title: 'SULSUL',
    shortDescription: 'AI-powered Customized Interview Preparation Platform',
    team: '프론트엔드 4명, 백엔드 3명',
    detailedDescription:
      'SULSUL is an all-in-one interview preparation service that allows users to practice interviews with customized questions generated based on their self-introduction. It supports systematic interview preparation through AI feedback, past question challenges, and live interview simulations.',
    mainFeature: [
      'AI Interview Practice',
      'Resume-based Question Generation & Feedback',
    ],
    mainRole: 'UI Implementation, API Integration, Storybook Deployment',
    projectImages: [
      {
        src: '/projectAssets/sulsul/hero.png',
        alt: 'SULSUL Landing Page',
        description:
          'Intuitive and modern design for the service introduction page',
      },
      {
        src: '/projectAssets/sulsul/practiceMainPage.png',
        alt: 'Interview Practice Page',
        description:
          'Interface for practicing in an environment similar to a real interview',
      },
      {
        src: '/projectAssets/sulsul/practiceModal.png',
        alt: 'Question Selection Modal',
        description:
          'Selection of customized interview questions generated based on self-introduction',
      },
      {
        src: '/projectAssets/sulsul/feedBackPage.png',
        alt: 'Feedback System',
        description: 'AI-based answer analysis and improvement suggestions',
      },
    ],
    challenges: [
      {
        title: 'API Speed Issue Due to Free Server Migration (12s → 5s)',
        problem:
          'After migrating from a personal server to Koyeb, components rendering data received from API calls experienced a 12-second blank screen. Simple loading indicators did not provide a good UX.',
        solution:
          'Improved by using `usePrefetch` to pre-fetch data before rendering. Instead of loading all data at once, requests were made per self-introduction question unit to minimize blank screens. Auto-focus was implemented to immediately display pre-fetched questions, enhancing UX.',
      },
      {
        title:
          'Minimizing Development Stages with Storybook Deployment for Design Verification',
        problem:
          'When sharing unverified work with designers, verification was only possible through a deployed site. This required deploying in an unstable state and going through deployment and verification stages just for design changes.',
        solution:
          'Improved by separately deploying components that required designer verification using Storybook and Chromatic, and receiving design feedback through this method. Design verification speed increased, development schedule coordination became smoother, and real-time feedback accelerated development.',
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
    relatedArticles: [],
  },
  skyLogix: {
    title: 'SkyLogix Aviation',
    shortDescription: 'Aviation Academy Website',
    team: 'Personal Project',
    members: 'Solo',
    developmentPeriod: '2025.03 ~ 2025.04',
    developmentNote: '1-month focused build',
    detailedDescription:
      'SkyLogix Aviation is the official website of an aviation academy specializing in aircraft rental and pilot training. The entire project, from planning to design and development, was implemented end-to-end to create a high-quality business website.',
    mainFeature: [
      'AI Interview Practice',
      'Resume-based Question Generation & Feedback',
    ], // This seems to be a copy-paste error from SULSUL, keeping it as is per the original format.
    mainRole: 'UI Implementation, API Integration, Storybook Deployment', // This seems to be a copy-paste error from SULSUL, keeping it as is per the original format.
    challenges: [],
    points: [
      {
        point: 'End-to-End Development',
        detail:
          'Single-handedly managed the entire process from project planning to design, development, and deployment',
      },
      {
        point: 'Email System',
        detail:
          'Implemented a real-time inquiry and reservation system using Node-mailer',
      },
      {
        point: 'Responsive Design',
        detail: 'Provided an optimized user experience on all devices',
      },
    ],
    results: ['Business Website', 'Commercial website currently in operation'],
    format: ['Personal Project', 'Full-stack Development'],
    projectImages: [
      {
        src: '/projectAssets/skyLogix/skyLogixPlanes.png',
        alt: 'Aircraft Rental Page',
        description: 'Page offering various aircraft models and rental options',
      },
      {
        src: '/projectAssets/skyLogix/skyLogixSteps.png',
        alt: 'Pilot Training Service',
        description: 'Introduction to professional pilot training programs',
      },
      {
        src: '/projectAssets/skyLogix/skyLogixContact.png',
        alt: 'Contact Form',
        description: 'Real-time email inquiry system using Node-mailer',
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
    relatedArticles: [],
  },
  hmh: {
    title: 'HMH - Ad One-Stop Solution',
    shortDescription: 'Flatbread Company Project',
    team: '3 members in total',
    members: '1 Frontend Developer, 1 Backend Developer, 1 Designer',
    detailedDescription:
      'This project delivers a one-stop advertising solution that empowers small business owners to create professional ad videos with ease through AI-powered video generation. By simply selecting budget, campaign period, and target location, the system automatically recommends the most suitable media devices for the business type and efficiently allocates the budget. As a result, the entire process—from ad creation to execution and final subscription—can be completed seamlessly within a single platform',
    mainFeature: [
      'AI-powered ad creative generation',
      'AI-driven media device recommendation',
      'Automated budget allocation',
      'Ad creative validation',
    ],
    mainRole:
      'UI development, automated budget allocation, media device recommendation',
    projectImages: [
      {
        src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos/HMH_businessUpload.mov',
        alt: 'Business registration',
        description:
          'Verify business information using a business registration certificate',
      },
      {
        src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos/HMH_AutoBudgetDistribution.mov',
        alt: 'Ad device recommendation and budget allocation',
        description:
          'Recommend ad devices and allocate budgets based on the business type',
      },
      {
        src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//rsvpStat.webm',
        alt: 'Ad creative and template selection',
        description: 'Upload custom ad images and select ad templates',
      },
      {
        src: 'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//photoTalk.webm',
        alt: 'My Page',
        description:
          'Track ad impressions and monitor real-time data via My Page',
      },
    ],
    challenges: [
      {
        title: 'Simplifying ad creative guidelines and industry restrictions',
        problem:
          'Guidelines and restrictions were only provided in PDF, making them difficult for small business owners to understand and apply when creating ad creatives.',
        solution:
          'Used FFmpeg to validate media format and file size, and integrated Google Cloud Video API for object recognition, harmful content detection, and text validation.',
      },
      {
        title: 'Limitations of AI video generation',
        problem:
          'Existing AI video generation tools produced low-quality results, were costly, and often misinterpreted Korean text as other languages.',
        solution:
          'Enhanced quality by converting a single image into a base video and handling text overlay and editing at the server side.',
      },
    ],
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand'],
    relatedArticles: [
      {
        title: 'Shinhan Square Bridge Hackathon Retrospective',
        description:
          'A retrospective on wrapping up the Shinhan Square Bridge hackathon.',
        url: 'https://velog.io/@nowrobin/%EC%8B%A0%ED%95%9C-%EC%8A%A4%ED%80%98%EC%96%B4-%EB%B8%8C%EB%A6%BF%EC%A7%80-%ED%95%B4%EC%BB%A4%ED%86%A4-%ED%9B%84%EA%B8%B0',
        date: '2025.09.09',
        readTime: '5 min',
        tags: ['Shinhan Hackathon', 'Retrospective', 'Innovation Award'],
      },
      {
        title: 'Editing Videos on the Web (ffmpeg)',
        description:
          'A write-up on using FFmpeg to analyze and edit videos on the web.',
        url: 'https://velog.io/@nowrobin/%EC%9B%B9%EC%97%90%EC%84%9C-%EC%98%81%EC%83%81-%ED%8E%B8%EC%A7%91-%ED%95%B4%EB%B3%B4%EA%B8%B0-ffmpeg',
        date: '2025.08.31',
        readTime: '10 min',
        tags: ['Next.js', 'FFMPEG', 'Video Processing'],
      },
      {
        title: 'Why Solve Problems to Build?',
        description:
          'Reflections on the essence of development and problem solving.',
        url: 'https://velog.io/@nowrobin/%EA%B0%9C%EB%B0%9C%EC%9D%84-%ED%95%98%EA%B8%B0%EC%9C%84%ED%95%B4-%EB%AC%B8%EC%A0%9C%EB%A5%BC-%ED%91%BC%EB%8B%A4',
        date: '2025.07.30',
        readTime: '8 min',
        tags: ['Developer', 'Problem Solving'],
      },
    ],
  },
};

export default ProjectTransEn;
