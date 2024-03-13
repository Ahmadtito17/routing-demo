const blogPostStyle = {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px'
  };
  
  const imageStyle = {
    maxWidth: '100%',
    height: 'auto',
    marginBottom: '10px',
  };
  
  export default function Blog() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Blog</h1>
        <p>Welcome to My Blog!</p>
        <div style={blogPostStyle}>
          <h2>Spotify: Transformasi Industri Musik di Era Digital</h2>
          <img src="images/Spotify.png" alt="Gambar Postingan Pertama" style={imageStyle} />
          <p>Di tengah persaingan sengit antara platform streaming, Spotify muncul sebagai pemimpin tak 
            terbantahkan, membawa pergeseran besar dalam lanskap industri musik global.</p>
        </div>
        <div style={blogPostStyle}>
          <h2>Timnas Indonesia: Perjalanan Menuju Puncak Prestasi di Kancah Sepak Bola Internasional</h2>
          <img src="images/Timnas.jpg" alt="Gambar Postingan Kedua" style={imageStyle} />
          <p>Dari tribun stadion hingga panggung internasional, Timnas Indonesia menggelar perjalanan 
            luar biasa yang tidak hanya menginspirasi, tetapi juga menantang batas-batas kemampuan mereka 
            dalam mengejar impian besar.</p>
        </div>
      </div>
    );
  }