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

  export default function SecondBlog() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '32px', marginBottom: '20px' }}>Second Blog</h1>
        <div style={blogPostStyle}>
          <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Timnas Indonesia: Perjalanan Menuju Puncak Prestasi di Kancah Sepak Bola Internasional</h2>
          <img src="images/Timnas.jpg" alt="Gambar Postingan Kedua" style={imageStyle} />
          <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
          Timnas Indonesia telah melewati perjalanan yang penuh tantangan dan perjuangan 
          tim sepak bola nasional Indonesia dalam mengejar prestasi di panggung internasional. 
          Dengan berbagai rintangan yang dihadapi, seperti persaingan sengit, keterbatasan sumber daya, 
          dan hambatan teknis, Timnas Indonesia tidak pernah berhenti untuk terus berjuang dan 
          memberikan yang terbaik. Melalui dedikasi, semangat, dan kerja keras, mereka telah berhasil 
          meraih berbagai pencapaian yang membanggakan, mengukir sejarah dalam perjalanan mereka 
          menuju puncak prestasi.
          <br /><br />
          Selama beberapa dekade terakhir, Timnas Indonesia telah mengalami berbagai transformasi 
          dan perkembangan yang signifikan. Dari era kejayaan hingga masa-masa sulit, artikel ini 
          mengulas berbagai momen krusial yang telah membentuk identitas dan karakter timnas. 
          Dengan memeriksa perjalanan mereka dari kualifikasi ke turnamen internasional, 
          pembaca akan diperkenalkan dengan kegigihan para pemain, pelatih, dan staf pendukung dalam 
          mencapai tujuan bersama. Melalui analisis mendalam dan sorotan atas prestasi mereka, 
          artikel ini memberikan gambaran yang jelas tentang peran Timnas Indonesia dalam mewakili 
          bangsa di panggung dunia sepak bola serta dampaknya pada perkembangan olahraga nasional.
          Perjalanan Timnas Indonesia bukan hanya tentang sepak bola semata, tetapi juga tentang 
          semangat kebangsaan, keberanian, dan keteguhan hati dalam menghadapi segala tantangan demi 
          mengharumkan nama bangsa di panggung internasional.
          </p>
        </div>
      </div>
    );
  }