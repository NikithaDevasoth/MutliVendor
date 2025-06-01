import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    const userDasboardUrl="https://swiggy-clone-react-mu.vercel...."
  const styles = {
    container: {
      height: "100vh",
      backgroundImage:
        "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1950&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      textAlign: "center",
      fontFamily: "'Poppins', sans-serif",
      padding: "0 20px",
    },
    heading: {
      fontSize: "3.5rem",
      marginBottom: "10px",
      animation: "fadeInDown 1s ease forwards",
      opacity: 0,
    },
    subheading: {
      fontSize: "1.6rem",
      marginBottom: "40px",
      animation: "fadeInUp 1.2s ease forwards",
      opacity: 0,
    },
    chefImage: {
      width: "160px",
      borderRadius: "50%",
      marginBottom: "30px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.5)",
      animation: "bounce 3s ease-in-out infinite",
    },
    linkContainer: {
      display: "flex",
      gap: "30px",
    },
    link: {
      color: "#fff",
      backgroundColor: "#ff5722",
      padding: "14px 28px",
      borderRadius: "30px",
      fontSize: "18px",
      fontWeight: "600",
      textDecoration: "none",
      boxShadow: "0 4px 10px rgba(255, 87, 34, 0.7)",
      transition: "background-color 0.3s ease",
    },
  };

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes fadeInDown {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
          from {
            opacity: 0;
            transform: translateY(30px);
          }
        }
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        a:hover {
          background-color: #e64a19 !important;
        }
      `}</style>

      <img
        style={styles.chefImage}
        src="https://cdn-icons-png.flaticon.com/512/3046/3046127.png"
        alt="Chef"
      />
      <h1 style={styles.heading}>Welcome to MultiVendor App</h1>
      <p style={styles.subheading}>Choose your dashboard to get started</p>

     <div style={styles.linkContainer}>
  <a 
    href="https://swiggy-clone-react-mu.vercel.app/" 
    style={styles.link} 
    target="_blank" 
    rel="noopener noreferrer"
  >
    User Dashboard
  </a>
  <Link to="/vendor" style={styles.link}>
    Vendor Dashboard
  </Link>
</div>

    </div>
  );
};

export default Home;
