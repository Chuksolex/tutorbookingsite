import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';

export default function ResetPasswordPage() {
  const router = useRouter();
  const { token, email } = router.query;

  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (password !== confirm) {
      return setMessage({ type: 'error', text: 'Passwords do not match.' });
    }

    setLoading(true);
    try {
      const res = await axios.post('/api/auth/forgot-password', { token, email, password });
      setMessage({ type: 'success', text: res.data.message });

      setTimeout(() => router.push('/auth/login'), 2000);
    } catch (err) {
      setMessage({ type: 'error', text: err.response?.data?.message || 'Error resetting password.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: 500 }}>
      <h3>Reset Password</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>New Password</label>
          <input
            type="password"
            className="form-control"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            required
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? <Spinner animation="border" size="sm" /> : 'Reset Password'}
        </button>
        {message && (
          <div className={`alert mt-3 alert-${message.type === 'success' ? 'success' : 'danger'}`}>
            {message.text}
          </div>
        )}
      </form>
    </div>
  );
}
