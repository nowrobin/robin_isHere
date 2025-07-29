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
  },
  skyLogix: {
    title: 'SkyLogix Aviation',
    shortDescription: 'Aviation Academy Website',
    detailedDescription:
      'SkyLogix Aviation is the official website of an aviation academy specializing in aircraft rental and pilot training. The entire project, from planning to design and development, was implemented end-to-end to create a high-quality business website.',
    mainFeature: [
      'AI Interview Practice',
      'Resume-based Question Generation & Feedback',
    ], // This seems to be a copy-paste error from SULSUL, keeping it as is per the original format.
    mainRole: 'UI Implementation, API Integration, Storybook Deployment', // This seems to be a copy-paste error from SULSUL, keeping it as is per the original format.
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
  },
};

export default ProjectTransEn;
