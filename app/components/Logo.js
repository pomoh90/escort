// components/Logo.js
export default function Logo() {
    return (
      <div
        style={{
          position: 'absolute',
          bottom: '50px',
          right: '10px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: '5px',
          borderRadius: '5px',
        }}
      >
        <a
          href="https://www.theeroticreview.com/reviews/show.asp?id=401194"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img
          src="https://www.theeroticreview.com/site_listing/reviewed_seal.gif"
          alt="TER"
          style={{
            width: '40px',
            height: '40px',
            objectFit: 'contain',
          }}
        />
        </a>
      </div>
    );
  }
  