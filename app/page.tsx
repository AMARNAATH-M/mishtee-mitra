"use client";

import React, { useState, useEffect } from 'react';

export default function DeliveryDashboard() {
  const [isPulsing, setIsPulsing] = useState(true);

  // Simulates the pulsing animation using React State and Inline Transitions
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing((prev) => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // --- Styles Objects ---
  const styles = {
    pageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      margin: 0,
      padding: 0,
    },
    mobileWrapper: {
      width: '100%',
      maxWidth: '500px',
      backgroundColor: '#ffffff',
      minHeight: '100vh', // Full height on mobile
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '24px',
      boxSizing: 'border-box',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      position: 'relative',
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: '32px',
      width: '100%',
    },
    logo: {
      width: '80px',
      height: 'auto',
      marginBottom: '16px',
      objectFit: 'contain',
    },
    title: {
      fontSize: '24px',
      fontWeight: '700',
      color: '#FF6B00', // MishTee Orange
      margin: 0,
      textAlign: 'center',
    },
    statusContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E8F5E9',
      padding: '8px 16px',
      borderRadius: '20px',
      marginBottom: '32px',
      border: '1px solid #C8E6C9',
    },
    statusDot: {
      width: '10px',
      height: '10px',
      backgroundColor: '#2E7D32',
      borderRadius: '50%',
      marginRight: '8px',
      // Inline Transition for pulsing effect
      opacity: isPulsing ? 1 : 0.4,
      transform: isPulsing ? 'scale(1.2)' : 'scale(1)',
      transition: 'all 1s ease-in-out',
    },
    statusText: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#2E7D32',
    },
    card: {
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '24px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
      border: '1px solid #eee',
      boxSizing: 'border-box',
    },
    cardLabel: {
      fontSize: '12px',
      textTransform: 'uppercase',
      color: '#888',
      letterSpacing: '1px',
      marginBottom: '8px',
      fontWeight: '600',
    },
    customerName: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#333',
      marginBottom: '4px',
    },
    orderDetails: {
      fontSize: '14px',
      color: '#666',
      lineHeight: '1.5',
    },
    button: {
      width: '100%',
      padding: '16px',
      backgroundColor: '#FF6B00',
      color: '#fff',
      border: 'none',
      borderRadius: '12px',
      fontSize: '18px',
      fontWeight: '600',
      cursor: 'pointer',
      boxShadow: '0 4px 6px rgba(255, 107, 0, 0.2)',
      marginTop: 'auto', // Pushes button to bottom if content is short
      marginBottom: '20px',
      transition: 'transform 0.2s',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.mobileWrapper}>
        
        {/* Header Section */}
        <header style={styles.header}>
          <img 
            src="https://raw.githubusercontent.com/sudhir-voleti/mishtee-magic/main/mishTee_logo.png" 
            alt="MishTee Magic Logo" 
            style={styles.logo} 
          />
          <h1 style={styles.title}>mishTee Delivery Mitra</h1>
        </header>

        {/* Status Indicator */}
        <div style={styles.statusContainer}>
          <div style={styles.statusDot} />
          <span style={styles.statusText}>Agent Online</span>
        </div>

        {/* Task Card */}
        <div style={styles.card}>
          <div style={styles.cardLabel}>Current Task</div>
          <div style={styles.customerName}>Deliver to: Arjun Mehta</div>
          <div style={styles.orderDetails}>
            Order #4402 • 2 Items<br />
            Estimated Earnings: ₹45
          </div>
        </div>

        {/* Action Button */}
        <button 
          style={styles.button}
          onClick={() => alert('Navigation Started!')}
          onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.98)'}
          onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          Start Navigation
        </button>

      </div>
    </div>
  );
}
