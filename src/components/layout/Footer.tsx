import React from 'react';
import { Instagram} from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import Favicon from '../../assets/favicon.png';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3D1E24] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={Favicon} alt="icon" className='w-12 h-12' />
              <span className="text-xl font-bold">KKN 54</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Ikuti perkembangan dan dokumentasi kegiatan KKN SISDAMAS 54 di Desa Harumansari.
              Bergabunglah bersama kami dalam membangun masyarakat yang lebih baik.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/kkngarut54" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-[#BF9364] cursor-pointer transition-colors duration-200" />
              </a>
              <a href="https://www.tiktok.com/@kkngarut54" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="w-5 h-5 text-gray-400 hover:text-[#BF9364] cursor-pointer transition-colors duration-200" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kategori</h3>
            <ul className="space-y-2">
              {['Siklus 1', 'Siklus 2', 'Siklus 3', 'Siklus 4', 'Siklus 5'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Location */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Lokasi KKN</h3>
            <p className="text-gray-400 mb-4">
              Desa Harumansari
              <br />
              Kecamatan Kadungora
              <br />
              Kabupaten Garut
              <br />
              Rw 08/Rt 03
              <br />
              Jawa Barat, Indonesia
            </p>
            {/* Google Maps Embed */}
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15841.604644772457!2d107.91246544999999!3d-7.0762583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68b8a2a9d1c6a7%3A0x5f5f2a7c2c3d3d3d!2sHarumansari%2C%20Kec.%20Kadungora%2C%20Kabupaten%20Garut%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1627308000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-5 text-center text-gray-400">
          <p>&copy; 2025 KKN 54. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};