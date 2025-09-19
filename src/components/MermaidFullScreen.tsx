// src/components/MermaidFullscreen.tsx
import React, { useState, useRef, useEffect, JSX } from 'react';
import mermaid from 'mermaid';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface MermaidFullscreenProps {
  chart: string;
  title?: string;
  className?: string;
}

export default function MermaidFullscreen({ 
  chart, 
  title = "Diagram",
  className 
}: MermaidFullscreenProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const normalRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({ startOnLoad: false, theme: 'default' });
  }, []);

  useEffect(() => {
    if (normalRef.current) {
      mermaid.render('mermaid-normal', chart).then(({ svg }) => {
        if (normalRef.current) normalRef.current.innerHTML = svg;
      });
    }
  }, [chart]);

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      mermaid.render('mermaid-modal', chart).then(({ svg }) => {
        if (modalRef.current) modalRef.current.innerHTML = svg;
      });
    }
  }, [isModalOpen, chart]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // ESC key closes modal
  useEffect(() => {
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) closeModal();
    };
    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isModalOpen]);

  const modalStyles: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    padding: '10px'
  };

  const modalContentStyles: React.CSSProperties = {
    backgroundColor: 'white',
    borderRadius: '12px',
    width: '98vw',
    height: '96vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  };

  const modalHeaderStyles: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.5rem 2rem',
    borderBottom: '1px solid #e5e7eb',
    backgroundColor: '#f9fafb',
    borderRadius: '12px 12px 0 0'
  };

  const modalBodyStyles: React.CSSProperties = {
    flex: 1,
    padding: '3rem',
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  };

  const closeButtonStyles: React.CSSProperties = {
    backgroundColor: '#ef4444',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.2s ease'
  };

  return (
    <div className={className}>
      {/* Normal diagram */}
      <div style={{ position: 'relative', border: '1px solid #e1e4e8', borderRadius: '8px', overflow: 'hidden' }}>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          padding: '12px 16px',
          borderBottom: '1px solid #e1e4e8',
          backgroundColor: '#f8f9fa'
        }}>
          <span style={{ fontSize: '14px', fontWeight: '600', color: '#24292f' }}>{title}</span>
          <button 
            onClick={openModal} 
            style={{
              background: 'none',
              border: '1px solid #ccc',
              borderRadius: '6px',
              padding: '6px 12px',
              cursor: 'pointer',
              fontSize: '12px',
              transition: 'all 0.2s ease'
            }} 
            title="Open in full screen"
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f3f4f6'; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
          >
            ⛶ Full Screen
          </button>
        </div>
        <div style={{ padding: '20px', textAlign: 'center', backgroundColor: 'white' }}>
          <div ref={normalRef} />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          style={modalStyles}
          onMouseDown={(e) => {
            // Only close if the click is on the overlay itself
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div style={modalContentStyles} onClick={e => e.stopPropagation()}>
            {/* Modal Header */}
            <div style={modalHeaderStyles}>
              <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#111827' }}>
                {title}
              </h2>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#6b7280' }}>Press ESC to close</span>
                <button 
                  onClick={closeModal}
                  style={closeButtonStyles}
                  onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#dc2626'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ef4444'; }}
                >
                  ✕ Close
                </button>
              </div>
            </div>
            
            {/* Modal Body */}
            <div style={modalBodyStyles}>
              <TransformWrapper
                initialScale={1}
                minScale={0.5}
                maxScale={4}
                wheel={{ step: 0.1 }}
                doubleClick={{ disabled: true }}
              >
                {({ zoomIn, zoomOut, resetTransform }) => (
                  <>
                    {/* Zoom Controls */}
                    <div style={{
                      position: "absolute",
                      top: "100px", 
                      right: "30px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      zIndex: 10000,
                    }}>
                      <button onClick={() => zoomIn()} style={{ padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc", backgroundColor: "#f9fafb", cursor: "pointer", fontSize: "14px", fontWeight: "600" }}>➕</button>
                      <button onClick={() => zoomOut()} style={{ padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc", backgroundColor: "#f9fafb", cursor: "pointer", fontSize: "14px", fontWeight: "600" }}>➖</button>
                      <button onClick={() => resetTransform()} style={{ padding: "8px 12px", borderRadius: "6px", border: "1px solid #ccc", backgroundColor: "#f9fafb", cursor: "pointer", fontSize: "25px", fontWeight: "600" }}>⦾</button>
                    </div>

                    {/* Zoomable diagram */}
                    <TransformComponent>
                      <div
                        ref={modalRef}
                        style={{
                          width: "100%",
                          height: "100%",
                          minWidth: "2450px",
                          minHeight: "1000px",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "flex-start",
                          padding: "2rem",
                          boxSizing: "border-box",
                        }}
                      />
                    </TransformComponent>
                  </>
                )}
              </TransformWrapper>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
