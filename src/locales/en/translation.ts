const detailsEn = {
  //Hero Section Data
  hero: {
    intro:
      "I'm a frontend developer focused on user experience, constantly exploring ways to enhance UI/UX.",
    name: 'Jungwook Han',
  },
  //About Section Data
  about: [
    "I'm a frontend developer who approaches problems from diverse perspectives, contemplates better user experiences, and builds features.",

    "I'm particularly interested in designing screens and flows that users can naturally immerse themselves in. I value the process of achieving better outcomes through iterative testing and refinement.",

    'As a software major, I leverage computational thinking and logical problem-solving skills to not only implement features but also meticulously consider UI structure design and interaction flows.',

    'My goal is to grow into a UI/UX-focused frontend developer who considers both technical completeness and user experience, earning trust from both users and my team.',
  ],
  //Education Section Data
  education: [
    {
      school:
        'Korea University of Engineering and Technology (formerly Korea Institute of Industrial Technology)',
      major: 'Computer Science, Software Engineering Track',
      period: 'March 2022 ~ February 2024',
    },
    {
      school: 'Oregon State University',
      major: 'Mechanical Engineering',
      period: 'August 2016 ~ May 2019, March 2019 ~ December 2020',
    },
  ],

  //Experience Section Data
  experiences: [
    {
      title: 'Programmers Full-stack Dev Course 4th Batch',
      period: 'August 2024 ~ February 2025',
      description:
        'KDT Web Full-Cycle Development with TypeScript (React, Node.js)',
      type: 'Educational Program',
      result:
        'Gained full-stack development experience with React and Express, and completed a team project with Woogyeol.',
    },
    {
      title: 'Geultto 9th Batch',
      period: 'November 2023 ~ May 2024',
      description:
        'A community for developers who write, aiming to positively influence and grow together.',
      type: 'Activity',
      result:
        'Developed a writing habit, expanded my network with various developers, and grew by gaining new technologies and insights.',
    },
    {
      title: 'Techeer Silicon Valley SW Winter Hackathon',
      period: 'January 2023 ~ February 2023',
      description:
        'A hackathon organized by a club at Korea University of Engineering and Technology',
      type: 'Activity',
      result:
        'Gained end-to-end development experience through a university-led hackathon.',
    },
  ],

  //Project Section Data
  projects: [
    {
      title: 'Woogyeol',
      description: 'Custom Mobile Wedding Invitation Service',
      videoSrc:
        'https://sceokvekldkqtdriqqpo.supabase.co/storage/v1/object/public/videos//invitationResult.webm',
      logoSrc: '/projectAssets/woogyeol/logo.png',
      tags: ['React', 'TypeScript', 'Tailwind CSS', 'React-Query', 'Zustand'],
      link: 'https://woogyeol.site/',
      github: 'https://github.com/team-wedding',
      projectURL: '/project/woogyeol',
    },
    {
      title: 'SULSUL',
      description: 'Comprehensive Interview Preparation Service',
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
      description: 'Aviation Academy Website',
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

  ///Contact Page
  contactInfo: {
    contactDetail: 'Contact Detail',
    name: 'name',
    mobile: 'phone-number',
    email: 'Email',
    location: 'Location',
    message: 'message',
    emailSending: 'Sending...',
    emailSuccess: 'Message sent successfully! We’ll get back to you shortly.',
    emailFail: 'Failed to send message. Please try again.',
    emailSend: 'Send Message',
    locationDetail: 'Seoul, Republic of Korea',
    namePlaceHolder: 'Your Name',
    messagePlaceHolder:
      'Feel free to share detailed project information or collaboration proposals. I’m always open to hearing about potential job opportunities or a casual coffee chat.',
    contactIntro: 'If you have any questions, feel free to reach out to me.',
    responseGuarantee: 'Please feel free to contact me anytime!',
    responseMessage:
      "I welcome any form of communication, whether it's a project proposal, a collaboration inquiry, a job offer recognizing my potential, or even just a casual coffee chat.",
  },
};

export default detailsEn;
