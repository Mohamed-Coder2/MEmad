import '../css/Weather.css';
import { useState, useEffect } from 'react';

// Major cities with bilingual names
const MAJOR_CITIES = [
  { 
    city: { en: 'New York', ar: 'نيويورك' }, 
    country: { en: 'United States', ar: 'الولايات المتحدة' }, 
    lat: 40.7128, 
    lon: -74.0060 
  },
  { 
    city: { en: 'London', ar: 'لندن' }, 
    country: { en: 'United Kingdom', ar: 'المملكة المتحدة' }, 
    lat: 51.5074, 
    lon: -0.1278 
  },
  { 
    city: { en: 'Tokyo', ar: 'طوكيو' }, 
    country: { en: 'Japan', ar: 'اليابان' }, 
    lat: 35.6762, 
    lon: 139.6503 
  },
  { 
    city: { en: 'Paris', ar: 'باريس' }, 
    country: { en: 'France', ar: 'فرنسا' }, 
    lat: 48.8566, 
    lon: 2.3522 
  },
  { 
    city: { en: 'Dubai', ar: 'دبي' }, 
    country: { en: 'UAE', ar: 'الإمارات' }, 
    lat: 25.2048, 
    lon: 55.2708 
  },
  { 
    city: { en: 'Singapore', ar: 'سنغافورة' }, 
    country: { en: 'Singapore', ar: 'سنغافورة' }, 
    lat: 1.3521, 
    lon: 103.8198 
  },
  { 
    city: { en: 'Cairo', ar: 'القاهرة' }, 
    country: { en: 'Egypt', ar: 'مصر' }, 
    lat: 30.0444, 
    lon: 31.2357 
  },
  { 
    city: { en: 'Moscow', ar: 'موسكو' }, 
    country: { en: 'Russia', ar: 'روسيا' }, 
    lat: 55.7558, 
    lon: 37.6173 
  },
  { 
    city: { en: 'Sydney', ar: 'سيدني' }, 
    country: { en: 'Australia', ar: 'أستراليا' }, 
    lat: -33.8688, 
    lon: 151.2093 
  },
  { 
    city: { en: 'Rio de Janeiro', ar: 'ريو دي جانيرو' }, 
    country: { en: 'Brazil', ar: 'البرازيل' }, 
    lat: -22.9068, 
    lon: -43.1729 
  }
];

const Weather = ({ EN = true }) => {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState({
    city: '',
    latitude: null,
    longitude: null
  });
  const [georgianDate, setGeorgianDate] = useState('');
  const [islamicDate, setIslamicDate] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Update time every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Set random major city on load
  useEffect(() => {
    const randomCity = MAJOR_CITIES[Math.floor(Math.random() * MAJOR_CITIES.length)];
    setLocation({
      city: EN ? randomCity.city.en : randomCity.city.ar,
      country: EN ? randomCity.country.en : randomCity.country.ar,
      latitude: randomCity.lat,
      longitude: randomCity.lon
    });
  }, [EN]); // Re-run when language changes

  // Format Georgian date (Gregorian calendar in selected language)
  useEffect(() => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      calendar: 'gregory' // Force Gregorian calendar
    };

    setGeorgianDate(
      new Intl.DateTimeFormat(EN ? 'en-US' : 'ar-SA', options)
        .format(time)
    );
  }, [time, EN]);

  // Calculate Islamic date (Hijri calendar in selected language)
  useEffect(() => {
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      calendar: 'islamic' // Force Islamic calendar
    };

    setIslamicDate(
      new Intl.DateTimeFormat(EN ? 'en-US' : 'ar-SA', options)
        .format(new Date())
    );
  }, [time, EN]);

// Fetch weather data
  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!location.latitude || !location.longitude) return;

      try {
        setLoading(true);
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        if (!apiKey) throw new Error(EN ? 'API key missing' : 'مفتاح API مفقود');

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) throw new Error(EN ? 'Weather fetch failed' : 'فشل جلب بيانات الطقس');
        
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError(EN ? 'Weather data error' : 'خطأ في بيانات الطقس');
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [location, EN]);
  return (
    <div className='weatherCont' dir={EN ? 'ltr' : 'rtl'}>
      <div className='top'>
        {location.city && (
          <div className="location">
            <div className="city">{location.city}</div>
          </div>
        )}

        <div className="time">
          {time.toLocaleTimeString(EN ? 'en-US' : 'ar-SA', { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>

      {weatherData && (
        <div className="weather-data">
          <div className="temperature">
            {Math.round(weatherData.main.temp)}°C
          </div>
          <div className="weather-description">
            {EN ? weatherData.weather[0].description : translateDescription(weatherData.weather[0].description)}
          </div>
          <div className="detailsCont">
            <div className='weather-details'>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moisture" viewBox="0 0 16 16">
                  <path d="M13.5 0a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V7.5h-1.5a.5.5 0 0 0 0 1H15v2.75h-.5a.5.5 0 0 0 0 1h.5V15h-1.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 .5-.5V.5a.5.5 0 0 0-.5-.5zM7 1.5l.364-.343a.5.5 0 0 0-.728 0l-.002.002-.006.007-.022.023-.08.088a29 29 0 0 0-1.274 1.517c-.769.983-1.714 2.325-2.385 3.727C2.368 7.564 2 8.682 2 9.733 2 12.614 4.212 15 7 15s5-2.386 5-5.267c0-1.05-.368-2.169-.867-3.212-.671-1.402-1.616-2.744-2.385-3.727a29 29 0 0 0-1.354-1.605l-.022-.023-.006-.007-.002-.001zm0 0-.364-.343zm-.016.766L7 2.247l.016.019c.24.274.572.667.944 1.144.611.781 1.32 1.776 1.901 2.827H4.14c.58-1.051 1.29-2.046 1.9-2.827.373-.477.706-.87.945-1.144zM3 9.733c0-.755.244-1.612.638-2.496h6.724c.395.884.638 1.741.638 2.496C11 12.117 9.182 14 7 14s-4-1.883-4-4.267" />
                </svg>
                <p>{weatherData.main.humidity}%</p>
              </span>
              <span><i className="fa-solid fa-wind"></i> <p>{weatherData.wind.speed} {EN ? 'm/s' : 'م/ث'}</p></span>
            </div>
            <div>
              {location.country}
            </div>
          </div>
        </div>
      )}

      <div className="dates">
        <div className="georgian-date">
          {georgianDate}
        </div>
        <div className="islamic-date">
          {islamicDate}
        </div>
      </div>

      {loading && location.latitude && <div className="loading">{EN ? 'Loading weather...' : 'جاري تحميل بيانات الطقس...'}</div>}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

// Helper function to translate weather descriptions to Arabic
function translateDescription(description) {
  const translations = {
    'clear sky': 'سماء صافية',
    'few clouds': 'قليل من السحب',
    'scattered clouds': 'سحب متفرقة',
    'broken clouds': 'سحب متناثرة',
    'shower rain': 'مطر خفيف',
    'rain': 'مطر',
    'thunderstorm': 'عاصفة رعدية',
    'snow': 'ثلج',
    'mist': 'ضباب',
    'overcast clouds': 'غيوم كثيفة'
  };
  return translations[description] || description;
}

export default Weather;