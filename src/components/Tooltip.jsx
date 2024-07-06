import React, { useState } from 'react';

const Tooltip = ({ children, content }) => {
    const [visible, setVisible] = useState(false);

    const showTooltip = () => setVisible(true);
    const hideTooltip = () => setVisible(false);

    return (
        <div className="absolute inline-block">
            <div
                onMouseEnter={showTooltip}
                onMouseLeave={hideTooltip}
                className="cursor-pointer"
            >
                {children}
            </div>
            {visible && (
                <div className="absolute z-10 px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm transition-opacity duration-300 opacity-100 dark:bg-gray-700" style={{ bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: '5px' }}>
                    {content}
                    <div className="tooltip-arrow" style={{ position: 'absolute', top: '100%', left: '50%', transform: 'translateX(-50%)', width: '0', height: '0', borderLeft: '5px solid transparent', borderRight: '5px solid transparent', borderTop: '5px solid #1f2937' }}></div>
                </div>
            )}
        </div>
    );
};

export default Tooltip;
