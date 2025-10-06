import React from 'react';
import Navbar from './component/Navbar';
import AppRoutes from './routes/Approutes';
import Footer from './component/Footer';

function App() {
    return (
        <div className=" max-h-screen bg-gray-900 text-white">
            <Navbar />
            <main>
                <AppRoutes />
            </main>
            <Footer />
        </div>
    );
}

export default App;
