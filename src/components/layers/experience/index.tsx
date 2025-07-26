const experiences = [
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
];

const education = [
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
];

const languages = [
  { name: 'TOEIC', score: '985점', date: '2023.10.29' },
  { name: 'OPIc', score: 'IH등급', date: '2023.11.03' },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-quaternary">
      <div className="container mx-auto px-6 flex flex-col gap-10">
        <h2 className="text-3xl font-bold text-center">경험 & 교육</h2>
        {/* Experience & Activities */}
        <div className="">
          <h3 className="text-2xl font-semibold mb-8 text-primary">
            경험 & 활동
          </h3>
          <div className="space-y-4">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                  <h4 className="text-xl font-semibold text-primary">
                    {exp.title}
                  </h4>
                  <span className="text-sm text-white font-bold bg-tertiary px-3 py-1 rounded-full mt-2 md:mt-0">
                    {exp.type}
                  </span>
                </div>
                <p className="text-secondaryColor font-medium">{exp.period}</p>
                <p className="text-gray-600">{exp.description}</p>

                <p className="text-gray-600">{`성과: ${exp.result}`}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Language Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-primary">
            어학 능력
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {languages.map((lang, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <h4 className="text-xl font-semibold text-primaryColor mb-2">
                  {lang.name}
                </h4>
                <p className="text-2xl font-bold text-secondaryColor mb-2">
                  {lang.score}
                </p>
                <p className="text-gray-600 text-sm">{lang.date}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Education */}
        <div className="">
          <h3 className="text-2xl font-semibold mb-8 text-primary">학력</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold text-primary mb-2">
                  {edu.school}
                </h4>
                <p className="text-secondaryColor font-medium mb-2">
                  {edu.major}
                </p>
                <p className="text-gray-600">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
