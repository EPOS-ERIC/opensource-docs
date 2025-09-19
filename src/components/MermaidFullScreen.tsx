// src/components/MermaidFullscreen.tsx
import React, { useState, useRef, useEffect, JSX } from 'react';
import mermaid from 'mermaid';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

interface MermaidFullscreenProps {
  chart: string;
  title?: string;
  className?: string;
}

export default function MermaidFullscreen({ chart, title = 'Diagram', className }: MermaidFullscreenProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const normalRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: 'default',
      flowchart: { useMaxWidth: true, curve: 'basis' }
    });
  }, []);

  useEffect(() => {
    if (normalRef.current) {
      mermaid.render('mermaid-normal', chart).then(({ svg }) => {
        normalRef.current!.innerHTML = svg;
        const svgElement = normalRef.current!.querySelector('svg')!;
        svgElement.style.width = '100%';
        svgElement.style.height = 'auto';
        svgElement.style.transform = 'scale(1)';
        svgElement.style.transformOrigin = 'top left';
      });
    }
  }, [chart]);

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      mermaid.render('mermaid-modal', chart).then(({ svg }) => {
        modalRef.current!.innerHTML = svg;
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
    backgroundColor: 'rgba(0,0,0,0.95)',
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
    boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25)'
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
      {/* Preview with Reset + Fullscreen */}
      <TransformWrapper initialScale={1} minScale={0.5} maxScale={4}>
        {({ resetTransform }) => (
          <div style={{ position: 'relative', border: '1px solid #e1e4e8', borderRadius: '8px', overflow: 'hidden' }}>
            {/* Header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 16px',
              borderBottom: '1px solid #e1e4e8',
              backgroundColor: '#f8f9fa'
            }}>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#24292f' }}>
                {title}
              </span>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => resetTransform()}
                  style={{
                    background: 'none',
                    border: '1px solid #ccc',
                    borderRadius: '6px',
                    padding: '6px 12px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    transition: 'all 0.2s ease'
                  }}
                  title="Reset zoom"
                >
                  ⦾ Reset
                </button>
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
                >
                  ⛶ Full Screen
                </button>
              </div>
            </div>

            {/* Preview body */}
            <div style={{ height: '600px', backgroundColor: 'white', padding: '20px', boxSizing: 'border-box' }}>
              <TransformComponent>
                <div
                  ref={normalRef}
                  style={{
                    height: '700px',
                    width: '900px',
                    justifyContent: 'center'
                  }}
                />
              </TransformComponent>
            </div>
          </div>
        )}
      </TransformWrapper>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div style={modalStyles} onMouseDown={(e) => { if (e.target === e.currentTarget) closeModal(); }}>
          <div style={modalContentStyles} onClick={(e) => e.stopPropagation()}>
            <div style={modalHeaderStyles}>
              <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: '#111827' }}>{title}</h2>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#6b7280' }}>Press ESC to close</span>
                <button onClick={closeModal} style={closeButtonStyles}>
                  ✕ Close
                </button>
              </div>
            </div>
            <div style={modalBodyStyles}>
              <TransformWrapper initialScale={1} minScale={0.5} maxScale={4} wheel={{ step: 0.1 }} doubleClick={{ disabled: true }}>
                {({ zoomIn, zoomOut, resetTransform }) => (
                  <>
                    {/* Zoom buttons only in fullscreen */}
                    <div style={{
                      position: "absolute",
                      top: "100px",
                      right: "30px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      zIndex: 10000,
                    }}>
                      <button onClick={() => zoomIn()}>➕</button>
                      <button onClick={() => zoomOut()}>➖</button>
                      <button onClick={() => resetTransform()}>⦾</button>
                    </div>

                    <TransformComponent>
                      <div
                        ref={modalRef}
                        style={{
                          width: '100%',
                          height: '100%',
                          minWidth: '1900px',
                          minHeight: '1000px',
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'flex-start',
                          padding: '2rem',
                          boxSizing: 'border-box',
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
