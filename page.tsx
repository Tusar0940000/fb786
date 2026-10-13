'use client';

import { useState } from "react";

const games = [
  { title: "লাইভ সেন্টার", tag: "DEMO", icon: "◉" },
  { title: "স্পোর্টস", tag: "PREVIEW", icon: "⚽" },
  { title: "গেম লাইব্রেরি", tag: "DEMO", icon: "▦" },
  { title: "অফার ও আপডেট", tag: "INFO", icon: "✦" },
];

export default function Home() {
  const [view, setView] = useState<"home" | "login" | "register" | "admin">("home");
  const [notice, setNotice] = useState("");

  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#" onClick={(e) => {e.preventDefault(); setView("home");}}>
          <span className="brand-mark">7</span><span>fb<span className="gold">786</span></span>
        </a>
        <nav><a href="#games">এক্সপ্লোর</a><a href="#about">আমাদের সম্পর্কে</a></nav>
        <div className="actions">
          <button className="btn btn-ghost" onClick={() => setView("login")}>লগইন</button>
          <button className="btn btn-gold" onClick={() => setView("register")}>রেজিস্টার</button>
        </div>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="dot" /> fb786 · PLATFORM PREVIEW</div>
          <h1>আপনার <span className="gold">নতুন</span><br/>ডিজিটাল অভিজ্ঞতা</h1>
          <p>নিজস্ব ব্র্যান্ড, পরিষ্কার ইন্টারফেস এবং মোবাইল-উপযোগী অভিজ্ঞতা। এটি একটি ডেমো—এখানে বাস্তব অর্থের লেনদেন বা বেটিং চালু নেই।</p>
          <div className="hero-actions">
            <button className="btn btn-gold btn-large" onClick={() => setView("register")}>অ্যাকাউন্ট দেখুন <span>↗</span></button>
            <button className="btn btn-ghost btn-large" onClick={() => setView("admin")}>অ্যাডমিন ডেমো</button>
          </div>
          <div className="trust-row"><span>✓ Responsive design</span><span>✓ Demo environment</span><span>✓ Secure-by-design roadmap</span></div>
        </div>
        <div className="hero-panel">
          <div className="panel-top"><span>FB786 / OVERVIEW</span><span className="live-pill">● DEMO</span></div>
          <div className="orb"><div className="orb-inner">786</div></div>
          <div className="panel-caption"><span>WELCOME TO</span><strong>YOUR PLATFORM</strong></div>
          <div className="panel-stats"><div><small>STATUS</small><b>Preview</b></div><div><small>ACCESS</small><b>Demo only</b></div></div>
        </div>
      </section>

      {view !== "home" && (
        <section className="modal-wrap">
          <div className="modal">
            <button className="close" onClick={() => {setView("home"); setNotice("");}}>×</button>
            {view === "login" && <><div className="eyebrow">MEMBER AREA</div><h2>লগইন</h2><p>এটি শুধু ইন্টারফেস ডেমো; কোনো পাসওয়ার্ড সার্ভারে যাচাই হয় না।</p><form onSubmit={(e) => {e.preventDefault(); setNotice("ডেমো: আসল লগইন এখনো সংযুক্ত করা হয়নি।");}}><label>ইউজারনেম বা ইমেইল</label><input required placeholder="আপনার ইউজারনেম"/><label>পাসওয়ার্ড</label><input required type="password" placeholder="পাসওয়ার্ড"/><button className="btn btn-gold full">ডেমো লগইন</button></form></>}
            {view === "register" && <><div className="eyebrow">JOIN FB786</div><h2>অ্যাকাউন্ট তৈরি</h2><p>ডেমো ফর্ম—বাস্তব অ্যাকাউন্ট তৈরি হবে না।</p><form onSubmit={(e) => {e.preventDefault(); setNotice("ডেমো: রেজিস্ট্রেশন ব্যাকএন্ড এখনো যুক্ত করা হয়নি।");}}><label>নাম</label><input required placeholder="আপনার নাম"/><label>ইমেইল</label><input required type="email" placeholder="name@example.com"/><label>পাসওয়ার্ড</label><input required type="password" minLength={8} placeholder="কমপক্ষে ৮ অক্ষর"/><button className="btn btn-gold full">ডেমো রেজিস্টার</button></form></>}
            {view === "admin" && <><div className="eyebrow">CONTROL CENTER</div><h2>অ্যাডমিন ড্যাশবোর্ড</h2><p>নমুনা ডেটা; এখানে কোনো বাস্তব ইউজার বা লেনদেন নেই।</p><div className="admin-grid"><div><small>মোট সদস্য</small><b>1,284</b></div><div><small>সাইট স্ট্যাটাস</small><b>Demo</b></div><div><small>সিস্টেম লগ</small><b>24 entries</b></div><div><small>সাপ্লায়ার</small><b>Not connected</b></div></div><p className="admin-note">প্রোডাকশন অ্যাডমিন প্যানেলে নিরাপদ লগইন, role-based permissions, audit logs ও database সংযোগ লাগবে।</p></>}
            {notice && <div className="notice">{notice}</div>}
          </div>
        </section>
      )}

      <section className="section" id="games">
        <div className="section-heading"><div><div className="eyebrow">EXPLORE THE PLATFORM</div><h2>প্ল্যাটফর্মের বিভাগ</h2></div><span className="muted">DEMO CONTENT ONLY</span></div>
        <div className="cards">{games.map((g) => <article className="game-card" key={g.title}><div className="game-icon">{g.icon}</div><div><span className="card-tag">{g.tag}</span><h3>{g.title}</h3><p>আপনার ব্র্যান্ড অনুযায়ী পরে কনফিগার করা যাবে।</p></div><span className="arrow">↗</span></article>)}</div>
      </section>

      <section className="bottom-banner" id="about"><div><div className="eyebrow">BUILT FOR FB786</div><h2>একটি শক্ত ভিত্তি দিয়ে শুরু করুন</h2><p>বৈধ অনুমোদন ও সাপ্লায়ার নিশ্চিত হলে পরবর্তী পর্যায়ে নিরাপদ সার্ভার, ডেটাবেস ও ইন্টিগ্রেশন পরিকল্পনা করা যাবে।</p></div><button className="btn btn-gold" onClick={() => setView("admin")}>ড্যাশবোর্ড দেখুন ↗</button></section>
      <footer><a className="brand" href="#"><span className="brand-mark">7</span><span>fb<span className="gold">786</span></span></a><span>© 2026 fb786 · Demo build</span><span>Demo only · No real-money transactions</span></footer>
    </main>
  );
}
