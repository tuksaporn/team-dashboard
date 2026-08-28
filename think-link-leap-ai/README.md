# THINK • LINK • LEAP AI
Innovation Powered by AI

ระบบรับปัญหาจากผู้ประกอบการเพียงช่องเดียว แล้ววิเคราะห์เป็น Problem Diagnosis, Root Cause Hypotheses, Impact Assessment, Evidence Gap, 7-Point Research Canvas, Research, Expert, Technology, Lab/Testing, Standard, Funding, Innovation Concept, 90-Day Action Plan และ Next Best Action

## AI safety / source policy
- ไม่แต่งแหล่งอ้างอิง นักวิจัย ผู้เชี่ยวชาญ Lab มาตรฐาน ทุน หรือสถิติ
- แยก Evidence, AI Analysis, AI Recommendation และ Needs Validation
- Root Cause เป็น hypothesis จนกว่าจะมี evidence
- ข้อมูลทุนและข้อมูลที่เปลี่ยนตามเวลาต้องตรวจแหล่งทางการล่าสุดก่อนนำไปใช้จริง

## Deployment
ต้องตั้ง Environment Variable บน Vercel:
- `OPENAI_API_KEY` = OpenAI API key ของเจ้าของระบบ
- `OPENAI_MODEL` = optional; default `gpt-4o-mini`

ห้ามใส่ API key ใน HTML/JavaScript ฝั่ง client
