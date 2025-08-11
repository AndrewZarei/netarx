
import { useLocation } from 'react-router-dom';

const ThankYou = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const email = searchParams.get('email'); // اگر می‌خواهید ایمیل کاربر را نشان دهید

  return (
  <div className="thank-you-container">
  <h1>Thank You!</h1>
  <p>Your demo request has been successfully submitted.</p>
  {email && <p>We'll respond to your email at {email} soon.</p>}
  <button onClick={() => window.location.href = "/"}>Return to Homepage</button>
</div>
  );
};

export default ThankYou;