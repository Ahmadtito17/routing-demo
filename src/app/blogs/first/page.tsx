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

  export default function FirstBlog() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>First Blog</h1>
        <div style={blogPostStyle}>
          <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Spotify: Transformasi Industri Musik di Era Digital</h2>
          <img src="images/Spotify.png" alt="Gambar Postingan Pertama" style={imageStyle} />
          <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
            Spotify telah menjadi pionir dalam mengubah pola konsumsi musik di era digital. 
            Dengan menyediakan akses mudah dan tak terbatas ke jutaan lagu dari berbagai genre, 
            Spotify memungkinkan pengguna untuk menemukan, memutar, dan menikmati musik favorit 
            mereka di mana pun dan kapan pun. Melalui fitur-fitur seperti daftar putar yang disesuaikan 
            secara personal, saran musik berbasis algoritma, dan berbagai macam stasiun radio, 
            Spotify telah berhasil menciptakan pengalaman mendengarkan yang sangat individual 
            dan disesuaikan dengan preferensi pengguna. Dengan demikian, Spotify tidak hanya 
            menghadirkan kemudahan akses ke musik, tetapi juga menjadi platform utama bagi para musisi 
            dan pencipta konten untuk menjangkau audiens global mereka.
            <br/><br/>
            Selain mengubah cara kita mendengarkan musik, Spotify juga memberikan dampak besar pada 
            industri musik secara keseluruhan. Dengan menyediakan model bisnis berlangganan yang 
            menguntungkan bagi artis dan label rekaman, Spotify telah membantu merestrukturisasi 
            cara pendapatan di industri musik. Di samping itu, Spotify juga menjadi tempat bagi 
            para musisi independen dan baru untuk memperluas jangkauan mereka dan menemukan penggemar 
            baru tanpa perlu melalui proses distribusi fisik yang rumit. Dengan demikian, 
            Spotify tidak hanya mengubah cara kita mengakses musik, tetapi juga membentuk lanskap 
            industri musik modern yang lebih inklusif, dinamis, dan terhubung secara global.
          </p>
        </div>
      </div>
    );
  }