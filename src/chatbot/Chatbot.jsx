import React, { useState } from 'react';
import Modal from 'react-modal';

const Chatbot = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
    
      <button
        onClick={openModal}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          fontSize: '24px',
          cursor: 'pointer',
          boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
          zIndex: 1000, 
        }}
      >
        💬
      </button>

       {/* Modal for Chatbot  */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            position: 'fixed',
            bottom: '100px', 
            right: '20px',
            width: '350px',
            height: '430px',
            padding: '0',
            border: 'none',
            borderRadius: '10px',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)',
            overflow: 'hidden',
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          },
        }}
        ariaHideApp={false}
      >
        <div style={{ position: 'relative', height: '100%' }}>
          <button
            onClick={closeModal}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              fontSize: '18px',
              cursor: 'pointer',
              zIndex: 1,
            }}
          >
            ✖
          </button>
          <iframe
            allow="microphone;"
            width="100%"
            height="100%"
            src="https://console.dialogflow.com/api-client/demo/embedded/04a38676-8da7-49ec-9171-e01228a5258d"
            title="Dialogflow Chatbot"
            style={{ border: 'none' }}
          />
        </div>
      </Modal>
    </div>
  );
};

export default Chatbot;
