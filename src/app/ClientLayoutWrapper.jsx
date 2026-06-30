"use client";

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import FloatingOrderSidebar from '../components/FloatingOrderSidebar';

export default function ClientLayoutWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-primary-bg text-gray-200 font-sans selection:bg-gold selection:text-primary-dark">
      <AnimatePresence mode="wait">
        {loading && <Preloader />}
      </AnimatePresence>
      <Navbar />
      {children}
      {!loading && <FloatingOrderSidebar />}
      <Footer />
    </div>
  );
}
