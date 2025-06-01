import '../css/Weather.css';
import { useState, useEffect } from 'react';

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

  // Get random location coordinates
  useEffect(() => {
    const getRandomCoordinates = () => {
      // Generate random latitude (-90 to 90) and longitude (-180 to 180)
      const latitude = (Math.random() * 180 - 90).toFixed(4);
      const longitude = (Math.random() * 360 - 180).toFixed(4);
      return { latitude, longitude };
    };

  const fetchLocationData = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`,
        {
          headers: {
            'Accept-Language': EN ? 'en' : 'ar'
          }
        }
      );
      const data = await response.json();

      // Better city name extraction (tries multiple address fields)
      const cityName = 
        data.address.city || 
        data.address.town || 
        data.address.village || 
        data.address.county || 
        data.address.state ||
        (EN ? 'Random location' : 'موقع عشوائي');

      const countryName = 
        data.address.country || 
        (EN ? 'Unknown country' : 'دولة غير معروفة');

      setLocation({
        city: cityName,
        country: countryName,
        latitude,
        longitude
      });
    } catch (error) {
      console.error('Error fetching location data:', error);
      setLocation({
        city: EN ? 'Random location' : 'موقع عشوائي',
        country: EN ? 'Unknown country' : 'دولة غير معروفة',
        latitude,
        longitude
      });
    }
  };

    const { latitude, longitude } = getRandomCoordinates();
    fetchLocationData(latitude, longitude);
  }, [EN]);

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

  // Fetch weather data from OpenWeatherMap
  useEffect(() => {
    const fetchWeatherData = async () => {
      if (!location.latitude || !location.longitude) return;

      try {
        setLoading(true);
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        if (!apiKey) {
          throw new Error(EN ? 'Weather API key is missing' : 'مفتاح واجهة برمجة تطبيقات الطقس مفقود');
        }

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}&units=metric`
        );

        if (!response.ok) {
          throw new Error(EN ? 'Failed to fetch weather data' : 'فشل جلب بيانات الطقس');
        }

        const data = await response.json();
        setWeatherData(data);
        setError(null);
      } catch (err) {
        console.error('Error fetching weather data:', err);
        setError(EN ? 'Failed to load weather data' : 'فشل تحميل بيانات الطقس');
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [location.latitude, location.longitude, EN]);

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