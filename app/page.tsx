export default function HomePage() {
  const images = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.png",
    "/6.png",
  ];

  return (
    <main
      style={{
        background: "#06152b",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "60px",
            color: "#3b82f6",
            marginBottom: "10px",
          }}
        >
          AMICO VIỆT NAM
        </h1>

        <p style={{ fontSize: "22px", opacity: 0.8 }}>
          Connecting Industrial Flow
        </p>
      </div>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "40px",
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            style={{
              background: "#0b1f3a",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 0 30px rgba(0,0,0,0.4)",
            }}
          >
            <img
              src={img}
              alt={`AMICO ${index + 1}`}
              style={{
                width: "100%",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
