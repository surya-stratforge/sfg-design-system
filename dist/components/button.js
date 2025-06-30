import React from 'react';

const Button = ({ children, onClick }) => {
    return (React.createElement("button", { className: "rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700", onClick: onClick }, children));
};

export { Button };
//# sourceMappingURL=button.js.map
