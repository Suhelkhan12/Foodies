import Header from '@/componets/header/Header';
import MainBackground from '@/componets/MainBackground';
import Footer from '@/componets/footer/Footer';
import './globals.css';

export const metadata = {
  title: 'Foodies',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainBackground/>
        <Header/> 
        {children}
        <Footer/>
      </body>
    </html>
  );
}
