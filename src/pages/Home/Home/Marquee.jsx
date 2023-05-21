import React from 'react';

const Marquee = () => {
    return (
        <div className="bg-gray-200">
          <div className="container mx-auto py-4">
            <div className="marquee">
              <span className="inline-block px-4 py-2">Item 1</span>
              <span className="inline-block px-4 py-2">Item 2</span>
              <span className="inline-block px-4 py-2">Item 3</span>
              <span className="inline-block px-4 py-2">Item 4</span>
              <span className="inline-block px-4 py-2">Item 5</span>
              {/* Add more items as needed */}
            </div>
          </div>
        </div>
      );
};

export default Marquee;