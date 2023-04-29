import React from 'react';

const AllMessages = () => {
  return (
    <>
    <div>
    <iframe width="350" height="430" allow="microphone;" src="https://console.dialogflow.com/api-client/demo/embedded/e2de5003-5311-4613-8a38-1fb91c46db31"></iframe>
   </div>

    <section>
      <div className="container mx-auto px-4 sm:px-8 max-w-full sm:max-w-5xl">
        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full">
          <h2 className="font-display text-teal-700 text-2xl leading-tight">
            Messages
          </h2>
        </div>
      </div>
    </section>
    </>
  );
};

export default AllMessages;
