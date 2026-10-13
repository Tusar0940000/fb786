# fb786 — Starter Project (ডেমো)

এটি fb786 ব্র্যান্ডের জন্য একটি **নিরাপদ প্রাথমিক UI starter**। এতে আছে:
- responsive homepage
- demo login/register screen
- demo admin dashboard UI
- fake/demo data only

**এটি production betting/payment platform নয়।** কোনো বাস্তব টাকা, ডিপোজিট, উইথড্রয়াল, বেটিং বা গেম-সরবরাহকারী ইন্টিগ্রেশন নেই। বাস্তব ব্যবহারের আগে আইনগত অনুমোদন, লাইসেন্স, নিরাপত্তা পরীক্ষা এবং অনুমোদিত সরবরাহকারীর লিখিত চুক্তি লাগবে।

## চালানোর নিয়ম

প্রয়োজন: Node.js 20+ এবং npm।

1. ZIP extract করুন।
2. কম্পিউটারে project folder খুলুন।
3. টার্মিনালে চালান:

```bash
npm install
npm run dev
```

4. ব্রাউজারে খুলুন: `http://localhost:3000`

## গুরুত্বপূর্ণ

এই starter-এ login UI ডেমো; এটি আসল authentication নয়। Production-এ চালানোর আগে:
- server-side authentication (যেমন Auth.js বা অনুমোদিত identity provider)
- role-based authorization (admin/member)
- PostgreSQL database ও migrations
- rate limiting, CSRF/security headers, audit log
- secrets environment variables-এ রাখা
- automated tests, backup/restore ও security review
প্রয়োজন।

## পরবর্তী ধাপ

1. আপনার ব্র্যান্ডের logo/রং নিশ্চিত করুন।
2. বৈধ supplier ও প্রযোজ্য লাইসেন্স/আইন যাচাই করুন।
3. supplier-এর official API/docs ও written permission পাওয়ার পর integration design করুন।
4. production hosting ও domain নির্বাচন করুন।
