// components/Logo.js
export default function Logo() {
    return (
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '5px 10px',
          borderRadius: '5px',
        }}
      >
        <img
          src="https://www.theeroticreview.com/site_listing/reviewed_seal.gif"
          alt="TER"
          style={{
            width: '50px',
            height: '50px',
            objectFit: 'contain',
          }}
        />
      </div>
    );
  }
  