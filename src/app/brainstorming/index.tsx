// 'use client';
// import Drawing from '@/components/drawing';
// import Header from '@/components/ui/header';
// import { useEffect, useState } from 'react';
// import { IdeaArraySchema } from '@/schemas/contentDetailSchema';
// import { ContentDetails } from '@/types/content';

// export default function Home() {
//   const [message, setMessage] = useState<string[]>([]);
//   const [prompt, setPrompt] = useState<string>('');
//   const [promptList, setPromptList] = useState<string[]>([]);
//   const [contentDetails, setContentDetails] = useState<ContentDetails[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   useEffect(() => {
//     // const fetchGemini = async () => {
//     //   const response = await fetch('/api/textGenerator', {
//     //     method: 'POST',
//     //     headers: {
//     //       'Content-Type': 'application/json',
//     //     },
//     //     body: JSON.stringify({
//     //       content:
//     //         '쇼핑몰을 만들어서 가격을 비교하는 서비스를 만들고 싶어. 어떤 아이디어가 있을까?',
//     //     }),
//     //   });
//     //   const data = await response.json();
//     //   console.log(data.data.content);
//     //   setMessage((prev) => [...prev, data.data.content]);
//     // };
//     // fetchGemini();
//   }, []);

//   const handlePromptChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPrompt(e.currentTarget.value);
//   };
//   const handleSubmit = async () => {
//     setLoading(true);
//     setPromptList((prev) => [...prev, prompt]);
//     const response = await fetch('/api/textGenerator', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         content: prompt,
//       }),
//     });
//     setPrompt('');
//     const data = await response.json();
//     const content = data.content;
//     setMessage((prev) => [...prev, content]);
//     const parsedContent = JSON.parse(content);
//     const validatedContent = IdeaArraySchema.safeParse(parsedContent);
//     if (!validatedContent.success) {
//       console.error('❌ Zod 검증 실패:', validatedContent.error.format());
//       throw new Error('Zod validation failed');
//     }
//     setContentDetails((prev) => [...prev, ...validatedContent.data]);
//     setLoading(false);
//   };
//   return (
//     <div className="w-screen h-screen mx-auto mt-10">
//       {/* <Drawing /> */}
//       <div>
//         <input
//           type="text"
//           onChange={handlePromptChange}
//           placeholder="원하는 질문을 해봐"
//         />
//         <button type="submit" onClick={handleSubmit}>
//           질문하기
//         </button>
//       </div>

//       {/* {message.map((msg, index) => (
//         <div key={index} className="text-lg">
//           {msg}
//         </div>
//       ))} */}
//       {loading ? (
//         <div className="text-lg">로딩중...</div>
//       ) : (
//         // <div>
//         //   {contentDetails.map((idea, index) => (
//         //     <div
//         //       className="p-6 bg-white rounded-lg shadow-md space-y-4"
//         //       key={index}
//         //     >
//         //       <h2 className="text-2xl font-bold text-blue-700">{idea.title}</h2>

//         //       <p className="text-green-600 font-medium">{idea.highlight}</p>

//         //       <div className="flex flex-wrap gap-2">
//         //         {idea.keywords.map((word, index) => (
//         //           <span
//         //             key={index}
//         //             className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
//         //           >
//         //             #{word}
//         //           </span>
//         //         ))}
//         //       </div>

//         //       <p className="text-gray-700">{idea.summary}</p>
//         //     </div>
//         //   ))}
//         // </div>
//         <Drawing contentDetails={contentDetails} rootNode={promptList[0]} />
//       )}
//     </div>
//   );
// }
