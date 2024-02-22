import React from 'react'
import Navbar from './Navbar';
import TopHeader from './TopHeader';

export default function Header() {
  return (
    <div
      style={{ borderBottom: "0.5px solid rgba(0,0,0,0.3)" }}
      className="h-[142px] bg-[#fafafa]"
    >
      <TopHeader />
      <Navbar />
    </div>
  );
}
