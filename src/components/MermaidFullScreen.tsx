import React, { useState, useRef, useEffect, JSX } from 'react';
import Mermaid from '@theme/Mermaid';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

interface MermaidFullscreenProps {
	chart: string;
	title?: string;
	className?: string;
	maxPreviewHeight?: number;
	useElkLayout?: boolean;
}

export default function MermaidFullscreen({
	chart,
	title = 'Diagram',
	className,
	maxPreviewHeight = 600,
	useElkLayout = false
}: MermaidFullscreenProps): JSX.Element {
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
	const [previewHeight, setPreviewHeight] = useState<number>(500);
	const normalRef = useRef<HTMLDivElement>(null);
	const modalRef = useRef<HTMLDivElement>(null);

	const processedChart = useElkLayout && !chart.includes('layout:')
		? `---\nconfig:\n  layout: elk\n---\n${chart}`
		: chart;

	const configureContainer = (container: HTMLDivElement | null, isModal = false) => {
		if (!container) return;

		const svgElement = container.querySelector('svg');
		if (!svgElement) return;

		const viewBox = svgElement.getAttribute('viewBox');
		let naturalHeight = 500;

		if (viewBox) {
			const viewBoxParts = viewBox.split(' ');
			if (viewBoxParts.length === 4) {
				naturalHeight = parseFloat(viewBoxParts[3]);
			}
		}

		if (!isModal) {
			const adaptiveHeight = Math.max(200, Math.min(maxPreviewHeight, naturalHeight + 40));
			setPreviewHeight(adaptiveHeight);
		}
	};

	useEffect(() => {
		if (!normalRef.current) return;

		const observer = new MutationObserver(() => {
			configureContainer(normalRef.current, false);
		});

		observer.observe(normalRef.current, {
			childList: true,
			subtree: true
		});

		setTimeout(() => configureContainer(normalRef.current, false), 100);

		return () => observer.disconnect();
	}, [processedChart]);

	useEffect(() => {
		if (!isModalOpen || !modalRef.current) return;

		const observer = new MutationObserver(() => {
			configureContainer(modalRef.current, true);
		});

		observer.observe(modalRef.current, {
			childList: true,
			subtree: true
		});

		setTimeout(() => configureContainer(modalRef.current, true), 100);

		return () => observer.disconnect();
	}, [isModalOpen, processedChart]);

	const openModal = () => setIsModalOpen(true);
	const closeModal = () => setIsModalOpen(false);

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
		backgroundColor: 'var(--ifm-background-color)',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 9999,
		padding: '10px'
	};

	const modalContentStyles: React.CSSProperties = {
		backgroundColor: 'white',
		borderRadius: '12px',
		width: '95vw',
		height: '95vh',
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
		padding: '1rem 1.5rem',
		borderBottom: '1px solid var(--ifm-color-emphasis-300)',
		backgroundColor: 'var(--ifm-background-color)',
		borderRadius: '12px 12px 0 0',
		color: 'var(--ifm-color-emphasis-900)',
		flexShrink: 0
	};

	const modalBodyStyles: React.CSSProperties = {
		flex: 1,
		overflow: 'hidden',
		display: 'flex',
		backgroundColor: 'white',
		position: 'relative',
		minHeight: 0
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
		gap: '6px',
		zIndex: 10000,
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		padding: '6px',
		borderRadius: '8px',
		boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
	};

	const zoomButtonBaseStyles: React.CSSProperties = {
		backgroundColor: 'transparent',
		color: 'white',
		border: 'none',
		cursor: 'pointer',
		borderRadius: '4px',
		width: '40px',
		height: '40px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		fontSize: '18px',
		transition: 'all 0.2s ease',
		fontWeight: '400',
		fontFamily: 'system-ui, -apple-system, sans-serif'
	};

	return (
		<div className={className}>
			{/* Preview with Reset + Fullscreen */}
			<TransformWrapper
				initialScale={1}
				minScale={0.1}
				maxScale={5}
				limitToBounds={false}
				centerOnInit={false}
				wheel={{ step: 0.05 }}
				panning={{ velocityDisabled: true }}
			>
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
									⟲ Reset
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
						<div style={{
							height: `${previewHeight}px`,
							backgroundColor: 'white',
							boxSizing: 'border-box',
							overflow: 'hidden',
							transition: 'height 0.3s ease'
						}}>
							<TransformComponent
								wrapperStyle={{
									width: '100%',
									height: '100%'
								}}
								contentStyle={{
									width: '100%',
									height: '100%',
									display: 'flex',
									alignItems: 'flex-start',
									justifyContent: 'flex-start'
								}}
							>
								<div
									ref={normalRef}
									style={{
										width: '100%',
										height: '100%',
										padding: '20px',
										boxSizing: 'border-box',
									}}
								>
									<Mermaid value={processedChart} />
								</div>
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
							<TransformWrapper
								initialScale={1}
								minScale={0.1}
								maxScale={10}
								wheel={{ step: 0.1 }}
								doubleClick={{ disabled: true }}
								limitToBounds={false}
								centerOnInit={false}
								panning={{ velocityDisabled: true }}
							>
								{({ zoomIn, zoomOut, resetTransform }) => (
									<>
										<TransformComponent
											wrapperStyle={{
												width: '100%',
												height: '100%'
											}}
											contentStyle={{
												width: '100%',
												height: '100%',
												cursor: 'grab'
											}}
										>
											<div
												ref={modalRef}
												style={{
													width: '100%',
													height: '100%',
													padding: '2rem',
													boxSizing: 'border-box',
												}}
											>
												<Mermaid value={processedChart} />
											</div>
										</TransformComponent>

										{/* Zoom controls positioned at top-right */}
										<div style={zoomControlsStyles}>
											<button
												style={zoomButtonBaseStyles}
												onClick={() => zoomIn()}
												title="Zoom in"
												onMouseEnter={(e) => {
													e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
												}}
												onMouseLeave={(e) => {
													e.currentTarget.style.backgroundColor = 'transparent';
												}}
											>
												+
											</button>
											<button
												style={zoomButtonBaseStyles}
												onClick={() => zoomOut()}
												title="Zoom out"
												onMouseEnter={(e) => {
													e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
												}}
												onMouseLeave={(e) => {
													e.currentTarget.style.backgroundColor = 'transparent';
												}}
											>
												−
											</button>
											<div style={{
												height: '1px',
												backgroundColor: 'rgba(255, 255, 255, 0.3)',
												margin: '2px 0'
											}} />
											<button
												style={zoomButtonBaseStyles}
												onClick={() => resetTransform()}
												title="Reset zoom"
												onMouseEnter={(e) => {
													e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
												}}
												onMouseLeave={(e) => {
													e.currentTarget.style.backgroundColor = 'transparent';
												}}
											>
												⟲
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
