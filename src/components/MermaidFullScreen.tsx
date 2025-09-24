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

	// Initialize mermaid
	useEffect(() => {
		mermaid.initialize({
			startOnLoad: false,
			theme: 'default',
			flowchart: { useMaxWidth: true, curve: 'basis' }
		});
	}, []);

	// Render normal preview
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

	// Render modal preview
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

	// Modal styles
	const modalStyles: React.CSSProperties = {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '100%',
		height: '100%',
		backgroundColor: 'var(--ifm-background-color)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 9999,
		padding: '10px'
	};
	//colour of the side in full screen
	const modalContentStyles: React.CSSProperties = {
		backgroundColor: 'white',
		borderRadius: '12px',
		width: '90vw',
		height: '90vh',
		display: 'flex',
		flexDirection: 'column',
		overflow: 'hidden',
		border: '1px solid var(--ifm-color-emphasis-300)',
		boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.1), 0 20px 25px rgba(0, 0, 0, 0.15)'
	};

	const modalHeaderStyles: React.CSSProperties = {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: '1.5rem 2rem',
		borderBottom: '1px solid var(--ifm-color-emphasis-300)',
		backgroundColor: 'var(--ifm-background-color)',
		borderRadius: '12px 12px 0 0',
		color: 'var(--ifm-color-emphasis-900)'
	};

	const modalBodyStyles: React.CSSProperties = {
		flex: 1,
		overflow: 'hidden',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'white',
		position: 'relative'
	};

	const closeButtonStyles: React.CSSProperties = {
		backgroundColor: 'var(--ifm-color-danger)',
		color: 'white',
		border: 'none',
		borderRadius: '8px',
		padding: '10px 20px',
		cursor: 'pointer',
		fontSize: '14px',
		fontWeight: '500',
		transition: 'all 0.2s ease'
	};

	const zoomControlsStyles: React.CSSProperties = {
		position: 'absolute',
		top: '20px',
		right: '20px',
		display: 'flex',
		flexDirection: 'column',
		gap: '8px',
		zIndex: 10000,
		backgroundColor: 'white',
		padding: '8px',
		borderRadius: '8px',
		border: '1px solid var(--ifm-color-emphasis-300)',
		boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
	};

	const zoomButtonStyles: React.CSSProperties = {
		backgroundColor: 'white',
		color: 'var(--ifm-color-emphasis-900)',
		border: '1px solid var(--ifm-color-emphasis-400)',
		cursor: 'pointer',
		borderRadius: '6px',
		width: '36px',
		height: '36px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '16px',
		transition: 'all 0.2s ease',
		fontWeight: '600'
	};

	const resetButtonStyles: React.CSSProperties = {
		backgroundColor: 'white',
		color: 'var(--ifm-color-emphasis-900)',
		border: '1px solid var(--ifm-color-emphasis-400)',
		borderRadius: '6px',
		cursor: 'pointer',
		fontSize: '14px',
		width: '36px',
		height: '36px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		transition: 'all 0.2s ease',
		fontWeight: '600'
	};

	return (
		<div className={className}>
			{/* Preview with Reset + Fullscreen */}
			<TransformWrapper initialScale={1} minScale={0.5} maxScale={4}>
				{({ resetTransform }) => (
					<div style={{ position: 'relative', border: '1px solid var(--ifm-color-emphasis-400)', borderRadius: '8px', overflow: 'hidden' }}>
						{/* Header */}
						<div style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							padding: '12px 16px',
							borderBottom: '1px solid var(--ifm-color-emphasis-300)',
							backgroundColor: 'var(--ifm-background-color)'
						}}>
							<span style={{ fontSize: '14px', fontWeight: '600', color: 'var(--ifm-color-emphasis-900)' }}>
								{title}
							</span>
							<div style={{ display: 'flex', gap: '8px' }}>
								<button
									onClick={() => resetTransform()}
									style={{
										background: 'none',
										border: '1px solid var(--ifm-color-emphasis-400)',
										borderRadius: '6px',
										padding: '6px 12px',
										cursor: 'pointer',
										fontSize: '12px',
										color: 'var(--ifm-color-emphasis-900)',
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
										border: '1px solid var(--ifm-color-emphasis-300)',
										borderRadius: '6px',
										padding: '6px 12px',
										cursor: 'pointer',
										fontSize: '12px',
										color: 'var(--ifm-color-emphasis-900)',
										transition: 'all 0.2s ease'
									}}
									title="Open in full screen"
								>
									⛶ Full Screen
								</button>
							</div>
						</div>

						{/* Preview body */}
						<div style={{ height: '600px', backgroundColor: 'white', boxSizing: 'border-box' }}>
							<TransformComponent>
								<div
									ref={normalRef}
									style={{
										height: '700px',
										width: '900px',
										padding: '20px',
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
							<h2 style={{ margin: 0, fontSize: '20px', fontWeight: '700' }}>{title}</h2>
							<div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
								<span style={{ fontSize: '12px', color: 'var(--ifm-color-emphasis)' }}>Press ESC to close</span>
								<button onClick={closeModal} style={closeButtonStyles}>
									✕ Close
								</button>
							</div>
						</div>
						<div style={modalBodyStyles}>
							<TransformWrapper initialScale={1} minScale={0.5} maxScale={4} wheel={{ step: 0.1 }} doubleClick={{ disabled: true }}>
								{({ zoomIn, zoomOut, resetTransform }) => (
									<>
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

										{/* Zoom controls positioned at top-right */}
										<div style={zoomControlsStyles}>
											<button
												style={zoomButtonStyles}
												onClick={() => zoomIn()}
												title="Zoom in"
												onMouseEnter={(e) => {
													e.currentTarget.style.backgroundColor = 'var(--ifm-color-emphasis-200)';
												}}
												onMouseLeave={(e) => {
													e.currentTarget.style.backgroundColor = 'white';
												}}
											>
												➕
											</button>
											<button
												style={zoomButtonStyles}
												onClick={() => zoomOut()}
												title="Zoom out"
												onMouseEnter={(e) => {
													e.currentTarget.style.backgroundColor = 'var(--ifm-color-emphasis-200)';
												}}
												onMouseLeave={(e) => {
													e.currentTarget.style.backgroundColor = 'white';
												}}
											>
												➖
											</button>
											<button
												style={resetButtonStyles}
												onClick={() => resetTransform()}
												title="Reset zoom"
												onMouseEnter={(e) => {
													e.currentTarget.style.backgroundColor = 'var(--ifm-color-emphasis-200)';
												}}
												onMouseLeave={(e) => {
													e.currentTarget.style.backgroundColor = 'white';
												}}
											>
												⦾
											</button>
										</div>
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
