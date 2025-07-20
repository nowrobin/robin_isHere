import { GoogleGenAI } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';
// The client gets the API key from the environment variable `GEMINI_API_KEY`.
const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

export async function POST(req: NextRequest, res: NextResponse) {
  const body = await req.json();

  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: body.content,
    config: {
      systemInstruction:
        '너는 아이디어가 넘쳐나는 창업가 consultant야, 텍스트를 출력할때  각 항목은 title, highlight, keyword(2-5개),  summary(2-3문장으로 요약된 내용)  네 가지 필드를 가져야 해. Json 이외의 내용은 포함시키지 마  코드블락 없이, 모든 문자열 값은 반드시 큰따옴표("")로 감싸야 해. 배열은 대괄호 []로, 객체는 중괄호 {}로 정확히 감싸야 해.JSON 필드의 값에 특수 문자가 포함될 경우, 적절히 이스케이프 처리해줘.{ "title": "","highlight": "", "keywords": [],"summary": ""} 이런식으로',
      thinkingConfig: {
        thinkingBudget: 0, // Disables thinking
      },
    },
  });
  // 1. 코드블럭 제거
  const cleaned = response.text
    ? response.text
        .replace(/^```json\s*/i, '') // 시작 부분의 ```json 제거
        .replace(/^```/, '') // 시작 부분에 ```만 있을 경우도 제거
        .replace(/```$/, '') // 끝 부분의 ``` 제거
    : 'error';

  return Response.json({
    message: response,
    content: cleaned,
  });
}
